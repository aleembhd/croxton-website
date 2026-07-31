import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react"
import { company, siteUrl } from "@/lib/site"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Croxton Technologies — Software products that solve real problems",
    template: "%s | Croxton Technologies",
  },
  description: company.definition,
  keywords: [
    "Croxton",
    "Croxton Technologies",
    "Croxton Technologies Hyderabad",
    "Telix",
    "Telix call tracker",
    "ResumeLab",
    "AI resume builder",
    "Aperture AI",
    "AI photo search",
    "software product company India",
  ],
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  applicationName: company.name,
  authors: [{ name: company.legalName, url: siteUrl }],
  creator: company.legalName,
  publisher: company.legalName,
  category: "technology",
  openGraph: {
    title: "Croxton Technologies — Software products that solve real problems",
    description: company.definition,
    url: siteUrl,
    type: "website",
    siteName: company.legalName,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@croxtonai",
    creator: "@croxtonai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
