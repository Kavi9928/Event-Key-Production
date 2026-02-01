import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { getCommercials, createCommercial, deleteCommercial, updateCommercial, type Commercial } from '@/lib/data';

// Check authentication
async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  return !!session?.value;
}

// GET - List all commercials
export async function GET() {
  try {
    const commercials = getCommercials();
    return NextResponse.json(commercials);
  } catch (error) {
    console.error('Error fetching commercials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch commercials' },
      { status: 500 }
    );
  }
}

// POST - Create new commercial
export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const commercial = createCommercial(body as Omit<Commercial, 'id' | 'createdAt' | 'updatedAt'>);
    return NextResponse.json(commercial, { status: 201 });
  } catch (error) {
    console.error('Error creating commercial:', error);
    return NextResponse.json(
      { error: 'Failed to create commercial' },
      { status: 500 }
    );
  }
}

// PUT - Update commercial
export async function PUT(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, ...data } = body;
    
    if (!id) {
      return NextResponse.json({ error: 'Commercial ID required' }, { status: 400 });
    }

    const commercial = updateCommercial(id, data);
    if (!commercial) {
      return NextResponse.json({ error: 'Commercial not found' }, { status: 404 });
    }

    return NextResponse.json(commercial);
  } catch (error) {
    console.error('Error updating commercial:', error);
    return NextResponse.json(
      { error: 'Failed to update commercial' },
      { status: 500 }
    );
  }
}

// DELETE - Delete commercial
export async function DELETE(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Commercial ID required' }, { status: 400 });
    }

    const deleted = deleteCommercial(id);
    if (!deleted) {
      return NextResponse.json({ error: 'Commercial not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error deleting commercial:', error);
    return NextResponse.json(
      { error: 'Failed to delete commercial' },
      { status: 500 }
    );
  }
}
