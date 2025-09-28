import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SponsorsSection from "@/components/SponsorsSection";
import TicketsSection from "@/components/TicketsSection";
import MatchInfoSection from "@/components/MatchInfoSection";
import LegendaryPlayersSection from "@/components/LegendaryPlayersSection";
import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <Header />
      <main>
        <HeroSection />
        <SponsorsSection />
        <TicketsSection />
        <MatchInfoSection />
        <LegendaryPlayersSection />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
}