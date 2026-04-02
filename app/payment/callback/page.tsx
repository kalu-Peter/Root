'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function CallbackContent() {
  const params = useSearchParams();
  const trackingId = params.get('OrderTrackingId');
  const merchantRef = params.get('OrderMerchantReference');
  const [status, setStatus] = useState<'loading' | 'success' | 'failed' | 'pending'>('loading');

  useEffect(() => {
    if (!trackingId) { setStatus('failed'); return; }
    // PesaPal redirects here after payment — show success and let IPN confirm
    setStatus('success');
  }, [trackingId]);

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {status === 'loading' && (
          <div className="glass rounded-2xl p-12 border border-white/8">
            <i className="ri-loader-4-line text-5xl text-indigo-400 animate-spin block mb-4" />
            <p className="text-gray-400">Verifying payment...</p>
          </div>
        )}

        {status === 'success' && (
          <div className="glass rounded-2xl p-12 border border-green-500/20">
            <div className="w-20 h-20 rounded-full bg-green-500/15 flex items-center justify-center mx-auto mb-6">
              <i className="ri-check-line text-4xl text-green-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-3">Payment Received!</h1>
            <p className="text-gray-400 mb-2 text-sm">
              Thank you for your payment. I'll be in touch shortly to get started on your project.
            </p>
            {trackingId && (
              <p className="text-gray-600 text-xs mb-8">
                Reference: <span className="text-gray-400 font-mono">{merchantRef || trackingId}</span>
              </p>
            )}
            <Link href="/" className="inline-flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300">
              <i className="ri-home-line" /> Back to Home
            </Link>
          </div>
        )}

        {status === 'failed' && (
          <div className="glass rounded-2xl p-12 border border-red-500/20">
            <div className="w-20 h-20 rounded-full bg-red-500/15 flex items-center justify-center mx-auto mb-6">
              <i className="ri-close-line text-4xl text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-3">Payment Unsuccessful</h1>
            <p className="text-gray-400 mb-8 text-sm">
              Something went wrong with your payment. Please try again or contact me directly.
            </p>
            <Link href="/#services" className="inline-flex items-center gap-2 gradient-bg text-white px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300">
              <i className="ri-arrow-left-line" /> Try Again
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function PaymentCallback() {
  return (
    <Suspense>
      <CallbackContent />
    </Suspense>
  );
}
