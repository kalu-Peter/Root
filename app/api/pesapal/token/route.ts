import { NextResponse } from 'next/server';

const PESAPAL_BASE = 'https://pay.pesapal.com/v3';

export async function GET() {
  try {
    const res = await fetch(`${PESAPAL_BASE}/api/Auth/RequestToken`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        consumer_key: process.env.PESAPAL_CONSUMER_KEY,
        consumer_secret: process.env.PESAPAL_CONSUMER_SECRET,
      }),
    });

    const data = await res.json();

    if (!res.ok || data.error) {
      return NextResponse.json({ error: data.error?.message || 'Failed to get token' }, { status: 500 });
    }

    return NextResponse.json({ token: data.token });
  } catch {
    return NextResponse.json({ error: 'PesaPal auth failed' }, { status: 500 });
  }
}
