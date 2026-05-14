import { Navbar, Hero } from "./components/Hero";
import { 
  Marquee, 
  Services, 
  Portfolio, 
  About,
  USP, 
  Process, 
  Testimonials, 
  CTABanner, 
  Footer 
} from "./components/Sections";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-accent-brand selection:text-white">
      {/* Global Overlays */}
      <div className="noise-overlay" />
      <CustomCursor />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <About />
        <USP />
        <Process />
        <Testimonials />
        <CTABanner />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
