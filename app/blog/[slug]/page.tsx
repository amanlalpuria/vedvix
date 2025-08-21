"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Share2 } from "lucide-react"
import { useParams } from "next/navigation"

const blogPosts = {
  "future-of-web-development-trends-to-watch-in-2024": {
    title: "The Future of Web Development: Trends to Watch in 2024",
    content: `
      <h2>The Evolution of Web Development</h2>
      <p>Web development is evolving at an unprecedented pace. From AI-powered development tools to advanced frameworks, the landscape is constantly shifting. In this comprehensive guide, we explore the key trends that will define web development in 2024 and beyond.</p>
      
      <h3>Key Trends Shaping 2024</h3>
      <ul>
        <li><strong>AI-Powered Development:</strong> Tools like GitHub Copilot and ChatGPT are revolutionizing how developers write code.</li>
        <li><strong>Edge Computing:</strong> Bringing computation closer to users for faster, more responsive applications.</li>
        <li><strong>WebAssembly:</strong> Enabling high-performance applications in the browser.</li>
        <li><strong>Progressive Web Apps:</strong> Bridging the gap between web and native applications.</li>
      </ul>
      
      <h3>The Impact on Businesses</h3>
      <p>These trends aren't just technical curiosities—they're reshaping how businesses approach digital transformation. Companies that embrace these technologies early will have a significant competitive advantage.</p>
      
      <h3>Conclusion</h3>
      <p>The future of web development is bright and full of possibilities. By staying informed about these trends and partnering with experienced developers, businesses can create exceptional digital experiences that drive growth and success.</p>
    `,
    image: "/futuristic-web-development.png",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    category: "Web Development",
  },
  "mobile-first-design-why-it-matters-more-than-ever": {
    title: "Mobile-First Design: Why It Matters More Than Ever",
    content: `
      <h2>The Mobile Revolution</h2>
      <p>With mobile traffic accounting for over 60% of web usage, mobile-first design isn't just a trend—it's a necessity. Learn how to create responsive, mobile-optimized experiences that delight users across all devices.</p>
      
      <h3>Why Mobile-First?</h3>
      <p>Mobile-first design ensures that your website provides an optimal experience on the smallest screens first, then progressively enhances for larger devices. This approach leads to:</p>
      <ul>
        <li>Better performance on mobile devices</li>
        <li>Improved user experience</li>
        <li>Higher conversion rates</li>
        <li>Better SEO rankings</li>
      </ul>
      
      <h3>Best Practices</h3>
      <p>Implementing mobile-first design requires careful consideration of user needs, content hierarchy, and technical constraints. Our team at Vedvix specializes in creating mobile-first experiences that drive results.</p>
    `,
    image: "/mobile-first-design.png",
    date: "Dec 10, 2024",
    readTime: "4 min read",
    category: "UI/UX Design",
  },
  "automation-revolution-streamlining-business-processes": {
    title: "Automation Revolution: Streamlining Business Processes",
    content: `
      <h2>The Power of Automation</h2>
      <p>Business automation is revolutionizing how companies operate. From workflow automation to AI-powered decision making, discover how automation can transform your business processes and drive growth.</p>
      
      <h3>Types of Business Automation</h3>
      <ul>
        <li><strong>Workflow Automation:</strong> Streamlining repetitive tasks and processes</li>
        <li><strong>Customer Service Automation:</strong> Chatbots and automated support systems</li>
        <li><strong>Marketing Automation:</strong> Personalized campaigns and lead nurturing</li>
        <li><strong>Data Processing:</strong> Automated reporting and analytics</li>
      </ul>
      
      <h3>Benefits for Your Business</h3>
      <p>Implementing automation can lead to significant improvements in efficiency, cost reduction, and customer satisfaction. Our automation solutions at Vedvix are designed to scale with your business needs.</p>
    `,
    image: "/business-automation.png",
    date: "Dec 5, 2024",
    readTime: "6 min read",
    category: "Automation",
  },
}

export default function BlogPost() {
  const params = useParams()
  const slug = params.slug as string
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-card pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <Button onClick={() => (window.location.href = "/blog")}>Back to Blog</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-card pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={() => (window.location.href = "/blog")} className="flex items-center">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.title,
                  url: window.location.href,
                })
              } else {
                navigator.clipboard.writeText(window.location.href)
                alert("Link copied to clipboard!")
              }
            }}
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>

        <div className="mb-8">
          <div className="flex items-center mb-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium mr-4">
              {post.category}
            </span>
            <span className="text-muted-foreground">{post.date}</span>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-muted-foreground">{post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">{post.title}</h1>
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>

        <div className="prose prose-lg max-w-none text-foreground" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-12 p-6 glassmorphism rounded-lg text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4">Ready to Transform Your Business?</h3>
          <p className="text-muted-foreground mb-6">
            Let's discuss how Vedvix can help you implement these cutting-edge solutions.
          </p>
          <Button
            size="lg"
            className="magnetic-hover animate-pulse-glow"
            onClick={() => (window.location.href = "/#services")}
          >
            Start Your Revolution
          </Button>
        </div>
      </div>
    </div>
  )
}
