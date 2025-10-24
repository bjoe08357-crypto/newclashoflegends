import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden mt-15 bg-gradient-to-b from-slate-900 to-blue-900">
      {/* Hero Background Images - Desktop and Mobile */}
      <div className="absolute inset-0 top-0">
        {/* Desktop Image */}
        <Image
          src="/images/hero.jpeg"
          alt="Clash of Legends banner"
          fill
          className="object-contain object-center hidden md:block"
          priority
        />
        {/* Mobile Image */}
        <Image
          src="/images/hero-mobile.jpeg"
          alt="Clash of Legends banner"
          fill
          className="object-contain object-center block md:hidden"
          priority
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full opacity-60 animate-pulse delay-700"></div>
      </div>
    </section>
  );
};

export default HeroSection;