"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-black font-bold text-lg">⚽</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl blur-md opacity-50 -z-10"></div>
            </div>
            <div>
              <h1 className="text-white font-bold text-xl tracking-wider bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                CLASH OF LEGENDS
              </h1>
              <p className="text-xs text-gray-400">Jakarta 2025</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: "Home", href: "#home" },
              { name: "Tickets", href: "#tickets" },
              { name: "Players", href: "#players" },
              { name: "Articles", href: "#articles" },
              { name: "Info", href: "#info" }
            ].map((item, index) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="relative text-white hover:text-amber-400 transition-all duration-300 font-medium group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Language & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 glass-effect rounded-full px-3 py-2">
              <button className="text-white bg-amber-500 px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                EN
              </button>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <button className="text-gray-400 hover:text-white px-3 py-1 rounded-full text-sm transition-colors">
                ID
              </button>
            </div>
            <button className="btn-primary animate-pulse-glow">
              🎫 Get Tickets
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 rounded-lg glass-effect"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className={`w-6 h-6 flex flex-col justify-center items-center transition-all duration-300 ${isMenuOpen ? 'rotate-45' : ''}`}>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-90 translate-y-0' : '-translate-y-1'}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-90 -translate-y-0' : 'translate-y-1'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-effect rounded-2xl mt-4 p-6">
            <nav className="flex flex-col space-y-4">
              {[
                { name: "Home", href: "#home" },
                { name: "Tickets", href: "#tickets" },
                { name: "Players", href: "#players" },
                { name: "Articles", href: "#articles" },
                { name: "Info", href: "#info" }
              ].map((item, index) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="text-white hover:text-amber-400 transition-colors py-2 border-b border-gray-700 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </Link>
              ))}
              <button className="btn-primary w-full mt-4">
                🎫 Get Tickets
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;