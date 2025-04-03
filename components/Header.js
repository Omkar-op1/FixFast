'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          FixFast
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="font-medium hover:text-blue-600">
            Home
          </Link>
          <Link href="/services" className="font-medium hover:text-blue-600">
            Services
          </Link>
          <Link href="/pricing" className="font-medium hover:text-blue-600">
            Pricing
          </Link>
          <Link href="/about" className="font-medium hover:text-blue-600">
            About Us
          </Link>
          <Link href="/contact" className="font-medium hover:text-blue-600">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 font-medium hover:text-blue-600"
          >
            Login
          </Link>
          <Link
            href="/book-now"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
          >
            Book Now
          </Link>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <Link href="/" className="font-medium hover:text-blue-600">
              Home
            </Link>
            <Link href="/services" className="font-medium hover:text-blue-600">
              Services
            </Link>
            <Link href="/pricing" className="font-medium hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/about" className="font-medium hover:text-blue-600">
              About Us
            </Link>
            <Link href="/contact" className="font-medium hover:text-blue-600">
              Contact
            </Link>
            <div className="pt-4 border-t">
              <Link
                href="/login"
                className="block mb-4 font-medium hover:text-blue-600"
              >
                Login
              </Link>
              <Link
                href="/book-now"
                className="block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-center hover:bg-blue-700"
              >
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}