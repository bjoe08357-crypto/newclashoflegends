"use client";

import Image from "next/image";

const LegendaryPlayersSection = () => {
  const players = [
    { src: "/images/ronaldo-r9.png", name: "Ronaldo R9", team: "Real Madrid" },
    { src: "/images/puyol.png", name: "Puyol", team: "Barcelona" },
    { src: "/images/franck-ribery.png", name: "Franck Ribéry", team: "Barcelona" },
    { src: "/images/rivaldo.png", name: "Rivaldo", team: "Barcelona" },
  ];

  return (
    <section id="players" className="relative py-24 px-4 overflow-hidden">
      {/* Ambient glow */}
      <div className="glow-blob glow-blob-gold w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            LEGENDARY PLAYERS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-8"></div>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Witness the return of football&apos;s greatest icons in the ultimate arena face-off
          </p>
        </div>

        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex flex-wrap justify-center gap-6">
            {players.map((player, i) => (
              <div key={i} className="w-64 group relative">
                <div className="card-glow rounded-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 border border-white/10 hover:border-yellow-500/40">
                  <div className="relative w-64 h-[436px]">
                    <Image
                      src={player.src}
                      alt={`${player.name} - ${player.team} Legend`}
                      fill
                      className="object-cover object-center"
                    />
                    {/* Name overlay on hover */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>
                        {player.name}
                      </p>
                      <p className="text-yellow-400 text-sm">{player.team}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegendaryPlayersSection;
