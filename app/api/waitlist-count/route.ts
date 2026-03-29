import { NextResponse } from 'next/server';

export async function GET() {
  const base = 247;
  const variance = Math.floor(Math.random() * 50);
  return NextResponse.json({ count: base + variance });
}
