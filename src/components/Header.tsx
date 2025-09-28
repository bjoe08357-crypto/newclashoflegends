"use client";

import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">⚽</span>
            </div>
            <h1 className="text-white font-bold text-xl tracking-wider">
              CLASH OF LEGENDS
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="#tickets" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Tickets
            </Link>
            <Link href="#seating" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Seating
            </Link>
            <Link href="#articles" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Articles
            </Link>
            <Link href="#partners" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Partners
            </Link>
          </nav>

          {/* Language & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <button className="text-white bg-white/10 px-3 py-1 rounded-full text-sm font-medium">
                EN
              </button>
              <div className="w-6 h-6 bg-white rounded-full"></div>
              <button className="text-white/70 px-3 py-1 rounded-full text-sm">
                ID
              </button>
            </div>
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105">
              Get Your Tickets
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link href="#home" className="text-white hover:text-yellow-400 transition-colors">
                Home
              </Link>
              <Link href="#tickets" className="text-white hover:text-yellow-400 transition-colors">
                Tickets
              </Link>
              <Link href="#seating" className="text-white hover:text-yellow-400 transition-colors">
                Seating
              </Link>
              <Link href="#articles" className="text-white hover:text-yellow-400 transition-colors">
                Articles
              </Link>
              <Link href="#partners" className="text-white hover:text-yellow-400 transition-colors">
                Partners
              </Link>
              <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold w-full mt-4">
                Get Your Tickets
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
