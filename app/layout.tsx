import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vedvix - Transform Your Digital Presence",
  description:
    "Empowering businesses to thrive in the digital age through innovative solutions. Web development, mobile apps, digital marketing, and e-commerce solutions.",
  keywords: "digital transformation, web development, mobile apps, digital marketing, e-commerce, business consulting",
  authors: [{ name: "Vedvix Team" }],
  creator: "Vedvix",
  publisher: "Vedvix",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://vedvix.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vedvix - Transform Your Digital Presence",
    description: "Empowering businesses to thrive in the digital age through innovative solutions.",
    url: "https://vedvix.com",
    siteName: "Vedvix",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vedvix - Digital Transformation Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedvix - Transform Your Digital Presence",
    description: "Empowering businesses to thrive in the digital age through innovative solutions.",
    images: ["/og-image.jpg"],
    creator: "@vedvix",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
