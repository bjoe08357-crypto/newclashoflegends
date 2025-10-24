"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLanguage, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo (click to home) */}
          <Link href="#home" className="flex items-center">
            <img src="/logo.avif" alt="Clash Of Legends" className="w-14 h-14 object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#partners" className="text-white hover:text-yellow-400 transition-colors font-medium">
              {t('nav.partners')}
            </Link>
            <Link href="#about" className="text-white hover:text-yellow-400 transition-colors font-medium">
              {t('match.matchInfo')}
            </Link>
            <Link href="#players" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Players
            </Link>
            <Link href="#tickets" className="text-white hover:text-yellow-400 transition-colors font-medium">
              {t('nav.tickets')}
            </Link>
            {/* Articles link hidden */}
          </nav>

          {/* Socials + Language & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3 mr-2">
              <a href="https://www.instagram.com/clashoflegends.id/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img src="/logos/instagram.avif" alt="Instagram" className="w-5 h-5 object-contain" />
              </a>
              <a href="https://x.com/ClashLegendsid" target="_blank" rel="noopener noreferrer" aria-label="X">
                <img src="/logos/x.avif" alt="X" className="w-5 h-5 object-contain" />
              </a>
              <a href="https://www.tiktok.com/@clashoflegends.id" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <img src="/logos/tiktok.avif" alt="TikTok" className="w-5 h-5 object-contain" />
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded-full text-sm font-medium ${lang==='en' ? 'text-black bg-yellow-400' : 'text-white/70 bg-white/10'}`}>
                EN
              </button>
              <button onClick={() => setLanguage('id')} className={`px-3 py-1 rounded-full text-sm font-medium ${lang==='id' ? 'text-black bg-yellow-400' : 'text-white/70 bg-white/10'}`}>
                ID
              </button>
            </div>
            <a href="https://megatix.co.id/events/clash-of-legends" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105">
              {t('header.getTickets')}
            </a>
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
              <Link href="#partners" className="text-white hover:text-yellow-400 transition-colors">{t('nav.partners')}</Link>
              <Link href="#about" className="text-white hover:text-yellow-400 transition-colors">{t('match.matchInfo')}</Link>
              <Link href="#players" className="text-white hover:text-yellow-400 transition-colors">Players</Link>
              <Link href="#tickets" className="text-white hover:text-yellow-400 transition-colors">{t('nav.tickets')}</Link>
              <div className="flex items-center space-x-4 pt-2">
                <a href="https://www.instagram.com/clashoflegends.id/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><img src="/logos/instagram.avif" alt="Instagram" className="w-5 h-5 object-contain" /></a>
                <a href="https://x.com/ClashLegendsid" target="_blank" rel="noopener noreferrer" aria-label="X"><img src="/logos/x.avif" alt="X" className="w-5 h-5 object-contain" /></a>
                <a href="https://www.tiktok.com/@clashoflegends.id" target="_blank" rel="noopener noreferrer" aria-label="TikTok"><img src="/logos/tiktok.avif" alt="TikTok" className="w-5 h-5 object-contain" /></a>
              </div>
              <a href="https://megatix.co.id/events/clash-of-legends" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-6 py-2 rounded-full font-semibold w-full mt-4">{t('header.getTickets')}</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
