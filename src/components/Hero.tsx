import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Process", href: "#process" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-border-subtle bg-bg-primary/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-accent-brand rounded-lg flex items-center justify-center font-display font-bold text-white group-hover:rotate-12 transition-transform duration-300">
            V
          </div>
          <span className="font-display font-bold text-xl tracking-tight">Vedvix</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-muted hover:text-text-primary transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2.5 bg-accent-brand text-white text-sm font-bold rounded-full hover:bg-opacity-90 transition-all duration-300"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-bg-primary border-b border-border-subtle p-6 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-text-muted hover:text-text-primary"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="md:hidden w-full py-4 bg-accent-brand text-white font-bold rounded-xl flex items-center justify-center font-display"
          >
            Let's Talk
          </a>
        </motion.div>
      )}
    </nav>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 -left-1/4 w-[50%] h-[50%] bg-accent-brand/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-1/4 w-[40%] h-[40%] bg-accent-cta/10 blur-[100px] rounded-full" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent-brand/10 border border-accent-brand/20 text-accent-brand text-xs font-bold uppercase tracking-widest mb-6">
              Product Studio Based in Jaipur
            </span>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] md:leading-[0.9]">
              We Build Products <br />
              <span className="text-accent-brand italic">That Actually Ship.</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl leading-relaxed">
              From idea to live product — AI apps, SaaS platforms, and mobile experiences built with precision and speed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact"
                className="group px-8 py-4 bg-accent-brand text-white font-bold rounded-full flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all duration-300"
              >
                Start a Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#work"
                className="px-8 py-4 border border-border-subtle text-text-primary font-bold rounded-full hover:bg-white/5 transition-all duration-300 flex items-center justify-center"
              >
                See Our Work
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-8 flex items-center gap-2 text-text-muted text-sm font-medium"
            >
              <span>Trusted by 12+ product founders.</span>
              <a href="#about" className="text-accent-brand hover:underline font-bold">Learn more about us →</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
