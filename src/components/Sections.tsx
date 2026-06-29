import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform, useInView, useScroll } from "motion/react";
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
  X,
  Grid,
  Sliders
} from "lucide-react";

import sipstrImg from "../assets/images/sipstr_beverage_tech_1779278471042.png";
import viafloImg from "../assets/images/viaflo_ai_invoice_1779278430480.png";
import veraeatyImg from "../assets/images/veraeaty_ai_food_1779278453081.png";
import kaps9Img from "../assets/images/kaps9_app_ecosystem_1779278493576.png";
import shellImg from "../assets/images/shell_talent_recruitment_1779278516601.png";
import urbanImg from "../assets/images/urban_culture_wellness_1779278534408.png";
import marutiImg from "../assets/images/maruti_glass_factory_1779278555548.png";

// --- Marquee ---
export function Marquee() {
  const techs = ["React", "Node.js", "Python", "OpenAI", "AWS", "Flutter", "PostgreSQL", "Tailwind", "Next.js", "Firebase", "TypeScript", "Docker"];
  
  return (
    <div className="py-12 border-y border-border-subtle bg-bg-secondary/50 overflow-hidden" aria-hidden="true">
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
    "name": "Sipstr",
    "desc": "A discovery-first beverage platform that helps users find, share, and engage with unique drink experiences.",
    "tags": ["Mobile App", "Community Platform", "React Native", "Discovery"],
    "link": "https://sipstr.com",
    "image": sipstrImg,
    "metadata": {
      "client": "Sipstr Inc.",
      "year": "2025",
      "service": "Product Design & Full-Stack Development"
    },
    "details": {
      "challenge": "Create a seamless discovery experience for beverage enthusiasts while building a scalable community platform that feels intuitive, social, and fast.",
      "solution": "Designed and developed a cross-platform mobile experience in React Native with real-time discovery, location-aware recommendations, and community-driven engagement features.",
      "impact": "Launched successfully with strong early traction, growing to 5,000+ active users and driving high engagement across community events and discovery journeys.",
      "techStack": ["React Native", "Firebase", "Google Maps API", "Spring Boot"],
      "features": [
        "Real-Time Geo-Discovery",
        "Community Feeds & Social Interaction",
        "Smart Personalization",
        "Event Discovery & Management"
      ],
      "results": [
        { "label": "Community Growth", "value": "240%" },
        { "label": "Active Users", "value": "5,000+" },
        { "label": "App Store Rating", "value": "4.9/5.0" }
      ],
      "testimonial": {
        "text": "The Sipstr team built more than an app. They created a polished, community-driven experience with exceptional mobile UX and a strong product vision.",
        "author": "Nirav Patadia",
        "role": "Founder, Sipstr"
      }
    }
  },
  {
"name": "Kaps9",
"desc": "Designed and developed Kaps end to end, including native iOS and Android mobile apps plus an admin portal built with React and Vite.",
"tags": ["Full-Stack", "Mobile Apps", "iOS", "Android", "Admin Portal", "React", "Vite", "Backend"],
"link": "https://dev.kaps9.in",
"image": kaps9Img,
"metadata": {
"client": "Kaps9 Tech",
"year": "2025",
"service": "End-to-End Product Engineering, Mobile App Development, Admin Portal Development"
},
"details": {
"challenge": "Build a complete product ecosystem with native mobile experiences, a modern admin portal, and a scalable backend that could support daily operations and partner integrations.",
"solution": "Designed and developed the platform end to end, including native iOS and Android apps, a React Vite admin portal, and backend services with integration-ready APIs.",
"impact": "Delivered a complete cross-platform product experience for users and operations teams, with a maintainable codebase and production-ready deployment workflow.",
"techStack": ["iOS", "Android", "React", "Vite", "Node.js", "Redis", "Docker", "Express"],
"features": [
"Native iOS App",
"Native Android App",
"Admin Portal",
"API Integration",
"Role-Based Access",
"Operational Dashboards"
],
"results": [
{ "label": "Platforms Delivered", "value": "iOS + Android + Web Admin" },
{ "label": "Product Scope", "value": "End-to-End Development" },
{ "label": "Architecture", "value": "Mobile + Web + Backend" }
],
"testimonial": {
"text": "Kaps9 was delivered as a complete end-to-end product across mobile, web, and backend, with strong execution and attention to product quality.",
"author": "Vikrant",
"role": "CEO  KAPS9"
}
}
},
  {
"name": "Viaflo",
"desc": "A multi-tenant invoice automation SaaS platform that ingests invoices from Outlook, extracts structured data with AI, routes approvals, and syncs to accounting systems.",
"tags": [
"SaaS Platform",
"FinOps Automation",
"AI Document Processing",
"Multi-Tenant Architecture",
"Cloud DevOps"
],
"link": "https://app.viaflo.ai/login",
"image": viafloImg,
"metadata": {
"client": "Viaflo",
"year": "2026",
"service": "Full-Stack Product Engineering, AI Integration, Cloud Infrastructure & CI/CD"
},
"details": {
"challenge": "Invoice operations were manual, slow, and error-prone across multiple organizations. Teams needed a secure multi-tenant system to automate email intake, document extraction, approvals, and ERP-ready accounting workflows.",
"solution": "Built a hybrid architecture with Spring Boot (core business APIs, auth, workflow) and a Python FastAPI microservice (PDF/OCR/LLM extraction). Implemented Microsoft Graph email polling, configurable mapping profiles, approval workflows, and AWS-based deployment with Terraform plus GitHub Actions for branch-driven dev/staging/prod releases.",
"impact": "Delivered an end-to-end AP automation platform with strong operational efficiency and startup-friendly cloud economics. The system is designed to cut manual data entry by 70-80%, reduce processing cycles from days to hours, and support low operating cost through custom auth and optimized extraction tiers.",
"techStack": [
"Java 21",
"Spring Boot",
"Spring Security JWT",
"Python 3.11/3.12",
"FastAPI",
"PostgreSQL",
"React + TypeScript",
"Tailwind CSS",
"AWS (EC2, RDS, S3, SQS, ALB, ASG, Secrets Manager)",
"Terraform",
"GitHub Actions",
"Microsoft Graph API",
"OpenAI GPT-4o",
"PyMuPDF",
"pytesseract"
],
"features": [
"Multi-Tenant Organization Isolation",
"Outlook Invoice Intake via Microsoft Graph",
"3-Tier Extraction Pipeline (OCR -> Vision LLM -> Text LLM + Regex fallback)",
"Configurable Invoice Field Mapping Profiles",
"Role-Based Access (Admin, Approver, Viewer)",
"Approval Workflow and Audit Trail",
"ERP-Ready Data Sync Architecture",
"Branch-Based CI/CD (develop, release/*, main -> dev/staging/prod)"
],
"results": [
{ "label": "Manual Entry Reduction", "value": "70-80% (targeted)" },
{ "label": "Processing Cycle Time", "value": "Days -> Hours (targeted)" },
{ "label": "Cloud Runtime Cost", "value": "~$50-100/month (startup scale estimate)" },
{ "label": "Auth Cost Savings", "value": "$1,000-$5,000/year (vs third-party auth)" }
],
"testimonial": {
"text": "Viaflo combines enterprise-grade workflow reliability with practical AI extraction, making invoice operations faster, cleaner, and easier to scale across organizations.",
"author": "CEO",
"role": "Viaflo"
}
}
},
  {
  name: "Veraeaty.ai",
  desc: "End-to-end AI-powered food intelligence platform — from cloud infrastructure to intelligent meal recommendations.",
  tags: ["AI", "FastAPI", "AWS", "Terraform", "Docker", "GitHub Actions", "Neo4j", "RAG"],
  link: "https://veraeaty.ai",
  image: veraeatyImg,
  metadata: {
    client: "Veraeaty Labs",
    year: "2025–2026",
    service: "Backend Engineering · Cloud Infrastructure · DevOps · AI Integration"
  },
  details: {
    challenge:
      "Build a production-grade AI food platform from zero — including scalable cloud infrastructure, a real-time recommendation engine, and a fully automated deployment pipeline capable of serving multiple environments.",
    solution:
      "Architected and delivered the complete backend and DevOps stack: a FastAPI service containerised with Docker, provisioned on AWS using Terraform (VPC, EC2, RDS MySQL, ElastiCache Redis, ALB), and shipped through a multi-stage GitHub Actions CI/CD pipeline with environment-aware deployments (dev → sandbox → prod). Integrated a RAG pipeline, Neo4j graph database, and multi-LLM orchestration for intelligent, context-aware meal planning.",
    impact:
      "Delivered a battle-tested, zero-downtime production infrastructure — fully automated from code push to live deployment — with secure secret management, HTTPS termination, and environment parity across three deployment tiers.",
    techStack: [
      "Python 3.11",
      "FastAPI",
      "Docker",
      "Docker Compose",
      "GitHub Actions",
      "Terraform",
      "AWS EC2",
      "AWS RDS (MySQL 8)",
      "AWS ElastiCache (Redis 7)",
      "AWS ALB",
      "AWS Secrets Manager",
      "AWS S3",
      "GHCR",
      "Neo4j",
      "RAG / LLM",
      "Jenkins"
    ],
    features: [
      "Infrastructure-as-Code — entire AWS stack provisioned via Terraform (VPC, subnets, EC2, RDS, Redis, ALB, IAM, Route53, Secrets Manager)",
      "Multi-environment CI/CD — GitHub Actions pipelines auto-resolve dev / sandbox / prod from branch name and deploy with OIDC (no static AWS keys)",
      "Containerised Delivery — Docker image built, tagged (branch + SHA), and pushed to GHCR; EC2 pulls and runs via Docker Compose on boot",
      "Secure Secrets Pipeline — credentials stored in AWS Secrets Manager, injected at runtime; zero secrets in source code",
      "AI Dish Pipeline — ingestion, deduplication (vector + LLM + rule-based), and batch processing of curated food data",
      "RAG-Powered Chatbot — Retrieval-Augmented Generation with vector search for real-time, contextual meal recommendations",
      "Graph Intelligence — Neo4j graph DB modelling food relationships, user preferences, and ingredient networks",
      "Rate Limiting & Caching — Redis-backed rate limiter and session cache for high-throughput API performance"
    ],
    infrastructure: {
      cloud: "AWS (us-east-1)",
      iac: "Terraform ≥ 1.5 · Remote state in S3",
      compute: "EC2 t3.medium · Amazon Linux 2023",
      database: "RDS MySQL 8.0 · Multi-AZ in prod · automated backups",
      cache: "ElastiCache Redis 7 · private subnet",
      networking: "Custom VPC · public + private subnets across 2 AZs · ALB with HTTPS redirect · Security Groups",
      secrets: "AWS Secrets Manager · OIDC-based GitHub → AWS auth (no long-lived keys)"
    },
    cicd: {
      platform: "GitHub Actions + Jenkins",
      pipelines: [
        "docker-build.yml — builds Python 3.11-slim image, pushes to GHCR with branch + SHA tags, creates immutable git tag per release",
        "deploy.yml — Terraform plan & apply, branch-to-environment resolution (main→prod, release/*→sandbox, *→dev), optional Secrets Manager sync",
        "destroy.yml — controlled infrastructure teardown with environment guard",
        "Jenkinsfile — systemd service pipeline for rapid hotfix deploys"
      ]
    },
    results: [
      { label: "Infra Modules", value: "12" },
      { label: "Deploy Environments", value: "3 (dev · sandbox · prod)" },
      { label: "CI/CD Pipelines", value: "4" },
      { label: "Time to Deploy", value: "< 5 min" }
    ],
    testimonial: {
      text: "They didn't just build features — they built the entire engine room. Our infrastructure is solid, our deployments are seamless, and the AI pipeline is genuinely impressive.",
      author: "Ashish",
      role: "Founding Team"
    }
  }
},
  {
"name": "Kaps9",
"desc": "Designed and developed Kaps end to end, including native iOS and Android mobile apps plus an admin portal built with React and Vite.",
"tags": ["Full-Stack", "Mobile Apps", "iOS", "Android", "Admin Portal", "React", "Vite", "Backend"],
"link": "https://dev.kaps9.in",
"image": kaps9Img,
"metadata": {
"client": "Kaps9 Tech",
"year": "2025",
"service": "End-to-End Product Engineering, Mobile App Development, Admin Portal Development"
},
"details": {
"challenge": "Build a complete product ecosystem with native mobile experiences, a modern admin portal, and a scalable backend that could support daily operations and partner integrations.",
"solution": "Designed and developed the platform end to end, including native iOS and Android apps, a React Vite admin portal, and backend services with integration-ready APIs.",
"impact": "Delivered a complete cross-platform product experience for users and operations teams, with a maintainable codebase and production-ready deployment workflow.",
"techStack": ["iOS", "Android", "React", "Vite", "Node.js", "Redis", "Docker", "Express"],
"features": [
"Native iOS App",
"Native Android App",
"Admin Portal",
"API Integration",
"Role-Based Access",
"Operational Dashboards"
],
"results": [
{ "label": "Platforms Delivered", "value": "iOS + Android + Web Admin" },
{ "label": "Product Scope", "value": "End-to-End Development" },
{ "label": "Architecture", "value": "Mobile + Web + Backend" }
],
"testimonial": {
"text": "Kaps9 was delivered as a complete end-to-end product across mobile, web, and backend, with strong execution and attention to product quality.",
"author": "Vikrant",
"role": "CEO  KAPS9"
}
}
},
 {
  name: "Shell Consultancy",
  desc: "Full-stack marketing website for a talent acquisition and upskilling firm — bridging the gap between education and employment through recruitment and industry-aligned training.",
  tags: ["Recruitment", "Training & Placement", "HR Tech", "Next.js"],
  link: "https://shellconsultancy.in",
  image: shellImg,
  metadata: {
    client: "Shell Consultancy",
    year: "2025",
    service: "Full-Stack Web Development"
  },
  details: {
    challenge: "Building a modern, high-performance marketing presence that clearly communicates dual offerings — recruitment services and upskilling programs — to both corporate clients and job seekers.",
    solution: "Developed a fully static, SEO-optimised Next.js website with animated sections showcasing services, training programs, team, and a curated list of 16+ valued clients, deployed via GitHub Actions to a custom domain.",
    impact: "Delivered a production-ready site live at shellconsultancy.in, reflecting the company's reach across 10+ industries and its track record of 500+ placements with 50+ partner companies.",
    techStack: ["Next.js 15", "TypeScript", "Tailwind CSS", "Framer Motion", "Radix UI", "shadcn/ui"],
    features: [
      "Animated Hero & Parallax Scroll",
      "Services & Training Program Sections",
      "16+ Valued Clients Showcase",
      "Team Profiles Section",
      "FAQ Accordion",
      "Contact Information Panel",
      "GitHub Actions CI/CD → GitHub Pages",
      "Custom Domain via Cloudflare (HTTPS)"
    ],
    results: [
      { label: "Placements", value: "500+" },
      { label: "Partner Companies", value: "50+" },
      { label: "Client Satisfaction", value: "95%" }
    ],
    testimonial: {
      text: "The website perfectly represents who we are — professional, modern, and results-driven. It's become our primary touchpoint for both clients and candidates.",
      author: "Manan Sharma",
      role: "CEO & Founder, Shell Consultancy"
    }
  }
},
  {
    name: "Urban Culture",
    desc: "Premium on-demand beauty and wellness platform bringing salon-grade services to the doorstep.",
    tags: ["Marketplace", "Service", "App"],
    link: "https://urbanculture.me",
    image: urbanImg,
    metadata: {
      client: "Urban Culture Middle East",
      year: "2025",
      service: "Marketplace Tech & Mobile Development"
    },
    details: {
      challenge: "Orchestrating a large network of service professionals to provide consistent, high-quality beauty services.",
      solution: "Developed a real-time booking and dispatch system with integrated quality control features.",
      impact: "Serviced 10,000+ customers across multiple cities with a 4.8 user rating.",
      techStack: ["React Native", "Firebase", "Twilio", "Stripe"],
      features: ["Real-time Provider Tracking", "Dynamic Slot Booking", "In-app Payments", "QR-code Verification"],
      results: [
        { label: "Monthly Orders", value: "12k+" },
        { label: "Avg Rating", value: "4.9" },
        { label: "Cities Active", value: "8" }
      ],
      testimonial: {
        text: "From initial concept to full-scale deployment, Vedvix was our strategic partner. Their marketplace logic is simply the best in the business.",
        author: "Yogendra Meena",
        role: "Founder, Urban Culture"
      }
    }
  },
  {
    name: "Maruti Industries",
    desc: "Enterprise glass manufacturing solution powering the industrial, architectural, and appliance sectors.",
    tags: ["Manufacturing", "Industrial", "ERP"],
    link: "https://www.marutind.com",
    image: marutiImg,
    metadata: {
      client: "Maruti Industries Ltd.",
      year: "2025",
      service: "Digital Transformation & B2B Portal"
    },
    details: {
      challenge: "Modernizing a 25-year-old manufacturing operation to improve digital footprint and supply chain visibility.",
      solution: "Implemented a digital product showcase and integrated inquiry system for global B2B clients.",
      impact: "Streamlined client communication and expanded global export capabilities with improved digital presence.",
      techStack: ["React", "Next.js", "GraphQL", "Tailwind"],
      features: ["B2B Inquiry Portal", "Digital Product Catalog", "Inventory Sync", "Quote Generator"],
      results: [
        { label: "Inquiry Volume", value: "300%" },
        { label: "Export Reach", value: "25+ Countries" },
        { label: "Ops Efficiency", value: "40%" }
      ],
      testimonial: {
        text: "Vedvix didn't just modernize our website; they modernized our business. Our global reach has never been stronger.",
        author: "Virendra Kumar",
        role: "MD, Maruti Industries"
      }
    }
  }
];


