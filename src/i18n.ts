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


