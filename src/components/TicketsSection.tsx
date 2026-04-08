"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const TicketsSection = () => {
  const ticketTypes = [
    {
      category: "CAT - 3",
      price: "300 K",
      color: "from-orange-600/80 to-orange-800/80",
      borderColor: "border-orange-500/40",
      hoverBorder: "hover:border-orange-400",
      accent: "bg-orange-500",
    },
    {
      category: "CAT - 2",
      price: "1,000 K",
      color: "from-blue-600/80 to-blue-800/80",
      borderColor: "border-blue-500/40",
      hoverBorder: "hover:border-blue-400",
      accent: "bg-blue-500",
    },
    {
      category: "CAT - 1",
      price: "2,000 K",
      color: "from-green-600/80 to-green-800/80",
      borderColor: "border-green-500/40",
      hoverBorder: "hover:border-green-400",
      accent: "bg-green-500",
    },
    {
      category: "VIP",
      price: "3,500 K",
      color: "from-yellow-600/80 to-amber-800/80",
      borderColor: "border-yellow-500/40",
      hoverBorder: "hover:border-yellow-400",
      accent: "bg-yellow-500",
    },
  ];

  const { t } = useLanguage();
  return (
    <section id="tickets" className="relative py-24 px-4 overflow-hidden">
      {/* Ambient glow */}
      <div className="glow-blob glow-blob-gold w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-[var(--font-display)] text-5xl md:text-7xl font-bold text-yellow-400 mb-2 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {t("tickets.grabYour")}
          </h2>
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {t("tickets.tickets")}
          </h2>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12" style={{ fontFamily: 'var(--font-display)' }}>
            {t("tickets.ourTickets")}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ticketTypes.map((ticket, index) => (
              <div
                key={index}
                className={`card-glow relative bg-gradient-to-br ${ticket.color} backdrop-blur-sm rounded-2xl border ${ticket.borderColor} ${ticket.hoverBorder} p-6 text-center transform hover:scale-105 transition-all duration-300`}
              >
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 ${ticket.accent} rounded-b-full`} />
                <h4 className="text-2xl font-bold text-white mb-4 mt-2">
                  {ticket.category}
                </h4>
                <div className="text-4xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {ticket.price}
                </div>
                <p className="text-white/60 text-sm mb-6">
                  {t("tickets.excludeTax")}
                </p>
                <a
                  href="https://megatix.co.id/events/clash-of-legends"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block text-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  {t("header.getTickets")}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <a
            href="https://megatix.co.id/events/clash-of-legends"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400/80 hover:text-yellow-300 underline underline-offset-4 transition-colors"
          >
            {t("tickets.terms")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
