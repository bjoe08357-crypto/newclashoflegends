"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const MatchInfoSection = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2026-04-18T16:00:00+07:00').getTime();
    function update() {
      const now = Date.now();
      const diff = Math.max(0, target - now);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    }
    update();
    const timer = setInterval(update, 1000);
    return () => clearInterval(timer);
  }, []);

  const confirmedPlayers = [
    "Patrick Kluivert",
    "Carles Puyol", 
    "Rivaldo",
    "Luis Figo",
    "Clarence Seedorf",
    "Pepe"
  ];

  const { t } = useLanguage();
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4 flex items-center justify-center space-x-4">
            <span>⚽</span>
            <span>{t('match.title')}</span>
            <span>⚽</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Match Info Card */}
            <div className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('match.matchInfo')}</h3>
              
              {/* Date & Time */}
              <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-2xl p-6 mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xl">📅</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{t('match.dateTime')}</h4>
                    <p className="text-orange-300 font-medium">📅 Saturday, 18 April 2026 — 4:00 PM</p>
                  </div>
                </div>
                
                {/* Countdown */}
                <div className="bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-xl p-4">
                  <p className="text-white text-sm mb-2">Match starts in</p>
                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">{timeLeft.days}</div>
                      <div className="text-white/70 text-xs">DAYS</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">{timeLeft.hours}</div>
                      <div className="text-white/70 text-xs">HOURS</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">{timeLeft.minutes}</div>
                      <div className="text-white/70 text-xs">MIN</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-400">{timeLeft.seconds}</div>
                      <div className="text-white/70 text-xs">SEC</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Venue */}
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{t('match.venue')}</h4>
                    <p className="text-orange-300 font-medium mb-3">🏟️ Gelora Bung Karno Stadium, Jakarta</p>
                    <p className="text-white/80 text-sm leading-relaxed">{t('match.venueDesc')}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Highlights */}
            <div className="bg-gradient-to-br from-slate-900/40 to-purple-900/40 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">🔥</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{t('match.highlights')}</h3>
              </div>

              <div className="mb-8">
                <h4 className="text-yellow-400 font-bold text-lg mb-4">🔥 The Ultimate Rivalry Returns</h4>
                <p className="text-white/90 mb-6 leading-relaxed">
                  The ultimate rivalry returns to Jakarta! Real Madrid Legends take on Barca Legends 
                  in front of 77,000 fans at Indonesia&apos;s biggest stadium!
                </p>
              </div>

              {/* Confirmed Players */}
              <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-2xl p-6">
                <h4 className="text-white font-bold text-lg mb-4">Confirmed Legendary Stars</h4>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {confirmedPlayers.map((player, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-lg px-3 py-2 text-center"
                    >
                      <span className="text-yellow-300 font-medium text-sm">{player}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/60 text-sm text-center mb-4">{t('match.moreSoon')}</p>
                <div className="text-right">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full">
                    10th Historic Meeting
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-yellow-400 font-bold text-lg mb-4">⚠️ {t('match.dontMiss')}</p>
              <a href="https://megatix.co.id/events/clash-of-legends" target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-full text-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-2xl">
                👑 {t('match.secureCta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchInfoSection;
