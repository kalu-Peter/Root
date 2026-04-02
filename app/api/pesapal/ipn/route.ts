import { NextRequest, NextResponse } from 'next/server';

const PESAPAL_BASE = 'https://pay.pesapal.com/v3';

// PesaPal calls this URL after every payment event
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const orderTrackingId = searchParams.get('OrderTrackingId');
  const orderNotificationType = searchParams.get('OrderNotificationType');

  if (!orderTrackingId) {
    return NextResponse.json({ error: 'Missing OrderTrackingId' }, { status: 400 });
  }

  try {
    // Get auth token
    const tokenRes = await fetch(`${PESAPAL_BASE}/api/Auth/RequestToken`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        consumer_key: process.env.PESAPAL_CONSUMER_KEY,
        consumer_secret: process.env.PESAPAL_CONSUMER_SECRET,
      }),
    });
    const { token } = await tokenRes.json();

    // Check transaction status
    const statusRes = await fetch(
      `${PESAPAL_BASE}/api/Transactions/GetTransactionStatus?orderTrackingId=${orderTrackingId}`,
      {
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const status = await statusRes.json();

    // Log or save status.payment_status_description to your DB here
    console.log('PesaPal IPN:', { orderTrackingId, orderNotificationType, status });

    return NextResponse.json({ orderNotificationType, orderTrackingId, status: status.payment_status_description });
  } catch {
    return NextResponse.json({ error: 'IPN processing failed' }, { status: 500 });
  }
}
