import { NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

const PESAPAL_BASE = 'https://pay.pesapal.com/v3';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, amount, service } = await req.json();

    if (!name || !email || !phone || !amount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Get auth token
    const tokenRes = await fetch(`${PESAPAL_BASE}/api/Auth/RequestToken`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        consumer_key: process.env.PESAPAL_CONSUMER_KEY,
        consumer_secret: process.env.PESAPAL_CONSUMER_SECRET,
      }),
    });
    const tokenData = await tokenRes.json();
    if (!tokenData.token) {
      return NextResponse.json({ error: 'Auth failed' }, { status: 500 });
    }
    const token = tokenData.token;

    // 2. Submit order
    const [firstName, ...rest] = name.trim().split(' ');
    const lastName = rest.join(' ') || firstName;
    const orderId = randomUUID();
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const orderRes = await fetch(`${PESAPAL_BASE}/api/Transactions/SubmitOrderRequest`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        id: orderId,
        currency: 'KES',
        amount: Number(amount),
        description: service || 'Peter Kalu — Development Services',
        callback_url: `${siteUrl}/payment/callback`,
        notification_id: process.env.PESAPAL_IPN_ID || '',
        billing_address: {
          email_address: email,
          phone_number: phone,
          country_code: 'KE',
          first_name: firstName,
          last_name: lastName,
        },
      }),
    });

    const orderData = await orderRes.json();

    if (!orderRes.ok || orderData.error) {
      return NextResponse.json({ error: orderData.error?.message || 'Order submission failed' }, { status: 500 });
    }

    return NextResponse.json({
      redirect_url: orderData.redirect_url,
      order_tracking_id: orderData.order_tracking_id,
    });
  } catch {
    return NextResponse.json({ error: 'Payment processing failed' }, { status: 500 });
  }
}
