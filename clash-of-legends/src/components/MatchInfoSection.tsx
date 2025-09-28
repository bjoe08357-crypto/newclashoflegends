"use client";

import { useState, useEffect } from "react";

const MatchInfoSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 31,
    hours: 5,
    minutes: 7,
    seconds: 50
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const confirmedPlayers = [
    { name: "Patrick Kluivert", team: "barca", position: "Forward" },
    { name: "Carles Puyol", team: "barca", position: "Defender" }, 
    { name: "Rivaldo", team: "barca", position: "Forward" },
    { name: "Luis Figo", team: "real", position: "Winger" },
    { name: "Clarence Seedorf", team: "real", position: "Midfielder" },
    { name: "Pepe", team: "real", position: "Defender" }
  ];

  return (
    <section id="info" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950"></div>
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, rgba(245, 158, 11, 0.15) 0%, transparent 50%),
                             radial-gradient(circle at 70% 30%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white flex items-center justify-center space-x-4">
              <span>⚽</span>
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                CLASH OF LEGENDS
              </span>
              <span>⚽</span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300">The Ultimate Football Showdown</p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Match Info Card */}
            <div className="animate-fade-in-up">
              <div className="gradient-border glass-effect rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center space-x-3">
                  <span>📅</span>
                  <span>Match Information</span>
                </h3>
                
                {/* Date & Time */}
                <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-6 mb-6 border border-orange-500/30">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-xl">
                      <span className="text-white text-2xl">📅</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-xl mb-2">Date & Time</h4>
                      <p className="text-orange-300 font-semibold text-lg">
                        📅 Saturday, 27 September 2025 — 4:00 PM
                      </p>
                      <p className="text-gray-400 text-sm mt-1">Jakarta Time (WIB)</p>
                    </div>
                  </div>
                  
                  {/* Enhanced Countdown */}
                  <div className="bg-gradient-to-r from-red-500/30 to-orange-500/30 rounded-xl p-6 border border-red-400/30">
                    <p className="text-white text-center mb-4 font-semibold">⏰ Match starts in</p>
                    <div className="grid grid-cols-4 gap-3">
                      {[
                        { value: timeLeft.days, label: 'DAYS', color: 'from-red-400 to-orange-400' },
                        { value: timeLeft.hours, label: 'HOURS', color: 'from-orange-400 to-yellow-400' },
                        { value: timeLeft.minutes, label: 'MIN', color: 'from-yellow-400 to-amber-400' },
                        { value: timeLeft.seconds, label: 'SEC', color: 'from-amber-400 to-orange-400' }
                      ].map((item, index) => (
                        <div key={index} className="text-center">
                          <div className={`bg-gradient-to-br ${item.color} rounded-xl p-3 mb-2 shadow-lg`}>
                            <div className="text-2xl md:text-3xl font-bold text-black">
                              {item.value.toString().padStart(2, '0')}
                            </div>
                          </div>
                          <div className="text-white/70 text-xs font-semibold">{item.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Venue */}
                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-blue-500/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-xl flex-shrink-0">
                      <span className="text-white text-2xl">🏟️</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-xl mb-2">Venue</h4>
                      <p className="text-blue-300 font-semibold text-lg mb-3">
                        🏟️ Gelora Bung Karno Stadium, Jakarta
                      </p>
                      <div className="glass-effect rounded-xl p-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Indonesia&apos;s largest stadium, seating 77,000 fans, and home to unforgettable moments. 
                          From the Asian Games to world-class concerts, it now sets the stage for the ultimate 
                          football legends clash.
                        </p>
                      </div>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                          77,000 Capacity
                        </span>
                        <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                          World Class
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Event Highlights */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="gradient-border glass-effect rounded-3xl p-8">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-xl">
                    <span className="text-black text-2xl font-bold">🔥</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Event Highlights</h3>
                </div>

                <div className="space-y-6">
                  {/* Main Highlight */}
                  <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-6 border border-amber-500/30">
                    <h4 className="text-amber-400 font-bold text-xl mb-4 flex items-center space-x-2">
                      <span>🔥</span>
                      <span>The Ultimate Rivalry Returns</span>
                    </h4>
                    <p className="text-white leading-relaxed mb-4">
                      The ultimate rivalry returns to Jakarta! Real Madrid Legends take on Barca Legends 
                      in front of 77,000 fans at Indonesia&apos;s biggest stadium!
                    </p>
                    <div className="flex items-center space-x-4">
                      <div className="bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm font-semibold">
                        🏆 El Clasico
                      </div>
                      <div className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-semibold">
                        🌟 Legends Match
                      </div>
                    </div>
                  </div>

                  {/* Confirmed Players */}
                  <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl p-6 border border-purple-500/30">
                    <h4 className="text-white font-bold text-lg mb-4 flex items-center space-x-2">
                      <span>⭐</span>
                      <span>Confirmed Legendary Stars</span>
                    </h4>
                    <div className="grid grid-cols-1 gap-3 mb-4">
                      {confirmedPlayers.map((player, index) => (
                        <div
                          key={index}
                          className={`glass-effect rounded-lg px-4 py-3 flex items-center justify-between transition-all hover:scale-105`}
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              player.team === 'real' 
                                ? 'bg-gradient-to-r from-white to-gray-200' 
                                : 'bg-gradient-to-r from-red-600 to-blue-600'
                            }`}>
                              <span className={`text-xs font-bold ${
                                player.team === 'real' ? 'text-black' : 'text-white'
                              }`}>
                                {player.team === 'real' ? 'RM' : 'FCB'}
                              </span>
                            </div>
                            <div>
                              <span className="text-white font-semibold text-sm">{player.name}</span>
                              <p className="text-gray-400 text-xs">{player.position}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-400 text-sm text-center mb-4">More legends to be revealed soon!</p>
                    <div className="text-center">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-4 py-2 rounded-full font-semibold animate-pulse">
                        🏆 10th Historic Meeting
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="gradient-border glass-effect rounded-3xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                🚨 Don&apos;t Miss Football History! 🚨
              </h3>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                This is your once-in-a-lifetime opportunity to witness the greatest El Clasico legends 
                battle it out in the most iconic stadium in Southeast Asia!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary text-lg px-8 py-4">
                  👑 Secure Your Legendary Experience
                </button>
                <button className="btn-secondary text-lg px-8 py-4">
                  📱 Share with Friends
                </button>
              </div>
              
              {/* Urgency Indicator */}
              <div className="mt-6 flex items-center justify-center space-x-2 text-amber-400">
                <span className="animate-pulse">⚡</span>
                <span className="text-sm font-semibold">Limited seats available - Book now!</span>
                <span className="animate-pulse">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MatchInfoSection;