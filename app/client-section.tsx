import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Users,
} from "lucide-react"
import { clients } from "./data"

export function ClientSection() {

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#E5E5E5]/20 via-white to-[#E5E5E5]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-[#FF914D]/10 border border-[#FF914D]/20 rounded-full px-6 py-2 mb-6">
              <Users className="h-4 w-4 text-[#FF914D] mr-2" />
              <span className="text-sm font-medium text-[#FF914D]">Our Clients</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#2E2E2E] mb-6">
              Trusted by <span className="text-[#FF914D]">Industry Leaders</span>
            </h2>
            <p className="text-xl text-[#2E2E2E]/70 max-w-3xl mx-auto">
              From startups to Fortune 500 companies, we've helped businesses transform their digital presence
            </p>
          </div>

          <div className="relative">
            <div className="flex animate-scroll-horizontal space-x-12 w-max">
              {/* First set of clients */}
              {clients.map((client, index) => (
                <a
                    key={index}
                    href={client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 group hover:scale-105 transition-all duration-300"
                >
                    <Card className="w-64 h-40 border-2 border-[#E5E5E5] hover:border-[#FF914D] bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                        <img
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        className="w-24 h-12 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                        />
                        <h3 className="text-lg font-bold text-[#2E2E2E] mb-1 group-hover:text-[#FF914D] transition-colors">
                        {client.name}
                        </h3>
                        <p className="text-sm text-[#2E2E2E]/70">{client.industry}</p>
                    </CardContent>
                    </Card>
                </a>
                ))}
              {/* Duplicate set for seamless loop */}
              {clients.map((client, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 group hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <Card className="w-64 h-40 border-2 border-[#E5E5E5] hover:border-[#FF914D] bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <img
                        src={client.logo || "/placeholder.svg"}
                        alt={`${client.name} logo`}
                        className="w-24 h-12 object-contain mb-3 group-hover:scale-110 transition-transform duration-300"
                      />
                      <h3 className="text-lg font-bold text-[#2E2E2E] mb-1 group-hover:text-[#FF914D] transition-colors">
                        {client.name}
                      </h3>
                      <p className="text-sm text-[#2E2E2E]/70">{client.industry}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none"></div>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FFDE59] to-[#FF914D] hover:from-[#FFDE59]/90 hover:to-[#FF914D]/90 text-[#2E2E2E] rounded-full px-8 py-3"
            >
              Join Our Client Family
              <Heart className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
  )
}