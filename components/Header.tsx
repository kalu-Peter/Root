'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/',         label: 'Home'     },
  { href: '#about',    label: 'About'    },
  { href: '#projects', label: 'Projects' },
  { href: '#skills',   label: 'Skills'   },
  { href: '#services', label: 'Services' },
  { href: '#contact',  label: 'Contact'  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? 'rgba(3,7,18,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-pacifico text-2xl text-white hover:opacity-80 transition-opacity duration-200">
            Peter Kalu
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 group-hover:w-4 transition-all duration-300 rounded-full" />
              </Link>
            ))}
            <a
              href="#contact"
              className="ml-3 px-5 py-2 rounded-full text-sm font-semibold gradient-bg text-white shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300"
            >
              Hire Me
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden w-9 h-9 flex items-center justify-center text-gray-300 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-white/5"
            aria-label="Toggle menu"
          >
            <i className={`${menuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`} />
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/8 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-2.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-5 py-2.5 rounded-full text-sm font-semibold gradient-bg text-white text-center"
              >
                Hire Me
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
