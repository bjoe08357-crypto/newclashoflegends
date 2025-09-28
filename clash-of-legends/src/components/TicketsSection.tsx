"use client";

import { useState } from "react";

const TicketsSection = () => {
  const [selectedTicket, setSelectedTicket] = useState<number | null>(null);

  const ticketTypes = [
    {
      id: 1,
      category: "CAT-3",
      price: "550K",
      originalPrice: "650K",
      color: "from-orange-500 to-red-600",
      borderColor: "border-orange-400",
      buttonColor: "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700",
      features: ["Upper Tier Seating", "Stadium Atmosphere", "Basic Amenities", "Match Program"],
      popular: false
    },
    {
      id: 2,
      category: "CAT-2", 
      price: "1,000K",
      originalPrice: "1,200K",
      color: "from-blue-500 to-indigo-600",
      borderColor: "border-blue-400",
      buttonColor: "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
      features: ["Mid-Tier Seating", "Great Field View", "Premium Amenities", "Complimentary Drink"],
      popular: false
    },
    {
      id: 3,
      category: "CAT-1",
      price: "2,000K", 
      originalPrice: "2,400K",
      color: "from-emerald-500 to-teal-600",
      borderColor: "border-emerald-400",
      buttonColor: "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700",
      features: ["Lower Tier Premium", "Excellent View", "VIP Amenities", "Welcome Package"],
      popular: true
    },
    {
      id: 4,
      category: "VIP",
      price: "3,500K",
      originalPrice: "4,000K",
      color: "from-purple-500 to-pink-600", 
      borderColor: "border-purple-400",
      buttonColor: "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700",
      features: ["VIP Lounge Access", "Premium Dining", "Meet & Greet", "Exclusive Merchandise"],
      popular: false
    }
  ];

  return (
    <section id="tickets" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              GRAB YOUR
            </span>
            <br />
            <span className="text-white">TICKETS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose your perfect seat for the ultimate football experience
          </p>
        </div>

        {/* Interactive Seating Map */}
        <div className="max-w-5xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="gradient-border glass-effect rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 flex items-center justify-center space-x-3">
              <span>🏟️</span>
              <span>Interactive Seating Map</span>
              <span>🏟️</span>
            </h3>
            
            {/* Stadium Visualization */}
            <div className="relative max-w-3xl mx-auto mb-8">
              <svg viewBox="0 0 500 350" className="w-full h-auto">
                {/* Stadium Structure */}
                <defs>
                  <linearGradient id="field" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22c55e" />
                    <stop offset="100%" stopColor="#16a34a" />
                  </linearGradient>
                  
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/> 
                    </feMerge>
                  </filter>
                </defs>
                
                {/* CAT-3 Sections (Orange) */}
                <path
                  d="M 50 175 A 175 175 0 0 1 450 175 A 195 195 0 0 1 50 175 Z"
                  fill="url(#cat3Gradient)"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedTicket(1)}
                  filter="url(#glow)"
                />
                
                {/* CAT-2 Sections (Blue) */}
                <path
                  d="M 75 175 A 150 150 0 0 1 425 175 A 175 175 0 0 1 75 175 Z"
                  fill="url(#cat2Gradient)"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedTicket(2)}
                  filter="url(#glow)"
                />
                
                {/* CAT-1 Sections (Green) */}
                <path
                  d="M 100 175 A 125 125 0 0 1 400 175 A 150 150 0 0 1 100 175 Z"
                  fill="url(#cat1Gradient)"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedTicket(3)}
                  filter="url(#glow)"
                />
                
                {/* VIP Sections (Purple) */}
                <path
                  d="M 125 175 A 100 100 0 0 1 375 175 A 125 125 0 0 1 125 175 Z"
                  fill="url(#vipGradient)"
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => setSelectedTicket(4)}
                  filter="url(#glow)"
                />
                
                {/* Football Field */}
                <rect
                  x="175"
                  y="140"
                  width="150"
                  height="70"
                  fill="url(#field)"
                  rx="8"
                  className="drop-shadow-lg"
                />
                
                {/* Field Details */}
                <circle cx="250" cy="175" r="20" fill="none" stroke="white" strokeWidth="2" opacity="0.8"/>
                <circle cx="250" cy="175" r="2" fill="white" opacity="0.8"/>
                <line x1="250" y1="140" x2="250" y2="210" stroke="white" strokeWidth="2" opacity="0.6"/>
                
                {/* Goal Areas */}
                <rect x="175" y="157.5" width="20" height="35" fill="none" stroke="white" strokeWidth="2" opacity="0.8"/>
                <rect x="305" y="157.5" width="20" height="35" fill="none" stroke="white" strokeWidth="2" opacity="0.8"/>
                
                {/* Gradients for sections */}
                <defs>
                  <linearGradient id="cat3Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f97316" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#dc2626" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="cat2Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#4338ca" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="cat1Gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0d9488" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="vipGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ec4899" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Legend */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {ticketTypes.map((ticket) => (
                <button
                  key={ticket.id}
                  onClick={() => setSelectedTicket(ticket.id)}
                  className={`glass-effect rounded-xl p-4 transition-all duration-300 hover:scale-105 ${
                    selectedTicket === ticket.id ? 'ring-2 ring-amber-400 scale-105' : ''
                  }`}
                >
                  <div className={`w-6 h-6 bg-gradient-to-br ${ticket.color} rounded-lg mx-auto mb-2 shadow-lg`}></div>
                  <span className="text-white text-sm font-semibold">{ticket.category}</span>
                  {ticket.popular && (
                    <div className="text-xs text-amber-400 font-bold mt-1">POPULAR</div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tickets Pricing */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Choose Your Experience
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {ticketTypes.map((ticket) => (
              <div
                key={ticket.id}
                className={`relative group cursor-pointer transition-all duration-500 hover:scale-105 ${
                  selectedTicket === ticket.id ? 'scale-105' : ''
                }`}
                onClick={() => setSelectedTicket(selectedTicket === ticket.id ? null : ticket.id)}
              >
                {/* Popular Badge */}
                {ticket.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-black px-4 py-1 rounded-full text-sm font-bold z-10 animate-bounce">
                    🔥 POPULAR
                  </div>
                )}
                
                <div className={`gradient-border glass-effect rounded-2xl p-6 h-full transition-all duration-300 ${
                  selectedTicket === ticket.id ? 'ring-2 ring-amber-400' : ''
                }`}>
                  {/* Header */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${ticket.color} rounded-2xl mx-auto mb-4 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                      <span className="text-2xl text-white font-bold">🎫</span>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">{ticket.category}</h4>
                    <div className="space-y-1">
                      <div className="text-3xl font-bold text-white">{ticket.price}</div>
                      <div className="text-sm text-gray-400 line-through">{ticket.originalPrice}</div>
                      <div className="text-xs text-amber-400">*exclude tax</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {ticket.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <button className={`w-full ${ticket.buttonColor} text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg`}>
                    Select Ticket
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Ticket Details */}
        {selectedTicket && (
          <div className="max-w-2xl mx-auto animate-fade-in-up">
            <div className="gradient-border glass-effect rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold text-white mb-4">
                🎯 Selected: {ticketTypes.find(t => t.id === selectedTicket)?.category}
              </h4>
              <p className="text-gray-300 mb-6">
                You&apos;ve selected the perfect seat for an unforgettable experience!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  🛒 Add to Cart
                </button>
                <button className="btn-secondary">
                  📍 View Seat Location
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Terms & Conditions */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="text-amber-400 hover:text-amber-300 underline transition-colors text-lg font-medium"
          >
            📋 Terms & Conditions
          </a>
        </div>
      </div>
    </section>
  );
};

export default TicketsSection;