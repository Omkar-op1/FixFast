'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Common navigation links component
  const NavLinks = ({ mobile = false }) => (
    <>
      <Link href="/" className="font-medium hover:text-blue-600" onClick={() => mobile && setMobileMenuOpen(false)}>
        Home
      </Link>
      <Link href="/services" className="font-medium hover:text-blue-600" onClick={() => mobile && setMobileMenuOpen(false)}>
        Services
      </Link>
      <Link href="/pricing" className="font-medium hover:text-blue-600" onClick={() => mobile && setMobileMenuOpen(false)}>
        Pricing
      </Link>
      <Link href="/aboutUs" className="font-medium hover:text-blue-600" onClick={() => mobile && setMobileMenuOpen(false)}>
        About Us
      </Link>
      <Link href="/contactUs" className="font-medium hover:text-blue-600" onClick={() => mobile && setMobileMenuOpen(false)}>
        Contact
      </Link>
    </>
  );

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          FixFast
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLinks />
        </nav>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex space-x-4">
          <Link
            href="/auth/login"
            className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            Login
          </Link>
          <Link
            href="/booking"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <NavLinks mobile />
            <div className="pt-4 border-t">
              <Link
                href="/auth/login"
                className="block mb-4 font-medium hover:text-blue-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/booking"
                className="block bg-blue-600 text-white px-6 py-2 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
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