import { NextRequest, NextResponse } from 'next/server';

// In-memory store — persists for the lifetime of the serverless function instance.
// For production persistence, replace with your own DB/email service.
const subscribers = new Set<string>();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = typeof body?.email === 'string' ? body.email.trim().toLowerCase() : '';

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    if (subscribers.has(email)) {
      return NextResponse.json({ success: true, message: "You're already on the waitlist!" });
    }

    subscribers.add(email);
    console.log('[SUBSCRIBE] New subscriber:', email, '| Total:', subscribers.size);

    return NextResponse.json({
      success: true,
      message: "You're on the waitlist! We'll be in touch soon.",
      count: subscribers.size,
    });
  } catch (error) {
    console.error('[SUBSCRIBE] Error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ count: subscribers.size });
}
