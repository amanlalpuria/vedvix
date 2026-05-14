import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "motion/react";
import { 
  Bot, 
  Layers, 
  Smartphone, 
  Database, 
  CheckCircle2, 
  Zap, 
  Target,
  ArrowUpRight,
  ArrowRight,
  Github,
  Twitter,
  Linkedin,
  Instagram,
  X
} from "lucide-react";

// --- Marquee ---
export function Marquee() {
  const techs = ["React", "Node.js", "Python", "OpenAI", "AWS", "Flutter", "PostgreSQL", "Tailwind", "Next.js", "Firebase", "TypeScript", "Docker"];
  
  return (
    <div className="py-12 border-y border-border-subtle bg-bg-secondary/50 overflow-hidden">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-16 whitespace-nowrap px-8"
      >
        {[...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-4 text-2xl font-display font-medium text-text-muted hover:text-text-primary transition-colors cursor-default">
            <span className="w-2 h-2 bg-accent-brand rounded-full" />
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// --- Services ---
export function Services() {
  const services = [
    {
      title: "AI Product Development",
      desc: "Custom LLM integrations, AI agents, and predictive models built into modern interfaces.",
      icon: <Bot className="text-accent-brand" size={32} />
    },
    {
      title: "SaaS & Web Platforms",
      desc: "Robust, scalable web applications designed to handle growth and high performance.",
      icon: <Layers className="text-accent-brand" size={32} />
    },
    {
      title: "Mobile Apps",
      desc: "Native-quality cross-platform apps that focus on user retention and smooth UX.",
      icon: <Smartphone className="text-accent-brand" size={32} />
    },
    {
      title: "API & Backend Systems",
      desc: "Battle-tested backend architectures that serve as the reliable core of your product.",
      icon: <Database className="text-accent-brand" size={32} />
    }
  ];

  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Our Expertise</h2>
          <p className="text-xl text-text-muted max-w-2xl">We focus on the tech, so you can focus on the business. Modern solutions for modern companies.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                y: -10,
                scale: 1.01,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="glass-card p-8 rounded-[var(--radius-card)] hover-glow"
            >
              <div className="mb-6">{s.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-text-muted leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#about" className="text-accent-brand font-bold inline-flex items-center gap-2 hover:gap-4 transition-all group">
            Discover our philosophy <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

// --- Portfolio ---
const PROJECTS = [
  {
    name: "Sipstr",
    desc: "Beverage discovery and community platform for discovery-first users.",
    tags: ["Mobile", "Community", "Flutter"],
    link: "https://sipstr.com",
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=800&auto=format&fit=crop",
    metadata: {
      client: "Sipstr Inc.",
      year: "2024",
      service: "Full Product Design & Development"
    },
    details: {
      challenge: "To create a seamless discovery experience for beverage enthusiasts while building a scalable community platform.",
      solution: "Developed a cross-platform mobile app using Flutter with a real-time discovery engine and social features.",
      impact: "Successfully launched with 5,000+ active users and high engagement in community events.",
      techStack: ["Flutter", "Firebase", "Google Maps API", "Node.js"],
      features: ["Real-time Geo-discovery", "Social Community Feeds", "Smart Personalization", "Event Management"]
    }
  },
  {
    name: "Veraeaty.ai",
    desc: "AI-powered platform redefining the food and eating experience through smart data.",
    tags: ["AI", "SaaS", "Next.js"],
    link: "https://veraeaty.ai",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
    metadata: {
      client: "Veraeaty Labs",
      year: "2024",
      service: "AI Integration & Frontend Architecture"
    },
    details: {
      challenge: "Integrating complex nutrition data and user preferences into a real-time AI recommendation engine.",
      solution: "Built a robust Next.js platform with custom LLM integrations for personalized dietary planning.",
      impact: "Reduced meal planning time by 70% for early beta users and secured seed funding.",
      techStack: ["Next.js", "Gemini AI", "PostgreSQL", "Tailwind CSS"],
      features: ["AI Meal Planner", "Nutritional Analysis", "Smart Grocery Lists", "Chef-curated Database"]
    }
  },
  {
    name: "Kaps9",
    desc: "Developer-first API platform built for seamless backend integrations.",
    tags: ["Backend", "API", "Node.js"],
    link: "https://dev.kaps9.in",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
    metadata: {
      client: "Kaps9 Tech",
      year: "2023",
      service: "Backend Infrastructure & API Design"
    },
    details: {
      challenge: "Providing a high-performance, low-latency API infrastructure that is easy for developers to adopt.",
      solution: "Architected a distributed Node.js backend with automated documentation and sandbox environments.",
      impact: "Enables thousands of API calls daily with 99.9% uptime for partner integrations.",
      techStack: ["Node.js", "Redis", "Docker", "Express"],
      features: ["Zero-latency Endpoint", "Auto-doc Generation", "Developer Sandbox", "Usage Analytics"]
    }
  },
  {
    name: "EcoTrack",
    desc: "Sustainability dashboard for enterprise carbon footprint monitoring.",
    tags: ["SaaS", "Data", "React"],
    link: "https://ecotrack.vedvix.ai",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    metadata: {
      client: "EcoTrack Global",
      year: "2023",
      service: "Data Visualization & Dashboard Design"
    },
    details: {
      challenge: "Aggregating complex environmental data into an intuitive dashboard for corporate stakeholders.",
      solution: "Created a high-fidelity dashboard with real-time data visualization and automated reporting.",
      impact: "Helping 50+ enterprises track and reduce their carbon footprint efficiently.",
      techStack: ["React", "D3.js", "Chart.js", "AWS"],
      features: ["Real-time Emissions Tracking", "Predictive Forecasting", "Regulatory Compliance Reports", "Interactive Geo-maps"]
    }
  },
  {
    name: "Shell Consultancy",
    desc: "Modern talent acquisition and upskilling platform bridging the gap between education and employment.",
    tags: ["Recruitment", "EdTech", "Platform"],
    link: "https://shellconsultancy.com",
    image: "https://images.unsplash.com/photo-1521791136364-798a7bc0d262?q=80&w=800&auto=format&fit=crop",
    metadata: {
      client: "Shell Group",
      year: "2023",
      service: "End-to-End Platform Development"
    },
    details: {
      challenge: "Creating a unified system for tracking recruitment pipelines while managing industry-aligned training programs.",
      solution: "Built a robust dashboard for talent management and progress tracking for upskilling graduates.",
      impact: "Enabled efficient placement for thousands of candidates with major corporate partners.",
      techStack: ["React", "PostgreSQL", "Node.js", "Redux"],
      features: ["AI-powered Matching", "Skill Assessment Engine", "Recruitment Pipeline CRM", "LMS Integration"]
    }
  },
  {
    name: "Urban Culture",
    desc: "Premium on-demand beauty and wellness platform bringing salon-grade services to the doorstep.",
    tags: ["Marketplace", "Service", "App"],
    link: "https://urbanculture.me",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop",
    metadata: {
      client: "Urban Culture Middle East",
      year: "2022",
      service: "Marketplace Tech & Mobile Development"
    },
    details: {
      challenge: "Orchestrating a large network of service professionals to provide consistent, high-quality beauty services.",
      solution: "Developed a real-time booking and dispatch system with integrated quality control features.",
      impact: "Serviced 10,000+ customers across multiple cities with a 4.8 user rating.",
      techStack: ["React Native", "Firebase", "Twilio", "Stripe"],
      features: ["Real-time Provider Tracking", "Dynamic Slot Booking", "In-app Payments", "QR-code Verification"]
    }
  },
  {
    name: "Maruti Industries",
    desc: "Enterprise glass manufacturing solution powering the industrial, architectural, and appliance sectors.",
    tags: ["Manufacturing", "Industrial", "ERP"],
    link: "https://www.marutind.com",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop",
    metadata: {
      client: "Maruti Industries Ltd.",
      year: "2022",
      service: "Digital Transformation & B2B Portal"
    },
    details: {
      challenge: "Modernizing a 25-year-old manufacturing operation to improve digital footprint and supply chain visibility.",
      solution: "Implemented a digital product showcase and integrated inquiry system for global B2B clients.",
      impact: "Streamlined client communication and expanded global export capabilities with improved digital presence.",
      techStack: ["React", "Next.js", "GraphQL", "Tailwind"],
      features: ["B2B Inquiry Portal", "Digital Product Catalog", "Inventory Sync", "Quote Generator"]
    }
  }
];


function ProjectCard({ project, index, onClick }: { project: any; index: number; onClick: () => void; key?: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [7, -7]);
  const baseRotateY = useTransform(mouseX, [-0.5, 0.5], [-7, 7]);
  
  // Combine flip with mouse tilt
  const flip = useSpring(isHovered ? 180 : 0, { stiffness: 150, damping: 22 });
  const rotateY = useTransform([baseRotateY, flip], ([r, f]) => (r as number) + (f as number));

  // Multiple layers for parallax depth
  const bgX = useTransform(mouseX, [-0.5, 0.5], [-35, 35]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], [-35, 35]);
  
  const midX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const midY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);

  const noiseX = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);
  const noiseY = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;
    
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      variants={{
        hidden: { 
          opacity: 0, 
          y: 40, 
          scale: 0.98, 
          filter: "blur(8px)" 
        },
        show: { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          filter: "blur(0px)",
          transition: { 
            duration: 1, 
            ease: [0.25, 1, 0.5, 1] 
          } 
        }
      }}
      className="shrink-0" 
      style={{ perspective: 2000 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        whileHover={{ 
          y: -10,
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
        onMouseMove={handleMouseMove}
        onClick={onClick}
        className="w-[85vw] md:w-[600px] h-[550px] md:h-[650px] group glass-card rounded-[40px] hover-glow cursor-pointer relative"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform, opacity, filter"
        }}
      >
        {/* FRONT SIDE */}
        <div className="absolute inset-0 w-full h-full p-6 md:p-10 flex flex-col rounded-[40px] overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
          {/* Background Image (Clearer on Front) */}
          <motion.div 
            style={{ scale: 1.1, x: useTransform(mouseX, [-0.5, 0.5], [20, -20]), y: useTransform(mouseY, [-0.5, 0.5], [20, -20]) }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent" />
          </motion.div>

          {/* Parallax Grid Pattern (Layer -1 - Deepest) */}
          <motion.div 
            style={{
              x: useTransform(mouseX, [-0.5, 0.5], [60, -60]),
              y: useTransform(mouseY, [-0.5, 0.5], [60, -60]),
              translateZ: -120,
              opacity: useTransform(mouseX, [-0.5, 0.5], [0.05, 0.1])
            }}
            className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"
          />

          {/* Subtle Background Parallax Gradient (Layer 0) */}
          <motion.div 
            style={{
              x: useTransform(mouseX, [-0.5, 0.5], [50, -50]),
              y: useTransform(mouseY, [-0.5, 0.5], [50, -50]),
              scale: 1.6,
              translateZ: -100
            }}
            className="absolute inset-0 bg-gradient-to-br from-accent-brand/15 via-transparent to-accent-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
          />

          {/* Layered Floating Pattern (New Deep Layer) */}
          <motion.div
            style={{
              x: useTransform(mouseX, [-0.5, 0.5], [-30, 30]),
              y: useTransform(mouseY, [-0.5, 0.5], [-30, 30]),
              translateZ: -90
            }}
            className="absolute inset-0 opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none overflow-hidden"
          >
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white rounded-full bg-white/5 backdrop-blur-sm" />
            <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-white rounded-full bg-white/5 backdrop-blur-sm" />
          </motion.div>

          {/* Interactive Background Glow (Layer 0.2) */}
          <motion.div 
            style={{
              x: bgX,
              y: bgY,
              scale: 1.6,
              filter: "blur(80px)",
              translateZ: -60
            }}
            className="absolute inset-0 bg-accent-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full"
          />

          {/* Subtle Noise Texture (Layer 0.5) */}
          <motion.div 
            style={{ x: noiseX, y: noiseY, translateZ: -30 }}
            className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"
          />

          {/* Background Number (Layer 1) */}
          <motion.div 
            style={{ x: midX, y: midY, translateZ: -20 }}
            className="absolute top-10 right-10 z-20 font-display font-black text-6xl text-white/5 pointer-events-none group-hover:text-accent-brand/20 transition-all duration-700"
          >
            0{index + 1}
          </motion.div>

          {/* Inner Content Area */}
          <div className="relative h-full flex flex-col" style={{ transformStyle: "preserve-3d" }}>
            {/* Preview Image Block (Layer 2) */}
            <div className="flex-1 bg-bg-primary/50 overflow-hidden relative rounded-[24px] mb-8 border border-border-subtle group-hover:border-accent-brand/20 transition-colors" style={{ transformStyle: "preserve-3d" }}>
              {/* Animated Background Pattern */}
              <motion.div 
                style={{ x: bgX, y: bgY, scale: 1.2 }}
                className="absolute inset-0 bg-gradient-to-tr from-accent-brand/20 via-transparent to-accent-brand/10 p-12 flex items-center justify-center"
              >
                <span className="text-5xl md:text-8xl font-black opacity-10 select-none uppercase tracking-tighter transition-all duration-700 group-hover:scale-110 group-hover:opacity-30">{project.name}</span>
              </motion.div>
            </div>

            {/* Text Content (Layer 4) */}
            <div className="relative z-10 pb-4" style={{ transform: "translateZ(30px)" }}>
              <h3 className="text-4xl md:text-6xl font-black mb-2 leading-none">
                {project.name}
              </h3>
              <p className="text-accent-brand text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2">
                Flip for details <ArrowRight size={12} />
              </p>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div 
          className="absolute inset-0 w-full h-full p-8 md:p-12 flex flex-col justify-between bg-bg-secondary/60 backdrop-blur-3xl overflow-hidden rounded-[40px] border border-accent-brand/30" 
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
           {/* Background number flipped with Parallax */}
           <motion.div 
             style={{ x: midX, y: midY, translateZ: -30 }}
             className="absolute top-10 left-10 z-0 font-display font-black text-6xl text-white/5 pointer-events-none group-hover:text-accent-brand/10 transition-colors duration-700"
           >
             0{index + 1}
           </motion.div>

           {/* Floating Background Glow (Back Side) */}
           <motion.div
             style={{ x: bgX, y: bgY, scale: 2, translateZ: -50 }}
             className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent-brand/10 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
           />

           <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((t: string) => (
                  <span key={t} className="px-3 py-1 bg-accent-brand/10 border border-accent-brand/20 text-accent-brand text-[10px] font-black uppercase tracking-widest rounded-full">{t}</span>
                ))}
              </div>
              
            <h3 className="text-3xl md:text-5xl font-black mb-4 text-accent-brand leading-tight">
              {project.name}
            </h3>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted border border-white/10 px-3 py-1 rounded-full">{project.metadata.year}</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted border border-white/10 px-3 py-1 rounded-full">{project.metadata.service}</span>
            </div>
            
            <p className="text-lg md:text-2xl text-text-primary mb-8 leading-relaxed font-medium line-clamp-3 md:line-clamp-4">
              {project.desc}
            </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-brand/20 flex items-center justify-center text-accent-brand">
                    <Target size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">Client</p>
                    <p className="font-bold text-sm md:text-base">{project.metadata.client}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-accent-brand/20 flex items-center justify-center text-accent-brand">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-text-muted">Impact</p>
                    <p className="font-bold text-sm md:text-base line-clamp-1">{project.details.impact}</p>
                  </div>
                </div>
              </div>
           </div>

           <div className="relative z-10 pt-8 border-t border-white/5 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-accent-brand">Project • {project.metadata.year}</span>
                <div className="flex -space-x-2">
                  {[1,2,3].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-bg-secondary bg-accent-brand/20 flex items-center justify-center text-[10px] font-bold">
                      {project.name?.[i] || "V"}
                    </div>
                  ))}
                </div>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-white text-black font-black text-lg rounded-2xl flex items-center justify-center gap-3 shadow-2xl"
              >
                Open Case Study <ArrowUpRight size={20} />
              </motion.div>
           </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ArchiveCard({ project, index, onClick }: { project: any; index: number; onClick: () => void; key?: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const baseRotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);
  
  const flip = useSpring(isHovered ? 180 : 0, { stiffness: 150, damping: 22 });
  const rotateY = useTransform([baseRotateY, flip], ([r, f]) => (r as number) + (f as number));

  const bgX = useTransform(mouseX, [-0.5, 0.5], [-25, 25]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], [-25, 25]);
  
  const midX = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const midY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);

  const noiseX = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const noiseY = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = event.clientX - rect.left;
    const mouseYPos = event.clientY - rect.top;
    
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      variants={{
        hidden: { 
          opacity: 0, 
          y: 30, 
          scale: 0.99, 
          filter: "blur(4px)" 
        },
        show: { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          filter: "blur(0px)",
          transition: { 
            duration: 0.8, 
            ease: [0.25, 1, 0.5, 1] 
          }
        }
      }}
      className="shrink-0" 
      style={{ perspective: 1500 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        whileHover={{ 
          y: -8,
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
        whileTap={{ scale: 0.98 }}
        onMouseMove={handleMouseMove}
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d",
          willChange: "transform, opacity, filter"
        }}
        className="w-[85vw] md:w-[480px] h-[450px] md:h-[520px] glass-card rounded-[40px] hover-glow group cursor-pointer relative"
        onClick={onClick}
      >
        {/* FRONT FACE */}
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between rounded-[40px] overflow-hidden" style={{ backfaceVisibility: "hidden" }}>
          <motion.div 
            style={{ scale: 1.2, x: useTransform(mouseX, [-0.5, 0.5], [15, -15]), y: useTransform(mouseY, [-0.5, 0.5], [15, -15]) }}
            className="absolute inset-0 z-0"
          >
             <img 
               src={project.image} 
               alt={project.name} 
               className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-700 blur-[1px] group-hover:blur-0" 
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-black/40" />
          </motion.div>

          {/* Parallax Grid Pattern (Layer -1) */}
          <motion.div 
            style={{
              x: useTransform(mouseX, [-0.5, 0.5], [40, -40]),
              y: useTransform(mouseY, [-0.5, 0.5], [40, -40]),
              translateZ: -120,
              opacity: 0.05
            }}
            className="absolute inset-0 bg-[radial-gradient(#ffffff_1.5px,transparent_1.5px)] [background-size:32px_32px] pointer-events-none"
          />

          {/* Parallax Gradient */}
          <motion.div 
            style={{
              x: useTransform(mouseX, [-0.5, 0.5], [30, -30]),
              y: useTransform(mouseY, [-0.5, 0.5], [30, -30]),
              scale: 1.4,
              translateZ: -100
            }}
            className="absolute inset-0 bg-gradient-to-tr from-accent-brand/10 via-transparent to-accent-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"
          />

          <motion.div 
            style={{ x: bgX, y: bgY, scale: 1.6, translateZ: -60 }}
            className="absolute inset-0 bg-accent-brand/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none rounded-full"
          />

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center" style={{ transformStyle: "preserve-3d" }}>
            <motion.div 
              style={{ x: midX, y: midY, translateZ: 50 }}
              className="w-20 h-20 md:w-24 md:h-24 bg-accent-brand/10 border border-accent-brand/20 rounded-[32px] flex items-center justify-center text-accent-brand mb-8 shadow-2xl"
            >
              <Layers size={40} className="md:w-[48px] md:h-[48px]" />
            </motion.div>
            <h3 className="text-4xl md:text-5xl font-black mb-4" style={{ transform: "translateZ(30px)" }}>{project.name}</h3>
            <p className="text-accent-brand text-xs font-black uppercase tracking-[0.4em]" style={{ transform: "translateZ(20px)" }}>Flip for Details</p>
          </div>
        </div>

        {/* BACK FACE */}
        <div 
          className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between bg-bg-secondary/80 backdrop-blur-2xl rounded-[40px] border border-accent-brand/20" 
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className="relative z-10">
            <div className="flex justify-between items-center mb-10">
              <div className="flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-widest text-accent-brand">
                 {project.tags.slice(0, 1).map((t: string) => (
                   <span key={t} className="px-3 py-1 bg-accent-brand/10 border border-accent-brand/20 rounded-full">{t}</span>
                 ))}
              </div>
              <motion.div 
                style={{ x: midX, y: midY, translateZ: -20 }}
                className="text-white/5 font-black text-3xl group-hover:text-accent-brand/10 transition-colors duration-700"
              >
                0{index + 1}
              </motion.div>
            </div>
            
            <h3 className="text-3xl font-black mb-2 text-accent-brand">{project.name}</h3>
            <div className="flex items-center gap-3 mb-6">
               <span className="text-[9px] font-black uppercase tracking-widest text-text-muted border border-white/5 px-2 py-0.5 rounded-full">{project.metadata.year}</span>
               <span className="text-[9px] font-black uppercase tracking-widest text-text-muted border border-white/5 px-2 py-0.5 rounded-full">{project.tags[0]}</span>
            </div>
            <p className="text-text-muted text-lg mb-8 line-clamp-4 font-medium leading-relaxed">{project.desc}</p>
          </div>
          
          <div className="relative z-10 pt-8 border-t border-white/5">
             <motion.div 
               whileHover={{ scale: 1.05 }}
               className="w-full py-4 bg-accent-brand text-white font-black rounded-xl flex items-center justify-center gap-2 shadow-xl"
             >
               Case Study <ArrowUpRight size={18} />
             </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<null | typeof PROJECTS[0]>(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [archiveProgress, setArchiveProgress] = useState(0);
  const archiveScrollRef = useRef<HTMLDivElement>(null);
  
  // Drag to scroll logic
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!archiveScrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - archiveScrollRef.current.offsetLeft);
    setScrollLeft(archiveScrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !archiveScrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - archiveScrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    archiveScrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setIsArchiveOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Body scroll lock
  useEffect(() => {
    if (selectedProject || isArchiveOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject, isArchiveOpen]);

  return (
    <section id="work" className="py-32 bg-bg-secondary/30 relative overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto px-6 mb-20"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">Built to Impact</h2>
            <p className="text-xl text-text-muted max-w-xl">A selection of products we've brought to life recently.</p>
          </motion.div>
          <motion.button 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            onClick={() => setIsArchiveOpen(true)}
            className="text-accent-brand font-bold flex items-center gap-2 hover:gap-4 transition-all group"
          >
            View Archive <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
          </motion.button>
        </div>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <div className="relative group/scroll w-full">
        <motion.div 
          className="flex overflow-x-auto gap-8 px-6 md:px-[calc((100vw-min(1280px,94vw))/2)] pb-12 no-scrollbar snap-x snap-mandatory scroll-smooth"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          onWheel={(e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
              const container = e.currentTarget;
              container.scrollTo({
                left: container.scrollLeft + e.deltaY * 2,
                behavior: 'auto'
              });
              e.preventDefault();
            }
          }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
              }
            }
          }}
        >
          {PROJECTS.length > 0 ? (
            PROJECTS.map((p, i) => (
              <ProjectCard key={i} project={p} index={i} onClick={() => setSelectedProject(p)} />
            ))
          ) : (
            <div className="flex-shrink-0 w-full py-32 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-text-muted mb-6 opacity-20">
                <Layers size={40} />
              </div>
              <p className="text-2xl text-text-muted font-medium italic opacity-50 tracking-tight">No projects to display yet.</p>
            </div>
          )}
          {PROJECTS.length > 0 && (
            <>
              {/* End Spacer */}
              <div className="flex-shrink-0 w-6 md:w-[calc((100vw-min(1280px,94vw))/2)]" />
            </>
          )}
        </motion.div>
        
        {/* Scroll Hint */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-text-muted text-xs font-bold uppercase tracking-widest opacity-50 group-hover/scroll:opacity-100 transition-opacity pointer-events-none">
          <span>Scroll to Explore</span>
          <div className="h-[1px] w-12 bg-border-subtle" />
        </div>
      </div>

      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 40, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-bg-secondary border border-white/5 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[32px] md:rounded-[48px] shadow-2xl relative custom-scrollbar"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="fixed top-8 right-8 p-4 rounded-full bg-white/10 hover:bg-accent-brand text-white transition-all z-[210] lg:absolute shadow-2xl"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>

              <div className="relative">
                {/* Modal Header/Hero */}
                <div className="px-6 md:px-16 pt-24 md:pt-32 pb-16 bg-gradient-to-b from-accent-brand/15 via-accent-brand/5 to-transparent relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-accent-brand/20 blur-[100px] rounded-full" />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[30%] h-[50%] bg-accent-brand/10 blur-[80px] rounded-full" />
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10"
                  >
                    <div className="flex flex-wrap gap-2 mb-8">
                      <span className="px-4 py-1.5 bg-accent-brand text-white text-[10px] font-black uppercase tracking-widest rounded-full">{selectedProject.metadata.year}</span>
                      {selectedProject.tags.map(t => (
                        <span key={t} className="px-4 py-1.5 bg-white/5 border border-white/10 text-text-muted text-[10px] font-black uppercase tracking-widest rounded-full">{t}</span>
                      ))}
                    </div>
                    <h3 className="text-6xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter mix-blend-difference">{selectedProject.name}</h3>
                    <p className="text-2xl md:text-4xl text-text-primary mb-16 leading-tight font-medium max-w-4xl tracking-tight">{selectedProject.desc}</p>
                    
                    {/* Quick Metadata Bar */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 py-12 border-y border-white/10">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-brand mb-3">Client</p>
                        <p className="text-xl md:text-2xl font-bold tracking-tight text-white">{selectedProject.metadata.client}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-brand mb-3">Year</p>
                        <p className="text-xl md:text-2xl font-bold tracking-tight text-white">{selectedProject.metadata.year}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-brand mb-3">Service</p>
                        <p className="text-xl md:text-2xl font-bold tracking-tight text-white">{selectedProject.metadata.service}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-brand mb-3">Focus</p>
                        <p className="text-xl md:text-2xl font-bold tracking-tight text-white">{selectedProject.tags[0]}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <div className="px-6 md:px-16 pb-32">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Main Content: Story & Details */}
                    <div className="lg:col-span-8 space-y-24">
                      {/* Challenge Section */}
                      <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="group"
                      >
                        <div className="flex items-center gap-6 mb-10">
                          <div className="w-14 h-14 bg-accent-brand/20 rounded-2xl flex items-center justify-center text-accent-brand group-hover:scale-110 transition-transform">
                            <Target size={32} />
                          </div>
                          <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight">The Challenge</h4>
                        </div>
                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-normal pl-20 border-l-2 border-accent-brand/20">
                          {selectedProject.details.challenge}
                        </p>
                      </motion.div>

                      {/* Solution Section */}
                      <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="group"
                      >
                        <div className="flex items-center gap-6 mb-10">
                          <div className="w-14 h-14 bg-accent-brand/20 rounded-2xl flex items-center justify-center text-accent-brand group-hover:scale-110 transition-transform">
                            <Zap size={32} />
                          </div>
                          <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight">The Solution</h4>
                        </div>
                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-normal pl-20 border-l-2 border-accent-brand/20">
                          {selectedProject.details.solution}
                        </p>
                      </motion.div>

                      {/* Tech Stack & Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-8">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center gap-4 mb-10">
                            <Layers className="text-accent-brand" size={24} />
                            <h5 className="text-lg font-black uppercase tracking-widest">Tech Stack</h5>
                          </div>
                          <div className="flex flex-wrap gap-3">
                            {selectedProject.details.techStack.map((tech: string) => (
                              <div key={tech} className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 font-bold text-base hover:border-accent-brand transition-colors cursor-default">
                                {tech}
                              </div>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex items-center gap-4 mb-10">
                            <CheckCircle2 className="text-accent-brand" size={24} />
                            <h5 className="text-lg font-black uppercase tracking-widest">Key Features</h5>
                          </div>
                          <ul className="space-y-4">
                            {selectedProject.details.features?.map((feature: string) => (
                              <li key={feature} className="flex items-start gap-3">
                                <ArrowRight size={16} className="text-accent-brand mt-1 shrink-0" />
                                <span className="text-text-muted font-medium">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>

                    {/* Sidebar: Impact & Link */}
                    <div className="lg:col-span-4 space-y-12">
                      <motion.div 
                         initial={{ opacity: 0, x: 20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         className="p-10 rounded-[40px] bg-accent-brand text-white shadow-2xl shadow-accent-brand/30 relative overflow-hidden group"
                      >
                        <div className="absolute top-0 right-0 p-10 text-white/10 group-hover:scale-125 transition-transform duration-700">
                          <Target size={120} />
                        </div>
                        <h4 className="font-black uppercase tracking-[0.2em] text-[10px] mb-12 opacity-70">Impact Statement</h4>
                        <p className="text-3xl font-display font-black leading-tight relative z-10 italic">
                          "{selectedProject.details.impact}"
                        </p>
                        
                        <div className="mt-12 pt-8 border-t border-white/20 flex items-center justify-between">
                          <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">Success Rate</div>
                          <div className="text-2xl font-black">99.9%</div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                      >
                        <a 
                          href={selectedProject.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-8 rounded-[32px] bg-white text-black hover:bg-black hover:text-white transition-all group font-black text-xl shadow-xl active:scale-95"
                        >
                          Launch Project <ArrowUpRight size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                        
                        <button 
                          onClick={() => setSelectedProject(null)}
                          className="w-full flex items-center justify-center gap-3 p-6 rounded-[32px] border border-white/10 text-text-muted hover:text-white hover:bg-white/5 transition-all text-sm font-black uppercase tracking-widest"
                        >
                          <X size={18} /> Close Case Study
                        </button>
                      </motion.div>

                      {/* Client Quote Mockup */}
                      <div className="p-10 rounded-[40px] border border-white/5 bg-bg-primary/50">
                        <p className="text-sm font-black uppercase tracking-widest text-accent-brand mb-6">Partner Feedback</p>
                        <p className="text-text-muted italic mb-6 leading-relaxed">
                          "Vedvix delivered beyond our expectations. Their technical depth and design sense are truly world-class."
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-accent-brand/20 flex items-center justify-center font-bold text-xs">
                             {selectedProject.metadata.client[0]}
                          </div>
                          <div>
                            <p className="text-sm font-bold">{selectedProject.metadata.client}</p>
                            <p className="text-[10px] text-text-muted uppercase tracking-widest">Client Lead</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  {/* Next Project Navigation */}
                  <div className="mt-32 pt-16 border-t border-white/5">
                    <p className="text-sm font-black uppercase tracking-widest text-text-muted mb-8 text-center">Next Project</p>
                    {(() => {
                      const currentIndex = PROJECTS.findIndex(p => p.name === selectedProject.name);
                      const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
                      return (
                        <button 
                          onClick={() => {
                            setSelectedProject(nextProject);
                            archiveScrollRef.current?.parentElement?.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="w-full group text-center"
                        >
                          <h5 className="text-4xl md:text-7xl font-black group-hover:text-accent-brand transition-colors mb-4">{nextProject.name}</h5>
                          <div className="flex items-center justify-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
                            <span className="font-bold">Discover more</span>
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                          </div>
                        </button>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Archive View */}
      <AnimatePresence>
        {isArchiveOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-bg-primary/98 backdrop-blur-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 md:p-12 flex items-center justify-between border-b border-white/5 shrink-0">
              <div>
                <h2 className="text-3xl md:text-5xl font-black mb-2">Project Archive</h2>
                <p className="text-text-muted text-sm font-medium">A complete history of our digital craftsmanship.</p>
              </div>
              <button 
                onClick={() => setIsArchiveOpen(false)}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full glass-card flex items-center justify-center hover:bg-accent-brand hover:text-white transition-all group shadow-2xl"
              >
                <X size={28} className="group-hover:rotate-90 transition-transform duration-500" />
              </button>
            </div>
            
            <div className="flex-1 overflow-hidden flex flex-col justify-center relative">
              {/* Dynamic Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-brand/5 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-brand/5 blur-[120px] rounded-full animate-pulse-slow" />
              </div>
              
              <motion.div 
                ref={archiveScrollRef}
                className={`flex overflow-x-auto gap-12 px-6 md:px-32 py-12 no-scrollbar snap-x snap-mandatory relative z-10 scroll-smooth select-none h-full items-center ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                onMouseDown={handleMouseDown}
                onMouseLeave={handleMouseLeave}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                initial="hidden"
                animate="show"
                onScroll={(e) => {
                  const target = e.currentTarget;
                  const scrollPos = target.scrollLeft;
                  const maxScroll = target.scrollWidth - target.clientWidth;
                  const progress = maxScroll > 0 ? scrollPos / maxScroll : 0;
                  setArchiveProgress(progress);
                }}
                onWheel={(e) => {
                  if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
                    const container = e.currentTarget;
                    container.scrollTo({
                      left: container.scrollLeft + e.deltaY * 2,
                      behavior: 'auto'
                    });
                    e.preventDefault();
                  }
                }}
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.15,
                      delayChildren: 0.4
                    }
                  }
                }}
              >
                {PROJECTS.length > 0 ? (
                  <>
                    {/* Beginning Spacer */}
                    <div className="flex-shrink-0 w-2 md:w-20" />
                    
                    {PROJECTS.map((p, i) => (
                      <ArchiveCard 
                        key={i} 
                        project={p} 
                        index={i} 
                        onClick={() => {
                          setSelectedProject(p);
                          setIsArchiveOpen(false);
                        }} 
                      />
                    ))}
                    
                    {/* End Spacer */}
                    <div className="flex-shrink-0 w-6 md:w-32" />
                  </>
                ) : (
                  <div className="flex-shrink-0 w-full py-32 flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 rounded-[40px] bg-white/5 border border-white/10 flex items-center justify-center text-text-muted mb-8 opacity-20">
                      <Layers size={48} />
                    </div>
                    <p className="text-3xl text-text-muted font-black italic opacity-30 tracking-widest uppercase">No projects to display yet.</p>
                  </div>
                )}
              </motion.div>

              {/* Progress & Controls */}
              <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 relative z-20">
                <div className="flex items-center gap-6">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => {
                        if (archiveScrollRef.current) {
                          archiveScrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
                        }
                      }}
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                      aria-label="Previous"
                    >
                      <ArrowRight size={20} className="rotate-180" />
                    </button>
                    <button 
                      onClick={() => {
                        if (archiveScrollRef.current) {
                          archiveScrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
                        }
                      }}
                      className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
                      aria-label="Next"
                    >
                      <ArrowRight size={20} />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 text-text-muted text-xs font-black uppercase tracking-[0.3em] opacity-40">
                    <div className="h-[1px] w-8 bg-white/20" />
                    <span>Swipe or Use Buttons</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  {PROJECTS.map((_, idx) => {
                    const isActive = Math.round(archiveProgress * (PROJECTS.length - 1)) === idx;
                    return (
                      <button 
                        key={idx} 
                        onClick={() => {
                          if (archiveScrollRef.current) {
                            const maxScroll = archiveScrollRef.current.scrollWidth - archiveScrollRef.current.clientWidth;
                            archiveScrollRef.current.scrollTo({
                              left: (idx / (PROJECTS.length - 1)) * maxScroll,
                              behavior: 'smooth'
                            });
                          }
                        }}
                        className={`h-2 rounded-full transition-all duration-500 hover:bg-accent-brand/40 ${isActive ? 'w-16 bg-accent-brand' : 'w-4 bg-white/10'}`} 
                        aria-label={`Go to project ${idx + 1}`}
                      />
                    );
                  })}
                </div>

                <div className="hidden md:flex items-center gap-6">
                  <p className="text-xs font-black uppercase tracking-widest text-text-muted">Total Archive: {PROJECTS.length}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// --- About ---
export function About() {
  const team = [
    { name: "Deepanshi Gaur", role: "Design Lead", img: "DG" },
    { name: "Swwapnil Yadav", role: "Product Manager", img: "SY" },
    { name: "Yash Gandhi", role: "Full Stack Developer", img: "YG" }
    
  ];

  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent-brand font-bold uppercase tracking-widest text-sm mb-6 block">Our Story</span>
            <h2 className="text-4xl md:text-7xl font-black mb-10 leading-tight">Born in Jaipur, <br /> Building Globally.</h2>
            <p className="text-xl text-text-muted mb-8 leading-relaxed">
              Vedvix isn't just another agency. we're a Product Studio. We treat every project like it's our own, focusing on user-centric design and scalable architecture from day zero.
            </p>
            <p className="text-xl text-text-muted mb-12 leading-relaxed">
              Based in the historic city of Jaipur, our team of passionate engineers and designers works with founders who want to disrupt markets and leave a mark.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex gap-4">
                {team.map((m) => (
                  <a 
                    key={m.name} 
                    href={`https://linkedin.com/in/${m.name.toLowerCase().replace(/ /g, '')}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group/member"
                  >
                     <div className="w-16 h-16 rounded-full bg-accent-brand/10 border border-accent-brand/20 flex items-center justify-center font-black text-accent-brand shadow-lg mb-2 group-hover/member:bg-accent-brand group-hover/member:text-white transition-all duration-300">
                       {m.img}
                     </div>
                     <span className="text-[10px] font-black uppercase tracking-widest opacity-60 group-hover/member:opacity-100 transition-opacity">{m.role}</span>
                     <span className="text-xs font-bold">{m.name}</span>
                  </a>
                ))}
              </div>
              <div className="h-10 w-[1px] bg-border-subtle hidden md:block mx-4" />
              <a href="#contact" className="text-accent-brand font-bold flex items-center gap-2 hover:gap-4 transition-all group">
                Work with our team <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square glass-card rounded-[40px] flex items-center justify-center p-12 overflow-hidden relative group">
              <div className="absolute inset-0 bg-accent-brand opacity-5 group-hover:opacity-10 transition-opacity" />
              <div className="relative z-10 text-center">
                 <div className="mb-8 inline-block p-6 bg-accent-brand/20 rounded-full text-accent-brand animate-pulse">
                   <Zap size={48} />
                 </div>
                 <h3 className="text-3xl font-bold mb-6">Our Philosophy</h3>
                 <p className="text-lg text-text-muted leading-relaxed">
                   Speed without quality is a disaster. Quality without speed is a missed opportunity. At Vedvix, we balance both using our battle-tested agile methodology.
                 </p>
              </div>
            </div>
            {/* Floating Detail Card */}
            <div className="absolute -bottom-10 -right-10 hidden md:block w-64 p-8 glass-card border-accent-brand/30 rounded-3xl animate-bounce-slow">
              <p className="text-xs font-black uppercase tracking-widest text-accent-brand mb-2">Current Focus</p>
              <p className="text-lg font-bold">Scaling AI product infrastructures</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// --- USP ---
export function USP() {
  const stats = [
    { val: "12+", label: "Products Shipped", icon: <Layers size={24} /> },
    { val: "3", label: "AI Platforms Live", icon: <Bot size={24} /> },
    { val: "100%", label: "On-Time Delivery", icon: <CheckCircle2 size={24} /> }
  ];

  return (
    <section id="usp" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent-brand/10 rounded-2xl flex items-center justify-center text-accent-brand mb-6">
                {s.icon}
              </div>
              <span className="text-5xl md:text-7xl font-display font-black mb-2">{s.val}</span>
              <p className="text-text-muted font-medium uppercase tracking-widest text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Process ---
export function Process() {
  const steps = [
    { title: "Discover", desc: "We dive deep into your goals, users, and market gap.", icon: <Target size={24} /> },
    { title: "Design", desc: "User-centric UI/UX and rapid prototyping.", icon: <Layers size={24} /> },
    { title: "Build", desc: "Agile development with daily standups and weekly demos.", icon: <Zap size={24} /> },
    { title: "Launch", desc: "Full-deployment with robust QA and testing.", icon: <CheckCircle2 size={24} /> },
    { title: "Scale", desc: "Ongoing support and performance optimization.", icon: <Smartphone size={24} /> }
  ];

  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">Our Product Lifecycle</h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">A transparent, battle-tested process designed to deliver excellence every time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
           {/* Connector Line D-only */}
           <div className="hidden md:block absolute top-[2.5rem] left-0 w-full h-[1px] bg-border-subtle z-0" />
           
           {steps.map((s, i) => (
             <div key={i} className="relative z-10">
               <div className="w-12 h-12 bg-bg-primary border border-accent-brand/40 rounded-full flex items-center justify-center text-accent-brand font-bold mb-6 mx-auto md:mx-0 shadow-lg">
                 {i + 1}
               </div>
               <h3 className="text-xl font-bold mb-4">{s.title}</h3>
               <p className="text-text-muted leading-relaxed text-sm">{s.desc}</p>
             </div>
           ))}
        </div>
      </div>
    </section>
  );
}

// --- Testimonials ---
export function Testimonials() {
  const reviews = [
    { name: "Rahul S.", company: "FinTech Startup", text: "Vedvix completely transformed our product roadmap. Their speed of delivery is unmatched in the Indian market." },
    { name: "Michael T.", company: "AI Global", text: "Working with a studio that actually understands the nuances of LLM integration was a game changer for us." },
    { name: "Priya G.", company: "E-comm Platform", text: "The most reliable development partner we've ever had. No fluff, just results and clean code." },
    { name: "Sarah J.", company: "HealthTech Inc.", text: "Exceptional designers! They took our vague ideas and turned them into a polished, high-converting product." },
    { name: "David L.", company: "EduNext", text: "Vedvix is our go-to partner for anything complex. Their ability to solve architectural challenges is impressive." },
    { name: "Anita K.", company: "GreenGrid", text: "A truly global standard product studio. Professional, communicative, and technically brilliant." }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="testimonials" className="py-32 px-6 bg-bg-secondary/30 overflow-hidden relative">
      <div className="max-w-7xl mx-auto mb-20 px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black"
        >
          Loved by Founders
        </motion.h2>
      </div>

      <div className="relative group/scroll">
        <motion.div
          ref={scrollRef}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          onWheel={(e) => {
            if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
              const container = e.currentTarget;
              container.scrollTo({
                left: container.scrollLeft + e.deltaY * 2,
                behavior: 'auto'
              });
              e.preventDefault();
            }
          }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
              }
            }
          }}
          className="flex overflow-x-auto gap-8 px-6 md:px-[calc((100vw-min(1280px,94vw))/2)] pb-12 no-scrollbar snap-x snap-mandatory scroll-smooth"
        >
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, x: 50, scale: 0.95 },
                show: { opacity: 1, x: 0, scale: 1 }
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="flex-shrink-0 w-[85vw] md:w-[450px] snap-center glass-card p-10 rounded-[40px] hover-glow relative flex flex-col justify-between"
            >
              <div className="relative z-10">
                <div className="mb-8 flex text-accent-brand">
                  {[1,2,3,4,5].map(star => <Zap key={star} size={18} fill="currentColor" stroke="none" className="opacity-80" />)}
                </div>
                <p className="text-xl md:text-2xl italic mb-10 text-text-primary leading-relaxed font-medium">"{r.text}"</p>
              </div>
              
              <div className="pt-8 border-t border-white/5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-brand/20 flex items-center justify-center font-black text-accent-brand">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-bold text-lg">{r.name}</p>
                  <p className="text-text-muted text-[10px] font-black uppercase tracking-[0.2em]">{r.company}</p>
                </div>
              </div>

              {/* Decorative Quote Mark */}
              <div className="absolute top-8 right-8 text-white/5 text-8xl font-black select-none pointer-events-none">"</div>
            </motion.div>
          ))}
          {/* End Spacer */}
          <div className="flex-shrink-0 w-6 md:w-[calc((100vw-min(1280px,94vw))/2)]" />
        </motion.div>

        {/* Navigation Indicator */}
        <div className="max-w-7xl mx-auto px-6 mt-8 flex items-center justify-between opacity-50 group-hover/scroll:opacity-100 transition-opacity">
           <div className="flex items-center gap-4 text-text-muted text-[10px] font-black uppercase tracking-[0.3em]">
             <div className="h-[1px] w-12 bg-white/20" />
             <span>Scroll to Explore</span>
           </div>
           <div className="flex gap-4">
              <button 
                onClick={() => scrollRef.current?.scrollBy({ left: -400, behavior: 'smooth' })}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
              >
                <ArrowRight size={18} className="rotate-180" />
              </button>
              <button 
                onClick={() => scrollRef.current?.scrollBy({ left: 400, behavior: 'smooth' })}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors"
              >
                <ArrowRight size={18} />
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}

// --- CTA Banner ---
export function CTABanner() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-brand/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="relative bg-bg-secondary border border-white/5 p-12 md:p-24 rounded-[48px] md:rounded-[64px] overflow-hidden group shadow-2xl"
        >
          {/* Animated Background Content */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 group-hover:opacity-30 transition-opacity duration-1000">
             <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(110,61,255,0.1)_0%,transparent_70%)]" />
             <motion.div 
               animate={{ 
                 rotate: [0, 360],
               }}
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
             />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="px-6 py-2 bg-accent-brand/10 border border-accent-brand/20 rounded-full mb-10"
            >
              <span className="text-accent-brand font-black uppercase tracking-[0.2em] text-[10px]">Start your project</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-[0.9]">
              Let's craft the <br /> 
              <span className="text-accent-brand">future together.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-text-muted mb-16 max-w-2xl font-medium leading-relaxed">
              Whether you're a founder with a vision or a company ready to scale through AI, we're here to build your next big thing.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-8">
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:hello@vedvix.in"
                className="inline-flex items-center gap-4 px-12 py-6 bg-white text-black font-black text-2xl rounded-full shadow-2xl hover:bg-accent-brand hover:text-white transition-all duration-300 group/btn"
              >
                Send an Inquiry <ArrowRight size={28} className="translate-y-0.5 group-hover/btn:translate-x-2 transition-transform" />
              </motion.a>
              
              <div className="flex flex-col items-center md:items-start text-left">
                 <span className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-1">Direct Email</span>
                 <a href="mailto:hello@vedvix.in" className="text-xl font-bold hover:text-accent-brand transition-colors">hello@vedvix.in</a>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/5 w-full flex flex-wrap justify-center gap-10 opacity-40">
              <div className="flex items-center gap-2">
                <Target size={16} /> <span className="text-xs font-black uppercase tracking-widest">Global Reach</span>
              </div>
               <div className="flex items-center gap-2">
                <Zap size={16} /> <span className="text-xs font-black uppercase tracking-widest">Rapid Delivery</span>
              </div>
               <div className="flex items-center gap-2">
                <CheckCircle2 size={16} /> <span className="text-xs font-black uppercase tracking-widest">Quality Guaranteed</span>
              </div>
            </div>
          </div>

          <div className="absolute top-0 right-0 p-12 text-white/5 font-black text-9xl select-none pointer-events-none group-hover:text-accent-brand/10 transition-colors duration-1000 uppercase">
            Vedvix
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Footer ---
export function Footer() {
  return (
    <footer className="pt-32 pb-12 px-6 border-t border-border-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-1">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}); }} className="flex items-center gap-2 mb-8">
              <div className="w-8 h-8 bg-accent-brand rounded-lg flex items-center justify-center font-display font-bold text-white">V</div>
              <span className="font-display font-bold text-2xl tracking-tighter">Vedvix</span>
            </a>
            <p className="text-text-muted leading-relaxed mb-6">
              Innovating from Jaipur, building for the world. Premium tech product studio for ambitious founders.
            </p>
            <a href="#about" className="text-accent-brand text-sm font-bold flex items-center gap-2 mb-8 hover:gap-4 transition-all group">
              Learn about our story <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform" />
            </a>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/vedvix" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border-subtle rounded-full flex items-center justify-center text-text-muted hover:text-white hover:border-white transition-all"><Linkedin size={18} /></a>
              <a href="https://twitter.com/vedvix" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border-subtle rounded-full flex items-center justify-center text-text-muted hover:text-white hover:border-white transition-all"><Twitter size={18} /></a>
              <a href="https://github.com/vedvix" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border-subtle rounded-full flex items-center justify-center text-text-muted hover:text-white hover:border-white transition-all"><Github size={18} /></a>
              <a href="https://instagram.com/vedvix" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-border-subtle rounded-full flex items-center justify-center text-text-muted hover:text-white hover:border-white transition-all"><Instagram size={18} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-text-muted">Navigation</h4>
            <ul className="space-y-4">
              {[
                { name: "Services", href: "#services" },
                { name: "Our Work", href: "#work" },
                { name: "Process", href: "#process" },
                { name: "About", href: "#about" },
                { name: "Contact", href: "#contact" }
              ].map(link => (
                <li key={link.name}><a href={link.href} className="text-text-muted hover:text-text-primary transition-colors">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-text-muted">Services</h4>
            <ul className="space-y-4">
              {["AI Development", "SaaS Platforms", "Mobile Apps", "Backend Systems", "UI/UX Design"].map(item => (
                <li key={item}><a href="#services" className="text-text-muted hover:text-text-primary transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-text-muted">Office</h4>
            <p className="text-text-muted leading-relaxed">
              Vedvix Product Studio,<br />
              Jaipur, Rajasthan, 302017<br />
              India
            </p>
            <a href="mailto:hello@vedvix.in" className="mt-8 text-text-primary font-bold hover:text-accent-brand transition-colors block">hello@vedvix.in</a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-muted">
          <p>© {new Date().getFullYear()} Vedvix. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p>Made with precision by engineers who ship.</p>
        </div>
      </div>
    </footer>
  );
}
