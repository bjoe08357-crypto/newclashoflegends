"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const LegendaryPlayersSection = () => {
  const [selectedTeam, setSelectedTeam] = useState<'real' | 'barca'>('real');

  const realMadridPlayers = [
    { name: "PEPÉ", position: "Defender", image: "/images/pepe.png", team: "Real Madrid" },
    { name: "FIGO", position: "Winger", image: "/images/figo.png", team: "Real Madrid" }
  ];

  const barcelonaPlayers = [
    { name: "PUYOL", position: "Defender", image: "/images/puyol.png", team: "Barcelona" },
    { name: "RIVALDO", position: "Forward", image: "/images/rivaldo.png", team: "Barcelona" }
  ];

  const currentPlayers = selectedTeam === 'real' ? realMadridPlayers : barcelonaPlayers;

  return (
    <section id="players" className="py-20 px-4 bg-gradient-to-b from-slate-900 to-blue-900">
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

        {/* Player Cards Grid (centered) */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-6">
            {/* Pepé Card */}
            <div className="w-64 group relative">
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
            <div className="w-64 group relative">
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
            <div className="w-64 group relative">
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
            <div className="w-64 group relative">
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

          {/* Navigation Arrows removed */}
        </div>

        {/* Team selector removed per request */}
      </div>
    </section>
  );
};

export default LegendaryPlayersSection;
