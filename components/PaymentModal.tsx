'use client';
import { useState } from 'react';

const serviceOptions = [
  'Web Application Development',
  'E-Commerce Solutions',
  'Database Design & Development',
  'Maintenance & Support',
  'Other',
];

interface Props {
  onClose: () => void;
}

export default function PaymentModal({ onClose }: Props) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', amount: '', service: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/pesapal/submit-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || data.error) {
        setError(data.error || 'Payment initiation failed. Please try again.');
        setLoading(false);
        return;
      }

      // Redirect to PesaPal hosted payment page
      window.location.href = data.redirect_url;
    } catch {
      setError('Network error. Please try again.');
      setLoading(false);
    }
  };

  const inputClass = 'w-full px-4 py-3 bg-white border border-white/8 rounded-xl text-black placeholder-gray-400 text-sm focus:outline-none focus:border-indigo-500/60 transition-all duration-200';

  return (
    <div
      className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="glass-dark rounded-2xl max-w-md w-full border border-white/10 shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-white/8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/25 flex items-center justify-center">
              {/* M-Pesa / PesaPal icon */}
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" fill="#4ade80"/>
              </svg>
            </div>
            <div>
              <h3 className="text-white font-bold text-base">Pay via M-Pesa</h3>
              <p className="text-gray-500 text-xs">Powered by PesaPal</p>
            </div>
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/5">
            <i className="ri-close-line text-lg" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-7 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Full Name *</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Phone (M-Pesa) *</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className={inputClass} placeholder="2547XXXXXXXX" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Email *</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
          </div>

          <div className="relative">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Service</label>
            <select name="service" value={form.service} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer pr-8`}>
              <option value="" className="bg-gray-900">Select a service</option>
              {serviceOptions.map(s => (
                <option key={s} value={s} className="bg-gray-900">{s}</option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-9 text-gray-500 pointer-events-none" />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Amount (KES) *</label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium">KSh</span>
              <input
                type="number" name="amount" value={form.amount} onChange={handleChange}
                required min="100" step="1"
                className={`${inputClass} pl-12`}
                placeholder="0.00"
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              <i className="ri-error-warning-line flex-shrink-0" />
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] shadow-lg shadow-green-500/20"
            style={{ background: 'linear-gradient(135deg, #16a34a, #15803d)' }}
          >
            {loading ? (
              <><i className="ri-loader-4-line animate-spin" /> Processing...</>
            ) : (
              <><i className="ri-secure-payment-line" /> Pay with M-Pesa</>
            )}
          </button>

          <p className="text-center text-gray-600 text-xs">
            You'll be redirected to PesaPal's secure payment page to complete your M-Pesa Buy Goods payment.
          </p>
        </form>
      </div>
    </div>
  );
}
