"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#001219]">
      <div className="container mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/croxton-logo.png"
            alt="CROXTON" 
            width={300}
            height={50}
            className="h-14 w-[280px] md:w-[300px]"
            priority
            onError={(e) => {
              console.error('Error loading image:', e);
            }}
          />
        </Link>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-80 bg-[#001219] transform transition-transform duration-300 ease-in-out z-50",
            isMenuOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="p-6 bg-[#001219] h-full">
            <button className="absolute top-7 right-4" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>

            <nav className="flex flex-col space-y-8 mt-16">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-lg font-medium hover:text-primary text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-lg font-medium hover:text-primary text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("why-us")}
                className="text-lg font-medium hover:text-primary text-left"
              >
                Why Us
              </button>
              <button
                onClick={() => scrollToSection("technology")}
                className="text-lg font-medium hover:text-primary text-left"
              >
                Technology
              </button>
              <Link href="/youtube" className="text-lg font-medium hover:text-primary">
                YouTube Channel
              </Link>
              <Link href="/community" className="text-lg font-medium hover:text-primary">
                AI Community
              </Link>
            </nav>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-base font-medium hover:text-primary">
            HOME
          </Link>
          <Link href="/youtube" className="text-base font-medium hover:text-primary">
            YOUTUBE CHANNEL
          </Link>
          <Link href="/community" className="text-base font-medium hover:text-primary">
            AI COMMUNITY
          </Link>
        </nav>

        <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <Menu className="h-8 w-8" />
        </button>
      </div>
    </header>
  )
}

