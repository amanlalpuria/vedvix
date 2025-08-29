import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Calendar,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react"

interface ContactSectionProps {
  contactForm: { name: string; email: string; message: string }
  setContactForm: React.Dispatch<React.SetStateAction<{ name: string; email: string; message: string }>>
  handleContactSubmit: (e: React.FormEvent) => void

  scheduleForm: { name: string; email: string; phone: string; service: string; date: string}
  setScheduleForm: React.Dispatch<
    React.SetStateAction<{ name: string; email: string; phone: string; service: string; date: string }>
  >
  handleScheduleSubmit: (e: React.FormEvent) => void
}

export function ContactSection({
  contactForm,
  setContactForm,
  handleContactSubmit,
  scheduleForm,
  setScheduleForm,
  handleScheduleSubmit,
}: ContactSectionProps) {
  return (<section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#962DE8]/5 to-[#3533CD]/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#2E2E2E] mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-[#962DE8] to-[#FF914D] bg-clip-text text-transparent">
                Transform
              </span>{" "}
              Your Business?
            </h2>
            <p className="text-xl text-[#2E2E2E]/70 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your digital goals and create something extraordinary together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#962DE8]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-[#962DE8]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Email Us</h3>
                  <p className="text-[#2E2E2E]/70">hello@vedvix.in</p>
                  {/* <p className="text-[#2E2E2E]/70">support@vedvix.com</p> */}
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#3533CD]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-[#3533CD]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Call Us</h3>
                  <p className="text-[#2E2E2E]/70">+91 9460688385</p>
                  <p className="text-[#2E2E2E]/70">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FF914D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-[#FF914D]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-2">Visit Us</h3>
                  <p className="text-[#2E2E2E]/70">2ndFloor Plot 24E Shyam Vihar</p>
                  <p className="text-[#2E2E2E]/70">Charan Nadi, Nadi Ka Phatak, Jaipur</p>
                </div>
              </div>

              <div className="pt-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-[#3533CD] hover:bg-[#3533CD]/90 text-white rounded-full px-8 py-3">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule a Call
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg bg-white/95 backdrop-blur-xl border border-[#E5E5E5]/50 shadow-2xl rounded-2xl">
                    <DialogHeader className="text-center pb-6">
                      <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#962DE8] to-[#3533CD] bg-clip-text text-transparent">
                        Schedule Your Consultation
                      </DialogTitle>
                      <p className="text-[#2E2E2E]/70 mt-2">Book a free consultation call with our experts</p>
                    </DialogHeader>
                    <form onSubmit={handleScheduleSubmit} className="space-y-6">
                      <div className="space-y-4">
                        <Input
                          placeholder="Your Name"
                          value={scheduleForm.name}
                          onChange={(e) => setScheduleForm({ ...scheduleForm, name: e.target.value })}
                          className="h-12 border-[#E5E5E5] focus:border-[#962DE8] rounded-xl"
                          required
                        />
                        <Input
                          type="email"
                          placeholder="Your Email"
                          value={scheduleForm.email}
                          onChange={(e) => setScheduleForm({ ...scheduleForm, email: e.target.value })}
                          className="h-12 border-[#E5E5E5] focus:border-[#962DE8] rounded-xl"
                          required
                        />
                        <Input
                          type="tel"
                          placeholder="Phone Number"
                          value={scheduleForm.phone}
                          onChange={(e) => setScheduleForm({ ...scheduleForm, phone: e.target.value })}
                          className="h-12 border-[#E5E5E5] focus:border-[#962DE8] rounded-xl"
                          required
                        />
                        <select
                          className="w-full h-12 p-3 border border-[#E5E5E5] focus:border-[#962DE8] rounded-xl bg-white text-[#2E2E2E]"
                          value={scheduleForm.service}
                          onChange={(e) => setScheduleForm({ ...scheduleForm, service: e.target.value })}
                          required
                        >
                          <option value="">Select Service</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-development">Mobile Development</option>
                          <option value="automation">Automation & AI</option>
                          <option value="ui-ux-design">Graphics Design</option>
                        </select>
                        <Input
                          type="date"
                          value={scheduleForm.date}
                          onChange={(e) => setScheduleForm({ ...scheduleForm, date: e.target.value })}
                          className="h-12 border-[#E5E5E5] focus:border-[#962DE8] rounded-xl"
                          required
                        />
                        {/* <select
                          className="w-full h-12 p-3 border border-[#E5E5E5] focus:border-[#962DE8] rounded-xl bg-white text-[#2E2E2E]"
                          // value={scheduleForm.time}
                          onChange={(e) => setScheduleForm({ ...scheduleForm, time: e.target.value })}
                          required
                        >
                          <option value="">Select Time</option>
                          <option value="09:00">9:00 AM</option>
                          <option value="10:00">10:00 AM</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="15:00">3:00 PM</option>
                          <option value="16:00">4:00 PM</option>
                        </select> */}
                      </div>
                      <Button
                        type="submit"
                        className="w-full h-12 bg-[#3533CD] hover:bg-[#3533CD]/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                      >
                        Schedule Call
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            <Card className="p-8 bg-white/80 backdrop-blur-sm border-2 border-[#E5E5E5] hover:border-[#962DE8]/30 transition-all duration-300">
              <h3 className="text-2xl font-bold text-[#2E2E2E] mb-6">Send us a message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    value={contactForm.name.split(" ")[0] || ""}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                  />
                  <Input
                    placeholder="Last Name"
                    value={contactForm.name.split(" ")[1] || ""}
                    onChange={(e) =>
                      setContactForm({ ...contactForm, name: contactForm.name.split(" ")[0] + " " + e.target.value })
                    }
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  required
                />
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={5}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#FFDE59] to-[#FF914D] hover:from-[#FFDE59]/90 hover:to-[#FF914D]/90 text-[#2E2E2E] font-semibold"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
      )}