"use client"
import { motion } from "framer-motion"
import { ArrowRight, ExternalLink, Github, Play, Filter, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedTechnology, setSelectedTechnology] = useState("All")

  const portfolioProjects = [
    {
      id: 1,
      title: "TechCorp Enterprise Platform",
      description:
        "A comprehensive enterprise solution with microservices architecture, real-time analytics, and advanced security features.",
      category: "Web Development",
      technology: "React",
      image: "/placeholder.svg?height=400&width=600&text=TechCorp+Platform",
      technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS"],
      features: ["Real-time Analytics", "Microservices", "Advanced Security", "Cloud Integration"],
      liveUrl: "https://techcorp-demo.com",
      githubUrl: "https://github.com/vedvix/techcorp",
      completionDate: "Dec 2024",
      duration: "8 months",
      teamSize: "12 developers",
      featured: true,
      results: {
        performance: "+300%",
        users: "50K+",
        uptime: "99.9%",
      },
    },
    {
      id: 2,
      title: "LocalBiz Marketplace",
      description:
        "A modern e-commerce platform connecting local businesses with customers, featuring real-time inventory and local delivery.",
      category: "E-commerce",
      technology: "Next.js",
      image: "/placeholder.svg?height=400&width=600&text=LocalBiz+Marketplace",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis", "Vercel"],
      features: ["Multi-vendor Support", "Real-time Inventory", "Local Delivery", "Payment Processing"],
      liveUrl: "https://localbiz-demo.com",
      githubUrl: "https://github.com/vedvix/localbiz",
      completionDate: "Nov 2024",
      duration: "6 months",
      teamSize: "8 developers",
      featured: false,
      results: {
        merchants: "500+",
        orders: "10K+",
        revenue: "+400%",
      },
    },
    {
      id: 3,
      title: "StartupX Fintech App",
      description:
        "Revolutionary mobile banking application with AI-powered insights, seamless transactions, and advanced security.",
      category: "Mobile Development",
      technology: "React Native",
      image: "/placeholder.svg?height=400&width=600&text=StartupX+App",
      technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Blockchain"],
      features: ["AI Insights", "Secure Transactions", "Biometric Auth", "Real-time Notifications"],
      liveUrl: "https://startupx-demo.com",
      githubUrl: "https://github.com/vedvix/startupx",
      completionDate: "Oct 2024",
      duration: "10 months",
      teamSize: "15 developers",
      featured: true,
      results: {
        downloads: "50K+",
        rating: "4.8★",
        transactions: "$2M+",
      },
    },
    {
      id: 4,
      title: "HealthCare Connect",
      description:
        "Comprehensive healthcare management system with telemedicine, patient portals, and electronic health records.",
      category: "Web Development",
      technology: "Vue.js",
      image: "/placeholder.svg?height=400&width=600&text=Healthcare+Connect",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "HIPAA"],
      features: ["Telemedicine", "EHR Integration", "Patient Portal", "Appointment Scheduling"],
      liveUrl: "https://healthcare-demo.com",
      githubUrl: "https://github.com/vedvix/healthcare",
      completionDate: "Sep 2024",
      duration: "12 months",
      teamSize: "18 developers",
      featured: false,
      results: {
        patients: "25K+",
        efficiency: "+180%",
        satisfaction: "+220%",
      },
    },
    {
      id: 5,
      title: "EduTech Learning Platform",
      description:
        "Interactive online learning management system with AI-powered personalization and virtual classrooms.",
      category: "Web Development",
      technology: "React",
      image: "/placeholder.svg?height=400&width=600&text=EduTech+Platform",
      technologies: ["React", "Django", "PostgreSQL", "WebRTC", "AI/ML"],
      features: ["Virtual Classrooms", "AI Personalization", "Progress Tracking", "Interactive Content"],
      liveUrl: "https://edutech-demo.com",
      githubUrl: "https://github.com/vedvix/edutech",
      completionDate: "Aug 2024",
      duration: "9 months",
      teamSize: "14 developers",
      featured: false,
      results: {
        students: "15K+",
        completion: "+150%",
        engagement: "+300%",
      },
    },
    {
      id: 6,
      title: "RetailPro Inventory System",
      description:
        "Advanced inventory management system with predictive analytics, automated reordering, and multi-location support.",
      category: "Web Development",
      technology: "Angular",
      image: "/placeholder.svg?height=400&width=600&text=RetailPro+System",
      technologies: ["Angular", "C#", "SQL Server", "Azure", "Power BI"],
      features: ["Predictive Analytics", "Auto Reordering", "Multi-location", "Real-time Sync"],
      liveUrl: "https://retailpro-demo.com",
      githubUrl: "https://github.com/vedvix/retailpro",
      completionDate: "Jul 2024",
      duration: "7 months",
      teamSize: "10 developers",
      featured: false,
      results: {
        efficiency: "+250%",
        accuracy: "99.5%",
        costs: "-30%",
      },
    },
    {
      id: 7,
      title: "FoodieApp Delivery Platform",
      description: "Complete food delivery ecosystem with customer app, restaurant dashboard, and delivery tracking.",
      category: "Mobile Development",
      technology: "Flutter",
      image: "/placeholder.svg?height=400&width=600&text=FoodieApp+Platform",
      technologies: ["Flutter", "Firebase", "Node.js", "Google Maps", "Stripe"],
      features: ["Real-time Tracking", "Multi-platform", "Payment Integration", "Restaurant Dashboard"],
      liveUrl: "https://foodieapp-demo.com",
      githubUrl: "https://github.com/vedvix/foodieapp",
      completionDate: "Jun 2024",
      duration: "8 months",
      teamSize: "12 developers",
      featured: false,
      results: {
        restaurants: "200+",
        orders: "5K+",
        rating: "4.7★",
      },
    },
    {
      id: 8,
      title: "CryptoTracker Portfolio",
      description:
        "Advanced cryptocurrency portfolio tracker with real-time data, technical analysis, and automated alerts.",
      category: "Web Development",
      technology: "React",
      image: "/placeholder.svg?height=400&width=600&text=CryptoTracker+Portfolio",
      technologies: ["React", "Node.js", "WebSocket", "Chart.js", "Redis"],
      features: ["Real-time Data", "Technical Analysis", "Portfolio Tracking", "Price Alerts"],
      liveUrl: "https://cryptotracker-demo.com",
      githubUrl: "https://github.com/vedvix/cryptotracker",
      completionDate: "May 2024",
      duration: "5 months",
      teamSize: "6 developers",
      featured: false,
      results: {
        users: "8K+",
        accuracy: "99.8%",
        uptime: "99.9%",
      },
    },
  ]

  const categories = ["All", "Web Development", "Mobile Development", "E-commerce", "UI/UX Design"]
  const technologies = ["All", "React", "Next.js", "Vue.js", "Angular", "React Native", "Flutter"]

  const filteredProjects = portfolioProjects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    const matchesTechnology = selectedTechnology === "All" || project.technologies.includes(selectedTechnology)
    return matchesCategory && matchesTechnology
  })

  const featuredProjects = filteredProjects.filter((project) => project.featured)
  const regularProjects = filteredProjects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-teal-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Vedvix
            </motion.div>
          </Link>
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : item === "Portfolio"
                      ? "/portfolio"
                      : item === "Blog"
                        ? "/blog"
                        : `/#${item.toLowerCase()}`
                }
                className={`transition-colors ${
                  item === "Portfolio" ? "text-teal-600 font-semibold" : "text-slate-600 hover:text-teal-600"
                }`}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <Link href="/get-started">
            <Button className="bg-teal-600 hover:bg-teal-700">Get Started</Button>
          </Link>
        </div>
      </motion.nav>

      {/* Header */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/">
              <Button variant="ghost" className="text-teal-400 hover:text-teal-300 mb-6 p-0">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Our
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent block">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore our collection of innovative digital solutions that have transformed businesses across various
              industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex flex-wrap gap-2">
              <Filter className="w-5 h-5 text-slate-600 mr-2" />
              <span className="text-sm font-medium text-slate-600 mr-4">Category:</span>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-teal-600 hover:bg-teal-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="text-sm font-medium text-slate-600 mr-4">Technology:</span>
              {technologies.map((tech) => (
                <Button
                  key={tech}
                  variant={selectedTechnology === tech ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTechnology(tech)}
                  className={selectedTechnology === tech ? "bg-teal-600 hover:bg-teal-700" : ""}
                >
                  {tech}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-teal-100 text-teal-800">Featured Projects</Badge>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">Showcase Projects</h2>
              <p className="text-slate-600">Our most impactful and innovative solutions</p>
            </motion.div>

            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-0 shadow-2xl">
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                      <div className={`relative overflow-hidden ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={600}
                          height={400}
                          className="w-full h-64 lg:h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-teal-600 text-white">{project.category}</Badge>
                        </div>
                        <div className="absolute top-4 right-4 flex gap-2">
                          {project.liveUrl && (
                            <Button size="sm" className="bg-white/90 text-slate-800 hover:bg-white">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          )}
                          {project.githubUrl && (
                            <Button size="sm" className="bg-white/90 text-slate-800 hover:bg-white">
                              <Github className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                      <CardContent
                        className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                      >
                        <h3 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                        <p className="text-lg text-slate-600 mb-6">{project.description}</p>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                          {Object.entries(project.results).map(([key, value]) => (
                            <div key={key} className="text-center p-3 bg-slate-50 rounded-lg">
                              <div className="text-xl font-bold text-teal-600">{value}</div>
                              <div className="text-sm text-slate-600 capitalize">{key}</div>
                            </div>
                          ))}
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-900 mb-3">Key Features</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {project.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-slate-900 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          {project.liveUrl && (
                            <Button className="bg-teal-600 hover:bg-teal-700">
                              <Play className="w-4 h-4 mr-2" />
                              Live Demo
                            </Button>
                          )}
                          <Link href={`/portfolio/${project.id}`}>
                            <Button
                              variant="outline"
                              className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
                            >
                              View Details
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Projects Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-2">All Projects</h2>
            <p className="text-slate-600">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
            </p>
          </motion.div>

          {filteredProjects.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No Projects Found</h3>
              <p className="text-slate-600 mb-6">Try adjusting your filters to see more projects.</p>
              <Button
                onClick={() => {
                  setSelectedCategory("All")
                  setSelectedTechnology("All")
                }}
                className="bg-teal-600 hover:bg-teal-700"
              >
                View All Projects
              </Button>
            </motion.div>
          ) : (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {regularProjects.map((project, index) => (
                <motion.div key={project.id} variants={fadeInUp}>
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg h-full">
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-slate-800">{project.category}</Badge>
                      </div>
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.liveUrl && (
                          <Button size="sm" className="bg-white/90 text-slate-800 hover:bg-white">
                            <ExternalLink className="w-3 h-3" />
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button size="sm" className="bg-white/90 text-slate-800 hover:bg-white">
                            <Github className="w-3 h-3" />
                          </Button>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                        <span>{project.completionDate}</span>
                        <span>•</span>
                        <span>{project.duration}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 mb-4 flex-1 line-clamp-3">{project.description}</p>

                      <div className="mb-4">
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {Object.entries(project.results)
                          .slice(0, 3)
                          .map(([key, value]) => (
                            <div key={key} className="text-center p-2 bg-slate-50 rounded">
                              <div className="text-sm font-bold text-teal-600">{value}</div>
                              <div className="text-xs text-slate-600 capitalize">{key}</div>
                            </div>
                          ))}
                      </div>

                      <Link href={`/portfolio/${project.id}`}>
                        <Button
                          variant="outline"
                          className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
                        >
                          View Project
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/success-stories">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 bg-transparent px-8"
                >
                  View Success Stories
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mb-4">
                  Vedvix
                </div>
              </Link>
              <p className="text-slate-400 mb-4">Transforming businesses through innovative digital solutions.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="/#services" className="hover:text-teal-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-teal-400 transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-teal-400 transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-teal-400 transition-colors">
                    E-commerce
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="/#about" className="hover:text-teal-400 transition-colors">
                    About Us
                  </a>
                </li>
                {/* <li>
                  <a href="/portfolio" className="hover:text-teal-400 transition-colors">
                    Portfolio
                  </a>
                </li> */}
                <li>
                  <a href="/success-stories" className="hover:text-teal-400 transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-teal-400 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>2nd Floor, Plot 24E Shyam Vihar</li>
                <li>Murlipura Jaipur 302039</li>
                <li>+91 9460688385</li>
                <li>admin@vedvix.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Vedvix. All rights reserved. Built with passion for digital excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
