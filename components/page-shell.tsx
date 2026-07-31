import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

/**
 * Wrapper for the standalone content pages (about, contact, legal). Gives them
 * the site header/footer and a readable prose column — previously these pages
 * rendered bare with no navigation.
 */
export function PageShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="min-h-screen px-5 pb-24 pt-32 md:px-8 md:pt-40">
        <div className="mx-auto w-full max-w-3xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>

          <h1 className="mt-7 text-3xl font-bold tracking-[-0.02em] md:text-4xl">
            {title}
          </h1>
          {subtitle && <p className="mt-4 text-sm text-muted md:text-base">{subtitle}</p>}

          <div
            className="mt-10 space-y-5 text-sm leading-relaxed text-muted md:text-base
                       [&_a]:font-medium [&_a]:text-brand-light [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-brand
                       [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:md:text-2xl
                       [&_h3]:mb-2 [&_h3]:mt-7 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-white
                       [&_li]:pl-1 [&_strong]:font-semibold [&_strong]:text-white
                       [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
          >
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
