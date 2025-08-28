"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Eye, Heart, Share2 } from "lucide-react"

const portfolioProjects = {
  "ui-ux": [
    {
      id: 1,
      title: "FinTech Mobile App Design",
      category: "UI/UX Design",
      description: "Complete mobile banking app redesign with focus on accessibility and user experience",
      image: "/modern-fintech-mobile-app-interface-design.png",
      technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
      client: "SecureBank",
      duration: "3 months",
      results: "40% increase in user engagement, 60% reduction in support tickets",
      behanceUrl: "#",
      dribbbleUrl: "#",
      details: {
        challenge: "The existing banking app had poor usability and high abandonment rates",
        solution: "Implemented user-centered design principles with extensive user testing",
        outcome: "Significantly improved user satisfaction and reduced customer support load",
      },
    },
    {
      id: 2,
      title: "E-commerce Dashboard",
      category: "UI/UX Design",
      description: "Admin dashboard for multi-vendor e-commerce platform with advanced analytics",
      image: "/modern-e-commerce-admin-dashboard-design.png",
      technologies: ["Sketch", "Figma", "Zeplin", "Marvel"],
      client: "ShopHub",
      duration: "2 months",
      results: "50% faster task completion, 35% increase in admin productivity",
      behanceUrl: "#",
      dribbbleUrl: "#",
      details: {
        challenge: "Complex data visualization needed for multi-vendor management",
        solution: "Created intuitive information architecture with progressive disclosure",
        outcome: "Streamlined vendor management and improved operational efficiency",
      },
    },
    {
      id: 3,
      title: "Healthcare App Interface",
      category: "UI/UX Design",
      description: "Patient management system with telemedicine capabilities",
      image: "/healthcare-patient-management-app-interface.png",
      technologies: ["Figma", "Adobe XD", "Miro", "Hotjar"],
      client: "MediCare Plus",
      duration: "4 months",
      results: "70% improvement in patient satisfaction, 45% increase in app usage",
      behanceUrl: "#",
      dribbbleUrl: "#",
      details: {
        challenge: "Creating accessible healthcare interface for diverse user groups",
        solution: "Implemented WCAG guidelines with extensive accessibility testing",
        outcome: "Improved healthcare access and patient engagement",
      },
    },
  ],
  "web-dev": [
    {
      id: 4,
      title: "AI-Powered SaaS Platform",
      category: "Web Development",
      description: "Full-stack SaaS platform with AI integration and real-time analytics",
      image: "/modern-ai-saas-platform-dashboard.png",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "OpenAI API", "Stripe"],
      client: "TechFlow AI",
      duration: "6 months",
      results: "10,000+ active users, $500K ARR in first year",
      liveUrl: "#",
      githubUrl: "#",
      details: {
        challenge: "Building scalable AI-powered platform with complex user workflows",
        solution: "Microservices architecture with real-time data processing",
        outcome: "Successfully launched with rapid user adoption and revenue growth",
      },
    },
    {
      id: 5,
      title: "E-learning Platform",
      category: "Web Development",
      description: "Interactive learning management system with video streaming and progress tracking",
      image: "/modern-elearning-platform.png",
      technologies: ["React", "Node.js", "MongoDB", "AWS", "Socket.io"],
      client: "EduTech Solutions",
      duration: "5 months",
      results: "25,000+ students enrolled, 95% completion rate",
      liveUrl: "#",
      githubUrl: "#",
      details: {
        challenge: "Creating engaging online learning experience with video streaming",
        solution: "Built custom video player with adaptive streaming and interactive features",
        outcome: "High student engagement and successful course completion rates",
      },
    },
    {
      id: 6,
      title: "Real Estate Marketplace",
      category: "Web Development",
      description: "Property listing platform with advanced search and virtual tours",
      image: "/modern-real-estate-marketplace-website.png",
      technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps API", "WebRTC"],
      client: "PropertyHub",
      duration: "4 months",
      results: "5,000+ properties listed, 200% increase in leads",
      liveUrl: "#",
      githubUrl: "#",
      details: {
        challenge: "Integrating complex property search with virtual tour capabilities",
        solution: "Advanced filtering system with 360° virtual tour integration",
        outcome: "Transformed property viewing experience and increased lead generation",
      },
    },
  ],
  "digital-marketing": [
    {
      id: 7,
      title: "Brand Identity & Digital Campaign",
      category: "Digital Marketing",
      description: "Complete brand overhaul with multi-channel digital marketing strategy",
      image: "/brand-identity-design-and-digital-marketing-campai.png",
      technologies: ["Adobe Creative Suite", "Google Ads", "Facebook Ads", "Analytics"],
      client: "GreenTech Startup",
      duration: "3 months",
      results: "300% increase in brand awareness, 150% boost in conversions",
      campaignUrl: "#",
      analyticsUrl: "#",
      details: {
        challenge: "Launching unknown startup in competitive green technology market",
        solution: "Comprehensive brand strategy with targeted digital advertising",
        outcome: "Established strong market presence and achieved rapid customer acquisition",
      },
    },
    {
      id: 8,
      title: "Social Media Growth Strategy",
      category: "Digital Marketing",
      description: "Instagram and TikTok growth campaign for fashion brand",
      image: "/social-media-marketing-campaign-for-fashion-brand.png",
      technologies: ["Canva", "Later", "Hootsuite", "Instagram API", "TikTok Ads"],
      client: "StyleCo Fashion",
      duration: "6 months",
      results: "500K+ followers gained, 400% increase in online sales",
      campaignUrl: "#",
      analyticsUrl: "#",
      details: {
        challenge: "Building social media presence in saturated fashion market",
        solution: "Viral content strategy with influencer partnerships and UGC campaigns",
        outcome: "Massive follower growth and direct sales attribution from social media",
      },
    },
    {
      id: 9,
      title: "SEO & Content Marketing",
      category: "Digital Marketing",
      description: "Comprehensive SEO strategy with content marketing for B2B SaaS",
      image: "/seo-content-marketing-strategy-dashboard.png",
      technologies: ["SEMrush", "Ahrefs", "Google Analytics", "WordPress", "HubSpot"],
      client: "CloudSync Pro",
      duration: "8 months",
      results: "1000% increase in organic traffic, 250% boost in qualified leads",
      campaignUrl: "#",
      analyticsUrl: "#",
      details: {
        challenge: "Competing in highly competitive B2B SaaS market for visibility",
        solution: "Long-tail keyword strategy with high-value content creation",
        outcome: "Achieved first-page rankings for target keywords and substantial lead growth",
      },
    },
  ],
}

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<"ui-ux" | "web-dev" | "digital-marketing">("ui-ux")
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const categories = [
    { id: "ui-ux", label: "UI/UX Design", count: portfolioProjects["ui-ux"].length },
    { id: "web-dev", label: "Web Development", count: portfolioProjects["web-dev"].length },
    { id: "digital-marketing", label: "Digital Marketing", count: portfolioProjects["digital-marketing"].length },
  ]

  const renderProjectCard = (project: any) => {
    if (activeCategory === "ui-ux") {
      return (
        <div
          key={project.id}
          className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-[var(--vedvix-purple)]/50 transition-all duration-500 hover:scale-105 cursor-pointer"
          onClick={() => setSelectedProject(project)}
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="bg-[var(--vedvix-purple)] text-white px-3 py-1 rounded-full text-sm font-medium">
                UI/UX
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--vedvix-yellow)] transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Heart className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">124</span>
                <Eye className="w-4 h-4 text-gray-400 ml-2" />
                <span className="text-sm text-gray-400">2.1k</span>
              </div>
              <div className="flex gap-2">
                <ExternalLink className="w-4 h-4 text-[var(--vedvix-purple)] group-hover:text-[var(--vedvix-yellow)] transition-colors" />
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (activeCategory === "web-dev") {
      return (
        <div
          key={project.id}
          className="group relative bg-gradient-to-br from-[var(--vedvix-purple)]/20 to-[var(--vedvix-blue)]/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-[var(--vedvix-yellow)]/50 transition-all duration-500 hover:scale-105 cursor-pointer"
          onClick={() => setSelectedProject(project)}
        >
          <div className="relative overflow-hidden">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="bg-[var(--vedvix-yellow)] text-black px-3 py-1 rounded-full text-sm font-bold">
                Web Dev
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex gap-2">
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                <Github className="w-4 h-4 text-white" />
              </div>
              <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                <ExternalLink className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[var(--vedvix-yellow)] transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.slice(0, 3).map((tech: string) => (
                <span key={tech} className="bg-white/10 text-white px-2 py-1 rounded-lg text-xs">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="bg-white/10 text-white px-2 py-1 rounded-lg text-xs">
                  +{project.technologies.length - 3} more
                </span>
              )}
            </div>
            <div className="text-sm text-gray-400">
              <span className="text-[var(--vedvix-yellow)] font-semibold">{project.client}</span> • {project.duration}
            </div>
          </div>
        </div>
      )
    }

    // Digital Marketing layout
    return (
      <div
        key={project.id}
        className="group relative bg-gradient-to-r from-[var(--vedvix-orange)]/20 to-[var(--vedvix-yellow)]/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-[var(--vedvix-orange)]/50 transition-all duration-500 hover:scale-105 cursor-pointer"
        onClick={() => setSelectedProject(project)}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="bg-gradient-to-r from-[var(--vedvix-orange)] to-[var(--vedvix-yellow)] text-black px-3 py-1 rounded-full text-sm font-bold">
              Marketing
            </div>
            <Share2 className="w-5 h-5 text-gray-400 group-hover:text-[var(--vedvix-orange)] transition-colors" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--vedvix-orange)] transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-300 mb-4">{project.description}</p>
          <div className="relative overflow-hidden rounded-xl mb-4">
            <img
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-[var(--vedvix-orange)]">300%</div>
              <div className="text-xs text-gray-400">Brand Awareness</div>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-[var(--vedvix-yellow)]">150%</div>
              <div className="text-xs text-gray-400">Conversions</div>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            <span className="text-[var(--vedvix-orange)] font-semibold">{project.client}</span> • {project.duration}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--vedvix-purple)]/20 to-[var(--vedvix-blue)]/20" />
        <div className="relative container mx-auto px-6 py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[var(--vedvix-purple)] via-[var(--vedvix-yellow)] to-[var(--vedvix-orange)] bg-clip-text text-transparent">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our diverse range of projects across UI/UX design, web development, and digital marketing. Each
              project represents our commitment to excellence and innovation.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as any)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-[var(--vedvix-purple)] to-[var(--vedvix-blue)] text-white shadow-lg scale-105"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioProjects[activeCategory].map(renderProjectCard)}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                  <p className="text-[var(--vedvix-purple)] font-semibold">{selectedProject.category}</p>
                </div>
                <div className="flex gap-3">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      className="bg-[var(--vedvix-yellow)] text-black px-4 py-2 rounded-lg font-semibold hover:bg-[var(--vedvix-orange)] transition-colors"
                    >
                      View Live
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      className="bg-white/10 text-white px-4 py-2 rounded-lg font-semibold hover:bg-white/20 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {selectedProject.behanceUrl && (
                    <a
                      href={selectedProject.behanceUrl}
                      className="bg-[var(--vedvix-purple)] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[var(--vedvix-blue)] transition-colors"
                    >
                      Behance
                    </a>
                  )}
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-8">{selectedProject.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Project Details</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-gray-400">Client:</span>
                      <span className="text-white ml-2 font-semibold">{selectedProject.client}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Duration:</span>
                      <span className="text-white ml-2">{selectedProject.duration}</span>
                    </div>
                    <div>
                      <span className="text-gray-400">Results:</span>
                      <span className="text-[var(--vedvix-yellow)] ml-2 font-semibold">{selectedProject.results}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech: string) => (
                      <span key={tech} className="bg-white/10 text-white px-3 py-1 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Challenge</h3>
                  <p className="text-gray-300">{selectedProject.details.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Solution</h3>
                  <p className="text-gray-300">{selectedProject.details.solution}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Outcome</h3>
                  <p className="text-gray-300">{selectedProject.details.outcome}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        :root {
          --vedvix-purple: #962DE8;
          --vedvix-gray: #E5E5E5;
          --vedvix-dark: #2E2E2E;
          --vedvix-yellow: #FFDE59;
          --vedvix-orange: #FF914D;
          --vedvix-blue: #3533CD;
        }
      `}</style>
    </div>
  )
}
