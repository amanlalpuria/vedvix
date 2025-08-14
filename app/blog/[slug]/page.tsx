"use client"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag, Share2, BookOpen, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  // In a real app, you'd fetch this data based on the slug
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Digital Marketing",
      excerpt: "Exploring how artificial intelligence is revolutionizing marketing strategies and customer engagement.",
      content: `
        <h2>Introduction</h2>
        <p>Artificial Intelligence is no longer a futuristic concept—it's here, and it's transforming the digital marketing landscape in unprecedented ways. From predictive analytics to personalized content creation, AI is revolutionizing how businesses connect with their audiences and drive meaningful engagement.</p>
        
        <h2>The Current State of AI in Marketing</h2>
        <p>Today's marketing professionals are leveraging AI across multiple touchpoints:</p>
        <ul>
          <li><strong>Predictive Analytics:</strong> Forecasting customer behavior and market trends</li>
          <li><strong>Personalization:</strong> Creating tailored experiences for individual users</li>
          <li><strong>Chatbots and Virtual Assistants:</strong> Providing 24/7 customer support</li>
          <li><strong>Content Generation:</strong> Automating the creation of marketing materials</li>
        </ul>
        
        <h2>Key Benefits of AI-Driven Marketing</h2>
        <p>The integration of AI in marketing strategies offers numerous advantages:</p>
        
        <h3>1. Enhanced Customer Insights</h3>
        <p>AI algorithms can process vast amounts of customer data to identify patterns, preferences, and behaviors that would be impossible for humans to detect manually. This deep understanding enables marketers to create more targeted and effective campaigns.</p>
        
        <h3>2. Real-Time Personalization</h3>
        <p>With AI, businesses can deliver personalized experiences in real-time, adapting content, recommendations, and offers based on individual user behavior and preferences.</p>
        
        <h3>3. Improved ROI</h3>
        <p>By optimizing campaigns automatically and targeting the right audience with the right message at the right time, AI helps maximize marketing return on investment.</p>
        
        <h2>Emerging Trends and Technologies</h2>
        <p>Several exciting developments are shaping the future of AI in marketing:</p>
        
        <h3>Generative AI</h3>
        <p>Tools like GPT-4 and DALL-E are enabling marketers to create high-quality content, images, and videos at scale, reducing production costs and time-to-market.</p>
        
        <h3>Voice and Visual Search Optimization</h3>
        <p>As voice assistants and visual search become more prevalent, AI is helping businesses optimize their content for these new search modalities.</p>
        
        <h3>Predictive Customer Lifetime Value</h3>
        <p>Advanced AI models can now predict not just what customers will buy next, but their entire lifetime value, enabling more strategic resource allocation.</p>
        
        <h2>Challenges and Considerations</h2>
        <p>While AI offers tremendous opportunities, marketers must also navigate several challenges:</p>
        
        <h3>Data Privacy and Ethics</h3>
        <p>With increasing regulations like GDPR and CCPA, businesses must ensure their AI implementations respect customer privacy and comply with data protection laws.</p>
        
        <h3>Algorithm Bias</h3>
        <p>AI systems can perpetuate or amplify existing biases in data, leading to unfair or discriminatory outcomes. Regular auditing and diverse training data are essential.</p>
        
        <h3>Integration Complexity</h3>
        <p>Implementing AI solutions often requires significant technical expertise and integration with existing marketing technology stacks.</p>
        
        <h2>The Road Ahead</h2>
        <p>Looking forward, we can expect to see:</p>
        <ul>
          <li>More sophisticated AI models that understand context and emotion</li>
          <li>Increased automation of creative processes</li>
          <li>Better integration between AI tools and marketing platforms</li>
          <li>Enhanced focus on ethical AI practices</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>The future of AI in digital marketing is bright and full of possibilities. Businesses that embrace these technologies thoughtfully and ethically will be best positioned to create meaningful connections with their customers and drive sustainable growth.</p>
        
        <p>As we continue to explore the potential of AI in marketing, it's crucial to remember that technology should enhance, not replace, human creativity and empathy. The most successful marketing strategies will combine the power of AI with the irreplaceable human touch.</p>
      `,
      category: "AI & Technology",
      readTime: "5 min read",
      date: "Dec 15, 2024",
      author: "Naresh Rao",
      authorBio:
        "Sarah is our CTO with over 10 years of experience in AI and machine learning. She leads our technical innovation initiatives.",
      authorImage: "/placeholder.svg?height=100&width=100&text=Sarah+Johnson",
      image: "/placeholder.svg?height=600&width=1200&text=AI+Marketing+Future",
      tags: ["AI", "Marketing", "Technology", "Future"],
      featured: true,
    },
    // Add more blog posts here...
  ]

  // Find the current post based on slug
  const currentPost =
    blogPosts.find(
      (post) =>
        post.title
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]/g, "") === slug,
    ) || blogPosts[0] // Fallback to first post if not found

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter((post) => post.category === currentPost.category && post.id !== currentPost.id)
    .slice(0, 3)

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
                href={item === "Home" ? "/" : item === "Blog" ? "/blog" : `/#${item.toLowerCase()}`}
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

      {/* Breadcrumb */}
      <section className="pt-24 pb-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex items-center gap-2 text-sm text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="hover:text-teal-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-teal-600 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-900 font-medium">{currentPost.category}</span>
          </motion.div>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Link href="/blog">
                <Button variant="ghost" className="text-teal-600 hover:text-teal-700 mb-6 p-0">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Blog
                </Button>
              </Link>

              <Badge className="mb-4 bg-teal-100 text-teal-800">{currentPost.category}</Badge>

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">{currentPost.title}</h1>

              <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {currentPost.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">{currentPost.author}</div>
                    <div className="text-sm text-slate-500">Author</div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {currentPost.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {currentPost.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Article
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {currentPost.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-sm">
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-2xl mb-12">
                <Image
                  src={currentPost.image || "/placeholder.svg"}
                  alt={currentPost.title}
                  width={1200}
                  height={600}
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <motion.div
                className="lg:col-span-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div
                  className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-headings:font-bold prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:text-slate-700 prose-li:text-slate-700"
                  dangerouslySetInnerHTML={{ __html: currentPost.content }}
                />

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t border-slate-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">Share this article</h3>
                      <p className="text-slate-600">Help others discover this content</p>
                    </div>
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-8 bg-slate-50 rounded-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {currentPost.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{currentPost.author}</h4>
                      <p className="text-slate-600 mb-4">{currentPost.authorBio}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
                      >
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Sidebar */}
              <motion.div
                className="lg:col-span-1"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="sticky top-24 space-y-8">
                  {/* Table of Contents */}
                  <Card className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-4">Table of Contents</h3>
                      <ul className="space-y-2 text-sm">
                        <li>
                          <a href="#introduction" className="text-slate-600 hover:text-teal-600 transition-colors">
                            Introduction
                          </a>
                        </li>
                        <li>
                          <a href="#current-state" className="text-slate-600 hover:text-teal-600 transition-colors">
                            Current State of AI
                          </a>
                        </li>
                        <li>
                          <a href="#benefits" className="text-slate-600 hover:text-teal-600 transition-colors">
                            Key Benefits
                          </a>
                        </li>
                        <li>
                          <a href="#trends" className="text-slate-600 hover:text-teal-600 transition-colors">
                            Emerging Trends
                          </a>
                        </li>
                        <li>
                          <a href="#challenges" className="text-slate-600 hover:text-teal-600 transition-colors">
                            Challenges
                          </a>
                        </li>
                        <li>
                          <a href="#conclusion" className="text-slate-600 hover:text-teal-600 transition-colors">
                            Conclusion
                          </a>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  {/* Newsletter Signup */}
                  <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-slate-900 mb-2">Stay Updated</h3>
                      <p className="text-sm text-slate-600 mb-4">Get the latest insights delivered to your inbox.</p>
                      <Button className="w-full bg-teal-600 hover:bg-teal-700">Subscribe</Button>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Articles</h2>
                <p className="text-slate-600">Continue exploring {currentPost.category.toLowerCase()} topics</p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
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
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                            <span>{post.date}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-slate-600 text-sm line-clamp-3">{post.excerpt}</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

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
