"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { articles } from "@/data/articles";

const ArticlesSection = () => {
  const { t, lang } = useLanguage();

  const formatter = new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const latestArticles = [...articles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6);

  return (
    <section id="articles" className="relative py-24 px-4 overflow-hidden">
      <div className="glow-blob glow-blob-amber w-[500px] h-[400px] top-20 -left-40" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            {t("articles.latest")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            {t("articles.stayUpdated")}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group card-glow bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/40 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-white/40 mb-3">
                    <span className="uppercase tracking-widest">{article.source}</span>
                    <span className="text-yellow-400/70">
                      {formatter.format(new Date(`${article.date}T00:00:00`))}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-yellow-400 transition-colors leading-snug line-clamp-3">
                    {article.title}
                  </h3>
                  <div className="mt-4 text-sm text-yellow-400/60 group-hover:text-yellow-400 font-medium transition-colors">
                    {t("articles.readMore")} →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/articles"
            className="inline-flex bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.2)]"
          >
            {t("articles.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
