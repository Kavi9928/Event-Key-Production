import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import fs from 'fs';
import path from 'path';

// Check authentication
async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  return !!session?.value;
}

// Get stored password
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

// Save new password
function savePassword(newPassword: string): void {
  const configPath = path.join(process.cwd(), 'data', 'config.json');
  const dataDir = path.dirname(configPath);

  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  let config: Record<string, string> = {};
  if (fs.existsSync(configPath)) {
    try {
      config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    } catch {
      // Start fresh
    }
  }

  config.adminPassword = newPassword;
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

// PUT - Update password
export async function PUT(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { currentPassword, newPassword } = body;

    if (!currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'Current and new passwords are required' },
        { status: 400 }
      );
    }

    const storedPassword = getStoredPassword();

    if (currentPassword !== storedPassword) {
      return NextResponse.json(
        { error: 'Current password is incorrect' },
        { status: 400 }
      );
    }

    if (newPassword.length < 8) {
      return NextResponse.json(
        { error: 'New password must be at least 8 characters' },
        { status: 400 }
      );
    }

    savePassword(newPassword);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error updating password:', error);
    return NextResponse.json(
      { error: 'Failed to update password' },
      { status: 500 }
    );
  }
}
