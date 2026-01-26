"use client";

import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

type EventItem = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
};

const events: EventItem[] = [
  {
    id: 1,
    title: "Press Conference Clash of Legends",
    date: "2026-01-12",
    time: "10:00 WIB",
    location: "Balai Kota Jakarta",
    description: "Konferensi pers resmi dan pengumuman gelaran Clash of Legends Jakarta."
  },
  {
    id: 2,
    title: "Ticket Sales Open",
    date: "2026-01-14",
    time: "12:00 WIB",
    location: "Megatix (Online)",
    description: "Penjualan tiket resmi dibuka untuk publik."
  },
  {
    id: 3,
    title: "Clash of Legends Jakarta",
    date: "2026-04-18",
    time: "16:00 WIB",
    location: "Gelora Bung Karno Stadium, Jakarta",
    description: "Real Madrid Legends vs Barca Legends."
  }
];

const EventsSection = () => {
  const { lang } = useLanguage();

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", {
        day: "2-digit",
        month: "long",
        year: "numeric"
      }),
    [lang]
  );

  const today = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return now;
  }, []);

  const { upcoming, past } = useMemo(() => {
    const upcomingEvents: EventItem[] = [];
    const pastEvents: EventItem[] = [];
    events.forEach((event) => {
      const eventDate = new Date(`${event.date}T00:00:00+07:00`);
      if (eventDate >= today) {
        upcomingEvents.push(event);
      } else {
        pastEvents.push(event);
      }
    });
    upcomingEvents.sort((a, b) => a.date.localeCompare(b.date));
    pastEvents.sort((a, b) => b.date.localeCompare(a.date));
    return { upcoming: upcomingEvents, past: pastEvents };
  }, [today]);

  return (
    <section id="calendar" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {lang === "id" ? "KALENDER EVENT" : "EVENT CALENDAR"}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            {lang === "id"
              ? "Tambahkan event baru, lihat agenda mendatang, dan arsip acara sebelumnya."
              : "Add new events, track upcoming schedules, and revisit past moments."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900/40 to-slate-900/40 border border-white/10 rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                {lang === "id" ? "Event Mendatang" : "Upcoming Events"}
              </h3>
            </div>
            <div className="space-y-4">
              {upcoming.map((event) => (
                <div key={event.id} className="bg-slate-950/60 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-yellow-400 text-sm font-semibold">
                      {formatter.format(new Date(`${event.date}T00:00:00+07:00`))}
                    </span>
                    <span className="text-white/60 text-sm">{event.time}</span>
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">{event.title}</h4>
                  <p className="text-white/70 text-sm mb-2">{event.description}</p>
                  <p className="text-white/60 text-sm">📍 {event.location}</p>
                </div>
              ))}
              {upcoming.length === 0 && (
                <div className="text-white/60 text-sm">
                  {lang === "id" ? "Belum ada event mendatang." : "No upcoming events yet."}
                </div>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-white">
                {lang === "id" ? "Event Sebelumnya" : "Previous Events"}
              </h3>
            </div>
            <div className="space-y-4">
              {past.map((event) => (
                <div key={event.id} className="bg-slate-950/60 border border-white/10 rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-yellow-400 text-sm font-semibold">
                      {formatter.format(new Date(`${event.date}T00:00:00+07:00`))}
                    </span>
                    <span className="text-white/60 text-sm">{event.time}</span>
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-2">{event.title}</h4>
                  <p className="text-white/70 text-sm mb-2">{event.description}</p>
                  <p className="text-white/60 text-sm">📍 {event.location}</p>
                </div>
              ))}
              {past.length === 0 && (
                <div className="text-white/60 text-sm">
                  {lang === "id" ? "Belum ada event sebelumnya." : "No previous events yet."}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
