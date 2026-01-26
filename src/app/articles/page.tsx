"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { articles } from "@/data/articles";

const ArticlesPage = () => {
  const { lang, t } = useLanguage();

  const formatter = new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  const groupedByDate = articles.reduce<Record<string, typeof articles>>((acc, article) => {
    if (!acc[article.date]) acc[article.date] = [];
    acc[article.date].push(article);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedByDate).sort((a, b) => b.localeCompare(a));

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <section className="py-24 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {t("articles.latest")}
              </h1>
              <p className="text-white/80 max-w-2xl">
                {lang === "id"
                  ? "Semua pemberitaan resmi terkait Clash of Legends Jakarta."
                  : "All official press coverage for Clash of Legends Jakarta."}
              </p>
            </div>
            <Link
              href="/#articles"
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300"
            >
              ← {lang === "id" ? "Kembali" : "Back"}
            </Link>
          </div>

          <div className="space-y-10">
            {sortedDates.map((dateKey) => (
              <div
                key={dateKey}
                className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-white/10 rounded-3xl p-6 md:p-8"
              >
                <div className="flex items-center text-yellow-400 font-semibold mb-6">
                  <span className="mr-2">📅</span>
                  {formatter.format(new Date(`${dateKey}T00:00:00`))}
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {groupedByDate[dateKey].map((article) => (
                    <a
                      key={article.id}
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-gradient-to-br from-slate-900/50 to-slate-950/50 border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-400/50 transition-all duration-300"
                    >
                      <div className="relative h-40">
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
                          <span className="text-yellow-400">↗</span>
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
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArticlesPage;
