import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const quickLinks = [
    { name: t("footer.buyTicketsNow"), href: "https://megatix.co.id/events/clash-of-legends" },
    { name: t("nav.articles"), href: "#articles" }
  ];

  const socialLinks = [
    { name: "Instagram", icon: "/logos/instagram.svg", href: "#" },
    { name: "TikTok", icon: "/logos/tiktok.svg", href: "#" }
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
              <h4 className="text-white font-semibold mb-4">{t('footer.followUs')}</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="w-12 h-12 bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-full flex items-center justify-center hover:from-yellow-400 hover:to-orange-500 transition-all transform hover:scale-110"
                  >
                    <img src={social.icon} alt={social.name} className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6">{t('footer.quickLinks')}</h4>
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
                  <p className="text-white/70 text-sm">{t('footer.email')}</p>
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
                  <p className="text-white/70 text-sm">{t('footer.phone')}</p>
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
            <h4 className="text-white font-semibold text-lg mb-6">{t('footer.dontMissOut')}</h4>
            <div className="bg-gradient-to-br from-yellow-600/20 to-orange-600/20 rounded-2xl p-6 border border-yellow-500/30">
              <p className="text-white text-sm mb-4">
                Secure your tickets now for the ultimate football experience!
              </p>
              <a href="https://megatix.co.id/events/clash-of-legends" target="_blank" rel="noopener noreferrer" className="w-full inline-block text-center bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-3 px-6 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105">
                🎫 {t('footer.buyTicketsNow')}
              </a>
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
