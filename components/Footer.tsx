
'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="text-3xl font-bold font-pacifico mb-4 block">
              Peter Kalu
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Full-stack developer with 20+ completed projects across healthcare, education, 
              agriculture, and e-commerce sectors. Creating digital solutions that make a difference.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/kalu-Peter" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-github-line"></i>
              </a>
              <a href="https://www.linkedin.com/in/kalu-peter/" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-linkedin-line"></i>
              </a>
              <a href="https://x.com/Web_WizKid" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-twitter-line"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                <i className="ri-dribbble-line"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="#about" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                About Me
              </Link>
              <Link href="#projects" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Projects
              </Link>
              <Link href="#skills" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Skills
              </Link>
              <Link href="#services" className="block text-gray-400 hover:text-white transition-colors cursor-pointer">
                Services
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <div className="space-y-3">
              <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Web Development
              </p>
              <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                E-Commerce Solutions
              </p>
              <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                Database Design
              </p>
              <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                API Development
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Peter Kalu. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
