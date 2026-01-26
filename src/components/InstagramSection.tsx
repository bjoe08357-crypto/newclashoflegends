"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const InstagramSection = () => {
  const { lang } = useLanguage();

  return (
    <section id="instagram" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {lang === "id" ? "INSTAGRAM" : "INSTAGRAM FEED"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {lang === "id"
              ? "Ikuti pembaruan terbaru dari Clash of Legends Jakarta."
              : "Follow the latest updates from Clash of Legends Jakarta."}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-white/10 rounded-3xl p-6 md:p-8">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
              <div className="w-full">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  <iframe
                    title="Clash of Legends Instagram"
                    src="https://www.instagram.com/clashoflegends.id/embed"
                    className="w-full h-full"
                    loading="lazy"
                  />
                </div>
                <p className="text-white/50 text-xs mt-3">
                  {lang === "id"
                    ? "Jika embed tidak tampil, gunakan tombol di samping untuk membuka profil."
                    : "If the embed does not load, use the button to open the profile."}
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-5">
                  <h3 className="text-white font-semibold text-xl mb-2">@clashoflegends.id</h3>
                  <p className="text-white/70 text-sm mb-4">
                    {lang === "id"
                      ? "Konten terbaru, pengumuman lineup, dan cuplikan pertandingan."
                      : "Latest content, lineup announcements, and match highlights."}
                  </p>
                  <a
                    href="https://www.instagram.com/clashoflegends.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-6 py-3 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all"
                  >
                    {lang === "id" ? "Buka Instagram" : "Open Instagram"}
                  </a>
                </div>

                <div className="bg-slate-950/60 border border-white/10 rounded-2xl p-5">
                  <p className="text-white/70 text-sm">
                    {lang === "id"
                      ? "Untuk feed per-post, kirimkan URL posting Instagram dan kami akan sematkan di sini."
                      : "For a per-post feed, share Instagram post URLs and we will embed them here."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
