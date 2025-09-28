import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "Buy Tickets", href: "#tickets" },
    { name: "Seating Map", href: "#seating" }, 
    { name: "Articles", href: "#articles" },
    { name: "Venue Info", href: "#venue" },
    { name: "FAQ", href: "#faq" }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "TikTok", icon: "🎵", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-black font-bold text-sm">🏆</span>
              </div>
              <h3 className="text-white font-bold text-xl">
                CLASH OF LEGENDS
              </h3>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Experience the greatest football rivalry for one unforgettable night.
            </p>
            
            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-full flex items-center justify-center hover:from-yellow-400 hover:to-orange-500 transition-all transform hover:scale-110"
                  >
                    <span className="text-xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-4">
              {quickLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="block text-white/70 hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-lg">📧</span>
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <a 
                    href="mailto:tickets@clashoflegends.com"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    tickets@clashoflegends.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-yellow-400 text-lg">📞</span>
                <div>
                  <p className="text-white/70 text-sm">Phone</p>
                  <a 
                    href="tel:+34912345678"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                  >
                    +34 91 234 5678
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Don&apos;t Miss Out</h4>
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-2xl p-6 border border-yellow-500/30">
              <p className="text-white text-sm mb-4">
                Secure your tickets now for the ultimate football experience!
              </p>
              <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105">
                🎫 Buy Tickets Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm text-center">
              © 2025 Clash Of Legends. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
