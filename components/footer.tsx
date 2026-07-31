import Link from "next/link"
import Image from "next/image"
import { company, products, legalLinks, socials } from "@/lib/site"

// Static export: this is evaluated at build time, which is fine for a copyright line.
const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-ink-800/40 px-5 pb-10 pt-16 md:px-8">
      <div className="container-content">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          {/* Brand */}
          <div>
            <Image
              src="/croxton-logo.webp"
              alt="Croxton Technologies"
              width={480}
              height={193}
              className="h-11 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Creating useful software products that simplify everyday work, improve
              productivity and solve real problems.
            </p>
            <p className="mt-4 text-xs text-muted/70">
              {company.legalName} · Registered in India
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Products
            </h3>
            <ul className="mt-5 space-y-3">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link
                    href={product.href}
                    target={product.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      product.href.startsWith("http") ? "noopener noreferrer" : undefined
                    }
                    className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-white"
                  >
                    {product.name}
                    {product.status === "soon" && (
                      <span className="rounded-full bg-brand/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-brand-light">
                        Soon
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-7 sm:flex-row">
          <p className="text-xs text-muted">
            © {currentYear} {company.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted">
            <Link href={socials.email} className="transition-colors hover:text-white">
              {company.email}
            </Link>
            <Link
              href={socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              {company.phoneDisplay}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
