import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { Services } from "@/components/services"
import { Portfolio } from "@/components/portfolio"
import { Stats } from "@/components/stats"
import { Blog } from "@/components/blog"
import { Footer } from "@/components/footer"
import { FloatingElements } from "@/components/floating-elements"
import { About } from "@/components/about"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navigation />
      <FloatingElements />

      <div className="spiral-container">
        <div className="magnetic-zone zone-1">
          <Hero />
        </div>

        <div className="magnetic-zone zone-2 spiral-curve-right">
          <div className="hexagonal-frame">
            <Stats />
          </div>
        </div>

        <div className="magnetic-zone zone-3 spiral-curve-left">
          <div className="triangular-frame">
            <Services />
          </div>
        </div>

        <div className="magnetic-zone zone-4 spiral-curve-right">
          <div className="diamond-frame">
            <Portfolio />
          </div>
        </div>

        <div className="magnetic-zone zone-5 spiral-curve-left">
          <div className="hexagonal-frame">
            <About />
          </div>
        </div>

        <div className="magnetic-zone zone-6 spiral-end">
          <div className="circular-frame">
            <Blog />
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
