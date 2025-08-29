import {
  Code,
  Smartphone,
  Cog,
  Palette,
} from "lucide-react"

export const services = [
    {
      icon: Code,
      title: "Mobile & Web Development",
      description: "Cutting-edge websites that push the boundaries of what's possible on the web.",
      features: ["iOS & Android", "React Native", "React & Next.js", "Custom Animations", "Performance Optimized", "SEO Ready"],
      image: "/placeholder.svg?height=300&width=400",
      services: "web-dev",
    },
    {
      icon: Cog,
      title: "Automation & AI",
      description: "Intelligent systems that work smarter, not harder, transforming your workflow.",
      features: ["Process Automation", "AI Integration", "Workflow Optimization", "Custom Solutions"],
      image: "/placeholder.svg?height=300&width=400",
    },
    {
        icon: Smartphone,
        title: "Digital Marketing",
        description: "Boost your brand visibility and reach the right audience through data-driven digital campaigns.",
        features: [
            "SEO & SEM",
            "Social Media Marketing",
            "Content Strategy",
            "Email & Performance Marketing"
        ],
        image: "/placeholder.svg?height=300&width=400",
        services: "digital-marketing",
    },
    {
      icon: Palette,
      title: "Desigining & Graphics",
      description: "Designs that don't just look good—they feel intuitive and drive results.",
      features: ["User Research", "Prototyping", "Design Systems", "Conversion Optimization"],
      image: "/placeholder.svg?height=300&width=400",
      services: "ui-ux",
    },
  ]

  export const projects = [
    {
      title: "E-Commerce Revolution",
      category: "Web Development",
      description: "A next-generation shopping experience with AI-powered recommendations",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Next.js", "AI/ML", "Stripe", "PostgreSQL"],
      results: "300% increase in conversion rate",
    },
    {
      title: "FinTech Mobile App",
      category: "Mobile Development",
      description: "Secure banking app with biometric authentication and real-time analytics",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["React Native", "Blockchain", "Biometrics", "Real-time Data"],
      results: "1M+ downloads in 6 months",
    },
    {
      title: "Healthcare Automation",
      category: "Automation",
      description: "AI-powered patient management system reducing administrative work by 80%",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Python", "TensorFlow", "Cloud Computing", "HIPAA Compliant"],
      results: "80% reduction in admin time",
    },
    {
      title: "SaaS Dashboard Redesign",
      category: "UI/UX Design",
      description: "Complete UX overhaul resulting in 250% improvement in user engagement",
      image: "/placeholder.svg?height=400&width=600",
      tech: ["Figma", "User Research", "A/B Testing", "Design System"],
      results: "250% increase in engagement",
    },
  ]

  export const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: What's Coming in 2025",
      excerpt: "Exploring the latest trends and technologies that will shape web development in the coming year.",
      author: "Sarah Chen",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Web Development",
      image: "/placeholder.svg?height=400&width=600",
      content: `
        <p>The web development landscape is evolving at an unprecedented pace. As we look toward 2025, several key trends are emerging that will fundamentally change how we build and interact with web applications.</p>

        <h2>1. AI-Powered Development Tools</h2>
        <p>Artificial intelligence is revolutionizing the development process. From code generation to automated testing, AI tools are becoming indispensable for modern developers.</p>

        <h2>2. WebAssembly Goes Mainstream</h2>
        <p>WebAssembly (WASM) is finally reaching maturity, enabling near-native performance for web applications and opening doors to new possibilities.</p>

        <h2>3. Edge Computing Integration</h2>
        <p>Edge computing is bringing computation closer to users, reducing latency and improving user experience across the globe.</p>

        <p>These trends represent just the beginning of what promises to be an exciting year for web development.</p>
      `,
      likes: 234,
      comments: 45,
    },
    {
      id: 2,
      title: "Mobile-First Design: Beyond Responsive",
      excerpt: "Why mobile-first isn't just about screen sizes—it's about rethinking user experience entirely.",
      author: "Marcus Rodriguez",
      date: "Dec 12, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "/placeholder.svg?height=300&width=400",
      content: `
        <p>Mobile-first design has evolved beyond simple responsive layouts. Today, it's about understanding the fundamental differences in how users interact with mobile devices.</p>

        <h2>Touch-First Interactions</h2>
        <p>Designing for touch requires rethinking traditional UI patterns and embracing gesture-based navigation.</p>

        <h2>Context-Aware Experiences</h2>
        <p>Mobile devices provide rich context about user location, time, and behavior that can be leveraged for better experiences.</p>
      `,
      likes: 189,
      comments: 32,
    },
    {
      id: 3,
      title: "Automation That Actually Works: Lessons Learned",
      excerpt: "Real-world insights from implementing automation solutions across different industries.",
      author: "Dr. Emily Watson",
      date: "Dec 10, 2024",
      readTime: "10 min read",
      category: "Automation",
      image: "/placeholder.svg?height=300&width=400",
      content: `
        <p>After implementing automation solutions for over 50 companies, we've learned what works and what doesn't.</p>

        <h2>Start Small, Think Big</h2>
        <p>The most successful automation projects begin with small, well-defined processes before scaling up.</p>

        <h2>Human-AI Collaboration</h2>
        <p>The best automation doesn't replace humans—it augments their capabilities and frees them for higher-value work.</p>
      `,
      likes: 156,
      comments: 28,
    },
  ]

  export const clients = [
    { name: "Shell Consultancy", logo: "/clients/shelL CONSULTANCY logo.png?height=60&width=120", industry: "Job Consultancy", website: "https://shellconsultancy.in/" },
    { name: "Nevorix", logo: "/clients/nevorix.jpg?height=60&width=120", industry: "IT", website: "https://www.nevorix.co/" },
    { name: "Crztal Craft", logo: "/clients/crztalcraft.png?height=60&width=120", industry: "E-Commerce", website: "https://crztalcraft.com" },
    { name: "GAG Accountancy", logo: "/clients/gag.png?height=60&width=120", industry: "Accounting Consultancy", website: "https://gagaccountancy.com" },
    { name: "The Curtain Court", logo: "/clients/curtaincourt.jpg?height=60&width=120", industry: "E-Commerce", website: "https://thecurtaincourt.com" },
    { name: "Urban Culture", logo: "/clients/urbanculture.jpeg?height=60&width=120", industry: "E-Commerce", website: "https://urbanculture.me/" },
    ]


  export const collaborations = [
    {
      name: "Microsoft Azure",
      logo: "/placeholder.svg?height=80&width=160",
      description: "Strategic cloud infrastructure partnership for scalable solutions",
      partnership: "Technology Partner",
      duration: "3+ years",
    },
    {
      name: "Google Cloud",
      logo: "/placeholder.svg?height=80&width=160",
      description: "AI and machine learning integration for intelligent applications",
      partnership: "Premier Partner",
      duration: "2+ years",
    },
    {
      name: "Stripe",
      logo: "/placeholder.svg?height=80&width=160",
      description: "Payment processing and financial technology integration",
      partnership: "Certified Partner",
      duration: "4+ years",
    },
    {
      name: "Shopify",
      logo: "/placeholder.svg?height=80&width=160",
      description: "E-commerce platform development and customization",
      partnership: "Plus Partner",
      duration: "2+ years",
    },
    {
      name: "AWS",
      logo: "/placeholder.svg?height=80&width=160",
      description: "Cloud computing and serverless architecture solutions",
      partnership: "Select Partner",
      duration: "5+ years",
    },
    {
      name: "Figma",
      logo: "/placeholder.svg?height=80&width=160",
      description: "Design collaboration and prototyping workflow optimization",
      partnership: "Design Partner",
      duration: "1+ years",
    },
  ]