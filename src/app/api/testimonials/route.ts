import { NextResponse } from 'next/server';
import { getTestimonials } from '@/lib/data';

// GET - Get all testimonials (public)
export async function GET() {
  try {
    const testimonials = getTestimonials();
    return NextResponse.json(testimonials);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch testimonials' },
      { status: 500 }
    );
  }
}
