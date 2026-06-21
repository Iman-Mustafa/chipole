import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import QuickInfoCards from "./components/QuickInfoCards";
import AboutSection from "./components/AboutSection";
import DepartmentsGrid from "./components/DepartmentsGrid";
import ExpertDoctors from "./components/ExpertDoctors";
import EmergencyBanner from "./components/EmergencyBanner";
import ServicesDetail from "./components/ServicesDetail";
import TestimonialSection from "./components/TestimonialSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white">
      {/* Header Area */}
      <header className="w-full relative z-50">
        <TopBar />
        <Navbar />
      </header>

      {/* Main Content Area */}
      <main>
        <HeroSection />
        <QuickInfoCards />
        <AboutSection />
        <DepartmentsGrid />
        <ExpertDoctors />
        <EmergencyBanner />
        <ServicesDetail />
        <TestimonialSection />
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}
