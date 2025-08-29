// navigation-section.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Sparkles } from "lucide-react"

interface NavigationSectionProps {
  scrollToBlog: () => void
  scrollToContact: () => void
  contactForm: { name: string; email: string; message: string }
  setContactForm: React.Dispatch<React.SetStateAction<{ name: string; email: string; message: string }>>
  handleContactSubmit: (e: React.FormEvent) => void
}

export function NavigationSection({
  scrollToBlog,
  scrollToContact,
  contactForm,
  setContactForm,
  handleContactSubmit,
}: NavigationSectionProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#962DE8] to-[#3533CD] rounded-xl flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-[#962DE8] via-[#3533CD] to-[#FF914D] bg-clip-text text-transparent">
              Vedvix
            </div>
          </div>

          {/* Links */}
          {/* <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[#2E2E2E] hover:text-[#962DE8] transition-colors">
              Services
            </a>
            <Link href="/portfolio" className="text-[#2E2E2E] hover:text-[#962DE8] transition-colors">
              Portfolio
            </Link>
            <button onClick={scrollToBlog} className="text-[#2E2E2E] hover:text-[#962DE8] transition-colors">
              Blog
            </button>
            <button onClick={scrollToContact} className="text-[#2E2E2E] hover:text-[#962DE8] transition-colors">
              Contact
            </button>
          </div> */}

          {/* Contact Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-[#FFDE59] to-[#FF914D] hover:from-[#FFDE59]/90 hover:to-[#FF914D]/90 text-[#2E2E2E] rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Start Your Project
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg bg-white/95 backdrop-blur-xl border border-[#E5E5E5]/50 shadow-2xl rounded-2xl">
              <DialogHeader className="text-center pb-6">
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#962DE8] to-[#3533CD] bg-clip-text text-transparent">
                  Start Your Project
                </DialogTitle>
                <p className="text-[#2E2E2E]/70 mt-2">Let's bring your vision to life</p>
              </DialogHeader>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="h-12 border-[#E5E5E5] focus:border-[#962DE8] rounded-xl"
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="h-12 border-[#E5E5E5] focus:border-[#962DE8] rounded-xl"
                    required
                  />
                  <Textarea
                    placeholder="Tell us about your project..."
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="min-h-[120px] border-[#E5E5E5] focus:border-[#962DE8] rounded-xl resize-none"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-[#FFDE59] to-[#FF914D] hover:from-[#FFDE59]/90 hover:to-[#FF914D]/90 text-[#2E2E2E] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  Send Message
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  )
}