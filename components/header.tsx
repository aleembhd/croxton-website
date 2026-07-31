"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { navLinks } from "@/lib/site"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-white/[0.07] bg-ink/80 backdrop-blur-xl"
            : "bg-transparent",
        )}
      >
        <div className="container-content flex h-20 items-center justify-between px-5 md:h-24 md:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            aria-label="Croxton Technologies — home"
          >
            <Image
              src="/croxton-logo.webp"
              alt="Croxton Technologies — Where Technology Meets Efficiency"
              width={480}
              height={193}
              priority
              className="h-12 w-auto md:h-16"
            />
          </Link>

          {/* Section links — no CTA button, the hero already carries that */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            className="rounded-lg p-2 text-white lg:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Backdrop */}
      <div
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
        className={cn(
          "fixed inset-0 z-50 bg-ink/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          isMenuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-[85%] max-w-sm border-l border-white/[0.07]",
          "bg-ink-800 transition-transform duration-300 ease-out lg:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Menu
          </span>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="rounded-lg p-2 text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col px-6 pt-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="border-b border-white/[0.07] py-4 text-lg font-medium text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  )
}
