"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Sparkles,
  Calendar,
  User,
  Clock,
  Heart,
  MessageCircle,
  Share2,
  Eye,
} from "lucide-react"
import { blogPosts, clients, collaborations, services } from "./data"
import { ServiceSection } from "./service-section"
import { ClientSection } from "./client-section"
import { HeroSection } from "./hero-section"
import { NavigationSection } from "./navigation-section"
import { PartnerSection } from "./partner-section"
import { BlogSection } from "./blog-section"
import { ContactSection } from "./contact-section"

export default function VedvixWebsite() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null)
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" })
  const [scheduleForm, setScheduleForm] = useState({ name: "", email: "", phone: "", service: "", date: "", time: "" })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", contactForm)
    alert("Thank you for your message! We'll get back to you soon.")
    setContactForm({ name: "", email: "", message: "" })
  }

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Schedule form submitted:", scheduleForm)
    alert("Your consultation has been scheduled! We'll send you a confirmation email.")
    setScheduleForm({ name: "", email: "", phone: "", service: "", date: "", time: "" })
  }

  const scrollToBlog = () => {
    const blogSection = document.getElementById("blog")
    if (blogSection) {
      blogSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const BlogDetailView = ({ blog }: { blog: (typeof blogPosts)[0] }) => (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Button
          variant="ghost"
          onClick={() => setSelectedBlog(null)}
          className="mb-6 text-[#3533CD] hover:text-[#3533CD]/80"
        >
          ← Back to Articles
        </Button>

        <div className="relative mb-8 rounded-2xl overflow-hidden">
          <img src={blog.image || "/placeholder.svg"} alt={blog.title} className="w-full h-96 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <Badge className="bg-[#FF914D] text-[#2E2E2E] mb-4">{blog.category}</Badge>
            <h1 className="text-4xl font-bold text-white mb-4">{blog.title}</h1>
            <div className="flex items-center text-white/80 text-sm space-x-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {blog.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {blog.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {blog.readTime}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8 p-4 bg-[#E5E5E5]/50 rounded-lg">
          <div className="flex items-center space-x-6">
            <button className="flex items-center space-x-2 text-[#962DE8] hover:text-[#962DE8]/80">
              <Heart className="h-5 w-5" />
              <span>{blog.likes}</span>
            </button>
            <button className="flex items-center space-x-2 text-[#3533CD] hover:text-[#3533CD]/80">
              <MessageCircle className="h-5 w-5" />
              <span>{blog.comments}</span>
            </button>
            <button className="flex items-center space-x-2 text-[#2E2E2E]/70 hover:text-[#2E2E2E]">
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </button>
          </div>
          <div className="flex items-center text-[#2E2E2E]/70">
            <Eye className="h-4 w-4 mr-1" />
            <span>2.3k views</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none text-[#2E2E2E]" dangerouslySetInnerHTML={{ __html: blog.content }} />

        <div className="mt-12 p-6 bg-gradient-to-r from-[#962DE8]/10 to-[#3533CD]/10 rounded-2xl">
          <h3 className="text-xl font-bold text-[#2E2E2E] mb-4">Related Articles</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {blogPosts
              .filter((post) => post.id !== blog.id)
              .slice(0, 2)
              .map((post) => (
                <Card
                  key={post.id}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300"
                  onClick={() => setSelectedBlog(post.id)}
                >
                  <CardContent className="p-4">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold text-[#2E2E2E] mb-2">{post.title}</h4>
                    <p className="text-sm text-[#2E2E2E]/70">
                      {post.readTime} • {post.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  )

  if (selectedBlog) {
    const blog = blogPosts.find((post) => post.id === selectedBlog)
    if (blog) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-background via-[#E5E5E5]/30 to-background">
          <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#E5E5E5]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#962DE8] to-[#3533CD] rounded-xl flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                    Vedvix
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground rounded-full px-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
          <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            <BlogDetailView blog={blog} />
          </div>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[#E5E5E5]/30 to-background">
      {/* Navigation */}
      <NavigationSection
        scrollToBlog={scrollToBlog}
        scrollToContact={scrollToContact}
        contactForm={contactForm}
        setContactForm={setContactForm}
        handleContactSubmit={handleContactSubmit}
      />
      <br></br>

      {/* Hero Section */}
      <HeroSection
        isVisible={isVisible}
        contactForm={contactForm}
        setContactForm={setContactForm}
        handleContactSubmit={handleContactSubmit}
      />


      <ServiceSection />

      <ClientSection />
      {/* <PartnerSection /> */}
      
      {/* Blog Section */}
      <BlogSection setSelectedBlog={setSelectedBlog} />

      {/* Contact Section */}
      <ContactSection
        contactForm={contactForm}
        setContactForm={setContactForm}
        handleContactSubmit={handleContactSubmit}
        scheduleForm={scheduleForm}
        setScheduleForm={setScheduleForm}
        handleScheduleSubmit={handleScheduleSubmit}
      />

    </div>
  )
}
