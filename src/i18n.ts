"use client";

export type SupportedLanguage = "en" | "id";

type Dictionary = Record<string, string>;

const en: Dictionary = {
  "nav.home": "Home",
  "nav.tickets": "Tickets",
  "nav.articles": "Articles",
  "nav.partners": "Partners",

  "header.getTickets": "Get Your Tickets",

  "tickets.grabYour": "GRAB YOUR",
  "tickets.tickets": "TICKETS",
  "tickets.seatingMap": "Seating Map",
  "tickets.ourTickets": "Our Tickets",
  "tickets.excludeTax": "*exclude tax",
  "tickets.terms": "Terms & Conditions",

  "match.title": "CLASH OF LEGENDS",
  "match.matchInfo": "Match Info",
  "match.dateTime": "Date & Time",
  "match.dontMiss": "Don't miss your chance to witness football history live!",
  "match.secureCta": "Secure Your Legendary Experience",
  "match.venue": "Venue",
  "match.venueDesc": "Indonesia's largest stadium, seating 77,000 fans, and home to unforgettable moments. From the Asian Games to world-class concerts, it now sets the stage for the ultimate football legends clash.",
  "match.highlights": "Event Highlights",
  "match.moreSoon": "More legends to be revealed soon!",
  "match.ultimateTitle": "🔥 The Ultimate Rivalry Returns",
  "match.ultimateDesc": "The ultimate rivalry returns to Jakarta! Real Madrid Legends take on Barca Legends in front of 77,000 fans at Indonesia's biggest stadium!",
  "match.confirmed": "Confirmed Legendary Stars",
  "match.startsIn": "Match starts in",
  "match.historicBadge": "10th Historic Meeting",
  "match.dateLine": "📅 Saturday, 18 April 2026 — 4:00 PM",
  "countdown.days": "DAYS",
  "countdown.hours": "HOURS",
  "countdown.minutes": "MIN",
  "countdown.seconds": "SEC",

  "articles.latest": "LATEST ARTICLES",
  "articles.stayUpdated": "Stay updated with the latest news and insights",
  "articles.viewAll": "View All Articles",
  "articles.readMore": "Read More",

  "footer.quickLinks": "Quick Links",
  "footer.followUs": "Follow Us",
  "footer.dontMissOut": "Don't Miss Out",
  "footer.buyTicketsNow": "Buy Tickets Now",
  "footer.email": "Email",
  "footer.phone": "Phone",

  "sponsors.organizedBy": "Organized by",
  "sponsors.sponsoredBy": "Sponsored by",
  "sponsors.communityPartner": "Community Partner",
  "sponsors.supportingPartner": "Supporting Partner",
  "sponsors.ticketingPartner": "Ticketing Partner",
};

const id: Dictionary = {
  "nav.home": "Beranda",
  "nav.tickets": "Tiket",
  "nav.articles": "Artikel",
  "nav.partners": "Mitra",

  "header.getTickets": "Beli Tiket",

  "tickets.grabYour": "DAPATKAN",
  "tickets.tickets": "TIKETMU",
  "tickets.seatingMap": "Denah Kursi",
  "tickets.ourTickets": "Paket Tiket",
  "tickets.excludeTax": "*belum termasuk pajak",
  "tickets.terms": "Syarat & Ketentuan",

  "match.title": "CLASH OF LEGENDS",
  "match.matchInfo": "Info Pertandingan",
  "match.dateTime": "Tanggal & Waktu",
  "match.dontMiss": "Jangan lewatkan kesempatan menyaksikan sejarah sepak bola secara langsung!",
  "match.secureCta": "Amankan Pengalaman Legendaris Anda",
  "match.venue": "Lokasi",
  "match.venueDesc": "Stadion terbesar di Indonesia dengan kapasitas 77.000 penonton, saksi momen tak terlupakan. Dari Asian Games hingga konser kelas dunia, kini menjadi panggung untuk laga para legenda sepak bola.",
  "match.highlights": "Sorotan Acara",
  "match.moreSoon": "Lebih banyak legenda akan diumumkan segera!",
  "match.ultimateTitle": "🔥 Rivalitas Terbesar Kembali",
  "match.ultimateDesc": "Rivalitas terbesar kembali ke Jakarta! Real Madrid Legends menghadapi Barca Legends di depan 77.000 penonton di stadion terbesar di Indonesia!",
  "match.confirmed": "Bintang Legendaris yang Terkonfirmasi",
  "match.startsIn": "Pertandingan dimulai dalam",
  "match.historicBadge": "Pertemuan Bersejarah ke-10",
  "match.dateLine": "📅 Sabtu, 18 April 2026 — 16.00",
  "countdown.days": "HARI",
  "countdown.hours": "JAM",
  "countdown.minutes": "MENIT",
  "countdown.seconds": "DETIK",

  "articles.latest": "ARTIKEL TERBARU",
  "articles.stayUpdated": "Tetap terupdate dengan berita dan wawasan terbaru",
  "articles.viewAll": "Lihat Semua Artikel",
  "articles.readMore": "Baca Selengkapnya",

  "footer.quickLinks": "Tautan Cepat",
  "footer.followUs": "Ikuti Kami",
  "footer.dontMissOut": "Jangan Ketinggalan",
  "footer.buyTicketsNow": "Beli Tiket Sekarang",
  "footer.email": "Email",
  "footer.phone": "Telepon",

  "sponsors.organizedBy": "Diselenggarakan oleh",
  "sponsors.sponsoredBy": "Disponsori oleh",
  "sponsors.communityPartner": "Mitra Komunitas",
  "sponsors.supportingPartner": "Mitra Pendukung",
  "sponsors.ticketingPartner": "Mitra Tiketing",
};

export const dictionaries: Record<SupportedLanguage, Dictionary> = { en, id };

export function getTranslation(lang: SupportedLanguage, key: string): string {
  const dict = dictionaries[lang] ?? dictionaries.en;
  return dict[key] ?? key;
}


