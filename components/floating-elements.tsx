"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Large floating shapes */}
      <div
        className="absolute w-64 h-64 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-3xl floating"
        style={{
          top: "10%",
          left: "80%",
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />

      <div
        className="absolute w-48 h-48 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full blur-2xl floating-delayed"
        style={{
          top: "60%",
          left: "10%",
          transform: `translateY(${scrollY * -0.05}px)`,
        }}
      />

      <div
        className="absolute w-32 h-32 bg-gradient-to-r from-primary/15 to-secondary/15 rounded-full blur-xl floating"
        style={{
          top: "30%",
          right: "20%",
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      />

      {/* Small geometric shapes */}
      <div
        className="absolute w-8 h-8 bg-primary/20 rounded-lg floating"
        style={{
          top: "20%",
          left: "15%",
          transform: `translateY(${scrollY * 0.15}px) rotate(45deg)`,
        }}
      />

      <div
        className="absolute w-6 h-6 bg-secondary/30 rounded-full floating-delayed"
        style={{
          top: "70%",
          right: "15%",
          transform: `translateY(${scrollY * -0.1}px)`,
        }}
      />

      <div
        className="absolute w-10 h-10 bg-primary/25 rounded-lg floating"
        style={{
          top: "50%",
          left: "5%",
          transform: `translateY(${scrollY * 0.12}px) rotate(-30deg)`,
        }}
      />
    </div>
  )
}
