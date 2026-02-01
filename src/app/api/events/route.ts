import { NextResponse } from 'next/server';
import { getEvents } from '@/lib/data';

// GET - Get all events (public)
export async function GET() {
  try {
    const events = getEvents();
    return NextResponse.json(events);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json(
      { error: 'Failed to fetch events' },
      { status: 500 }
    );
  }
}