// --- Lazy Image Component ---
function LazyImage({ src, alt, className, referrerPolicy, loading = "lazy" }: { src: string; alt: string; className?: string; referrerPolicy?: any; loading?: "lazy" | "eager" }) {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-white/5 animate-pulse" />
      )}
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`w-full h-full object-cover transition-all duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        referrerPolicy={referrerPolicy}
      />
    </div>
  );
}

function ProjectCard({ project, index, onClick }: { project: any; index: number; onClick: () => void; key?: any }) {
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  // Multiple layers for parallax depth
  const bgX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);
  
  const midX = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const midY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);

  const iconX = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
  const iconY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);

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

  function handleKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick();
    }
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
      className="shrink-0 relative" 
      style={{ perspective: 1800 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Ambient Backglow behind the card */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: bgX,
          y: bgY,
          translateZ: -100,
          scale: 0.95,
        }}
        animate={{
          opacity: isHovered ? [0, 0.45, 0.4] : 0,
          scale: isHovered ? 1.05 : 0.95,
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-[15%] rounded-[40px] bg-gradient-to-tr from-accent-brand via-accent-brand/40 to-transparent blur-[50px] pointer-events-none z-0 hidden md:block"
      />

      <motion.div
        tabIndex={0}
        role="button"
        aria-label={`View ${project.name} case study`}
        aria-haspopup="dialog"
        whileHover={{ 
          y: -12,
          scale: 1.02,
          boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(92, 79, 255, 0.25)",
          transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
        }}
        whileTap={{ scale: 0.98 }}
        onMouseMove={handleMouseMove}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        className="w-[88vw] xs:w-[85vw] sm:w-[500px] md:w-[600px] min-h-[360px] xs:min-h-[420px] sm:min-h-[520px] md:min-h-[650px] h-auto group bg-bg-secondary/95 border border-white/10 hover:border-accent-brand/40 rounded-[24px] xs:rounded-[30px] sm:rounded-[40px] cursor-pointer relative focus-visible:outline-accent-brand focus-visible:outline-offset-8 transition-[background-color,border-color] duration-500 hover:bg-white/[0.04]"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          willChange: "transform, opacity, filter",
          boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.3), 0 0 0px rgba(92, 79, 255, 0)"
        }}
      >
        {/* Subtle Pulse Background for Veraeaty.ai */}
        {project.name === "Veraeaty.ai" && (
          <motion.div 
            className="absolute inset-0 rounded-[24px] xs:rounded-[30px] sm:rounded-[40px] bg-accent-brand/5 z-0"
            animate={{ 
              opacity: [0.3, 0.6, 0.3],
              scale: [1, 1.01, 1] 
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        )}
        <div className="relative w-full h-full min-h-[inherit] p-3.5 xs:p-5 sm:p-8 md:p-10 flex flex-col justify-between rounded-[24px] xs:rounded-[30px] sm:rounded-[40px] overflow-hidden">
          
          {/* Subtle Background Parallax Gradient */}
          <motion.div 
            style={{
              x: useTransform(mouseX, [-0.5, 0.5], [40, -40]),
              y: useTransform(mouseY, [-0.5, 0.5], [40, -40]),
              scale: 1.5,
              translateZ: -80
            }}
            className="absolute inset-0 bg-gradient-to-br from-accent-brand/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none rounded-full"
          />

          <motion.div 
            style={{ x: noiseX, y: noiseY, translateZ: -30 }}
            className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"
          />

          {/* Top Row: Year Tag & Index */}
          <div className="relative z-10 flex justify-between items-center w-full mb-2.5 xs:mb-4 sm:mb-6" style={{ transform: "translateZ(30px)" }}>
            <span className="text-[9px] xs:text-[10px] font-black uppercase tracking-widest text-accent-brand px-2.5 py-0.5 xs:px-3 xs:py-1 bg-accent-brand/10 border border-accent-brand/20 rounded-full">
              {project.metadata?.year || "Featured"}
            </span>
            <span className="text-white/10 font-mono text-xl xs:text-2xl sm:text-3xl font-black group-hover:text-accent-brand/30 group-hover:scale-110 origin-right transition-all duration-700">
              0{index + 1}
            </span>
          </div>

          {/* Interactive Preview Image Block */}
          <div className="flex-1 min-h-[100px] xs:min-h-[140px] sm:min-h-[200px] md:min-h-[220px] bg-bg-primary/40 overflow-hidden relative rounded-[16px] xs:rounded-[20px] sm:rounded-[28px] mb-2.5 xs:mb-4 sm:mb-6 border border-border-subtle group-hover:border-accent-brand/25 transition-colors" style={{ transformStyle: "preserve-3d", transform: "translateZ(10px)" }}>
            <motion.div 
              style={{ 
                scale: 1.1, 
                x: useTransform(mouseX, [-0.5, 0.5], [15, -15]), 
                y: useTransform(mouseY, [-0.5, 0.5], [15, -15]) 
              }}
              className="absolute inset-0 z-0"
            >
              <LazyImage 
                src={project.image} 
                alt={project.name} 
                className="w-full h-full object-cover opacity-75 group-hover:opacity-95 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/30 to-transparent" />
            </motion.div>
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
          </div>

          {/* Core Info & CTA */}
          <div className="relative z-10 flex flex-col items-start w-full" style={{ transformStyle: "preserve-3d" }}>
            
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-4xl font-black mb-1.5 xs:mb-2 sm:mb-3 tracking-tight leading-none group-hover:text-accent-brand transition-colors duration-500" style={{ transform: "translateZ(40px)" }}>
              {project.name}
            </h3>

            <p className="text-text-muted text-[11px] xs:text-xs sm:text-sm md:text-base mb-2.5 xs:mb-4 sm:mb-6 line-clamp-2 md:line-clamp-3 leading-relaxed font-normal animate-fadeIn" style={{ transform: "translateZ(20px)" }}>
              {project.desc || project.details?.challenge}
            </p>

            {/* Tech stack tags */}
            <div className="flex flex-wrap gap-1 xs:gap-1.5 sm:gap-2 mb-2.5 xs:mb-4 sm:mb-6" style={{ transform: "translateZ(15px)" }}>
              {project.tags?.slice(0, 4).map((tag: string, idx: number) => (
                <span 
                  key={tag} 
                  className={`text-[9px] xs:text-[10px] font-bold text-text-primary/90 bg-white/5 border border-white/10 px-2 xs:px-2.5 py-0.5 xs:py-1 rounded-full transition-all group-hover:border-accent-brand/20 group-hover:bg-accent-brand/[0.03] group-hover:text-white ${idx >= 2 ? 'hidden xs:inline-block' : 'inline-block'}`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bottom CTA Row */}
            <div className="w-full pt-2 xs:pt-2.5 sm:pt-4 border-t border-white/5 flex items-center justify-between" style={{ transform: "translateZ(30px)" }}>
              <span className="text-accent-brand text-[9px] xs:text-[10px] font-black uppercase tracking-[0.3em] xs:tracking-[0.4em] flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-500">
                Explore Case Study
              </span>
              <motion.div 
                style={{ x: iconX, y: iconY, translateZ: 50 }} 
                className="text-accent-brand flex items-center justify-center w-6.5 h-6.5 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 lg:group-hover:bg-accent-brand lg:group-hover:text-black transition-colors"
              >
                <ArrowRight size={14} className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.div>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ArchiveCard({ project, index, onClick }: { project: any; index: number; onClick: () => void; key?: any }) {
  const [isHovered, setIsHovered] = useState(false);

  const [isClicked, setIsClicked] = useState(false);
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 100, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 100, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

  const bgX = useTransform(mouseX, [-0.5, 0.5], [-25, 25]);
  const bgY = useTransform(mouseY, [-0.5, 0.5], [-25, 25]);
  
  const midX = useTransform(mouseX, [-0.5, 0.5], [-12, 12]);
  const midY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);

  const iconX = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
  const iconY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

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

  const handleArchiveClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      onClick();
      setIsClicked(false);
    }, 400);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleArchiveClick();
    }
  };

  // Animation variants for internal elements
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    show: (i: number) => ({
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 0.5 + (i * 0.1),
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      ref={cardRef}
      variants={{
        hidden: { 
          opacity: 0, 
          y: 60, 
          scale: 0.9,
          rotateY: 15,
          filter: "blur(10px)" 
        },
        show: { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          rotateY: 0,
          filter: "blur(0px)",
          transition: { 
            duration: 1, 
            ease: [0.19, 1, 0.22, 1] 
          }
        }
      }}
      className="shrink-0 snap-center relative" 
      style={{ perspective: 1500 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D Ambient Backglow behind the archive card */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: bgX,
          y: bgY,
          translateZ: -100,
          scale: 0.95,
        }}
        animate={{
          opacity: isHovered ? [0, 0.45, 0.4] : 0,
          scale: isHovered ? 1.05 : 0.95,
        }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-[15%] rounded-[40px] bg-gradient-to-tr from-accent-brand via-accent-brand/40 to-transparent blur-[55px] pointer-events-none z-0 hidden md:block"
      />

      <motion.div
        animate={isClicked ? { 
          scale: 1.15, 
          y: -30,
          rotateZ: [0, -2, 2, 0],
          transition: { 
            duration: 0.4, 
            ease: "backOut" 
          }
        } : {
          rotateY: isHovered ? 180 : 0,
          y: isHovered ? -15 : 0,
          scale: isHovered ? [1.03, 1.05, 1.03] : 1,
          boxShadow: isHovered 
            ? "0 30px 60px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(92, 79, 255, 0.25)" 
            : "0 10px 30px -15px rgba(0, 0, 0, 0.3)"
        }}
        transition={{ 
          duration: 0.6, 
          ease: [0.16, 1, 0.3, 1],
          scale: isHovered ? {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          } : {
            duration: 0.4,
            ease: "easeOut"
          }
        }}
        onMouseMove={handleMouseMove}
        style={{ 
          rotateX, 
          transformStyle: "preserve-3d",
          willChange: "transform, opacity, filter"
        }}
        tabIndex={0}
        role="button"
        aria-haspopup="dialog"
        aria-label={`View archived project ${project.name}`}
        className="w-full h-full relative rounded-[40px] cursor-pointer focus-visible:outline-accent-brand focus-visible:outline-offset-8"
        onClick={handleArchiveClick}
        onKeyDown={handleKeyDown}
      >
        {/* FRONT FACE */}
        <motion.div 
          animate={{ 
            opacity: isHovered ? 0 : 1,
            pointerEvents: isHovered ? "none" : "auto"
          }}
          transition={{ duration: 0.15, delay: 0.15, ease: "easeInOut" }}
          className="absolute inset-0 p-5 sm:p-8 md:p-10 flex flex-col justify-between rounded-[40px] overflow-hidden bg-bg-secondary/95 border border-white/10 hover:border-accent-brand/35 select-none"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Parallax Background */}
          <motion.div 
            style={{ 
              scale: 1.3, 
              x: useTransform(mouseX, [-0.5, 0.5], [30, -30]), 
              y: useTransform(mouseY, [-0.5, 0.5], [30, -30]) 
            }}
            className="absolute inset-0 z-0"
          >
             <LazyImage 
               src={project.image} 
               alt={project.name} 
               className="opacity-30 group-hover:opacity-60 transition-all duration-1000 blur-[2px] group-hover:blur-0" 
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent" />
          </motion.div>
 
          {/* Floating Particles/Grid (Parallax Layer) */}
          <motion.div 
            style={{
              x: useTransform(mouseX, [-0.5, 0.5], [60, -60]),
              y: useTransform(mouseY, [-0.5, 0.5], [60, -60]),
              translateZ: -150,
              opacity: 0.1
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent-brand)_1px,transparent_1px)] [background-size:40px_40px] pointer-events-none"
          />
          <div className="relative z-10 flex justify-between items-start w-full" style={{ transform: "translateZ(30px)" }}>
            <span className="text-[10px] font-black uppercase tracking-widest text-accent-brand px-3 py-1 bg-accent-brand/10 border border-accent-brand/20 rounded-full">
              {project.metadata?.year || "Featured"}
            </span>
            <span className="text-white/10 font-black text-2xl sm:text-3xl group-hover:text-accent-brand/30 group-hover:scale-110 origin-right transition-all duration-700">
              0{index + 1}
            </span>
          </div>
 
          {/* Core Content */}
          <div className="relative z-10 flex flex-col items-start gap-3 sm:gap-4 w-full animate-fadeIn" style={{ transformStyle: "preserve-3d" }}>
            <motion.div style={{ x: midX, y: midY, translateZ: 40 }} className="w-full">
              <h3 className="text-2xl sm:text-3xl font-black mb-1.5 sm:mb-2 tracking-tight leading-tight group-hover:text-accent-brand transition-colors duration-500">
                {project.name}
              </h3>
              <p className="text-text-muted text-xs sm:text-sm line-clamp-2 md:line-clamp-3 mb-2 sm:mb-4 leading-normal font-medium">
                {project.desc || project.details?.overview}
              </p>
            </motion.div>
 
            {/* Tech Stack Pills */}
            <motion.div 
              style={{ translateZ: 20 }}
              className="flex flex-wrap gap-1.5 mb-1 sm:mb-2"
            >
              {project.tags?.slice(0, 3).map((tag: string) => (
                <span key={tag} className="text-[10px] font-black uppercase tracking-wider text-text-primary/80 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full transition-all group-hover:border-accent-brand/20 group-hover:bg-accent-brand/[0.03] group-hover:text-white pb-[3px]">
                   {tag}
                </span>
              ))}
            </motion.div>
 
            {/* Bottom Explore CTA */}
            <div className="w-full pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between">
              <span className="text-accent-brand text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-500">
                See Details
              </span>
              <motion.div style={{ x: iconX, y: iconY, translateZ: 50 }} className="text-accent-brand flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 lg:group-hover:bg-accent-brand lg:group-hover:text-black transition-colors">
                <ArrowRight size={14} className="sm:w-4 sm:h-4" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* BACK FACE */}
        <motion.div 
          animate={{ 
            opacity: isHovered ? 1 : 0,
            pointerEvents: isHovered ? "auto" : "none"
          }}
          transition={{ duration: 0.15, delay: 0.15, ease: "easeInOut" }}
          className="absolute inset-0 p-5 sm:p-8 md:p-10 flex flex-col justify-between rounded-[40px] overflow-hidden bg-bg-secondary/95 border border-white/10 hover:border-accent-brand/45"
          style={{ 
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            transformStyle: "preserve-3d"
          }}
        >
          {/* Subtle Background Parallax / Glow Layer */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-brand/5 via-transparent to-accent-brand/[0.02] opacity-80 z-0 pointer-events-none" />

          <div className="relative z-10 flex justify-between items-start w-full" style={{ transform: "translateZ(30px)" }}>
            <span className="text-[10px] font-black uppercase tracking-widest text-accent-brand px-3 py-1 bg-accent-brand/10 border border-accent-brand/20 rounded-full">
              Overview
            </span>
            <span className="text-white/10 font-black text-2xl sm:text-3xl transition-colors duration-700">
              0{index + 1}
            </span>
          </div>

          {/* Key details & elegant typography */}
          <div className="relative z-10 flex flex-col items-start w-full flex-1 justify-center gap-2 sm:gap-3 py-2" style={{ transformStyle: "preserve-3d" }}>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-accent-brand tracking-tight leading-tight" style={{ transform: "translateZ(40px)" }}>
              {project.name}
            </h3>

            {/* Core Service Metadata */}
            <div className="flex flex-col gap-1 w-full" style={{ transform: "translateZ(30px)" }}>
              <p className="text-[9px] font-mono font-black uppercase tracking-widest text-text-muted/65 leading-none">
                Core Service & Value
              </p>
              <p className="text-xs text-text-primary/95 font-medium leading-relaxed border-l-2 border-accent-brand/35 pl-2.5">
                {project.metadata?.service || "Custom Engineering & Architecture"}
              </p>
            </div>

            {/* Key Stack Section */}
            <div className="w-[98%]" style={{ transform: "translateZ(25px)" }}>
              <p className="text-[9px] font-mono font-black uppercase tracking-widest text-text-muted/65 mb-1 sm:mb-1.5 leading-none">
                Architectural Stack
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-1.5 font-mono">
                {(project.details?.techStack || project.tags || []).slice(0, 5).map((tech: string) => (
                  <span 
                    key={tech} 
                    className="text-[9.5px] font-mono font-bold text-text-primary/90 bg-white/5 border border-white/10 px-2 py-0.5 rounded transition-all hover:bg-white/10 hover:border-accent-brand/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Description Text */}
            <p 
              className="text-text-muted text-xs sm:text-[13px] leading-relaxed font-normal line-clamp-3 sm:line-clamp-4 bg-transparent text-left mt-1" 
              style={{ transform: "translateZ(20px)" }}
            >
              {project.desc || project.details?.overview}
            </p>
          </div>

          {/* Bottom Action Button */}
          <div className="relative z-10 w-full pt-2 sm:pt-3 border-t border-white/5 flex items-center justify-between" style={{ transform: "translateZ(35px)" }}>
            <span className="text-accent-brand text-[10px] font-black uppercase tracking-[0.4em] flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-500 font-mono">
              View Case Study
            </span>
            <div className="text-accent-brand flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/5 group-hover:bg-accent-brand group-hover:text-black transition-colors duration-500">
              <ArrowRight size={14} className="sm:w-4 sm:h-4" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<null | typeof PROJECTS[0]>(null);
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [isArchiveGridView, setIsArchiveGridView] = useState(false);
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

  const scrollArchive = (direction: 'left' | 'right') => {
    if (!archiveScrollRef.current) return;
    const container = archiveScrollRef.current;
    const card = container.querySelector('.snap-center');
    if (card) {
      const cardWidth = card.clientWidth;
      const gap = 48; // gap-12 is 48px
      const scrollAmount = cardWidth + gap;
      container.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });
    } else {
      container.scrollBy({ left: direction === 'left' ? -500 : 500, behavior: 'smooth' });
    }
  };

  // Handle specialized key navigation
  useEffect(() => {
    const handleKeyNav = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setIsArchiveOpen(false);
      }
      
      if (isArchiveOpen && !selectedProject) {
        if (e.key === "ArrowLeft") {
          scrollArchive('left');
          e.preventDefault();
        } else if (e.key === "ArrowRight") {
          scrollArchive('right');
          e.preventDefault();
        }
      }
    };
    window.addEventListener("keydown", handleKeyNav);
    return () => window.removeEventListener("keydown", handleKeyNav);
  }, [isArchiveOpen, selectedProject]);

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

  const focusRef = useRef<HTMLDivElement>(null);
  const archiveFocusRef = useRef<HTMLDivElement>(null);
  const lastProjectTrigger = useRef<HTMLElement | null>(null);
  const lastArchiveTrigger = useRef<HTMLElement | null>(null);

  // Focus trapping logic for Project Details Modal
  useEffect(() => {
    if (selectedProject && focusRef.current) {
      lastProjectTrigger.current = document.activeElement as HTMLElement;
      
      const focusableElements = focusRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      // Set initial focus to close button
      const closeBtn = focusRef.current.querySelector('[aria-label="Close modal"]') as HTMLElement;
      if (closeBtn) closeBtn.focus();

      window.addEventListener("keydown", handleTabKey);
      return () => {
        window.removeEventListener("keydown", handleTabKey);
        lastProjectTrigger.current?.focus();
      };
    }
  }, [selectedProject]);

  // Focus trapping logic for Archive Modal
  useEffect(() => {
    if (isArchiveOpen && archiveFocusRef.current) {
      lastArchiveTrigger.current = document.activeElement as HTMLElement;

      const focusableElements = archiveFocusRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const handleTabKey = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      // Set initial focus to close button
      const closeBtn = archiveFocusRef.current.querySelector('[aria-label="Close archive"]') as HTMLElement;
      if (closeBtn) closeBtn.focus();

      window.addEventListener("keydown", handleTabKey);
      return () => {
        window.removeEventListener("keydown", handleTabKey);
        lastArchiveTrigger.current?.focus();
      };
    }
  }, [isArchiveOpen]);

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
            aria-label="Open project archive"
            className="text-accent-brand font-bold flex items-center gap-2 hover:gap-4 transition-all group focus-visible:outline-accent-brand"
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

      {/* Featured Clients Subsection 
      <div className="mt-32 border-t border-white/5 pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xs">
              <span className="text-accent-brand font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Proven Track Record</span>
              <h3 className="text-3xl font-black leading-tight">Trusted by Visionary Founders</h3>
            </div>
            
          </div>
        </div>
      </div>*/}

      <AnimatePresence mode="wait">
        {selectedProject && (
          <motion.div 
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.4 } },
              exit: { opacity: 0, transition: { duration: 0.3 } }
            }}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
          >
            <motion.div 
              ref={focusRef}
              variants={{
                hidden: { opacity: 0, y: 80, scale: 0.98, filter: "blur(10px)" },
                show: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1, 
                  filter: "blur(0px)",
                  transition: {
                    duration: 1,
                    ease: [0.16, 1, 0.3, 1],
                    staggerChildren: 0.1,
                    delayChildren: 0.15
                  }
                },
                exit: { 
                  opacity: 0, 
                  y: 50, 
                  scale: 0.98, 
                  filter: "blur(5px)",
                  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              initial="hidden"
              animate="show"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
              className="bg-bg-secondary border border-white/5 w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[32px] md:rounded-[48px] shadow-2xl relative custom-scrollbar"
            >
              <motion.button 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setSelectedProject(null)}
                className="fixed top-8 right-8 p-4 rounded-full bg-white/10 hover:bg-accent-brand text-white transition-all z-[210] lg:absolute shadow-2xl"
                aria-label="Close modal"
              >
                <X size={24} />
              </motion.button>

              <div className="relative">
                {/* Modern Split-Layout Modal Header/Hero */}
                <div className="px-6 md:px-14 pt-20 xs:pt-24 md:pt-32 pb-12 bg-gradient-to-b from-accent-brand/15 via-accent-brand/5 to-transparent relative overflow-hidden flex items-end">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.25, 0.15],
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-[-10%] right-[-5%] w-[45%] h-[60%] bg-accent-brand/20 blur-[120px] rounded-full" 
                    />
                    <motion.div 
                      animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.08, 0.15, 0.08],
                      }}
                      transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute bottom-[-20%] left-[-10%] w-[35%] h-[50%] bg-accent-brand/10 blur-[90px] rounded-full" 
                    />
                  </div>

                  {/* Blended Background Hero Graphic */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 1.25 }}
                    animate={{ opacity: 0.08, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 z-0 select-none pointer-events-none"
                  >
                    <LazyImage 
                      src={selectedProject.image} 
                      alt={selectedProject.name} 
                      className="grayscale h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-bg-secondary/40 mix-blend-multiply" />
                  </motion.div>

                  {/* High contrast responsive grid containing text + large image preview */}
                  <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    
                    {/* Left content block */}
                    <div className="lg:col-span-7 space-y-6">
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          show: { opacity: 1, y: 0 }
                        }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-wrap gap-2"
                      >
                        <span className="px-3.5 py-1.5 bg-accent-brand text-black text-[10px] font-black uppercase tracking-widest rounded-full">{selectedProject.metadata.year}</span>
                        {selectedProject.tags.map(t => (
                          <motion.span 
                            key={t} 
                            whileHover={{ 
                              scale: 1.05, 
                              backgroundColor: "rgba(124, 113, 255, 0.12)", 
                              borderColor: "rgba(124, 113, 255, 0.4)",
                              color: "var(--color-text-primary)"
                            }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="px-3.5 py-1.5 bg-white/5 border border-white/10 text-text-muted text-[10px] font-black uppercase tracking-widest rounded-full cursor-default"
                          >
                            {t}
                          </motion.span>
                        ))}
                      </motion.div>

                      <motion.h3 
                        id="modal-project-title"
                        variants={{
                          hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                          show: { opacity: 1, y: 0, filter: "blur(0px)" }
                        }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl xs:text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-black leading-[0.95] tracking-tighter"
                      >
                        {selectedProject.name}
                      </motion.h3>

                      <motion.p 
                        variants={{
                          hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                          show: { opacity: 1, y: 0, filter: "blur(0px)" }
                        }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg xs:text-xl md:text-2xl text-text-primary leading-normal font-medium tracking-tight"
                      >
                        {selectedProject.desc}
                      </motion.p>
                    </div>

                    {/* Right side: Splendid, Full-color, High-Impact Image Showcase */}
                    <div className="lg:col-span-12 xl:col-span-5 w-full">
                      <motion.div
                        variants={{
                          hidden: { opacity: 0, scale: 0.95, y: 30 },
                          show: { opacity: 1, scale: 1, y: 0 }
                        }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative aspect-video lg:aspect-[16/10] xl:aspect-[4/3] w-full rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 group/modal-hero-img"
                      >
                        <LazyImage 
                          src={selectedProject.image} 
                          alt={`${selectedProject.name} large visual preview`} 
                          className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover/modal-hero-img:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                      </motion.div>
                    </div>

                  </div>
                </div>

                {/* Quick Metadata Bar */}
                <motion.div 
                  variants={{
                    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
                    show: { opacity: 1, y: 0, filter: "blur(0px)" }
                  }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="mx-6 md:mx-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 py-10 border-y border-white/10 bg-bg-secondary/40 backdrop-blur-md px-8 rounded-3xl mt-8"
                >
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-brand mb-2">Client</p>
                    <p className="text-base md:text-lg font-bold tracking-tight text-white leading-tight">{selectedProject.metadata.client}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-brand mb-2">Year</p>
                    <p className="text-base md:text-lg font-bold tracking-tight text-white leading-tight">{selectedProject.metadata.year}</p>
                  </div>
                  <div className="lg:col-span-2 space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-brand mb-2">Service</p>
                    <p className="text-base md:text-lg font-bold tracking-tight text-white leading-tight break-words">{selectedProject.metadata.service}</p>
                  </div>
                </motion.div>

                <div className="px-6 md:px-16 pb-32 pt-20">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Main Content: Story & Details */}
                    <div className="lg:col-span-8 space-y-24">
                      {/* Interactive Metrics Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-4 gap-6">
                        {selectedProject.details.results?.map((res: any, i: number) => {
                          const parenIndex = res && res.value ? res.value.indexOf("(") : -1;
                          let mainValue = res && res.value ? res.value : "";
                          let suffix = "";
                          if (parenIndex !== -1 && res && res.value) {
                            mainValue = res.value.substring(0, parenIndex).trim();
                            suffix = res.value.substring(parenIndex).trim();
                          }
                          
                          // Format mainValue with zero-width spaces after slashes, hyphens, and dashes to allow clean responsive wrapping
                          const formattedValue = mainValue.replace(/([/\-–—])/g, "$1\u200B");
                          
                          const valLength = mainValue.length;
                          let textSizeClass = "text-2xl md:text-3xl lg:text-4xl";
                          if (valLength > 16) {
                            textSizeClass = "text-[14px] sm:text-base lg:text-lg xl:text-[14px] 2xl:text-[15px] tracking-tight";
                          } else if (valLength > 12) {
                            textSizeClass = "text-lg sm:text-xl lg:text-2xl xl:text-lg 2xl:text-xl";
                          } else if (valLength > 8) {
                            textSizeClass = "text-xl sm:text-2xl lg:text-3xl xl:text-xl 2xl:text-2xl";
                          }

                          return (
                            <motion.div
                              key={res.label}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.1 }}
                              className="p-5 sm:p-6 rounded-3xl bg-white/5 border border-white/10 group hover:border-accent-brand transition-all flex flex-col justify-between min-h-[160px] overflow-hidden"
                            >
                              <p className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-3 leading-tight">{res.label}</p>
                              <div>
                                <p className={`font-black text-accent-brand group-hover:scale-[1.02] origin-left transition-transform duration-500 leading-tight [overflow-wrap:anywhere] [word-break:break-word] ${textSizeClass}`}>
                                  {formattedValue}
                                </p>
                                {suffix && (
                                  <p className="text-xs text-text-muted mt-2 font-normal leading-relaxed">
                                    {suffix}
                                  </p>
                                )}
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Challenge Section */}
                      <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                         className="group"
                      >
                        <div className="flex items-center gap-6 mb-10">
                          <div className="w-14 h-14 bg-accent-brand/20 rounded-2xl flex items-center justify-center text-accent-brand group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                            <Target size={32} />
                          </div>
                          <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight">The Challenge</h4>
                        </div>
                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-normal pl-8 md:pl-20 border-l-2 border-accent-brand/20">
                          {selectedProject.details.challenge}
                        </p>
                      </motion.div>

                      {/* Large Project Visual */}
                      <motion.div 
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-[40px] overflow-hidden border border-white/5 shadow-2xl h-[400px] md:h-[600px]"
                      >
                        <LazyImage 
                          src={selectedProject.image} 
                          alt={`${selectedProject.name} visual`} 
                          loading="lazy"
                          className="transition-transform duration-[2000ms] hover:scale-110"
                          referrerPolicy="no-referrer"
                        />
                      </motion.div>

                      {/* Solution Section */}
                      <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true, margin: "-100px" }}
                         transition={{ duration: 0.8, delay: 0.1, ease: [0.19, 1, 0.22, 1] }}
                         className="group"
                      >
                        <div className="flex items-center gap-6 mb-10">
                          <div className="w-14 h-14 bg-accent-brand/20 rounded-2xl flex items-center justify-center text-accent-brand group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                            <Zap size={32} />
                          </div>
                          <h4 className="text-3xl md:text-4xl font-black uppercase tracking-tight">The Solution</h4>
                        </div>
                        <p className="text-xl md:text-2xl text-text-muted leading-relaxed font-normal pl-8 md:pl-20 border-l-2 border-accent-brand/20">
                          {selectedProject.details.solution}
                        </p>
                      </motion.div>

                      {/* Tech Stack & Features Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-8">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <div className="flex items-center gap-4 mb-10">
                            <Layers className="text-accent-brand" size={24} />
                            <h5 className="text-lg font-black uppercase tracking-widest">Tech Stack</h5>
                          </div>
                          <div className="flex flex-wrap gap-2 md:gap-3">
                            {selectedProject.details.techStack.map((tech: string, i: number) => (
                              <motion.div 
                                key={tech} 
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + (i * 0.05) }}
                                whileHover={{ 
                                  y: -5, 
                                  scale: 1.05,
                                  backgroundColor: "rgba(var(--color-accent-brand-rgb), 0.1)",
                                  borderColor: "var(--color-accent-brand)" 
                                }}
                                className="px-4 md:px-5 py-2 md:py-2.5 rounded-xl bg-white/5 border border-white/10 font-bold text-sm md:text-base transition-colors cursor-default break-words"
                              >
                                {tech}
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 }}
                        >
                          <div className="flex items-center gap-4 mb-10">
                            <CheckCircle2 className="text-accent-brand" size={24} />
                            <h5 className="text-lg font-black uppercase tracking-widest">Key Features</h5>
                          </div>
                          <ul className="space-y-4">
                            {selectedProject.details.features?.map((feature: string, i: number) => (
                              <motion.li 
                                key={feature} 
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 + (i * 0.05) }}
                                className="flex items-start gap-3"
                              >
                                <ArrowRight size={16} className="text-accent-brand mt-1 shrink-0" />
                                <span className="text-text-muted font-medium leading-relaxed break-words">{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>

                      {/* Infrastructure Details (Optional) */}
                      {selectedProject.details.infrastructure && (
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="pt-8"
                        >
                            <div className="flex items-center gap-4 mb-10">
                              <Bot className="text-accent-brand" size={24} />
                              <h5 className="text-lg font-black uppercase tracking-widest">Infrastructure</h5>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                               {Object.entries(selectedProject.details.infrastructure).map(([key, val]: any, i) => (
                                 <div key={key} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col">
                                   <p className="text-[10px] font-black uppercase tracking-widest text-accent-brand mb-2">{key}</p>
                                   <p className="text-sm md:text-base font-medium text-text-muted leading-relaxed break-words">{val}</p>
                                 </div>
                               ))}
                            </div>
                        </motion.div>
                      )}

                      {/* CI/CD Details (Optional) */}
                      {selectedProject.details.cicd && (
                        <motion.div
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          className="pt-8"
                        >
                          <div className="flex items-center gap-4 mb-10">
                            <Zap className="text-accent-brand" size={24} />
                            <h5 className="text-lg font-black uppercase tracking-widest">CI/CD Pipeline</h5>
                          </div>
                          <div className="space-y-4">
                            <p className="text-text-muted font-bold mb-4">Platform: <span className="text-white">{selectedProject.details.cicd.platform}</span></p>
                            <div className="grid grid-cols-1 gap-4">
                              {selectedProject.details.cicd.pipelines.map((pipe: string, i: number) => (
                                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex gap-4 items-start">
                                  <div className="w-8 h-8 rounded-lg bg-accent-brand/20 flex items-center justify-center shrink-0">
                                    <span className="text-[10px] font-black">{i+1}</span>
                                  </div>
                                  <p className="text-sm font-medium text-text-muted leading-relaxed">{pipe}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Sidebar: Impact & Link */}
                    <div className="lg:col-span-4 space-y-12">
                      <motion.div 
                         initial={{ opacity: 0, y: 40 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ type: "spring", damping: 20, stiffness: 100 }}
                         className="p-10 rounded-[40px] bg-accent-brand text-white shadow-2xl shadow-accent-brand/30 relative overflow-hidden group"
                      >
                        <motion.div 
                          animate={{ 
                            rotate: [0, 5, 0, -5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                          className="absolute top-0 right-0 p-10 text-white/10 group-hover:scale-125 transition-transform duration-700"
                        >
                          <Target size={120} />
                        </motion.div>
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6"
                      >
                        <motion.a 
                          whileHover={{ scale: 1.02, y: -4 }}
                          whileTap={{ scale: 0.98 }}
                          href={selectedProject.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-8 rounded-[32px] bg-white text-black hover:bg-black hover:text-white transition-all group font-black text-xl shadow-xl hover:shadow-accent-brand/20"
                          aria-label={`Launch ${selectedProject.name} project - opens in a new tab`}
                        >
                          Launch Project <ArrowUpRight size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.a>
                        
                        <motion.button 
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedProject(null)}
                          className="w-full flex items-center justify-center gap-3 p-6 rounded-[32px] border border-white/10 text-text-muted hover:text-white transition-all text-sm font-black uppercase tracking-widest"
                        >
                          <X size={18} /> Close Case Study
                        </motion.button>
                      </motion.div>

                      {/* Dynamic Testimonial */}
                      {selectedProject.details.testimonial && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                          className="p-10 rounded-[40px] border border-white/5 bg-bg-primary/50 relative overflow-hidden group"
                        >
                          <div className="absolute top-0 right-0 p-8 text-accent-brand/5 pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                            <Bot size={120} />
                          </div>
                          <p className="text-sm font-black uppercase tracking-widest text-accent-brand mb-6">Partner Feedback</p>
                          <p className="text-2xl text-text-muted italic mb-10 leading-relaxed relative z-10 font-medium">
                            "{selectedProject.details.testimonial.text}"
                          </p>
                          <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-2xl bg-accent-brand/20 flex items-center justify-center font-black text-accent-brand shadow-lg">
                               {selectedProject.details.testimonial.author[0]}
                            </div>
                            <div>
                              <p className="text-lg font-bold text-white">{selectedProject.details.testimonial.author}</p>
                              <p className="text-xs text-text-muted uppercase tracking-widest font-black">{selectedProject.details.testimonial.role}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
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
                          aria-label={`Go to next project: ${nextProject.name}`}
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
            ref={archiveFocusRef}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.4 } },
              exit: { opacity: 0, transition: { duration: 0.3 } }
            }}
            initial="hidden"
            animate="show"
            exit="exit"
            className="fixed inset-0 z-[300] bg-bg-primary/98 backdrop-blur-2xl flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-labelledby="archive-title"
          >
            {/* Header */}
            <div className="p-6 md:p-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-white/5 shrink-0">
              <div>
                <h2 id="archive-title" className="text-3xl md:text-5xl font-black mb-2">Project Archive</h2>
                <p className="text-text-muted text-sm font-medium">A complete history of our digital craftsmanship.</p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                {/* Visual Switcher */}
                <div className="flex bg-white/5 border border-white/10 rounded-full p-1 shadow-inner">
                  <button
                    onClick={() => setIsArchiveGridView(false)}
                    className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer select-none ${
                      !isArchiveGridView 
                        ? 'bg-accent-brand text-black shadow-lg shadow-accent-brand/20' 
                        : 'text-text-muted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Sliders size={13} className={!isArchiveGridView ? "animate-pulse" : ""} />
                    <span>Carousel</span>
                  </button>
                  <button
                    onClick={() => setIsArchiveGridView(true)}
                    className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer select-none ${
                      isArchiveGridView 
                        ? 'bg-accent-brand text-black shadow-lg shadow-accent-brand/20' 
                        : 'text-text-muted hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Grid size={13} />
                    <span>Classic Grid</span>
                  </button>
                </div>

                <div className="h-8 w-[1px] bg-white/10 hidden sm:block" />

                <button 
                  onClick={() => setIsArchiveOpen(false)}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-full glass-card flex items-center justify-center hover:bg-accent-brand hover:text-white transition-all group shadow-2xl focus-visible:ring-2 focus-visible:ring-accent-brand shrink-0 cursor-pointer"
                  aria-label="Close archive"
                >
                  <X size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                </button>
              </div>
            </div>
            
            <div className={`flex-1 overflow-y-auto relative no-scrollbar flex flex-col ${isArchiveGridView ? '' : 'justify-center'}`}>
              {/* Dynamic Background */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-brand/5 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-brand/5 blur-[120px] rounded-full animate-pulse-slow" />
              </div>

              {!isArchiveGridView ? (
                <>
                  <motion.div 
                    ref={archiveScrollRef}
                    className={`flex overflow-x-auto gap-12 px-6 md:px-32 py-12 no-scrollbar snap-x snap-mandatory relative z-10 scroll-smooth select-none items-center shrink-0 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
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
                  <div className="max-w-7xl mx-auto w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 mb-12 relative z-20 shrink-0">
                    <div className="flex items-center gap-6">
                      <div className="flex gap-4">
                        <motion.button 
                          whileHover={{ scale: 1.1, backgroundColor: "var(--color-accent-brand)", borderColor: "var(--color-accent-brand)", color: "white" }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => scrollArchive('left')}
                          className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all bg-white/5 shadow-lg"
                          aria-label="Previous"
                        >
                          <ArrowRight size={24} className="rotate-180" />
                        </motion.button>
                        <motion.button 
                          whileHover={{ scale: 1.1, backgroundColor: "var(--color-accent-brand)", borderColor: "var(--color-accent-brand)", color: "white" }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => scrollArchive('right')}
                          className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center transition-all bg-white/5 shadow-lg"
                          aria-label="Next"
                        >
                          <ArrowRight size={24} />
                        </motion.button>
                      </div>
                      <div className="flex items-center gap-4 text-text-muted text-[10px] font-black uppercase tracking-[0.4em] opacity-60">
                        <div className="h-[1px] w-12 bg-white/10" />
                        <span>Arrows or Click</span>
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
                            aria-label={`Go to project ${PROJECTS[idx].name}`}
                          />
                        );
                      })}
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                      <p className="text-xs font-black uppercase tracking-widest text-text-muted">Total Archive: {PROJECTS.length}</p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
                  {/* Grid Layout View */}
                  <motion.div 
                    initial="hidden"
                    animate="show"
                    variants={{
                      hidden: { opacity: 0 },
                      show: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.08
                        }
                      }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 pb-20"
                  >
                    {PROJECTS.map((p, i) => (
                      <motion.div
                        key={p.name}
                        variants={{
                          hidden: { opacity: 0, y: 30 },
                          show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                        }}
                        whileHover={{ y: -8 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => {
                          setSelectedProject(p);
                          setIsArchiveOpen(false);
                        }}
                        className="bg-bg-secondary border border-white/5 rounded-[32px] overflow-hidden hover:border-accent-brand/25 transition-all shadow-xl hover:shadow-2xl hover:shadow-accent-brand/[0.05] flex flex-col h-full group cursor-pointer relative"
                      >
                        {/* Image Showcase */}
                        <div className="aspect-[16/9] w-full overflow-hidden relative select-none bg-black/20">
                          <LazyImage 
                            src={p.image} 
                            alt={`${p.name} preview`} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-bg-secondary/90 via-bg-secondary/20 to-transparent" />
                          
                          {/* Top Tag Layer */}
                          <div className="absolute top-4 left-4">
                            <span className="text-[10px] font-black uppercase tracking-wider text-accent-brand bg-accent-brand/10 border border-accent-brand/20 px-3 py-1 rounded-full">
                              {p.metadata?.year || "2025"}
                            </span>
                          </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 md:p-8 flex flex-col flex-grow justify-between gap-6">
                          <div className="space-y-3">
                            <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-accent-brand transition-colors tracking-tight leading-tight">
                              {p.name}
                            </h3>
                            <p className="text-text-muted text-xs sm:text-sm leading-relaxed font-medium line-clamp-3">
                              {p.desc}
                            </p>
                          </div>

                          <div className="space-y-4">
                            {/* Tags display */}
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {p.tags?.slice(0, 3).map((tag: string) => (
                                <span key={tag} className="text-[9px] font-black uppercase tracking-wider text-text-primary/70 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full pb-[2px]">
                                  {tag}
                                </span>
                              ))}
                            </div>

                            {/* Service Details */}
                            {p.metadata?.service && (
                              <div className="text-[10px] text-text-muted/60 leading-none flex gap-2 border-t border-white/5 pt-4">
                                <span className="font-bold text-accent-brand">Service:</span>
                                <span className="truncate">{p.metadata.service}</span>
                              </div>
                            )}

                            {/* Bottom CTA bar */}
                            <div className="flex items-center justify-between text-accent-brand text-[10px] font-black uppercase tracking-[0.3em] font-mono select-none pt-2">
                              <span>View Case Study</span>
                              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-colors group-hover:bg-accent-brand group-hover:text-black">
                                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}
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
    { name: "Deepanshi Gaur", role: "Founder", img: "DG", linkedin: "https://www.linkedin.com/in/deepanshi-gaur-4a6862224/" },
    { name: "Yash Gandhi", role: "Full Stack Developer", img: "YG", linkedin: "https://www.linkedin.com/in/gandhiyash24/" }, 
    { name: "Himanshu Gaur", role: "AI Developer", img: "HG", linkedin: "https://www.linkedin.com/in/himanshu-gaur-395924204/" }
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
                    href={m.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex flex-col items-center group/member"
                    aria-label={`Visit ${m.name}'s LinkedIn Profile`}
                  >
                    <motion.div 
                      whileHover={{ scale: 1.15, borderColor: "rgba(255, 255, 255, 0.4)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      className="w-16 h-16 rounded-full bg-accent-brand/10 border border-accent-brand/20 flex items-center justify-center font-black text-accent-brand shadow-lg mb-2 group-hover/member:bg-accent-brand group-hover/member:text-white transition-all duration-300"
                    >
                      {m.img}
                    </motion.div>
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
function StatItem({ val, label, icon, delay }: { val: string; label: string; icon: React.ReactNode; delay: number; key?: any }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parse value
  const numericVal = parseInt(val.replace(/[^0-9]/g, '')) || 0;
  const suffix = val.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView && numericVal > 0) {
      let startTime: number | null = null;
      const end = numericVal;
      const duration = 2000; // 2 seconds
      let animationFrameId: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Cubic ease-out curve for highly polished, luxurious motion
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentCount = Math.floor(easeProgress * end);
        
        setCount(currentCount);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };

      animationFrameId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [isInView, numericVal]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="flex flex-col items-center group cursor-default"
    >
      <motion.div 
        initial={{ opacity: 0, scale: 0.5, rotate: -15 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: delay + 0.3, type: "spring" }}
        className="w-24 h-24 bg-accent-brand/5 border border-white/5 rounded-[2.5rem] flex items-center justify-center text-accent-brand mb-10 group-hover:bg-accent-brand group-hover:text-white transition-all duration-500 shadow-2xl relative"
      >
        <div className="absolute inset-0 bg-accent-brand/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>
      </motion.div>
      <motion.span 
        animate={isInView ? { scale: [0.95, 1.02, 1] } : {}}
        transition={{ duration: 1.2, ease: "easeOut", delay: delay + 0.1 }}
        className="text-6xl md:text-8xl font-display font-black mb-4 tracking-tighter text-white inline-flex items-center group-hover:text-accent-brand transition-colors duration-500 select-none"
      >
        {count}{suffix}
      </motion.span>
      <p className="text-text-muted font-black uppercase tracking-[0.4em] text-[10px] opacity-60 text-center select-none">{label}</p>
    </motion.div>
  );
}

export function USP() {
  const stats = [
    { val: "12+", label: "Products Shipped", icon: <Layers size={36} /> },
    { val: "3", label: "AI Platforms Live", icon: <Bot size={36} /> },
    { val: "100%", label: "On-Time Delivery", icon: <CheckCircle2 size={36} /> }
  ];

  return (
    <section id="usp" className="py-48 px-6 relative overflow-hidden bg-bg-primary">
      {/* Decorative Blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-brand/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[400px] h-[400px] bg-accent-brand/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-12">
          {stats.map((s, i) => (
            <StatItem 
              key={i} 
              val={s.val} 
              label={s.label} 
              icon={s.icon} 
              delay={i * 0.2} 
            />
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
                <div className="mb-8 flex gap-1 text-accent-brand">
                  {[1,2,3,4,5].map((star, idx) => (
                    <motion.div
                      key={star}
                      variants={{
                        hidden: { opacity: 0, scale: 0, rotate: -20 },
                        show: { 
                          opacity: 1, 
                          scale: 1, 
                          rotate: 0,
                          transition: { 
                            type: "spring", 
                            stiffness: 400, 
                            damping: 15,
                            delay: idx * 0.1
                          }
                        }
                      }}
                    >
                      <Zap size={18} fill="currentColor" stroke="none" className="opacity-80" />
                    </motion.div>
                  ))}
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
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yOrb1 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const yOrb2 = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={containerRef} id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background Orbs */}
      <motion.div 
        style={{ y: yOrb1 }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-brand/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" 
      />
      <motion.div 
        style={{ y: yOrb2 }}
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-brand/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" 
      />

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
              <div className="flex flex-col items-center md:items-start text-left">
                 <span className="text-[10px] font-black uppercase tracking-widest text-text-muted mb-1">Phone</span>
                 <a href="tel:+919460688385" className="text-xl font-bold hover:text-accent-brand transition-colors">+91 9460688385</a>
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

// --- Social Icon with Tooltip ---
function SocialIconWithTooltip({ icon: Icon, href, label }: { icon: any; href: string; label: string }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div className="relative">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            id={`tooltip-${label.toLowerCase().replace(/\s+/g, '-')}`}
            role="tooltip"
            className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-accent-brand text-white text-[10px] font-black uppercase tracking-widest rounded-lg whitespace-nowrap pointer-events-none z-50 shadow-2xl border border-white/20"
          >
            {label}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-accent-brand" />
          </motion.div>
        )}
      </AnimatePresence>
      <motion.a 
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ 
          scale: 1.1, 
          backgroundColor: "var(--color-accent-brand)", 
          borderColor: "var(--color-accent-brand)", 
          color: "white",
          boxShadow: "0 0 20px rgba(124, 113, 255, 0.5)",
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        href={href}
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-11 h-11 border border-border-subtle rounded-full flex items-center justify-center text-text-muted transition-colors shadow-lg bg-bg-secondary/50 hover-glow group/social focus-visible:outline-accent-brand focus-visible:outline-offset-4"
        aria-label={`${label} Profile`}
        aria-describedby={`tooltip-${label.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <Icon size={20} className="transition-transform duration-300 group-hover/social:scale-110" />
      </motion.a>
    </div>
  );
}

// --- Footer ---
export function Footer() {
  const [modalOpen, setModalOpen] = useState<"privacy" | "terms" | null>(null);

  const legalContent = {
    privacy: {
      title: "Privacy Policy",
      content: [
        "Last Updated: May 2026",
        "Vedvix (\"we\", \"our\", or \"us\") respects your privacy and is committed to protecting your personal data. This Privacy Policy informs you about how we handle your personal data when you visit our website (https://vedvix.in) and tells you about your privacy rights.",
        "1. Information We Collect: We collect and process personal data that you voluntarily provide to us via our contact forms, including your name, email address, phone number, and project details. We also collect technical data such as IP addresses and browser information for analytical purposes.",
        "2. How We Use Your Information: We use your data to respond to your inquiries, provide our services, manage our relationship with you, and improve our website performance. We may also use your data to comply with legal obligations.",
        "3. Data Security: We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. We limit access to your personal data to those employees and partners who have a business need to know.",
        "4. Your Rights: Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, or erasure of your personal data.",
        "5. Contact Us: If you have any questions about this Privacy Policy or our privacy practices, please contact us at legal@vedvix.in or hello@vedvix.in."
      ]
    },
    terms: {
      title: "Terms of Service",
      content: [
        "Last Updated: May 2026",
        "By accessing this website, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.",
        "1. Use License: Permission is granted to temporarily download one copy of the materials on Vedvix's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
        "2. Intellectual Property: The content, local design, and technical architectures on this website are the intellectual property of Vedvix and are protected by applicable copyright and trademark law.",
        "3. Disclaimer: The materials on Vedvix's website are provided on an 'as is' basis. Vedvix makes no warranties, expressed or implied, and hereby disclaims all other warranties including, without limitation, implied warranties or conditions of merchantability or fitness for a particular purpose.",
        "4. Limitations: In no event shall Vedvix or its suppliers be liable for any damages arising out of the use or inability to use the materials on Vedvix's website, even if Vedvix has been notified of the possibility of such damage.",
        "5. Governing Law: These terms and conditions are governed by and construed in accordance with the laws of Rajasthan, India, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location."
      ]
    }
  };

  return (
    <footer className="pt-32 pb-12 px-6 border-t border-border-subtle relative">
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
              <SocialIconWithTooltip icon={Linkedin} href="https://linkedin.com/company/vedvix" label="LinkedIn" />
              <SocialIconWithTooltip icon={Twitter} href="https://twitter.com/vedvix" label="Twitter" />
              <SocialIconWithTooltip icon={Github} href="https://github.com/vedvix" label="GitHub" />
              <SocialIconWithTooltip icon={Instagram} href="https://instagram.com/vedvix" label="Instagram" />
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
            <p className="mt-4 text-text-muted text-sm">Proprietor: <span className="text-text-primary font-medium">Deepanshi Gaur</span></p>
            <a href="mailto:hello@vedvix.in" className="mt-4 text-text-primary font-bold hover:text-accent-brand transition-colors block">hello@vedvix.in/vedvix2@gmail.com</a>
            <a href="tel:+919460688385" className="mt-2 text-text-primary font-bold hover:text-accent-brand transition-colors block">+91 9460688385</a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-muted">
          <p>© {new Date().getFullYear()} Vedvix. All rights reserved.</p>
          <div className="flex gap-6">
            <button 
              onClick={() => setModalOpen("privacy")}
              className="hover:text-white transition-colors cursor-pointer focus-visible:text-accent-brand focus-visible:outline-none"
              aria-label="View Privacy Policy"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => setModalOpen("terms")}
              className="hover:text-white transition-colors cursor-pointer focus-visible:text-accent-brand focus-visible:outline-none"
              aria-label="View Terms of Service"
            >
              Terms of Service
            </button>
          </div>
          <p>Made with precision by engineers who ship.</p>
        </div>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-bg-primary/95 backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
            aria-labelledby="legal-modal-title"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="max-w-2xl w-full max-h-[80vh] overflow-hidden glass-card rounded-3xl flex flex-col border border-white/10"
            >
              <div className="p-8 border-b border-white/10 flex justify-between items-center bg-bg-secondary/40">
                <h2 id="legal-modal-title" className="text-2xl font-black">{legalContent[modalOpen].title}</h2>
                <button 
                  onClick={() => setModalOpen(null)}
                  className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/5 transition-all focus-visible:ring-2 focus-visible:ring-accent-brand focus-visible:outline-none"
                  aria-label="Close legal modal"
                >
                  <X />
                </button>
              </div>
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <div className="space-y-6">
                  {legalContent[modalOpen].content.map((paragraph, idx) => (
                    <p key={idx} className="text-text-muted leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  );
}
