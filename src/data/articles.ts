"use client";

export type Article = {
  id: number;
  title: string;
  source: string;
  date: string;
  url: string;
  image: string;
};

const buildImageUrl = (url: string) =>
  `/api/og-image?url=${encodeURIComponent(url)}`;

const rawArticles = [
  {
    id: 1,
    title: "Cara beli tiket Clash of Legends Barcelona vs Real Madrid di GBK",
    source: "Kompas.com",
    date: "2026-01-14",
    url: "https://bola.kompas.com/read/2026/01/14/07015948/cara-beli-tiket-clash-of-legends-barcelona-vs-real-madrid-di-gbk"
  },
  {
    id: 2,
    title: "Clash of Legends Jakarta: Real Madrid vs Barcelona akan bertanding di Jakarta",
    source: "The Phrase",
    date: "2026-01-14",
    url: "https://thephrase.id/clash-of-legends-jakarta-real-madrid-vs-barcelona-akan-bertanding-di-jakarta"
  },
  {
    id: 3,
    title: "Clash of Legends Real Madrid vs Barcelona digelar di GBK",
    source: "Wow Tribunnews",
    date: "2026-01-14",
    url: "https://wow.tribunnews.com/superball/377673/clash-of-legends-real-madrid-vs-barcelona-digelar-di-gbk-simak-cara-pesan-tiket-dan-lis-pemainnya"
  },
  {
    id: 4,
    title: "Clash of Legends Jakarta digelar di GBK sambut 500 tahun Jakarta",
    source: "VIVA.co.id",
    date: "2026-01-14",
    url: "https://jakarta.viva.co.id/gelanggang/2708-clash-of-legends-jakarta-real-madrid-vs-barcelona-bakal-digelar-di-gbk-sambut-peringatan-500-tahun-kota-jakarta"
  },
  {
    id: 5,
    title: "Link beli tiket Clash of Legends Barca vs Madrid",
    source: "Tirto",
    date: "2026-01-14",
    url: "https://tirto.id/link-beli-tiket-clash-of-legends-barca-vs-madrid-daftar-harga-hpdi"
  },
  {
    id: 6,
    title: "Gubernur Pramono dukung penuh Clash of Legends 2026",
    source: "Edisi",
    date: "2026-01-14",
    url: "https://www.edisi.co.id/berita/amp/9716556881/gubernur-pramono-dukung-penuh-clash-of-legends-2026-real-madrid-vs-barcelona-hadir-di-gbk"
  },
  {
    id: 7,
    title: "Duel legenda Barcelona vs Real Madrid di GBK, Pramono kado 500 tahun",
    source: "Kompas.com",
    date: "2026-01-13",
    url: "https://megapolitan.kompas.com/read/2026/01/13/10360391/duel-legenda-barcelona-vs-real-madrid-di-gbk-pramono-kado-500-tahun"
  },
  {
    id: 8,
    title: "Clash of Legends Jakarta: duel Real Madrid vs Barcelona digelar di GBK April 2026",
    source: "Tribun Jakarta",
    date: "2026-01-13",
    url: "https://jakarta.tribunnews.com/bodetabek/428811/clash-of-legends-jakarta-duel-real-madrid-vs-barcelona-digelar-di-gbk-april-2026"
  },
  {
    id: 9,
    title: "Rayakan 500 tahun Jakarta, El Clasico Legends siap gegerkan GBK",
    source: "Akurat",
    date: "2026-01-13",
    url: "https://jakarta.akurat.co/kebon-sirih/1317061226/rayakan-500-tahun-jakarta-el-clasico-legends-real-madrid-vs-barcelona-siap-gegerkan-stadion-gbk"
  },
  {
    id: 10,
    title: "Pramono gelar laga Real Madrid vs Barcelona Legends",
    source: "Media Indonesia",
    date: "2026-01-13",
    url: "https://mediaindonesia.com/megapolitan/849289/rayakan-500-tahun-jakarta-pramono-gelar-laga-real-madrid-vs-barcelona-legends"
  },
  {
    id: 11,
    title: "Rivalitas legendaris Madrid-Barca siap guncang GBK",
    source: "RRI",
    date: "2026-01-12",
    url: "https://rri.co.id/sepak-bola/2101304/rivalitas-legendaris-madrid-barca-siap-guncang-jakarta-gbk"
  },
  {
    id: 12,
    title: "Patrick Kluivert kembali ke Indonesia, bela tim legenda Barcelona",
    source: "Republika",
    date: "2026-01-12",
    url: "https://news.republika.co.id/berita/t8r40f348/patrick-kluivert-akan-kembali-ke-indonesia-bakal-tanding-di-sugbk-bela-tim-legenda-barcelona"
  },
  {
    id: 13,
    title: "El Clasico di Jakarta: Real Madrid Legends vs Barca Legends",
    source: "Jawapos",
    date: "2026-01-12",
    url: "https://www.jawapos.com/jabodetabek/017060752/el-clasico-di-jakarta-real-madrid-legends-vs-barca-legends-siap-duel-di-gbk-april-2026"
  },
  {
    id: 14,
    title: "Pramono dukung gelaran Clash of Legends Madrid vs Barca 2026",
    source: "IDN Times",
    date: "2026-01-12",
    url: "https://www.idntimes.com/sport/soccer/pramono-dukung-gelaran-clash-of-legends-madrid-vs-barca-2026-di-gbk-00-481xk-vf3m5h"
  },
  {
    id: 15,
    title: "Real Madrid Legends vs Barca Legends di GBK Jakarta 2026",
    source: "Elshinta",
    date: "2026-01-12",
    url: "https://elshinta.com/kategori/10/aktual-sepakbola/real-madrid-legends-vs-barca-legends-gbk-jakarta-2026-149083"
  },
  {
    id: 16,
    title: "Real Madrid Legends vs Barca Legends berlaga di GBK",
    source: "VOI",
    date: "2026-01-12",
    url: "https://voi.id/amp/550684/real-madrid-legends-vs-barca-legends-berlaga-di-gbk-pramono-daya-tarik-jakarta"
  },
  {
    id: 17,
    title: "Spesial kado HUT Jakarta ke-500, legenda El Clasico bakal tanding di ibu kota",
    source: "Poskota",
    date: "2026-01-12",
    url: "https://www.poskota.co.id/2026/01/12/spesial-kado-hut-jakarta-ke-500-pramono-anung-sebut-legenda-el-clasico-bakal-tanding-di-ibu-kota"
  },
  {
    id: 18,
    title: "Real Madrid Legends vs Barca Legends akan berlaga di GBK pada 18 April",
    source: "ANTARA",
    date: "2026-01-12",
    url: "https://www.antaranews.com/berita/5347629/real-madrid-legends-vs-barca-legends-akan-berlaga-di-gbk-pada-18-april"
  },
  {
    id: 19,
    title: "Real Madrid Legends vs Barcelona Legends digelar di SUGBK",
    source: "Okezone",
    date: "2026-01-12",
    url: "https://bola.okezone.com/read/2026/01/12/51/3194996/resmi-real-madrid-legends-vs-barcelona-legends-digelar-di-sugbk-sambut-500-tahun-jakarta"
  },
  {
    id: 20,
    title: "Real Madrid vs Barca Legends siap menggetarkan GBK",
    source: "Wartakota",
    date: "2026-01-12",
    url: "https://wartakota.tribunnews.com/jakarta/879210/real-madrid-legends-vs-barca-legends-siap-menggetarkan-gbk-di-momentum-hut-jakarta"
  },
  {
    id: 21,
    title: "Rayakan 5 abad Jakarta, Real Madrid vs Barcelona Legends siap getarkan GBK",
    source: "Disway",
    date: "2026-01-12",
    url: "https://disway.id/read/922843/rayakan-5-abad-jakarta-real-madrid-vs-barcelona-legends-siap-getarkan-gbk"
  },
  {
    id: 22,
    title: "Rayakan 500 tahun Jakarta, duel panas Real Madrid vs Barca Legends siap guncang GBK",
    source: "NTVNews",
    date: "2026-01-12",
    url: "https://www.ntvnews.id/news/0184043/rayakan-500-tahun-jakarta-duel-panas-real-madrid-legends-vs-barca-legends-siap-guncang-gbk"
  },
  {
    id: 23,
    title: "Jakarta tuan rumah Clash of Legends 2026 Real Madrid vs Barca",
    source: "Rakyat Merdeka",
    date: "2026-01-12",
    url: "https://www.google.com/amp/s/rm.id/amp/baca-berita/megapolitan/296874/seru-nih-jakarta-jadi-tuan-rumah-clash-of-legends-2026-real-madrid-vs-barca"
  },
  {
    id: 24,
    title: "GBK jadi saksi duel Real Madrid vs Barca Legends pada April 2026",
    source: "Berita Nasional",
    date: "2026-01-12",
    url: "https://beritanasional.com/detail/126550/gbk-bakal-jadi-saksi-duel-real-madrid-vs-barca-legends-pada-april-2026"
  },
  {
    id: 25,
    title: "El Clasico legenda bakal hadir di GBK",
    source: "Suara",
    date: "2026-01-12",
    url: "https://www.suara.com/news/2026/01/12/224655/el-clasico-legenda-bakal-hadir-di-gbk-pramono-anung-persembahan-spesial-500-tahun-jakarta"
  },
  {
    id: 26,
    title: "Real Madrid Legends vs Barca Legends siap getarkan GBK",
    source: "Sonora",
    date: "2026-01-12",
    url: "https://www.sonora.co.id/news/45512/sambut-500-tahun-jakarta-real-madrid-legends-vs-barca-legends-siap-getarkan-gbk"
  },
  {
    id: 27,
    title: "Pramono: Clash of Legends jadi kado spesial HUT ke-500 Jakarta",
    source: "Liputan6",
    date: "2026-01-12",
    url: "https://www.liputan6.com/news/read/6256191/pramono-clash-of-legends-jadi-kado-spesial-hut-ke-500-jakarta"
  },
  {
    id: 28,
    title: "Rayakan 500 tahun Jakarta, Real Madrid vs Barca Legends digelar di GBK",
    source: "JPNN",
    date: "2026-01-12",
    url: "https://www.jpnn.com/news/rayakan-500-tahun-jakarta-real-madrid-vs-barca-legends-digelar-di-gbk"
  },
  {
    id: 29,
    title: "20 legenda Madrid dan Barcelona hadir di El Clasico Jakarta",
    source: "CNN Indonesia",
    date: "2026-01-12",
    url: "https://www.cnnindonesia.com/olahraga/20260112195516-142-1316299/20-legenda-madrid-dan-barcelona-hadir-di-el-clasico-jakarta"
  },
  {
    id: 30,
    title: "Real Madrid vs Barcelona Legends getarkan GBK sambut 500 tahun Jakarta",
    source: "Bolaskor",
    date: "2026-01-12",
    url: "https://bolaskor.merahputih.com/post/read/real-madrid-vs-barcelona-legends-akan-getarkan-gbk-sambut-500-tahun-jakarta"
  },
  {
    id: 31,
    title: "El Clasico Clash of Legends Jakarta digelar di SUGBK 18 April",
    source: "Detik",
    date: "2026-01-12",
    url: "https://sport.detik.com/sepakbola/liga-indonesia/d-8305280/el-clasico-clash-of-legends-jakarta-digelar-di-sugbk-18-april"
  },
  {
    id: 32,
    title: "Dukungan Gubernur DKI mengalir, Jakarta siap gelar Real Madrid Legends vs Barca Legends",
    source: "Hops.id",
    date: "2026-01-12",
    url: "https://www.hops.id/nasional/29416553820/dukungan-gubernur-dki-mengalir-jakarta-siap-gelar-real-madrid-legends-vs-barca-legends"
  },
  {
    id: 33,
    title: "Rayakan 500 tahun Jakarta, rivalitas Real Madrid vs Barca siap digelar di SUGBK",
    source: "Skor.id",
    date: "2026-01-12",
    url: "https://skor.id/posts/738244/rayakan-500-tahun-jakarta-rivalitas-real-madrid-vs-barca-siap-digelar-di-sugbk"
  },
  {
    id: 34,
    title: "Jakarta bersiap sambut duel abadi Real Madrid vs Barcelona",
    source: "iNews.id",
    date: "2026-01-12",
    url: "https://www.inews.id/amp/sport/soccer/jakarta-bersiap-sambut-duel-abadi-real-madrid-vs-barcelona"
  },
  {
    id: 35,
    title: "Duel Real Madrid vs Barcelona Legends di GBK, Pemprov Jakarta siapkan fasilitas istimewa",
    source: "TVOne News",
    date: "2026-01-12",
    url: "https://www.tvonenews.com/berita/nasional/406529-duel-real-madrid-vs-barcelona-legends-di-gbk-pemprov-jakarta-siapkan-fasilitas-istimewa"
  }
];

const customImages: Record<string, string> = {
  "https://tirto.id/link-beli-tiket-clash-of-legends-barca-vs-madrid-daftar-harga-hpdi":
    "/images/clash-of-legends-madrid-vs-barca_ratio-16x9.webp",
  "https://www.edisi.co.id/berita/amp/9716556881/gubernur-pramono-dukung-penuh-clash-of-legends-2026-real-madrid-vs-barcelona-hadir-di-gbk":
    "/images/clas-1579024584.webp"
};

export const articles: Article[] = rawArticles.map((article) => ({
  ...article,
  image: customImages[article.url] ?? buildImageUrl(article.url)
}));
