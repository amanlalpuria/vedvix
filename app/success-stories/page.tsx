"use client"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp, Users, DollarSign, ChevronLeft, Star, Award, Zap } from "lucide-react"
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

export default function SuccessStoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const successStories = [
    {
      id: 1,
      title: "TechCorp's Digital Revolution",
      subtitle: "From Traditional to Digital Leader",
      category: "Enterprise",
      industry: "Technology",
      duration: "8 months",
      teamSize: "12 specialists",
      challenge:
        "TechCorp was struggling with outdated systems, manual processes, and declining market share. Their legacy infrastructure couldn't support modern business needs.",
      solution:
        "We implemented a comprehensive digital transformation strategy including cloud migration, process automation, and a new customer portal.",
      results: {
        revenue: "+300%",
        efficiency: "+250%",
        customerSatisfaction: "+180%",
        timeToMarket: "-60%",
      },
      testimonial: {
        quote:
          "Vedvix transformed our entire business model. We went from struggling with legacy systems to becoming an industry leader in digital innovation.",
        author: "John Smith",
        position: "CEO, TechCorp",
        image: "/placeholder.svg?height=80&width=80&text=John+Smith",
      },
      image: "/placeholder.svg?height=600&width=800&text=TechCorp+Success+Story",
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Docker"],
      featured: true,
      metrics: [
        { label: "Revenue Growth", value: "300%", icon: <DollarSign className="w-6 h-6" /> },
        { label: "Process Efficiency", value: "250%", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Customer Satisfaction", value: "180%", icon: <Users className="w-6 h-6" /> },
        { label: "Time to Market", value: "-60%", icon: <Zap className="w-6 h-6" /> },
      ],
    },
    {
      id: 2,
      title: "LocalBiz Marketplace Revolution",
      subtitle: "Connecting Communities Through Technology",
      category: "E-commerce",
      industry: "Retail",
      duration: "6 months",
      teamSize: "8 specialists",
      challenge:
        "Local businesses were losing customers to large online retailers. They needed a platform to compete digitally while maintaining their community focus.",
      solution:
        "We created a comprehensive marketplace platform with local delivery, community features, and integrated payment systems.",
      results: {
        merchants: "500+",
        orders: "10K+",
        revenue: "+400%",
        retention: "85%",
      },
      testimonial: {
        quote:
          "The marketplace platform has revolutionized how local businesses operate. We've seen incredible growth and community engagement.",
        author: "Maria Garcia",
        position: "Founder, LocalBiz",
        image: "/placeholder.svg?height=80&width=80&text=Maria+Garcia",
      },
      image: "/placeholder.svg?height=600&width=800&text=LocalBiz+Marketplace",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis", "Vercel"],
      featured: false,
      metrics: [
        { label: "Active Merchants", value: "500+", icon: <Users className="w-6 h-6" /> },
        { label: "Monthly Orders", value: "10K+", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Revenue Growth", value: "400%", icon: <DollarSign className="w-6 h-6" /> },
        { label: "Customer Retention", value: "85%", icon: <Star className="w-6 h-6" /> },
      ],
    },
    {
      id: 3,
      title: "StartupX Fintech Innovation",
      subtitle: "Disrupting Traditional Banking",
      category: "Mobile App",
      industry: "Fintech",
      duration: "10 months",
      teamSize: "15 specialists",
      challenge:
        "StartupX wanted to create a mobile banking app that would compete with traditional banks while offering superior user experience and innovative features.",
      solution:
        "We developed a comprehensive fintech platform with AI-powered insights, seamless transactions, and advanced security features.",
      results: {
        downloads: "50K+",
        rating: "4.8★",
        transactions: "$2M+",
        growth: "+200%",
      },
      testimonial: {
        quote:
          "Vedvix helped us build more than an app - they created a complete financial ecosystem that our users love.",
        author: "David Kim",
        position: "CTO, StartupX",
        image: "/placeholder.svg?height=80&width=80&text=David+Kim",
      },
      image: "/placeholder.svg?height=600&width=800&text=StartupX+Fintech+App",
      technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "Blockchain"],
      featured: false,
      metrics: [
        { label: "App Downloads", value: "50K+", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "User Rating", value: "4.8★", icon: <Star className="w-6 h-6" /> },
        { label: "Transactions", value: "$2M+", icon: <DollarSign className="w-6 h-6" /> },
        { label: "User Growth", value: "200%", icon: <Users className="w-6 h-6" /> },
      ],
    },
    {
      id: 4,
      title: "HealthCare Connect Platform",
      subtitle: "Modernizing Patient Care",
      category: "Healthcare",
      industry: "Healthcare",
      duration: "12 months",
      teamSize: "18 specialists",
      challenge:
        "A healthcare network needed to digitize patient records, streamline appointments, and improve communication between doctors and patients.",
      solution:
        "We built a comprehensive healthcare management system with telemedicine capabilities, electronic health records, and patient portals.",
      results: {
        patients: "25K+",
        efficiency: "+180%",
        satisfaction: "+220%",
        costs: "-40%",
      },
      testimonial: {
        quote:
          "The platform has transformed how we deliver healthcare. Patient satisfaction is at an all-time high, and our operations are more efficient than ever.",
        author: "Dr. Sarah Wilson",
        position: "Chief Medical Officer",
        image: "/placeholder.svg?height=80&width=80&text=Dr+Sarah",
      },
      image: "/placeholder.svg?height=600&width=800&text=Healthcare+Platform",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Docker", "HIPAA Compliance"],
      featured: false,
      metrics: [
        { label: "Active Patients", value: "25K+", icon: <Users className="w-6 h-6" /> },
        { label: "Operational Efficiency", value: "180%", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Patient Satisfaction", value: "220%", icon: <Star className="w-6 h-6" /> },
        { label: "Cost Reduction", value: "-40%", icon: <DollarSign className="w-6 h-6" /> },
      ],
    },
    {
      id: 5,
      title: "EduTech Learning Revolution",
      subtitle: "Transforming Online Education",
      category: "Education",
      industry: "Education",
      duration: "9 months",
      teamSize: "14 specialists",
      challenge:
        "An educational institution wanted to create an engaging online learning platform that could compete with traditional classroom experiences.",
      solution:
        "We developed an interactive learning management system with AI-powered personalization, virtual classrooms, and comprehensive analytics.",
      results: {
        students: "15K+",
        completion: "+150%",
        engagement: "+300%",
        satisfaction: "4.9★",
      },
      testimonial: {
        quote:
          "Vedvix created an educational platform that exceeds traditional classroom engagement. Our students are more motivated and successful than ever.",
        author: "Prof. Michael Chen",
        position: "Dean of Digital Learning",
        image: "/placeholder.svg?height=80&width=80&text=Prof+Chen",
      },
      image: "/placeholder.svg?height=600&width=800&text=EduTech+Platform",
      technologies: ["React", "Django", "PostgreSQL", "WebRTC", "AI/ML"],
      featured: false,
      metrics: [
        { label: "Active Students", value: "15K+", icon: <Users className="w-6 h-6" /> },
        { label: "Course Completion", value: "150%", icon: <Award className="w-6 h-6" /> },
        { label: "Student Engagement", value: "300%", icon: <TrendingUp className="w-6 h-6" /> },
        { label: "Satisfaction Rating", value: "4.9★", icon: <Star className="w-6 h-6" /> },
      ],
    },
  ]

  const categories = ["All", "Enterprise", "E-commerce", "Mobile App", "Healthcare", "Education"]

  const filteredStories = successStories.filter(
    (story) => selectedCategory === "All" || story.category === selectedCategory,
  )

  const featuredStory = successStories.find((story) => story.featured)
  const regularStories = filteredStories.filter((story) => !story.featured)

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
                className="text-slate-600 hover:text-teal-600 transition-colors"
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
              Success
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent block">
                Stories
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve remarkable growth
              through innovative solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
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
        </div>
      </section>

      {/* Featured Success Story */}
      {featuredStory && selectedCategory === "All" && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4 bg-teal-100 text-teal-800">Featured Success Story</Badge>
              <Card className="overflow-hidden border-0 shadow-2xl">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src={featuredStory.image || "/placeholder.svg"}
                      alt={featuredStory.title}
                      width={800}
                      height={600}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-teal-600 text-white">{featuredStory.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">{featuredStory.title}</h2>
                    <p className="text-xl text-teal-600 mb-6">{featuredStory.subtitle}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {featuredStory.metrics.map((metric, index) => (
                        <div key={index} className="text-center p-4 bg-slate-50 rounded-lg">
                          <div className="text-teal-600 mb-2 flex justify-center">{metric.icon}</div>
                          <div className="text-2xl font-bold text-slate-900">{metric.value}</div>
                          <div className="text-sm text-slate-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <blockquote className="border-l-4 border-teal-600 pl-4 mb-6">
                      <p className="text-slate-700 italic mb-2">"{featuredStory.testimonial.quote}"</p>
                      <footer className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {featuredStory.testimonial.author
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <div className="font-semibold text-slate-900">{featuredStory.testimonial.author}</div>
                          <div className="text-sm text-slate-600">{featuredStory.testimonial.position}</div>
                        </div>
                      </footer>
                    </blockquote>

                    <Link href={`/success-stories/${featuredStory.id}`}>
                      <Button className="bg-teal-600 hover:bg-teal-700">
                        Read Full Case Study
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Success Stories Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {selectedCategory === "All" ? "All Success Stories" : `${selectedCategory} Success Stories`}
            </h2>
            <p className="text-slate-600">
              {filteredStories.length} success stor{filteredStories.length !== 1 ? "ies" : "y"} found
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {regularStories.map((story, index) => (
              <motion.div key={story.id} variants={fadeInUp}>
                <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white/90 text-slate-800">{story.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                      <span>{story.industry}</span>
                      <span>•</span>
                      <span>{story.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {story.title}
                    </h3>
                    <p className="text-teal-600 mb-4">{story.subtitle}</p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {story.metrics.slice(0, 4).map((metric, idx) => (
                        <div key={idx} className="text-center p-2 bg-slate-50 rounded">
                          <div className="text-lg font-bold text-teal-600">{metric.value}</div>
                          <div className="text-xs text-slate-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      <Link href={`/success-stories/${story.id}`}>
                        <Button
                          variant="outline"
                          className="w-full border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
                        >
                          View Case Study
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Join the ranks of successful businesses that have transformed their digital presence with Vedvix.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/get-started">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 bg-transparent px-8"
                >
                  View Our Portfolio
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
