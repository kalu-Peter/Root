
'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-900 font-pacifico">
            Peter Kalu
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
              Home
            </Link>
            <Link href="#about" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
              About
            </Link>
            <Link href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
              Projects
            </Link>
            <Link href="#skills" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
              Skills
            </Link>
            <Link href="#services" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
              Services
            </Link>
            <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer whitespace-nowrap">
              Contact
            </Link>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="#projects" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                Projects
              </Link>
              <Link href="#skills" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                Skills
              </Link>
              <Link href="#services" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                Services
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
