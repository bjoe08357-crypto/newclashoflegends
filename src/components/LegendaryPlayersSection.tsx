"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const LegendaryPlayersSection = () => {
  const [selectedTeam, setSelectedTeam] = useState<'real' | 'barca'>('real');
  const [currentSlide, setCurrentSlide] = useState(0);

  const realMadridPlayers = [
    { name: "PEPÉ", position: "Defender", image: "/images/pepe.png", team: "Real Madrid" },
    { name: "FIGO", position: "Winger", image: "/images/figo.png", team: "Real Madrid" }
  ];

  const barcelonaPlayers = [
    { name: "PUYOL", position: "Defender", image: "/images/puyol.png", team: "Barcelona" },
    { name: "RIVALDO", position: "Forward", image: "/images/rivaldo.png", team: "Barcelona" }
  ];

  const currentPlayers = selectedTeam === 'real' ? realMadridPlayers : barcelonaPlayers;

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % currentPlayers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentPlayers.length]);

  // Reset slide when team changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [selectedTeam]);

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
    <section className="py-20 px-4 bg-gradient-to-b from-slate-900 to-blue-900">
      <div className="container mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            LEGENDARY PLAYERS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Witness the return of football&apos;s greatest icons in the ultimate arena face-off
          </p>
        </div>

        {/* Player Cards Carousel */}
        <div className="max-w-7xl mx-auto relative mb-12">
          <div className="flex space-x-6 overflow-x-auto pb-4">
            {/* Pepé Card */}
            <div className="flex-shrink-0 w-64 group relative">
              <div className="rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="relative w-64 h-[436px]">
                  <Image
                    src="/images/pepe.png"
                    alt="Pepé - Real Madrid Legend"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Puyol Card - Featured */}
            <div className="flex-shrink-0 w-64 group relative">
              <div className="rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="relative w-64 h-[436px]">
                  <Image
                    src="/images/puyol.png"
                    alt="Puyol - Barcelona Legend"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Milla Card */}
            <div className="flex-shrink-0 w-64 group relative">
              <div className="rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="relative w-64 h-[436px]">
                  <Image
                    src="/images/figo.png"
                    alt="Milla - Real Madrid Legend"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Xavi Card */}
            <div className="flex-shrink-0 w-64 group relative">
              <div className="rounded-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 shadow-2xl">
                <div className="relative w-64 h-[436px]">
                  <Image
                    src="/images/rivaldo.png"
                    alt="Xavi - Barcelona Legend"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-full p-3 text-black hover:bg-white transition-all duration-300 hover:scale-110 shadow-xl z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md rounded-full p-3 text-black hover:bg-white transition-all duration-300 hover:scale-110 shadow-xl z-10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Team Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-slate-800/50 rounded-full p-2 flex items-center space-x-4">
            <button
              onClick={() => setSelectedTeam('real')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedTeam === 'real'
                  ? 'bg-white text-black'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="mr-2">⚪</span>
              Real Madrid Legends
            </button>
            <div className="text-white font-bold text-xl">VS</div>
            <button
              onClick={() => setSelectedTeam('barca')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                selectedTeam === 'barca'
                  ? 'bg-gradient-to-r from-red-600 to-blue-600 text-white'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <span className="mr-2">🔴</span>
              Barcelona Legends
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegendaryPlayersSection;
