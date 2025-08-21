"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const allPosts = [
  {
    title: "The Future of Web Development",
    excerpt: "Exploring cutting-edge technologies that will shape the next decade of digital experiences.",
    author: "Vedvix Team",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Technology",
  },
  {
    title: "AI-Powered Design Revolution",
    excerpt: "How artificial intelligence is transforming the way we approach user experience design.",
    author: "Design Team",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    category: "Design",
  },
  {
    title: "Mobile-First Development Strategies",
    excerpt: "Best practices for creating mobile experiences that convert and engage users.",
    author: "Mobile Team",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    category: "Mobile",
  },
  {
    title: "Automation in Modern Business",
    excerpt: "How smart automation can transform your business operations and boost productivity.",
    author: "Automation Team",
    date: "Dec 8, 2024",
    readTime: "9 min read",
    category: "Automation",
  },
  {
    title: "Psychology of User Interface Design",
    excerpt: "Understanding the psychological principles that make interfaces intuitive and engaging.",
    author: "UX Team",
    date: "Dec 5, 2024",
    readTime: "5 min read",
    category: "UX",
  },
  {
    title: "Building Scalable Web Applications",
    excerpt: "Architecture patterns and best practices for applications that grow with your business.",
    author: "Development Team",
    date: "Dec 3, 2024",
    readTime: "10 min read",
    category: "Development",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-3d mb-6">
              <span className="gradient-text text-holographic">ALL</span>
              <br />
              <span className="text-neon">ARTICLES</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, innovations, and industry expertise from the Vedvix team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
              <Card
                key={post.title}
                className="p-6 glassmorphism border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-medium">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-bold gradient-text">{post.title}</h3>
                  <p className="text-muted-foreground">{post.excerpt}</p>

                  <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                    <div className="text-sm text-muted-foreground">
                      <div>{post.author}</div>
                      <div>{post.date}</div>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="magnetic-hover border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                      onClick={() => {
                        window.location.href = `/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`
                      }}
                    >
                      Read More
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
