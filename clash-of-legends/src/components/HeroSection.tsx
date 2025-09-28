const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Modern Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950"></div>
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-transparent to-transparent"></div>
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        {/* Match Card */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="gradient-border glass-effect rounded-3xl p-8 md:p-12 animate-fade-in-up">
            {/* Teams Section */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center justify-between w-full max-w-3xl">
                {/* Real Madrid */}
                <div className="text-center animate-slide-in-left">
                  <div className="relative group">
                    <div className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-4 relative">
                      <div className="w-full h-full bg-gradient-to-br from-white to-gray-200 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                        <span className="text-5xl md:text-6xl">👑</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-200 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                  </div>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1">Real Madrid</h3>
                  <p className="text-amber-400 text-sm font-medium">Legends</p>
                </div>

                {/* VS */}
                <div className="mx-8 text-center animate-pulse-glow">
                  <div className="relative">
                    <div className="text-white text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                      VS
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 blur-xl opacity-30"></div>
                  </div>
                </div>

                {/* Barcelona */}
                <div className="text-center animate-slide-in-right">
                  <div className="relative group">
                    <div className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-4 relative">
                      <div className="w-full h-full bg-gradient-to-br from-red-600 via-blue-600 to-red-800 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-300">
                        <span className="text-5xl md:text-6xl text-white">⚽</span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-blue-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                    </div>
                  </div>
                  <h3 className="text-white text-xl md:text-2xl font-bold mb-1">Barcelona</h3>
                  <p className="text-blue-400 text-sm font-medium">Legends</p>
                </div>
              </div>
            </div>

            {/* Event Badge */}
            <div className="flex items-center justify-center mb-8">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-6 py-3 rounded-full font-bold text-sm flex items-center space-x-3 shadow-xl animate-bounce">
                <span className="text-xl">🏆</span>
                <span>DRX Presents</span>
                <span className="text-xl">🏆</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Title */}
        <div className="text-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-wider leading-tight">
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              CLASH OF
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              LEGENDS
            </span>
          </h1>
          <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Jakarta <span className="text-amber-400 animate-pulse">27 September 2025</span>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium mb-8">
            🏟️ GELORA BUNG KARNO MAIN STADIUM
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-primary text-lg px-8 py-4">
              🎫 Buy Tickets Now
            </button>
            <button className="btn-secondary text-lg px-8 py-4">
              📍 Venue Info
            </button>
          </div>
        </div>

        {/* Sponsors Grid */}
        <div className="max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Organized by */}
            <div className="glass-effect rounded-2xl p-6">
              <p className="text-gray-400 text-sm mb-4 font-medium">Organized by</p>
              <div className="flex justify-center items-center space-x-4 flex-wrap gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-16 h-16 glass-effect rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-amber-400 text-xs font-bold">LOGO</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sponsored by */}
            <div className="glass-effect rounded-2xl p-6">
              <p className="text-gray-400 text-sm mb-4 font-medium">Sponsored by</p>
              <div className="flex justify-center items-center space-x-4 flex-wrap gap-2">
                <div className="w-20 h-16 glass-effect rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-blue-400 text-xs font-bold">BAIC</span>
                </div>
                <div className="w-16 h-16 glass-effect rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-amber-400 text-xs font-bold">DRX</span>
                </div>
              </div>
            </div>

            {/* Partners */}
            <div className="glass-effect rounded-2xl p-6">
              <p className="text-gray-400 text-sm mb-4 font-medium">Partners</p>
              <div className="flex justify-center items-center space-x-4 flex-wrap gap-2">
                <div className="w-16 h-16 glass-effect rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-pink-400 text-xs font-bold">MEGA</span>
                </div>
                <div className="w-16 h-16 glass-effect rounded-xl flex items-center justify-center hover:scale-110 transition-transform">
                  <span className="text-green-400 text-xs font-bold">IMCO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-amber-400 rounded-full opacity-60 animate-float shadow-lg"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full opacity-50 animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-amber-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute top-1/2 left-1/5 w-2 h-2 bg-orange-400 rounded-full opacity-50 animate-float-delayed"></div>
        <div className="absolute top-3/4 right-1/5 w-3 h-3 bg-blue-300 rounded-full opacity-40 animate-float shadow-lg" style={{animationDelay: '1.5s'}}></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-20 right-20 w-20 h-20 border border-amber-400/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-20 left-20 w-16 h-16 border border-blue-400/20 rounded-full animate-float-delayed"></div>
      </div>
    </section>
  );
};

export default HeroSection;