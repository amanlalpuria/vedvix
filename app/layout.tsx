import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Vedvix - Innovative Tech Solutions",
  description: "Mobile & Web Development, Digital Marketing, Automation & AI, UI/UX & Designing",
  generator: "aman.lalpuria",
  icons: {
    icon: "/vedvix_favicon.ico",
    shortcut: "/vedvix_favicon.ico",
    apple: "/vedvix.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
