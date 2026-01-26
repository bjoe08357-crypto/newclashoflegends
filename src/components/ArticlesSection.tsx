"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { articles } from "@/data/articles";

const ArticlesSection = () => {
  const { t, lang } = useLanguage();

  const formatter = new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const latestArticles = [...articles]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6);

  return (
    <section id="articles" className="py-20 px-4">
      <div className="container mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t("articles.latest")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            {t("articles.stayUpdated")}
          </p>
        </div>

        {/* Latest Articles */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestArticles.map((article) => (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    onError={(event) => {
                      const target = event.currentTarget;
                      target.onerror = null;
                      target.src = "/images/GBK.png";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-white/60 mb-3">
                    <span className="uppercase tracking-widest">{article.source}</span>
                    <span className="text-yellow-400">
                      {formatter.format(new Date(`${article.date}T00:00:00`))}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold text-lg group-hover:text-yellow-400 transition-colors leading-snug line-clamp-3">
                    {article.title}
                  </h3>
                  <div className="mt-4 text-sm text-yellow-300 font-medium">
                    {t("articles.readMore")}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Link
            href="/articles"
            className="inline-flex bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-8 py-4 rounded-full hover:from-yellow-500 hover:to-orange-600 transition-all transform hover:scale-105"
          >
            {t("articles.viewAll")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
