'use client';
import { useEffect, useRef, useState } from 'react';
import PaymentModal from './PaymentModal';

const services = [
  {
    id: 1,
    title: 'Web Application Development',
    description: 'Full-stack web applications built with modern technologies like React, Node.js, and PostgreSQL. Custom solutions tailored to your business needs.',
    icon: 'ri-computer-line',
    features: ['Custom Frontend Development', 'Backend API Design', 'Database Architecture', 'Responsive Design', 'Performance Optimization'],
    startingPrice: 'Ksh 40,000',
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms with payment integration, inventory management, and admin dashboards for online businesses.',
    icon: 'ri-shopping-cart-line',
    features: ['Payment Gateway Integration', 'Inventory Management', 'Order Processing', 'Customer Management', 'Analytics Dashboard'],
    startingPrice: 'Ksh 50,000',
    color: '#8b5cf6',
  },
  {
    id: 3,
    title: 'Database Design & Development',
    description: 'PostgreSQL database design, optimization, and migration services. Efficient data structures for scalable applications.',
    icon: 'ri-database-2-line',
    features: ['Database Schema Design', 'Query Optimization', 'Data Migration', 'Backup Solutions', 'Performance Tuning'],
    startingPrice: 'Ksh 50,000',
    color: '#06b6d4',
  },
  {
    id: 4,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance, updates, and technical support for existing applications to ensure optimal performance and security.',
    icon: 'ri-tools-line',
    features: ['Regular Updates', 'Bug Fixes', 'Security Patches', 'Performance Monitoring', '24/7 Support'],
    startingPrice: 'Ksh 10,000/month',
    color: '#10b981',
  },
];

interface Service {
  id: number; title: string; description: string; icon: string;
  features: string[]; startingPrice: string; color: string;
}

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);
  const [payOpen, setPayOpen] = useState(false);
  const [vis, setVis] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="py-24 bg-[#060611] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-64 bg-indigo-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div
          className="text-center mb-16"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-5">
            <i className="ri-briefcase-line" />
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Development <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base">
            Comprehensive development services to bring your digital projects to life — from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              onClick={() => setSelected(svc)}
              className="group glass rounded-2xl p-8 border border-white/5 cursor-pointer shimmer-card transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis ? 'none' : 'translateY(40px)',
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s, box-shadow 0.3s`,
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 20px 50px ${svc.color}18`)}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
            >
              {/* Accent top border */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${svc.color}, transparent)` }}
              />

              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${svc.color}15`, border: `1px solid ${svc.color}30` }}
                >
                  <i className={`${svc.icon} text-2xl`} style={{ color: svc.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100">{svc.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{svc.description}</p>
                  <div className="flex items-center justify-end">
                    <span className="flex items-center gap-1 text-sm text-gray-500 group-hover:text-indigo-400 transition-colors duration-200">
                      Details <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-200 inline-block" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-14 text-center glass rounded-2xl p-12 border border-white/5"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(30px)', transition: 'all 0.7s ease 0.4s' }}
        >
          <h3 className="text-3xl font-bold text-white mb-3">Need Something Custom?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto text-base">
            Every project is unique. Let's discuss your requirements and create a tailored solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 gradient-bg text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
            >
              Schedule a Consultation
              <i className="ri-arrow-right-line" />
            </a>
            <button
              onClick={() => setPayOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base text-white border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 hover:border-green-500/50 hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/10"
            >
              <i className="ri-secure-payment-line" />
              Pay via M-Pesa
            </button>
          </div>
        </div>
      </div>

      {/* Payment Modal */}
      {payOpen && <PaymentModal onClose={() => setPayOpen(false)} />}

      {/* Service Details Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="glass-dark rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: `${selected.color}15`, border: `1px solid ${selected.color}30` }}>
                    <i className={`${selected.icon} text-xl`} style={{ color: selected.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{selected.title}</h3>
                </div>
                <button onClick={() => setSelected(null)} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors cursor-pointer">
                  <i className="ri-close-line text-xl" />
                </button>
              </div>

              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{selected.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">What's Included</h4>
                <ul className="space-y-3">
                  {selected.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-400 text-sm">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${selected.color}20` }}>
                        <i className="ri-check-line text-xs" style={{ color: selected.color }} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-end pt-6 border-t border-white/8">
                <a
                  href="#contact"
                  onClick={() => setSelected(null)}
                  className="gradient-bg text-white px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
