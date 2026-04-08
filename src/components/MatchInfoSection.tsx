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
    "Michel Salgado",
    "Fabio Cannavaro",
    "Claude Makélélé",
    "David Silva",
    "Keisuke Honda",
    "Franck Ribéry",
  ];

  const { t } = useLanguage();
  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Ambient glows */}
      <div className="glow-blob glow-blob-amber w-[600px] h-[400px] -top-20 -right-40" />
      <div className="glow-blob glow-blob-gold w-[400px] h-[400px] bottom-0 -left-20" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-yellow-400 mb-4 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {t("match.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Match Info Card */}
            <div className="shimmer-border bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                {t("match.matchInfo")}
              </h3>

              <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-2xl p-6 mb-6 border border-orange-500/10">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center">
                    <span className="text-xl">📅</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg">{t("match.dateTime")}</h4>
                    <p className="text-orange-300 font-medium">{t("match.dateLine")}</p>
                  </div>
                </div>

                {/* Countdown */}
                <div className="bg-black/30 rounded-xl p-4 border border-white/5">
                  <p className="text-white/60 text-sm mb-3">{t("match.startsIn")}</p>
                  <div className="grid grid-cols-4 gap-3 text-center">
                    {[
                      { val: timeLeft.days, label: t("countdown.days") },
                      { val: timeLeft.hours, label: t("countdown.hours") },
                      { val: timeLeft.minutes, label: t("countdown.minutes") },
                      { val: timeLeft.seconds, label: t("countdown.seconds") },
                    ].map((item, i) => (
                      <div key={i} className="bg-white/5 rounded-lg py-2">
                        <div className="text-2xl font-bold text-yellow-400" style={{ fontFamily: 'var(--font-display)' }}>
                          {item.val}
                        </div>
                        <div className="text-white/50 text-xs uppercase tracking-wider">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-2xl p-6 border border-blue-500/10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">{t("match.venue")}</h4>
                    <p className="text-orange-300 font-medium mb-3">🏟️ Gelora Bung Karno Stadium, Jakarta</p>
                    <p className="text-white/60 text-sm leading-relaxed">{t("match.venueDesc")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Highlights */}
            <div className="shimmer-border bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-orange-500/20 border border-orange-500/30 rounded-full flex items-center justify-center">
                  <span className="text-xl">🔥</span>
                </div>
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                  {t("match.highlights")}
                </h3>
              </div>

              <div className="mb-8">
                <h4 className="text-yellow-400 font-bold text-lg mb-4">{t("match.ultimateTitle")}</h4>
                <p className="text-white/70 mb-6 leading-relaxed">{t("match.ultimateDesc")}</p>
              </div>

              <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/10">
                <h4 className="text-white font-bold text-lg mb-4">{t("match.confirmed")}</h4>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {confirmedPlayers.map((player, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 border border-yellow-500/20 rounded-lg px-3 py-2 text-center"
                    >
                      <span className="text-yellow-300 font-medium text-sm">{player}</span>
                    </div>
                  ))}
                </div>
                <p className="text-white/40 text-sm text-center mb-4">{t("match.moreSoon")}</p>
                <div className="text-right">
                  <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full">
                    {t("match.historicBadge")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="bg-white/[0.03] border border-yellow-500/20 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-yellow-400 font-bold text-lg mb-4">⚠️ {t("match.dontMiss")}</p>
              <a
                href="https://megatix.co.id/events/clash-of-legends"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-full text-lg hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.3)]"
              >
                👑 {t("match.secureCta")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchInfoSection;
