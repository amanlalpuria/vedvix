import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Handshake,
  Building2,
} from "lucide-react"
import { collaborations } from "./data"

export function PartnerSection() {

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#E5E5E5]/30 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-[#3533CD]/10 border border-[#3533CD]/20 rounded-full px-6 py-2 mb-6">
              <Handshake className="h-4 w-4 text-[#3533CD] mr-2" />
              <span className="text-sm font-medium text-[#3533CD]">Our Network</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E2E2E] mb-6">
              Trusted <span className="text-[#3533CD]">Partners</span>
            </h2>
            <p className="text-xl text-[#2E2E2E]/70 max-w-3xl mx-auto">
              We collaborate with industry leaders to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collaborations.map((company, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-[#3533CD] bg-white/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={`${company.name} logo`}
                      className="w-24 h-16 object-contain mx-auto group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#2E2E2E] mb-2 group-hover:text-[#3533CD] transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-[#2E2E2E]/70 mb-4 text-sm leading-relaxed">{company.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-[#2E2E2E]/70">Partnership:</span>
                      <span className="font-medium text-[#3533CD]">{company.partnership}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#2E2E2E]/70">Duration:</span>
                      <span className="font-medium">{company.duration}</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#E5E5E5]">
                    <div className="flex items-center justify-center text-[#3533CD]">
                      <Building2 className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">Active Partnership</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-lg text-[#2E2E2E]/70 mb-6">Interested in partnering with us?</p>
            <Button size="lg" className="bg-[#3533CD] hover:bg-[#3533CD]/90 text-white rounded-full px-8 py-3">
              Become a Partner
              <Handshake className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    )
}