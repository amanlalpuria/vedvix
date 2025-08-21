"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with advanced features and seamless user experience.",
    image: "/modern-ecommerce-interface.png",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    category: "Web Development",
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking application with biometric authentication.",
    image: "/mobile-banking-app.png",
    tech: ["React Native", "Node.js", "MongoDB", "Biometrics"],
    category: "Mobile Development",
  },
  {
    title: "Workflow Automation",
    description: "Intelligent automation system that streamlined business processes by 80%.",
    image: "/workflow-automation-dashboard.png",
    tech: ["Python", "API Integration", "Machine Learning", "Cloud"],
    category: "Automation",
  },
  {
    title: "Design System",
    description: "Comprehensive design system for a Fortune 500 company with 200+ components.",
    image: "/design-system-components.png",
    tech: ["Figma", "Storybook", "React", "Design Tokens"],
    category: "UI/UX Design",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-b from-card to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our latest projects and the innovative solutions we've delivered
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden magnetic-hover glassmorphism border-2 border-border/50"
            >
              <div className="relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 gradient-text">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-secondary/10 text-secondary px-2 py-1 rounded text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="magnetic-hover bg-transparent"
                  onClick={() => {
                    const slug = project.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^a-z0-9-]/g, "")
                    window.location.href = `/case-study/${slug}`
                  }}
                >
                  View Case Study
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
