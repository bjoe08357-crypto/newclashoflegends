const SponsorsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-slate-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Organized by */}
          <div className="mb-8">
            <p className="text-center text-white/60 text-sm mb-4">Organized by</p>
            <div className="flex justify-center items-center space-x-6 flex-wrap">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">LOGO</span>
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">LOGO</span>
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">LOGO</span>
              </div>
            </div>
          </div>

          {/* Sponsored by */}
          <div className="mb-8">
            <p className="text-center text-white/60 text-sm mb-4">Sponsored by</p>
            <div className="flex justify-center items-center space-x-6 flex-wrap">
              <div className="w-20 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">BAIC</span>
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs">LOGO</span>
              </div>
            </div>
          </div>

          {/* Community & Supporting Partners */}
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-center text-white/60 text-sm mb-4">Community Partner</p>
              <div className="flex justify-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">RM</span>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">FCB</span>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-center text-white/60 text-sm mb-4">Supporting Partner</p>
              <div className="flex justify-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">IMCO</span>
                </div>
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">CV</span>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-center text-white/60 text-sm mb-4">Ticketing Partner</p>
              <div className="flex justify-center">
                <div className="w-16 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs">megatix</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;

