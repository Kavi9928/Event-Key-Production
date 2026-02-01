import { NextResponse } from 'next/server';
import { getGallery } from '@/lib/data';

// GET - Get all gallery items (public)
export async function GET() {
  try {
    const gallery = getGallery();
    return NextResponse.json(gallery);
  } catch (error) {
    console.error('Error fetching gallery:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery' },
      { status: 500 }
    );
  }
}
