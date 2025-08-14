"use client"
import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target,
  Zap,
  Shield,
  ChevronLeft,
  ChevronRight,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function GetStartedPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Project Type
    projectType: "",
    services: [],

    // Step 2: Project Details
    projectName: "",
    description: "",
    timeline: "",
    budget: "",

    // Step 3: Company Information
    companyName: "",
    industry: "",
    companySize: "",
    website: "",

    // Step 4: Contact Information
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",

    // Step 5: Additional Information
    challenges: "",
    goals: "",
    inspiration: "",
    additionalInfo: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 5

  const projectTypes = [
    { id: "web", title: "Web Development", description: "Custom websites and web applications", icon: "🌐" },
    { id: "mobile", title: "Mobile App", description: "iOS and Android applications", icon: "📱" },
    { id: "ecommerce", title: "E-commerce", description: "Online stores and marketplaces", icon: "🛒" },
    { id: "marketing", title: "Digital Marketing", description: "SEO, social media, and advertising", icon: "📈" },
    { id: "consulting", title: "Business Consulting", description: "Strategy and digital transformation", icon: "💼" },
    { id: "other", title: "Other", description: "Custom solutions and integrations", icon: "⚡" },
  ]

  const services = [
    "UI/UX Design",
    "Frontend Development",
    "Backend Development",
    "Database Design",
    "API Integration",
    "Cloud Deployment",
    "SEO Optimization",
    "Content Management",
    "E-commerce Setup",
    "Payment Integration",
    "Analytics Setup",
    "Maintenance & Support",
  ]

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleServiceToggle = (service: string) => {
    const updatedServices = formData.services.includes(service)
      ? formData.services.filter((s) => s !== service)
      : [...formData.services, service]

    setFormData({ ...formData, services: updatedServices })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="w-24 h-24 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>

            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Thank You!</h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              We've received your project details and will get back to you within 24 hours with a detailed proposal and
              next steps.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Clock className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-slate-300">We'll contact you within 24 hours</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Users className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Dedicated Team</h3>
                  <p className="text-sm text-slate-300">Expert team assigned to your project</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Target className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Custom Solution</h3>
                  <p className="text-sm text-slate-300">Tailored approach for your needs</p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 bg-transparent px-8"
                >
                  Back to Home
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 px-8">
                  View Our Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-200"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-slate-800 to-teal-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Vedvix
            </motion.div>
          </Link>
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((item) => (
              <motion.a
                key={item}
                href={
                  item === "Home"
                    ? "/"
                    : item === "Portfolio"
                      ? "/portfolio"
                      : item === "Blog"
                        ? "/blog"
                        : `/#${item.toLowerCase()}`
                }
                className="text-slate-600 hover:text-teal-600 transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
          <Link href="/#contact">
            <Button
              variant="outline"
              className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white bg-transparent"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </motion.nav>

      {/* Header */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link href="/">
              <Button variant="ghost" className="text-teal-400 hover:text-teal-300 mb-6 p-0">
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Start Your
              <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent block">
                Journey
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Let's transform your vision into reality. Tell us about your project and we'll create a custom solution
              that exceeds your expectations.
            </p>

            {/* Progress Bar */}
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-300">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-sm text-slate-300">{Math.round((currentStep / totalSteps) * 100)}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-teal-400 to-cyan-300 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Steps */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Project Type */}
            {currentStep === 1 && (
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">What type of project do you have in mind?</h2>
                  <p className="text-slate-600">Select the option that best describes your project needs</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projectTypes.map((type) => (
                    <motion.div key={type.id} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Card
                        className={`cursor-pointer transition-all duration-300 border-2 ${
                          formData.projectType === type.id
                            ? "border-teal-600 bg-teal-50"
                            : "border-slate-200 hover:border-teal-300"
                        }`}
                        onClick={() => setFormData({ ...formData, projectType: type.id })}
                      >
                        <CardContent className="p-6 text-center">
                          <div className="text-4xl mb-4">{type.icon}</div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                          <p className="text-slate-600">{type.description}</p>
                          {formData.projectType === type.id && (
                            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="mt-4">
                              <CheckCircle className="w-6 h-6 text-teal-600 mx-auto" />
                            </motion.div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Which services do you need?</h3>
                  <p className="text-slate-600 mb-6">Select all that apply to your project</p>

                  <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {services.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={service}
                          checked={formData.services.includes(service)}
                          onCheckedChange={() => handleServiceToggle(service)}
                        />
                        <label htmlFor={service} className="text-sm text-slate-700 cursor-pointer">
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Tell us about your project</h2>
                  <p className="text-slate-600">Provide details about what you want to build</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Name *</label>
                    <Input
                      placeholder="Enter your project name"
                      value={formData.projectName}
                      onChange={(e) => setFormData({ ...formData, projectName: e.target.value })}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Project Description *</label>
                    <Textarea
                      placeholder="Describe your project, its goals, and key features you envision..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Timeline *</label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP (Rush project)</SelectItem>
                          <SelectItem value="1-2months">1-2 months</SelectItem>
                          <SelectItem value="3-4months">3-4 months</SelectItem>
                          <SelectItem value="5-6months">5-6 months</SelectItem>
                          <SelectItem value="6+months">6+ months</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Budget Range *</label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData({ ...formData, budget: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k+">$100,000+</SelectItem>
                          <SelectItem value="discuss">Let's discuss</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Company Information */}
            {currentStep === 3 && (
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">About your company</h2>
                  <p className="text-slate-600">Help us understand your business better</p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Name *</label>
                      <Input
                        placeholder="Enter company name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Industry *</label>
                      <Select
                        value={formData.industry}
                        onValueChange={(value) => setFormData({ ...formData, industry: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="technology">Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Finance</SelectItem>
                          <SelectItem value="retail">Retail</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Company Size *</label>
                      <Select
                        value={formData.companySize}
                        onValueChange={(value) => setFormData({ ...formData, companySize: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select company size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                          <SelectItem value="small">Small (11-50 employees)</SelectItem>
                          <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
                          <SelectItem value="large">Large (201-1000 employees)</SelectItem>
                          <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Current Website</label>
                      <Input
                        placeholder="https://yourwebsite.com (optional)"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Information */}
            {currentStep === 4 && (
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Contact information</h2>
                  <p className="text-slate-600">How can we reach you?</p>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">First Name *</label>
                      <Input
                        placeholder="Enter first name"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Last Name *</label>
                      <Input
                        placeholder="Enter last name"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <Input
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Your Role *</label>
                    <Select value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ceo">CEO/Founder</SelectItem>
                        <SelectItem value="cto">CTO</SelectItem>
                        <SelectItem value="marketing">Marketing Manager</SelectItem>
                        <SelectItem value="product">Product Manager</SelectItem>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="designer">Designer</SelectItem>
                        <SelectItem value="consultant">Consultant</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 5: Additional Information */}
            {currentStep === 5 && (
              <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">Final details</h2>
                  <p className="text-slate-600">Help us create the perfect solution for you</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Current Challenges</label>
                    <Textarea
                      placeholder="What challenges are you currently facing that this project should solve?"
                      value={formData.challenges}
                      onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                      className="w-full min-h-[100px]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Success Goals</label>
                    <Textarea
                      placeholder="What would success look like for this project? What are your key objectives?"
                      value={formData.goals}
                      onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                      className="w-full min-h-[100px]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Inspiration & References</label>
                    <Textarea
                      placeholder="Any websites, apps, or designs that inspire you? Share links or describe what you like about them."
                      value={formData.inspiration}
                      onChange={(e) => setFormData({ ...formData, inspiration: e.target.value })}
                      className="w-full min-h-[100px]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Additional Information</label>
                    <Textarea
                      placeholder="Anything else you'd like us to know about your project or requirements?"
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                      className="w-full min-h-[100px]"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-slate-200">
              <div>
                {currentStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    className="border-slate-300 text-slate-600 hover:bg-slate-50 bg-transparent"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                )}
              </div>

              <div>
                {currentStep < totalSteps ? (
                  <Button
                    onClick={handleNext}
                    disabled={
                      (currentStep === 1 && !formData.projectType) ||
                      (currentStep === 2 &&
                        (!formData.projectName || !formData.description || !formData.timeline || !formData.budget)) ||
                      (currentStep === 3 && (!formData.companyName || !formData.industry || !formData.companySize)) ||
                      (currentStep === 4 &&
                        (!formData.firstName || !formData.lastName || !formData.email || !formData.role))
                    }
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    Next Step
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.firstName || !formData.lastName || !formData.email}
                    className="bg-teal-600 hover:bg-teal-700 px-8"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                      />
                    ) : (
                      <CheckCircle className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? "Submitting..." : "Submit Project"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vedvix */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-12">Why Choose Vedvix?</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                      <Zap className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Fast Delivery</h3>
                    <p className="text-slate-600">
                      We deliver high-quality solutions on time, every time. Our agile approach ensures rapid
                      development without compromising quality.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                      <Users className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Expert Team</h3>
                    <p className="text-slate-600">
                      Our team of experienced developers, designers, and strategists brings years of expertise to every
                      project.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="border-0 shadow-lg h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Ongoing Support</h3>
                    <p className="text-slate-600">
                      We don't just build and leave. Our comprehensive support ensures your solution continues to
                      perform optimally.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-teal-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Prefer to Talk Directly?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Sometimes it's easier to discuss your project over a call. We're here to help in whatever way works best
              for you.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Phone className="w-8 h-8 text-teal-400 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Call Us</h3>
                  <p className="text-slate-300 mb-4">+1 (555) 123-4567</p>
                  <Button
                    variant="outline"
                    className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 bg-transparent"
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <Mail className="w-8 h-8 text-teal-400 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email Us</h3>
                  <p className="text-slate-300 mb-4">hello@vedvix.com</p>
                  <Button
                    variant="outline"
                    className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 bg-transparent"
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <MessageSquare className="w-8 h-8 text-teal-400 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Live Chat</h3>
                  <p className="text-slate-300 mb-4">Available 9 AM - 6 PM EST</p>
                  <Button
                    variant="outline"
                    className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 bg-transparent"
                  >
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/">
                <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent mb-4">
                  Vedvix
                </div>
              </Link>
              <p className="text-slate-400 mb-4">Transforming businesses through innovative digital solutions.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="/#services" className="hover:text-teal-400 transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-teal-400 transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-teal-400 transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-teal-400 transition-colors">
                    E-commerce
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="/#about" className="hover:text-teal-400 transition-colors">
                    About Us
                  </a>
                </li>
                {/* <li>
                  <a href="/portfolio" className="hover:text-teal-400 transition-colors">
                    Portfolio
                  </a>
                </li> */}
                <li>
                  <a href="/success-stories" className="hover:text-teal-400 transition-colors">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-teal-400 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400">
                <li>2nd Floor, Plot 24E Shyam Vihar</li>
                <li>Murlipura Jaipur 302039</li>
                <li>+91 9460688385</li>
                <li>admin@vedvix.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Vedvix. All rights reserved. Built with passion for digital excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
