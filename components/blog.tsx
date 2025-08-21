"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape and how they impact modern applications.",
    image: "/futuristic-web-development.png",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
  },
  {
    title: "Mobile-First Design: Why It Matters More Than Ever",
    excerpt: "Understanding the importance of mobile-first approach in creating exceptional user experiences.",
    image: "/mobile-first-design.png",
    date: "Dec 10, 2024",
    readTime: "4 min read",
    category: "UI/UX Design",
  },
  {
    title: "Automation Revolution: Streamlining Business Processes",
    excerpt: "How intelligent automation is transforming businesses and improving operational efficiency.",
    image: "/business-automation.png",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Automation",
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-20 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold gradient-text mb-6">Latest Insights</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest trends, tips, and insights from our experts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={post.title} className="overflow-hidden magnetic-hover glassmorphism border-2 border-border/50">
              <div className="relative">
                <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 gradient-text leading-tight">{post.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

                <Button
                  variant="outline"
                  size="sm"
                  className="magnetic-hover bg-transparent"
                  onClick={() => {
                    window.location.href = `/blog/${post.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^a-z0-9-]/g, "")}`
                  }}
                >
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="magnetic-hover animate-pulse-glow"
            onClick={() => {
              window.location.href = "/blog"
            }}
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
