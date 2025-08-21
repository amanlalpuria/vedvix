"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isRevealed, setIsRevealed] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)

    setTimeout(() => setIsRevealed(true), 500)

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background"
    >
      <div
        className="absolute w-96 h-96 morph-bg blur-3xl transition-all duration-1000 ease-out opacity-30"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />

      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-secondary/40 to-primary/40 blur-2xl transition-all duration-700 ease-out animate-morph opacity-20"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          animationDelay: "2s",
        }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1
          className={`text-6xl md:text-8xl font-bold mb-6 text-3d ${isRevealed ? "animate-revolutionary-entrance" : "opacity-0"}`}
        >
          <span className="gradient-text text-holographic animate-gradient">VEDVIX</span>
          <br />
          <span className="text-foreground text-neon">Revolution</span>
        </h1>

        <p
          className={`text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          We don't just build websites. We craft digital experiences that revolutionize how your customers interact with
          your brand.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Button
            size="lg"
            className="revolutionary-card animate-pulse-glow text-lg px-8 py-4 bg-primary hover:bg-secondary asymmetric-layout"
            onClick={() => scrollToSection("services")}
          >
            Start Revolution
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="revolutionary-card text-lg px-8 py-4 bg-transparent border-primary hover:bg-primary hover:text-primary-foreground asymmetric-layout"
            onClick={() => scrollToSection("portfolio")}
          >
            See The Future
          </Button>
        </div>
      </div>

      <div className="absolute top-20 left-10 w-20 h-20 morph-bg floating opacity-60 interactive-hover" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-secondary to-primary rounded-full floating-delayed opacity-40 interactive-hover" />
      <div
        className="absolute bottom-40 left-20 w-24 h-24 morph-bg floating opacity-50 interactive-hover"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute bottom-20 right-10 w-12 h-12 bg-gradient-to-r from-secondary to-primary rounded-full floating-delayed opacity-60 interactive-hover" />

      <div
        className="absolute top-1/3 left-1/4 w-8 h-32 bg-gradient-to-b from-primary/40 to-transparent floating opacity-30 asymmetric-layout"
        style={{ animationDelay: "3s" }}
      />
      <div className="absolute bottom-1/3 right-1/4 w-32 h-8 bg-gradient-to-r from-secondary/40 to-transparent floating-delayed opacity-30 asymmetric-layout" />
    </section>
  )
}
