"use client"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Search, Tag, User, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
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

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Digital Marketing",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing marketing strategies and customer engagement. From predictive analytics to personalized content creation, AI is transforming how businesses connect with their audiences.",
      content: "Full article content would go here...",
      category: "AI & Technology",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      author: "Naresh Rao",
      image: "/placeholder.svg?height=400&width=600&text=AI+Marketing+Future",
      tags: ["AI", "Marketing", "Technology", "Future"],
      featured: true,
    },
    {
      id: 2,
      title: "Building Scalable E-commerce Platforms",
      excerpt:
        "Technical deep-dive into creating robust online stores that can handle massive traffic and transactions. Learn about microservices architecture, database optimization, and performance scaling strategies.",
      content: "Full article content would go here...",
      category: "Development",
      readTime: "8 min read",
      date: "Dec 12, 2024",
      author: "Deepanshi Gaur",
      image: "/deepanshi.jpg?height=400&width=600&text=E-commerce+Architecture",
      tags: ["E-commerce", "Development", "Scalability", "Architecture"],
      featured: false,
    },
    {
      id: 3,
      title: "Digital Transformation Success Stories",
      excerpt:
        "Real case studies of businesses that successfully transitioned from traditional to digital-first operations. Discover the strategies, challenges, and outcomes of major digital transformations.",
      content: "Full article content would go here...",
      category: "Case Studies",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      author: "Path Mathur",
      image: "/parth.jpg?height=400&width=600&text=Digital+Transformation",
      tags: ["Case Study", "Digital Transformation", "Business", "Success"],
      featured: false,
    },
    {
      id: 4,
      title: "Mobile-First Design Principles for 2024",
      excerpt:
        "Essential guidelines for creating mobile-optimized experiences that engage users and drive conversions. Learn about responsive design, touch interactions, and performance optimization.",
      content: "Full article content would go here...",
      category: "Design",
      readTime: "7 min read",
      date: "Dec 8, 2024",
      author: "Manan Sharma",
      image: "/team/manan.jpg?height=400&width=600&text=Mobile+Design+2024",
      tags: ["Mobile", "Design", "UX", "2024"],
      featured: false,
    },
    {
      id: 5,
      title: "The Rise of Progressive Web Apps",
      excerpt:
        "Understanding PWAs and their impact on user experience and business growth. Explore the benefits, implementation strategies, and real-world examples of successful PWA deployments.",
      content: "Full article content would go here...",
      category: "Development",
      readTime: "6 min read",
      date: "Dec 5, 2024",
      author: "Naresh Rao",
      image: "/placeholder.svg?height=400&width=600&text=Progressive+Web+Apps",
      tags: ["PWA", "Web Development", "Mobile", "Performance"],
      featured: false,
    },
    {
      id: 6,
      title: "Data-Driven Marketing Strategies",
      excerpt:
        "Leveraging analytics and customer data to create more effective marketing campaigns. Learn about attribution modeling, customer journey mapping, and ROI optimization techniques.",
      content: "Full article content would go here...",
      category: "Marketing",
      readTime: "9 min read",
      date: "Dec 3, 2024",
      author: "Deepanshi Gaur",
      image: "/placeholder.svg?height=400&width=600&text=Data+Driven+Marketing",
      tags: ["Marketing", "Analytics", "Data", "ROI"],
      featured: false,
    },
  ]

  const categories = ["All", "AI & Technology", "Development", "Case Studies", "Design", "Marketing"]

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

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
                href={item === "Home" ? "/" : `/#${item.toLowerCase()}`}
                className={`transition-colors ${
                  item === "Blog" ? "text-teal-600 font-semibold" : "text-slate-600 hover:text-teal-600"
                }`}
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <Link href="/#contact">
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
              Insights &
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent block">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest thoughts on technology, digital transformation, and industry
              trends.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
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
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && selectedCategory === "All" && !searchTerm && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4 bg-teal-100 text-teal-800">Featured Article</Badge>
              <Link
                href={`/blog/${featuredPost.title
                  .toLowerCase()
                  .replace(/\s+/g, "-")
                  .replace(/[^\w-]/g, "")}`}
              >
                <Card className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-lg cursor-pointer">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative overflow-hidden">
                      <Image
                        src={featuredPost.image || "/placeholder.svg"}
                        alt={featuredPost.title}
                        width={600}
                        height={400}
                        className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-teal-600 text-white">{featuredPost.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {featuredPost.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-teal-600 transition-colors">
                        {featuredPost.title}
                      </h2>
                      <p className="text-slate-600 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredPost.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700">
                        Read Full Article
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {searchTerm
                ? `Search Results for "${searchTerm}"`
                : selectedCategory === "All"
                  ? "Latest Articles"
                  : `${selectedCategory} Articles`}
            </h2>
            <p className="text-slate-600">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
            </p>
          </motion.div>

          {filteredPosts.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">No Articles Found</h3>
              <p className="text-slate-600 mb-6">Try adjusting your search terms or browse different categories.</p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="bg-teal-600 hover:bg-teal-700"
              >
                View All Articles
              </Button>
            </motion.div>
          ) : (
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              {regularPosts.map((post, index) => (
                <motion.div key={post.id} variants={fadeInUp}>
                  <Link
                    href={`/blog/${post.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^\w-]/g, "")}`}
                  >
                    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-0 shadow-lg cursor-pointer h-full">
                      <div className="relative overflow-hidden">
                        <Image
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          width={400}
                          height={250}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-slate-800">{post.category}</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6 flex flex-col flex-1">
                        <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-slate-600 mb-4 flex-1 line-clamp-3">{post.excerpt}</p>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 3 && (
                            <Badge variant="secondary" className="text-xs">
                              +{post.tags.length - 3}
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-teal-600 font-semibold group-hover:text-teal-700 text-sm">
                          Read More
                          <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on digital transformation, technology trends, and business growth delivered to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 flex-1"
              />
              <Button className="bg-teal-600 hover:bg-teal-700 px-8">Subscribe</Button>
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
                  <a href="/#portfolio" className="hover:text-teal-400 transition-colors">
                    Portfolio
                  </a>
                </li> */}
                <li>
                  <a href="/blog" className="hover:text-teal-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/#contact" className="hover:text-teal-400 transition-colors">
                    Contact
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
