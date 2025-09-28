import Image from "next/image";

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

  return (
    <section id="tickets" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
            GRAB YOUR
          </h2>
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            TICKETS
          </h2>
        </div>

        {/* Seating Map */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-md border border-yellow-500/30 rounded-3xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Seating Map
            </h3>
            
            {/* Stadium Visualization */}
            <div className="relative max-w-2xl mx-auto">
              <Image
                src="/images/GBK.png"
                alt="Gelora Bung Karno Stadium Seating Map"
                width={800}
                height={600}
                className="w-full h-auto rounded-lg"
              />
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-purple-600 rounded"></div>
                <span className="text-white text-sm">VIP Barat & Timur</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-green-600 rounded"></div>
                <span className="text-white text-sm">CAT-1</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-blue-600 rounded"></div>
                <span className="text-white text-sm">CAT-2</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-orange-600 rounded"></div>
                <span className="text-white text-sm">CAT-3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tickets Pricing */}
        <div className="mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Tickets
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
                <p className="text-white/80 text-sm mb-6">*exclude tax</p>
                <button className={`w-full ${ticket.buttonColor} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105`}>
                  Get Your Tickets
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Terms & Conditions */}
        <div className="text-center">
          <a
            href="#"
            className="text-yellow-400 hover:text-yellow-300 underline transition-colors"
          >
            Terms & Conditions
          </a>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;
