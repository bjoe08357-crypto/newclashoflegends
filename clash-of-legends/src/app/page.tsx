import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TicketsSection from "@/components/TicketsSection";
import MatchInfoSection from "@/components/MatchInfoSection";
import LegendaryPlayersSection from "@/components/LegendaryPlayersSection";
import ArticlesSection from "@/components/ArticlesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Header />
      <main>
        <HeroSection />
        <TicketsSection />
        <MatchInfoSection />
        <LegendaryPlayersSection />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
}