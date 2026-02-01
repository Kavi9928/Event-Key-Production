import { NextResponse } from 'next/server';
import { getCommercials } from '@/lib/data';

// GET - Get all commercials (public)
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
