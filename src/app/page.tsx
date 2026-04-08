import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SponsorsSection from "@/components/SponsorsSection";
import TicketsSection from "@/components/TicketsSection";
import MatchInfoSection from "@/components/MatchInfoSection";
import LegendaryPlayersSection from "@/components/LegendaryPlayersSection";
import ArticlesSection from "@/components/ArticlesSection";
import EventsSection from "@/components/EventsSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] relative">
      <Header />
      <main>
        <HeroSection />
        <SponsorsSection />
        <div className="section-divider" />
        <TicketsSection />
        <div className="section-divider" />
        <MatchInfoSection />
        <div className="section-divider" />
        <LegendaryPlayersSection />
        <div className="section-divider" />
        <ArticlesSection />
        <div className="section-divider" />
        <EventsSection />
        <div className="section-divider" />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
}
