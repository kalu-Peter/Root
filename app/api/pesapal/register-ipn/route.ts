import { NextResponse } from 'next/server';

const PESAPAL_BASE = 'https://pay.pesapal.com/v3';

// Call this once to register your IPN URL with PesaPal.
// The returned ipn_id must be stored and used in every order submission.
export async function POST() {
  try {
    // 1. Get token
    const tokenRes = await fetch(`${PESAPAL_BASE}/api/Auth/RequestToken`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        consumer_key: process.env.PESAPAL_CONSUMER_KEY,
        consumer_secret: process.env.PESAPAL_CONSUMER_SECRET,
      }),
    });
    const { token } = await tokenRes.json();

    // 2. Register IPN URL
    const ipnUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/pesapal/ipn`;
    const res = await fetch(`${PESAPAL_BASE}/api/URLSetup/RegisterIPN`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ url: ipnUrl, ipn_notification_type: 'GET' }),
    });

    const data = await res.json();
    // Save data.ipn_id — add it to your .env.local as PESAPAL_IPN_ID
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: 'IPN registration failed' }, { status: 500 });
  }
}
