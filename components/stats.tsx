export function Stats() {
  const stats = [
    { number: "150+", label: "Projects Completed", icon: "🚀" },
    { number: "50+", label: "Happy Clients", icon: "😊" },
    { number: "5+", label: "Years Experience", icon: "⭐" },
    { number: "24/7", label: "Support Available", icon: "💬" },
  ]

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center floating" style={{ animationDelay: `${index * 0.5}s` }}>
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
