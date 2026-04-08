import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="home" className="relative h-auto md:h-screen flex items-end justify-center overflow-hidden mt-15 bg-black">
      <div className="relative md:absolute md:inset-0">
        <Image
          src="/images/hero.jpeg"
          alt="Clash of Legends banner"
          fill
          className="object-cover object-top hidden md:block"
          priority
        />
        <Image
          src="/images/hero-mobile.jpeg"
          alt="Clash of Legends banner"
          width={2401}
          height={2400}
          className="w-full h-auto block md:hidden"
          priority
        />
      </div>
      {/* Bottom fade into dark background */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
};

export default HeroSection;
