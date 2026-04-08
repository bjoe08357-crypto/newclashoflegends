import Image from "next/image";

const SponsorsSection = () => {
  return (
    <section id="partners" className="bg-black pt-16 md:pt-24">
      <div className="w-full">
        <Image
          src="/images/sponsors-banner.png"
          alt="Sponsors and Partners"
          width={8000}
          height={2263}
          className="w-full h-auto hidden md:block"
          priority
        />
        <Image
          src="/images/sponsors-mobile.png"
          alt="Sponsors and Partners"
          width={1200}
          height={1500}
          className="w-full h-auto block md:hidden"
          priority
        />
      </div>
    </section>
  );
};

export default SponsorsSection;

