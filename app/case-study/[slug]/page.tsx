"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, ExternalLink, Github } from "lucide-react"
import { useParams } from "next/navigation"

const caseStudies = {
  "e-commerce-revolution": {
    title: "E-Commerce Revolution",
    client: "TechMart Solutions",
    duration: "4 months",
    team: "5 developers, 2 designers, 1 PM",
    challenge:
      "The client needed a modern e-commerce platform that could handle high traffic and provide personalized shopping experiences.",
    solution:
      "We built a cutting-edge platform using Next.js with AI-powered recommendations, seamless checkout, and advanced analytics.",
    results: [
      "300% increase in conversion rates",
      "50% reduction in cart abandonment",
      "99.9% uptime during peak seasons",
      "40% increase in average order value",
    ],
    technologies: ["Next.js", "TypeScript", "Stripe", "AI/ML", "PostgreSQL", "Redis"],
    image: "/modern-ecommerce-website.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  "fintech-mobile-app": {
    title: "FinTech Mobile App",
    client: "SecureBank Digital",
    duration: "6 months",
    team: "4 developers, 3 designers, 1 security expert",
    challenge:
      "Create a secure, user-friendly mobile banking app with advanced security features and real-time capabilities.",
    solution:
      "Developed a React Native app with biometric authentication, blockchain integration, and real-time transaction tracking.",
    results: [
      "1M+ downloads in first quarter",
      "4.8/5 app store rating",
      "Zero security breaches",
      "60% increase in mobile transactions",
    ],
    technologies: ["React Native", "Node.js", "Blockchain", "Biometric Auth", "MongoDB"],
    image: "/placeholder-u32ci.png",
    liveUrl: "#",
    githubUrl: "#",
  },
}

export default function CaseStudy() {
  const params = useParams()
  const slug = params.slug as string
  const caseStudy = caseStudies[slug as keyof typeof caseStudies]

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-card pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Button onClick={() => (window.location.href = "/#portfolio")}>Back to Portfolio</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card pt-20">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={() => (window.location.href = "/#portfolio")} className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Button>
          <div className="flex gap-2">
            <Button variant="outline" onClick={() => window.open(caseStudy.liveUrl, "_blank")}>
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Site
            </Button>
            <Button variant="outline" onClick={() => window.open(caseStudy.githubUrl, "_blank")}>
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          </div>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">{caseStudy.title}</h1>
          <img
            src={caseStudy.image || "/placeholder.svg"}
            alt={caseStudy.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-2">Client</h3>
              <p className="text-muted-foreground">{caseStudy.client}</p>
            </div>
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-2">Duration</h3>
              <p className="text-muted-foreground">{caseStudy.duration}</p>
            </div>
            <div className="glassmorphism p-6 rounded-lg">
              <h3 className="font-bold text-primary mb-2">Team</h3>
              <p className="text-muted-foreground">{caseStudy.team}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold gradient-text mb-6">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{caseStudy.challenge}</p>

            <h2 className="text-3xl font-bold gradient-text mb-6">Our Solution</h2>
            <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold gradient-text mb-6">Results</h2>
            <ul className="space-y-4 mb-8">
              {caseStudy.results.map((result, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-4"></div>
                  <span className="text-muted-foreground">{result}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold gradient-text mb-6">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {caseStudy.technologies.map((tech) => (
                <span key={tech} className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center glassmorphism p-8 rounded-lg">
          <h3 className="text-3xl font-bold gradient-text mb-4">Ready for Your Revolution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's create something extraordinary together. Contact us to discuss your project and see how we can
            transform your business.
          </p>
          <Button
            size="lg"
            className="magnetic-hover animate-pulse-glow"
            onClick={() => (window.location.href = "/#services")}
          >
            Start Your Project
          </Button>
        </div>
      </div>
    </div>
  )
}
