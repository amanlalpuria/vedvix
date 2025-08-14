"use client"

import type React from "react"

import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Globe,
  Smartphone,
  TrendingUp,
  Code,
  Palette,
  BarChart3,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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

export default function VedvixWebsite() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", company: "", message: "" })
    }, 3000)
  }

  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description:
        "Strategic campaigns that amplify your brand and drive measurable growth across all digital channels.",
      features: ["SEO Optimization", "Social Media Marketing", "PPC Campaigns", "Content Strategy"],
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Website & App Development",
      description:
        "Custom-built digital experiences that engage users and drive conversions with cutting-edge technology.",
      features: ["Responsive Web Design", "Mobile App Development", "E-commerce Platforms", "Custom Solutions"],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description:
        "Transform your physical store into a thriving digital marketplace with our comprehensive solutions.",
      features: ["Online Store Setup", "Payment Integration", "Inventory Management", "Digital Catalogs"],
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Business Consulting",
      description: "Strategic guidance to navigate digital transformation and accelerate your business growth.",
      features: ["Digital Strategy", "Process Optimization", "Technology Consulting", "Growth Planning"],
    },
  ]

  const portfolioItems = [
    {
      title: "TechCorp Digital Transformation",
      category: "Enterprise",
      description: "Complete digital overhaul resulting in 300% increase in online sales",
      image: "/placeholder.svg?height=300&width=400&text=TechCorp+Project",
      metrics: { sales: "300%", traffic: "250%", conversion: "180%" },
    },
    {
      title: "LocalBiz E-commerce Platform",
      category: "E-commerce",
      description: "Custom marketplace connecting local businesses with customers",
      image: "/placeholder.svg?height=300&width=400&text=LocalBiz+Platform",
      metrics: { users: "10K+", revenue: "500%", retention: "85%" },
    },
    {
      title: "StartupX Mobile App",
      category: "Mobile",
      description: "Revolutionary fintech app with 50K+ downloads in first month",
      image: "/placeholder.svg?height=300&width=400&text=StartupX+App",
      metrics: { downloads: "50K+", rating: "4.8★", growth: "200%" },
    },
  ]

  const blogPosts = [
    {
      title: "The Future of AI in Digital Marketing",
      excerpt: "Exploring how artificial intelligence is revolutionizing marketing strategies and customer engagement.",
      category: "AI & Technology",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      image: "/placeholder.svg?height=200&width=300&text=AI+Marketing",
    },
    {
      title: "Building Scalable E-commerce Platforms",
      excerpt:
        "Technical deep-dive into creating robust online stores that can handle massive traffic and transactions.",
      category: "Development",
      readTime: "8 min read",
      date: "Dec 12, 2024",
      image: "/placeholder.svg?height=200&width=300&text=E-commerce+Tech",
    },
    {
      title: "Digital Transformation Success Stories",
      excerpt:
        "Real case studies of businesses that successfully transitioned from traditional to digital-first operations.",
      category: "Case Studies",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      image: "/placeholder.svg?height=200&width=300&text=Success+Stories",
    },
  ]

  const teamMembers = [
    {
      name: "Deepanshi Gaur",
      role: "CEO & Founder",
      expertise: "Digital Strategy",
      image: "/deepanshi.jpg?height=200&width=200&text=Alex+Chen",
    },
    {
      name: "Naresh Rao",
      role: "CTO",
      expertise: "Full-Stack Development",
      image: "/placeholder.svg?height=200&width=200&text=Sarah+Johnson",
    },
    {
      name: "Path Mathur",
      role: "Creative Director",
      expertise: "UI/UX Design",
      image: "/parth.jpg?height=200&width=200&text=Mike+Rodriguez",
    },
    {
      name: "Manan Sharma",
      role: "Marketing Lead",
      expertise: "Digital Marketing",
      image: "/manan.jpg?height=200&width=200&text=Emily+Davis",
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-teal-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Vedvix
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-600 hover:text-teal-600 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <Button className="bg-teal-600 hover:bg-teal-700">Get Started</Button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1
                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                Transform Your
                <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent block pb-2">
                  Digital Presence
                </span>
              </motion.h1>

              <motion.p
                className="text-xl text-slate-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                From concept to launch, we digitalize your vision with cutting-edge solutions that drive real results.
                Empowering businesses to thrive in the digital age.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/get-started">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-lg px-8 py-4">
                      Start Your Journey
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 text-lg px-8 py-4 bg-transparent"
                    >
                      View Our Work
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex items-center gap-8 mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-teal-400" />
                  <span className="text-slate-300">200+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-slate-300">4.9/5 Rating</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative z-10">
                <motion.div
                  className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl p-8 shadow-2xl"
                  animate={{
                    y: [0, -10, 0],
                    rotateY: [0, 5, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <motion.div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm" whileHover={{ scale: 1.05 }}>
                      <Globe className="w-8 h-8 text-white mb-2" />
                      <div className="text-white font-semibold">Web Development</div>
                    </motion.div>
                    <motion.div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm" whileHover={{ scale: 1.05 }}>
                      <Smartphone className="w-8 h-8 text-white mb-2" />
                      <div className="text-white font-semibold">Mobile Apps</div>
                    </motion.div>
                    <motion.div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm" whileHover={{ scale: 1.05 }}>
                      <TrendingUp className="w-8 h-8 text-white mb-2" />
                      <div className="text-white font-semibold">Digital Marketing</div>
                    </motion.div>
                    <motion.div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm" whileHover={{ scale: 1.05 }}>
                      <BarChart3 className="w-8 h-8 text-white mb-2" />
                      <div className="text-white font-semibold">Analytics</div>
                    </motion.div>
                  </div>
                  <div className="text-center text-white">
                    <div className="text-3xl font-bold">360°</div>
                    <div className="text-sm opacity-90">Digital Solutions</div>
                  </div>
                </motion.div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-coral-500 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full opacity-20"
                animate={{
                  scale: [1.2, 1, 1.2],
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-teal-100 text-teal-800">Our Services</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Comprehensive Digital Solutions</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We offer end-to-end digital transformation services to help your business thrive in the modern
              marketplace.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                    >
                      {service.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                    <p className="text-slate-600 mb-6">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                          <CheckCircle className="w-4 h-4 text-teal-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-teal-100 text-teal-800">About Vedvix</Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                The Visionaries Behind Your Digital Success
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                At Vedvix, we believe every business deserves to thrive in the digital age. Our mission is to empower
                companies with innovative solutions that transform traditional operations into digital powerhouses.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Innovation First</h4>
                    <p className="text-slate-600">
                      We leverage cutting-edge technologies to create solutions that set you apart.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Reliability & Trust</h4>
                    <p className="text-slate-600">
                      Our proven track record speaks for itself with 200+ successful projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Palette className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Creative Excellence</h4>
                    <p className="text-slate-600">
                      Every project is crafted with attention to detail and creative flair.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">200+</div>
                  <div className="text-slate-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">98%</div>
                  <div className="text-slate-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600">5+</div>
                  <div className="text-slate-600">Years Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-6">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full mb-4 flex items-center justify-center text-white font-bold text-xl">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-1">{member.name}</h4>
                    <p className="text-teal-600 text-sm mb-2">{member.role}</p>
                    <p className="text-slate-600 text-xs">{member.expertise}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-teal-100 text-teal-800">Our Portfolio</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Success Stories That Inspire</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover how we've helped businesses transform their digital presence and achieve remarkable growth.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {portfolioItems.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg">
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-teal-600 text-white">{item.category}</Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 mb-4">{item.description}</p>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                      {Object.entries(item.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-lg font-bold text-teal-600">{value}</div>
                          <div className="text-xs text-slate-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/success-stories">
              <Button
                variant="outline"
                size="lg"
                className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent mr-4"
              >
                View Success Stories
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                View All Projects
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section> */}

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-teal-100 text-teal-800">Our Blog</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Insights & Innovation</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest thoughts on technology, digital transformation, and industry
              trends.
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {blogPosts.map((post, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <a
                  href={`/blog/${post.title
                    .toLowerCase()
                    .replace(/\s+/g, "-")
                    .replace(/[^\w-]/g, "")}`}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg cursor-pointer">
                    <div className="relative overflow-hidden">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white/90 text-slate-800">{post.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-600">{post.excerpt}</p>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="/blog">
              <Button
                variant="outline"
                size="lg"
                className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
              >
                View All Articles
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-teal-600 text-white">Get In Touch</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve your digital transformation goals. Get in touch for a free
              consultation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold mb-8">Let's Start a Conversation</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Visit Our Office</div>
                    <div className="text-slate-300">2nd Floor, Plot 24 East Shyam Vihar Charan Nadi, Murlipura Jaipur</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Call Us</div>
                    <div className="text-slate-300">+91 9460688385</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email Us</div>
                    <div className="text-slate-300">admin@vedvix.com</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="font-semibold mb-4">Why Choose Vedvix?</h4>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    Free initial consultation
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    Custom solutions for your needs
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    Ongoing support and maintenance
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400" />
                    Proven track record of success
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-8">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Name *</label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email *</label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Company</label>
                        <Input
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
                          placeholder="Your company name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Message *</label>
                        <Textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 min-h-[120px]"
                          placeholder="Tell us about your project..."
                        />
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-6"
                        >
                          {isSubmitting ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                          ) : (
                            <>
                              Send Message
                              <ArrowRight className="ml-2 w-5 h-5" />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4"
                      >
                        <CheckCircle className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-slate-300">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mb-4">
                Vedvix
              </div>
              <p className="text-slate-400 mb-4">Transforming businesses through innovative digital solutions.</p>
              <div className="flex space-x-4">{/* Social media icons would go here */}</div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    E-commerce
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    About Us
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Portfolio
                  </a>
                </li> */}
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Careers
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
