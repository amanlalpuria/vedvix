// hero-section.tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Rocket, Play, ChevronDown } from "lucide-react"

interface HeroSectionProps {
  isVisible: boolean
  contactForm: { name: string; email: string; message: string }
  setContactForm: React.Dispatch<React.SetStateAction<{ name: string; email: string; message: string }>>
  handleContactSubmit: (e: React.FormEvent) => void
}

export function HeroSection({
  isVisible,
  contactForm,
  setContactForm,
  handleContactSubmit,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#E5E5E5] via-background to-[#E5E5E5]/50"></div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#962DE8]/20 to-[#3533CD]/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#FFDE59]/20 to-[#FF914D]/20 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-[#3533CD]/15 to-[#962DE8]/15 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto text-center relative z-10 pt-20">
        <div className={`transition-all duration-1500 ${isVisible ? "animate-slide-in-up" : "opacity-0"}`}>
          <div className="inline-flex items-center bg-gradient-to-r from-[#962DE8]/10 to-[#3533CD]/10 border border-[#962DE8]/20 rounded-full px-6 py-2 mb-8 animate-bounce-subtle">
            <Sparkles className="h-4 w-4 text-[#962DE8] mr-2" />
            <span className="text-sm font-medium text-[#962DE8]">Transforming Ideas into Digital Reality</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-8xl font-black text-[#2E2E2E] mb-8 leading-tight">
            <span className="block">We Don't Just</span>
            <span className="block bg-gradient-to-r from-[#962DE8] via-[#3533CD] to-[#FF914D] bg-clip-text text-transparent animate-gradient-x">
              Build Application
            </span>
            <span className="block text-4xl md:text-6xl font-light text-[#2E2E2E]/70 mt-4">
              We Craft Digital Experiences
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[#2E2E2E]/70 mb-12 max-w-4xl mx-auto leading-relaxed">
            Vedvix pushes the boundaries of what's possible in digital innovation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#FFDE59] to-[#FF914D] hover:from-[#FFDE59]/90 hover:to-[#FF914D]/90 text-[#2E2E2E] rounded-full px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-[#FF914D]/25 transition-all duration-300 hover:scale-105 group"
                >
                  Start Your Journey
                  <Rocket className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg bg-white/95 backdrop-blur-xl border border-[#E5E5E5]/50 shadow-2xl rounded-2xl">
                <DialogHeader className="text-center pb-6">
                  <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#962DE8] to-[#3533CD] bg-clip-text text-transparent">
                    Join Our Client Family
                  </DialogTitle>
                  <p className="text-[#2E2E2E]/70 mt-2">Begin your digital transformation journey</p>
                </DialogHeader>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      required
                    />
                    <Textarea
                      placeholder="Tell us about your vision..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full h-12 bg-gradient-to-r from-[#FFDE59] to-[#FF914D]">
                    Join Our Family
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            {/* <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#3533CD]/50 text-[#3533CD] hover:bg-[#3533CD] hover:text-white rounded-full px-8 py-4"
            >
              <Play className="mr-3 h-5 w-5" />
              Watch Our Story
            </Button> */}
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce mt-16">
            <ChevronDown className="h-8 w-8 text-[#2E2E2E]/60 mx-auto" />
            <p className="text-sm text-[#2E2E2E]/60 mt-2">Scroll to explore</p>
          </div>
        </div>
      </div>
    </section>
  )
}