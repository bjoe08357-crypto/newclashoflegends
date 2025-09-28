"use client";

import { useState, useEffect } from "react";

const LegendaryPlayersSection = () => {
  const [selectedTeam, setSelectedTeam] = useState<'real' | 'barca'>('real');
  const [currentSlide, setCurrentSlide] = useState(0);

  const realMadridPlayers = [
    { 
      name: "PEPÉ", 
      position: "Defender", 
      team: "Real Madrid",
      description: "Portuguese defender known for his aggressive style and leadership on the pitch.",
      stats: { matches: 334, goals: 38, trophies: 10 }
    },
    { 
      name: "RAÚL", 
      position: "Forward", 
      team: "Real Madrid",
      description: "Legendary Spanish forward and former captain, Real Madrid's all-time leading scorer.",
      stats: { matches: 741, goals: 323, trophies: 16 }
    },
    { 
      name: "FIGO", 
      position: "Winger", 
      team: "Real Madrid",
      description: "Portuguese winger with incredible dribbling skills and crossing ability.",
      stats: { matches: 245, goals: 38, trophies: 9 }
    },
    { 
      name: "CASILLAS", 
      position: "Goalkeeper", 
      team: "Real Madrid",
      description: "Legendary Spanish goalkeeper, World Cup winner and Real Madrid icon.",
      stats: { matches: 725, cleanSheets: 439, trophies: 19 }
    }
  ];

  const barcelonaPlayers = [
    { 
      name: "PUYOL", 
      position: "Defender", 
      team: "Barcelona",
      description: "Iconic Catalan defender and former captain, symbol of Barcelona's golden era.",
      stats: { matches: 593, goals: 18, trophies: 21 }
    },
    { 
      name: "XAVI", 
      position: "Midfielder", 
      team: "Barcelona",
      description: "Master of tiki-taka football, one of the greatest midfielders of all time.",
      stats: { matches: 767, assists: 185, trophies: 25 }
    },
    { 
      name: "RIVALDO", 
      position: "Forward", 
      team: "Barcelona",
      description: "Brazilian magician with incredible left foot and spectacular goals.",
      stats: { matches: 235, goals: 130, trophies: 5 }
    },
    { 
      name: "RONALDINHO", 
      position: "Forward", 
      team: "Barcelona",
      description: "Brazilian genius who brought joy and magic to football with his skills.",
      stats: { matches: 207, goals: 94, trophies: 7 }
    }
  ];

  const currentPlayers = selectedTeam === 'real' ? realMadridPlayers : barcelonaPlayers;
  const teamColor = selectedTeam === 'real' ? 'from-white to-gray-200' : 'from-red-600 to-blue-600';
  const accentColor = selectedTeam === 'real' ? 'text-white' : 'text-red-400';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentPlayers.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentPlayers.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentPlayers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentPlayers.length) % currentPlayers.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="players" className="py-20 px-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }}
        ></div>
      </div>

      <div className="container mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              LEGENDARY
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              PLAYERS
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Witness the return of football&apos;s greatest icons in the ultimate arena face-off
          </p>
        </div>

        {/* Team Selector */}
        <div className="flex justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="glass-effect rounded-full p-2 flex items-center space-x-2">
            <button
              onClick={() => {
                setSelectedTeam('real');
                setCurrentSlide(0);
              }}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-3 ${
                selectedTeam === 'real'
                  ? 'bg-gradient-to-r from-white to-gray-200 text-black shadow-xl'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="text-2xl">⚪</span>
              <span>Real Madrid Legends</span>
            </button>
            
            <div className="text-white font-bold text-2xl mx-4 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              VS
            </div>
            
            <button
              onClick={() => {
                setSelectedTeam('barca');
                setCurrentSlide(0);
              }}
              className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-3 ${
                selectedTeam === 'barca'
                  ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white shadow-xl'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="text-2xl">🔴</span>
              <span>Barcelona Legends</span>
            </button>
          </div>
        </div>

        {/* Player Carousel */}
        <div className="max-w-6xl mx-auto relative">
          {/* Main Player Display */}
          <div className="relative overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {currentPlayers.map((player, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="gradient-border glass-effect rounded-3xl p-8 md:p-12 mx-2">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Player Image */}
                      <div className="relative group">
                        <div className="relative">
                          <div className={`w-80 h-80 mx-auto bg-gradient-to-br ${teamColor} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-105 transition-all duration-500`}>
                            <span className="text-9xl">👤</span>
                          </div>
                          <div className={`absolute inset-0 bg-gradient-to-br ${teamColor} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                          
                          {/* Team Badge */}
                          <div className="absolute top-4 right-4">
                            <div className={`w-16 h-12 bg-gradient-to-r ${selectedTeam === 'real' ? 'from-white to-gray-200' : 'from-red-600 to-blue-600'} rounded-lg flex items-center justify-center shadow-lg`}>
                              <span className={`text-xs font-bold ${selectedTeam === 'real' ? 'text-black' : 'text-white'}`}>
                                {selectedTeam === 'real' ? 'RM' : 'FCB'}
                              </span>
                            </div>
                          </div>
                          
                          {/* Featured Badge */}
                          {index === 0 && (
                            <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                              ⭐ FEATURED
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Player Info */}
                      <div className="text-center md:text-left space-y-6">
                        <div>
                          <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
                            {player.name}
                          </h3>
                          <p className={`text-xl ${accentColor} font-semibold mb-1`}>
                            {player.position}
                          </p>
                          <p className="text-gray-400 text-lg">
                            {player.team}
                          </p>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">
                          {player.description}
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4">
                          {Object.entries(player.stats).map(([key, value]) => (
                            <div key={key} className="glass-effect rounded-xl p-4 text-center">
                              <div className="text-2xl font-bold text-amber-400 mb-1">
                                {value}
                              </div>
                              <div className="text-gray-400 text-sm capitalize">
                                {key === 'cleanSheets' ? 'Clean Sheets' : key}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass-effect rounded-full p-4 text-white hover:text-amber-400 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass-effect rounded-full p-4 text-white hover:text-amber-400 transition-all duration-300 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mt-8">
          {currentPlayers.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Player Thumbnails */}
        <div className="flex justify-center space-x-4 mt-8 overflow-x-auto pb-4">
          {currentPlayers.map((player, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 glass-effect rounded-xl p-3 transition-all duration-300 ${
                index === currentSlide
                  ? 'ring-2 ring-amber-400 scale-105'
                  : 'hover:scale-105 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="text-center">
                <div className={`w-12 h-12 bg-gradient-to-br ${teamColor} rounded-lg flex items-center justify-center mb-2`}>
                  <span className="text-xl">👤</span>
                </div>
                <p className="text-white text-xs font-semibold">{player.name}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegendaryPlayersSection;