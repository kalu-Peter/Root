'use client';
import Link from 'next/link';

const quickLinks = [
  { href: '#about',    label: 'About Me'  },
  { href: '#projects', label: 'Projects'  },
  { href: '#skills',   label: 'Skills'    },
  { href: '#services', label: 'Services'  },
];

const serviceLinks = ['Web Development', 'E-Commerce Solutions', 'Database Design', 'API Development'];

const socials = [
  { href: 'https://github.com/kalu-Peter',           icon: 'ri-github-line',   label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/kalu-peter/',  icon: 'ri-linkedin-line', label: 'LinkedIn' },
  { href: 'https://x.com/Web_WizKid',                icon: 'ri-twitter-line',  label: 'Twitter'  },
  { href: '#',                                        icon: 'ri-dribbble-line', label: 'Dribbble' },
];

export default function Footer() {
  return (
    <footer className="bg-[#020208] relative overflow-hidden border-t border-white/5">
      {/* Decorative orbs */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="font-pacifico text-3xl text-white hover:opacity-80 transition-opacity duration-200 block mb-4">
              Peter Kalu
            </Link>
            <p className="text-gray-500 mb-7 leading-relaxed text-sm max-w-sm">
              Full-stack developer with 20+ completed projects across healthcare, education,
              agriculture, and e-commerce sectors. Creating digital solutions that make a difference.
            </p>
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-gray-500 hover:text-white border border-white/5 hover:border-indigo-500/40 hover:scale-110 transition-all duration-300"
                >
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-gray-500 hover:text-indigo-400 transition-colors duration-200 text-sm group"
                >
                  <span className="w-0 group-hover:w-3 h-px bg-indigo-400 transition-all duration-200 inline-block" />
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Services</h3>
            <div className="space-y-3">
              {serviceLinks.map(s => (
                <p key={s} className="text-gray-500 hover:text-indigo-400 transition-colors duration-200 text-sm cursor-default flex items-center gap-2 group">
                  <span className="w-0 group-hover:w-3 h-px bg-indigo-400 transition-all duration-200 inline-block" />
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Peter Kalu. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors duration-200">Privacy Policy</Link>
            <Link href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
