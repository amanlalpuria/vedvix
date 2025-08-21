"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with cutting-edge technologies that drive results and captivate your audience.",
    icon: "💻",
    features: ["Next.js & React", "E-commerce Solutions", "Custom CMS", "Performance Optimization"],
    color: "from-primary to-secondary",
  },
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps that deliver exceptional user experiences and drive business growth.",
    icon: "📱",
    features: ["iOS & Android", "React Native", "App Store Optimization", "Push Notifications"],
    color: "from-secondary to-primary",
  },
  {
    title: "Digital Marketing",
    description:
      "Strategic digital marketing campaigns that boost your online presence and convert visitors into loyal customers.",
    icon: "📈",
    features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Analytics & Reporting"],
    color: "from-primary via-secondary to-primary",
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions that create intuitive, engaging experiences and drive conversions.",
    icon: "🎨",
    features: ["User Research", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
    color: "from-secondary via-primary to-secondary",
  },
  {
    title: "Brand Design",
    description:
      "Complete brand identity solutions including logos, banners, posters, and marketing materials that make you stand out.",
    icon: "🎯",
    features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "Print & Digital Assets"],
    color: "from-primary to-secondary",
  },
  {
    title: "Consultancy",
    description:
      "Strategic technology consulting to help you make informed decisions and accelerate your digital transformation.",
    icon: "🧠",
    features: ["Tech Strategy", "Digital Transformation", "Process Optimization", "Growth Planning"],
    color: "from-secondary to-primary",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 px-6 relative overflow-hidden">
      <div className="parallax-float top-10 left-10 w-20 h-20 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full blur-sm" />
      <div
        className="parallax-float top-40 right-20 w-16 h-16 bg-gradient-to-l from-secondary/40 to-primary/40 rounded-full blur-sm"
        style={{ animationDelay: "5s" }}
      />
      <div
        className="parallax-float bottom-20 left-1/4 w-12 h-12 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur-sm"
        style={{ animationDelay: "10s" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 magnetic-zone">
          <h2 className="text-5xl md:text-7xl font-bold text-3d mb-6">
            <span className="gradient-text text-holographic">REVOLUTIONARY</span>
            <br />
            <span className="text-neon">SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't follow trends. We create them. We don't meet expectations. We shatter them.
          </p>
        </div>

        <div className="hexagon-grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`hexagon-card magnetic-zone stagger-reveal ${
                index % 2 === 0 ? "md:translate-y-8" : "md:-translate-y-8"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="h-full p-8 revolutionary-card glassmorphism border-2 border-primary/20 relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5`} />

                <div className="relative z-10">
                  <div className="text-4xl mb-4 interactive-hover">{service.icon}</div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{service.description}</p>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={feature} className="flex items-center text-sm">
                        <div
                          className="w-3 h-3 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 animate-pulse"
                          style={{ animationDelay: `${featureIndex * 0.2}s` }}
                        />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="revolutionary-card bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary text-white border-0 asymmetric-layout"
                    onClick={() => {
                      const element = document.getElementById("portfolio")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                  >
                    Unleash Power
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
