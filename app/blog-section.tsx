// blog-section.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Target } from "lucide-react"
import { blogPosts } from "./data"

interface BlogSectionProps {
  setSelectedBlog: (id: number) => void
}

export function BlogSection({ setSelectedBlog }: BlogSectionProps) {
  return (
    <section id="blog" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[#E5E5E5]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-[#FF914D]/10 border border-[#FF914D]/20 rounded-full px-6 py-2 mb-6">
            <Target className="h-4 w-4 text-[#FF914D] mr-2" />
            <span className="text-sm font-medium text-[#FF914D]">Insights & Innovation</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#2E2E2E] mb-6">
            Latest from Our{" "}
            <span className="bg-gradient-to-r from-[#FF914D] to-[#962DE8] bg-clip-text text-transparent">Blog</span>
          </h2>
          <p className="text-xl text-[#2E2E2E]/70 max-w-3xl mx-auto">
            Stay ahead of the curve with insights, tutorials, and industry trends from our expert team.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Featured Article */}
          <Card
            className="group hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border-2 hover:border-[#962DE8] bg-gradient-to-br from-white to-[#E5E5E5]/50"
            onClick={() => setSelectedBlog(blogPosts[0].id)}
          >
            <div className="relative overflow-hidden">
              <img
                src={blogPosts[0].image || "/placeholder.svg"}
                alt={blogPosts[0].title}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block bg-[#FF914D] text-[#2E2E2E] px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {blogPosts[0].category}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#FF914D] transition-colors">
                  {blogPosts[0].title}
                </h3>
                <p className="text-white/80 text-sm">
                  {blogPosts[0].readTime} • {blogPosts[0].author}
                </p>
              </div>
            </div>
          </Card>

          {/* Other Articles */}
          <div className="space-y-6">
            {blogPosts.slice(1).map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border hover:border-[#FF914D] overflow-hidden"
                onClick={() => setSelectedBlog(post.id)}
              >
                <div className="flex">
                  <div className="relative overflow-hidden w-32 flex-shrink-0">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 flex-1">
                    <div className="flex items-center mb-2">
                      <Badge variant="secondary" className="bg-[#FF914D]/10 text-[#FF914D] border-[#FF914D]/20">
                        {post.category}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-[#2E2E2E] mb-2 group-hover:text-[#FF914D] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#2E2E2E]/70 text-sm mb-3 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center text-xs text-[#2E2E2E]/60 space-x-4">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#962DE8] text-[#962DE8] hover:bg-[#962DE8] hover:text-white rounded-full px-8 py-3 bg-transparent"
            onClick={() => alert("All articles page would be implemented here!")}
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}