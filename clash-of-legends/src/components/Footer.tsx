import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "Buy Tickets", href: "#tickets", icon: "🎫" },
    { name: "Seating Map", href: "#tickets", icon: "🏟️" }, 
    { name: "Player Info", href: "#players", icon: "⚽" },
    { name: "Articles", href: "#articles", icon: "📰" },
    { name: "Match Info", href: "#info", icon: "📅" },
    { name: "Venue Guide", href: "#info", icon: "📍" }
  ];

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: "📷", 
      href: "#",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700"
    },
    { 
      name: "TikTok", 
      icon: "🎵", 
      href: "#",
      color: "from-black to-gray-800",
      hoverColor: "hover:from-gray-800 hover:to-black"
    },
    { 
      name: "Twitter", 
      icon: "🐦", 
      href: "#",
      color: "from-blue-400 to-blue-600",
      hoverColor: "hover:from-blue-500 hover:to-blue-700"
    },
    { 
      name: "YouTube", 
      icon: "📺", 
      href: "#",
      color: "from-red-500 to-red-700",
      hoverColor: "hover:from-red-600 hover:to-red-800"
    }
  ];

  const partnerLogos = [
    { name: "DRX", color: "text-amber-400" },
    { name: "BAIC", color: "text-blue-400" },
    { name: "IMCO", color: "text-green-400" },
    { name: "MEGA", color: "text-purple-400" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-black to-slate-950 border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-black font-bold text-xl">🏆</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl blur-lg opacity-30"></div>
              </div>
              <div>
                <h3 className="text-white font-bold text-xl bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  CLASH OF LEGENDS
                </h3>
                <p className="text-gray-400 text-sm">Jakarta 2025</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Experience the greatest football rivalry for one unforgettable night. 
              Witness legends return to the pitch in the ultimate El Clasico showdown.
            </p>
            
            {/* Newsletter Signup */}
            <div className="glass-effect rounded-xl p-4 mb-6">
              <h4 className="text-white font-semibold mb-3 flex items-center space-x-2">
                <span>📧</span>
                <span>Stay Updated</span>
              </h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
                />
                <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:from-amber-500 hover:to-orange-600 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 flex items-center space-x-2">
                <span>🌐</span>
                <span>Follow Us</span>
              </h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-12 h-12 bg-gradient-to-br ${social.color} ${social.hoverColor} rounded-xl flex items-center justify-center transition-all transform hover:scale-110 shadow-lg`}
                    title={social.name}
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center space-x-2">
              <span>🔗</span>
              <span>Quick Links</span>
            </h4>
            <nav className="space-y-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-all duration-300 group"
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">{link.icon}</span>
                  <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center space-x-2">
              <span>📞</span>
              <span>Contact Info</span>
            </h4>
            <div className="space-y-6">
              <div className="glass-effect rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-amber-400 text-xl">📧</span>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Email Support</p>
                    <a 
                      href="mailto:tickets@clashoflegends.com"
                      className="text-amber-400 hover:text-amber-300 transition-colors font-medium"
                    >
                      tickets@clashoflegends.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-blue-400 text-xl">📞</span>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Phone Support</p>
                    <a 
                      href="tel:+34912345678"
                      className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
                    >
                      +62 21 234 5678
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect rounded-xl p-4">
                <div className="flex items-start space-x-3">
                  <span className="text-green-400 text-xl">📍</span>
                  <div>
                    <p className="text-gray-400 text-sm mb-1">Venue Location</p>
                    <p className="text-green-400 text-sm font-medium">
                      Gelora Bung Karno Stadium<br />
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 flex items-center space-x-2">
              <span>🎫</span>
              <span>Get Your Tickets</span>
            </h4>
            <div className="gradient-border glass-effect rounded-2xl p-6">
              <div className="text-center mb-4">
                <div className="text-3xl mb-2">🔥</div>
                <h5 className="text-white font-bold text-lg mb-2">Limited Time Offer!</h5>
                <p className="text-gray-300 text-sm mb-4">
                  Early bird discount available until January 31st, 2025
                </p>
              </div>
              
              <button className="w-full btn-primary mb-4">
                🎫 Buy Tickets Now
              </button>
              
              <div className="text-center">
                <p className="text-amber-400 text-sm font-semibold mb-2">Starting from</p>
                <div className="text-2xl font-bold text-white">550K IDR</div>
                <p className="text-gray-400 text-xs">*excluding tax & fees</p>
              </div>
            </div>

            {/* Partner Logos */}
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-3 text-center">Official Partners</p>
              <div className="flex justify-center space-x-3 flex-wrap gap-2">
                {partnerLogos.map((partner, index) => (
                  <div key={index} className="glass-effect rounded-lg px-3 py-2">
                    <span className={`${partner.color} font-bold text-sm`}>{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Clash Of Legends. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Real Madrid and FC Barcelona trademarks are property of their respective owners.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="text-center mt-8 pt-8 border-t border-white/5">
            <p className="text-amber-400 font-semibold mb-2 animate-pulse">
              ⚡ Don&apos;t miss the match of the century! ⚡
            </p>
            <p className="text-gray-400 text-sm">
              Join 77,000 fans for an unforgettable night of football history
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;