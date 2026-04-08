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
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
};

export default SponsorsSection;

