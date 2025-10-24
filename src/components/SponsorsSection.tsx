import Image from "next/image";
import logos from "@/data/logos.json";
import { useLanguage } from "@/contexts/LanguageContext";

const LogoRow = ({ items, size = 64, max }: { items: string[]; size?: number; max?: number }) => {
  const sources = typeof max === "number" ? items.slice(0, max) : items;
  return (
    <div className="flex justify-center items-center gap-6 flex-wrap">
      {sources.map((src, idx) => (
        <div key={src + idx} className="flex items-center justify-center" style={{ width: size, height: size }}>
          <Image src={src} alt="logo" width={size * 0.9} height={size * 0.9} className="object-contain" />
        </div>
      ))}
    </div>
  );
};

const SponsorsSection = () => {
  const { t } = useLanguage();
  return (
    <section id="partners" className="py-12 bg-gradient-to-b from-slate-900 to-blue-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-center text-white/60 text-sm mb-4">{t('sponsors.organizedBy')}</p>
            <LogoRow items={logos.organizedBy} size={64} max={4} />
          </div>

          <div className="mb-8">
            <p className="text-center text-white/60 text-sm mb-4">{t('sponsors.sponsoredBy')}</p>
            <LogoRow items={logos.sponsoredBy} size={72} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-center text-white/60 text-sm mb-4">{t('sponsors.communityPartner')}</p>
              <LogoRow items={logos.communityPartner} size={48} />
            </div>
            
            <div>
              <p className="text-center text-white/60 text-sm mb-4">{t('sponsors.supportingPartner')}</p>
              <LogoRow items={logos.supportingPartner} size={48} />
            </div>
            
            <div>
              <p className="text-center text-white/60 text-sm mb-4">{t('sponsors.ticketingPartner')}</p>
              <LogoRow items={logos.ticketingPartner} size={56} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;

