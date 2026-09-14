import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import WhoIHelp from "@/components/WhoIHelp";
import StatementBanner from "@/components/StatementBanner";
import Expertise from "@/components/Expertise";
import Approach from "@/components/Approach";
import BannerPause from "@/components/BannerPause";
import Methods from "@/components/Methods";
import AboutMaya from "@/components/AboutMaya";
import OurOffice from "@/components/OurOffice";
import FAQ from "@/components/FAQ";
import AppointmentCTA from "@/components/AppointmentCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow">
        <Hero />
        <IntroSection />
        <WhoIHelp />
        <StatementBanner />
        <Expertise />
        <Approach />
        <BannerPause />
        <Methods />
        <AboutMaya />
        <OurOffice />
        <FAQ />
        <AppointmentCTA />
      </main>
      <Footer />
    </div>
  );
}
