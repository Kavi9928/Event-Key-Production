import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs';
import path from 'path';

// Get stored password from config or environment
function getStoredPassword(): string {
  const envPassword = process.env.ADMIN_PASSWORD;
  if (envPassword) return envPassword;

  const configPath = path.join(process.cwd(), 'data', 'config.json');
  if (fs.existsSync(configPath)) {
    try {
      const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
      if (config.adminPassword) return config.adminPassword;
    } catch {
      // Fall through to default
    }
  }

  return 'keyproduction2024';
}

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    const storedPassword = getStoredPassword();

    if (password === storedPassword) {
      // Create a simple session token
      const sessionToken = Buffer.from(`admin:${Date.now()}`).toString('base64');
      
      // Set cookie
      const cookieStore = await cookies();
      cookieStore.set('admin_session', sessionToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function DELETE() {
  try {
    const cookieStore = await cookies();
    cookieStore.delete('admin_session');
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const session = cookieStore.get('admin_session');
    
    if (session) {
      return NextResponse.json({ authenticated: true });
    }
    
    return NextResponse.json({ authenticated: false }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
