"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function About() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-3d mb-6">
            <span className="gradient-text text-holographic">ABOUT</span>
            <br />
            <span className="text-neon">VEDVIX</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We are digital revolutionaries who transform businesses through cutting-edge technology. Our mission is to
            create digital experiences that don't just meet expectations—they shatter them.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold gradient-text">Our Vision</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To be the catalyst that transforms ordinary businesses into digital empires. We believe in the power of
              innovation, creativity, and relentless execution.
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full mr-4" />
                <span className="font-medium">10+ Years of Innovation</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full mr-4" />
                <span className="font-medium">500+ Revolutionary Projects</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full mr-4" />
                <span className="font-medium">99% Client Satisfaction</span>
              </div>
            </div>

            <Button
              className="magnetic-hover bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary"
              onClick={() => {
                const element = document.getElementById("services")
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Start Your Revolution
            </Button>
          </div>

          <Card className="p-8 glassmorphism border-2 border-primary/20">
            <h3 className="text-2xl font-bold gradient-text mb-4">Why Choose Vedvix?</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                <h4 className="font-bold text-primary mb-2">Innovation First</h4>
                <p className="text-sm text-muted-foreground">
                  We don't follow trends, we create them with cutting-edge technology.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-secondary/10 to-primary/10">
                <h4 className="font-bold text-secondary mb-2">Results Driven</h4>
                <p className="text-sm text-muted-foreground">
                  Every project is designed to maximize your ROI and business growth.
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 to-secondary/10">
                <h4 className="font-bold text-primary mb-2">24/7 Support</h4>
                <p className="text-sm text-muted-foreground">
                  We're with you every step of your digital transformation journey.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
