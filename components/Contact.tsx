'use client';
import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '', projectType: '', budget: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/xldldyyr', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '', projectType: '', budget: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const inputClass = 'w-full px-4 py-3 bg-white/4 border border-white/8 rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:border-indigo-500/60 focus:bg-white/6 transition-all duration-200';
  const selectClass = `${inputClass} appearance-none cursor-pointer`;

  const slideIn = (dir: 'left' | 'right', delay = 0) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? 'none' : `translateX(${dir === 'left' ? '-40px' : '40px'})`,
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  const contactItems = [
    { icon: 'ri-mail-line',    label: 'Email',    value: 'peterkalu41@gmail.com', color: '#6366f1' },
    { icon: 'ri-phone-line',   label: 'Phone',    value: '+2547 410 80676',       color: '#8b5cf6' },
    { icon: 'ri-map-pin-line', label: 'Location', value: 'Mombasa, Kenya',        color: '#06b6d4' },
  ];

  const socialLinks = [
    { href: 'https://github.com/kalu-Peter',          icon: 'ri-github-line',   label: 'GitHub'   },
    { href: 'https://www.linkedin.com/in/kalu-peter/', icon: 'ri-linkedin-line', label: 'LinkedIn' },
    { href: 'https://x.com/Web_WizKid',               icon: 'ri-twitter-line',  label: 'Twitter'  },
    { href: '#',                                       icon: 'ri-dribbble-line', label: 'Dribbble' },
  ];

  return (
    <section id="contact" ref={ref} className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className="text-center mb-16"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm mb-5">
            <i className="ri-send-plane-line" />
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Ready to bring your project to life? Get in touch and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left */}
          <div style={slideIn('left')} className="space-y-5">
            {/* Contact cards */}
            <div className="glass rounded-2xl p-7 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-5">
                {contactItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110" style={{ background: `${item.color}15`, border: `1px solid ${item.color}25` }}>
                      <i className={`${item.icon}`} style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-wider">{item.label}</p>
                      <p className="text-gray-300 text-sm font-medium mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="glass rounded-2xl p-7 border border-white/5">
              <h3 className="text-lg font-bold text-white mb-5">Follow Me</h3>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    aria-label={s.label}
                    className="w-11 h-11 glass rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:border-indigo-500/40 border border-white/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                  >
                    <i className={s.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability indicator */}
            <div className="glass rounded-2xl p-6 border border-green-500/15 bg-green-500/4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
                <div>
                  <p className="text-green-400 font-semibold text-sm">Available for Projects</p>
                  <p className="text-gray-500 text-xs mt-0.5">Typical response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div style={slideIn('right', 0.15)}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 border border-white/5 space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Your Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Project Type</label>
                  <select name="projectType" value={formData.projectType} onChange={handleChange} className={selectClass}>
                    <option value="" className="bg-gray-900">Select Type</option>
                    <option value="website" className="bg-gray-900">Website Development</option>
                    <option value="mobile-app" className="bg-gray-900">Mobile App</option>
                    <option value="web-app" className="bg-gray-900">Assignment</option>
                    <option value="ecommerce" className="bg-gray-900">E-Commerce</option>
                    <option value="database" className="bg-gray-900">Database Development</option>
                    <option value="api" className="bg-gray-900">API Development</option>
                    <option value="maintenance" className="bg-gray-900">Maintenance</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-9 text-gray-500 pointer-events-none" />
                </div>
                <div className="relative">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Budget Range</label>
                  <select name="budget" value={formData.budget} onChange={handleChange} className={selectClass}>
                    <option value="" className="bg-gray-900">Select Budget</option>
                    <option value="5k-10k" className="bg-gray-900">Ksh 5,000 – 10,000</option>
                    <option value="10k-20k" className="bg-gray-900">Ksh 10,000 – 20,000</option>
                    <option value="20k-50k" className="bg-gray-900">Ksh 20,000 – 50,000</option>
                    <option value="over-50k" className="bg-gray-900">Over Ksh 50,000</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-9 text-gray-500 pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Subject *</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="Project inquiry" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required maxLength={500} rows={5} className={`${inputClass} resize-none`} placeholder="Tell me about your project..." />
                <p className="text-right text-xs text-gray-600 mt-1">{formData.message.length}/500</p>
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                  <i className="ri-check-line" />
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                  <i className="ri-close-line" />
                  Something went wrong. Please try again.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full gradient-bg text-white py-4 rounded-xl font-semibold text-base shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <><i className="ri-loader-4-line animate-spin" /> Sending...</>
                ) : (
                  <><i className="ri-send-plane-line" /> Send Message</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
