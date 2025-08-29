import { useRouter } from "next/navigation"
import { services } from "./data";
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Target,
} from "lucide-react"

export function ServiceSection() {

  const [activeService, setActiveService] = useState<number | null>(null)
  const router = useRouter()

  const handleLearnMore = (serviceCategory?: string) => {
    if (serviceCategory) {
      router.push(`/portfolio?category=${serviceCategory}`)
    } else {
      router.push("/portfolio")
    }
  }

  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E5E5E5]/30 via-background to-[#E5E5E5]/30 transform -skew-y-2 origin-top-left"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center bg-[#962DE8]/10 border border-[#962DE8]/20 rounded-full px-6 py-2 mb-6">
              <Target className="h-4 w-4 text-[#962DE8] mr-2" />
              <span className="text-sm font-medium text-[#962DE8]">Our Expertise</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E2E2E] mb-6">
              What We <span className="text-[#962DE8]">Master</span>
            </h2>
            <p className="text-xl text-[#2E2E2E]/70 max-w-3xl mx-auto">
              Every project is a masterpiece. Every solution is tailored. Every client becomes family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl transition-all duration-700 cursor-pointer transform hover:-translate-y-4 hover:rotate-1 border-2 hover:border-[#962DE8] ${
                    activeService === index
                      ? "border-[#962DE8] shadow-2xl shadow-[#962DE8]/20 -translate-y-2"
                      : "border-[#E5E5E5]"
                  } bg-gradient-to-br from-white to-[#E5E5E5]/20 animate-slide-in-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseLeave={() => {
                    setTimeout(() => setActiveService(null), 300)
                  }}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <CardContent className="p-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#962DE8]/10 to-[#3533CD]/10 rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-[#FFDE59]/10 to-[#FF914D]/10 rounded-full blur-xl transform -translate-x-12 translate-y-12 group-hover:scale-125 transition-transform duration-700"></div>

                    <div
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 ${
                        activeService === index
                          ? "bg-[#962DE8] text-white shadow-lg shadow-[#962DE8]/30"
                          : "bg-white border-2 border-[#E5E5E5] text-[#962DE8]"
                      }`}
                    >
                      <Icon className="h-10 w-10" />
                    </div>

                    <h3 className="text-xl font-bold text-[#2E2E2E] mb-4 group-hover:text-[#962DE8] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#2E2E2E]/70 text-sm leading-relaxed mb-6">{service.description}</p>

                    <Button
                    variant="ghost"
                    className="text-[#962DE8] hover:text-white hover:bg-[#962DE8] rounded-full px-6 group-hover:translate-x-2 transition-all duration-300 w-full justify-center"
                    onClick={() => handleLearnMore(service.services)}
                  >
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
  )
}