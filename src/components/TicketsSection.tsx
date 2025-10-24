"use client";
// Image import removed; seating map removed
import { useLanguage } from "@/contexts/LanguageContext";

const TicketsSection = () => {
  const ticketTypes = [
    {
      category: "CAT - 3",
      price: "550 K",
      color: "from-orange-600 to-orange-700",
      borderColor: "border-orange-500",
      buttonColor: "bg-orange-600 hover:bg-orange-700"
    },
    {
      category: "CAT - 2", 
      price: "1,000 K",
      color: "from-blue-600 to-blue-700",
      borderColor: "border-blue-500",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      category: "CAT - 1",
      price: "2,000 K", 
      color: "from-green-600 to-green-700",
      borderColor: "border-green-500",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      category: "VIP",
      price: "3,500 K",
      color: "from-purple-600 to-purple-700", 
      borderColor: "border-purple-500",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    }
  ];

  const { t } = useLanguage();
  return (
    <section id="tickets" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
            {t('tickets.grabYour')}
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            {t('tickets.tickets')}
          </h2>
        </div>

        {/* Seating map removed per request */}

        {/* Tickets Pricing */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            {t('tickets.ourTickets')}
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ticketTypes.map((ticket, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${ticket.color} rounded-2xl border-2 ${ticket.borderColor} p-6 text-center transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              >
                <h4 className="text-2xl font-bold text-white mb-4">
                  {ticket.category}
                </h4>
                <div className="text-4xl font-bold text-white mb-2">
                  {ticket.price}
                </div>
                <p className="text-white/80 text-sm mb-6">{t('tickets.excludeTax')}</p>
                <a href="https://megatix.co.id/events/clash-of-legends" target="_blank" rel="noopener noreferrer" className={`w-full inline-block text-center ${ticket.buttonColor} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105`}>
                  {t('header.getTickets')}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="text-center">
          <a
            href="https://megatix.co.id/events/clash-of-legends"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:text-yellow-300 underline transition-colors"
          >
            {t('tickets.terms')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
