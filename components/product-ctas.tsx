import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { Product } from "@/lib/site"
import { cn } from "@/lib/utils"

/**
 * The CTA row for a product. Shared by the landing cards and the product pages
 * so all of them behave identically.
 *
 * The row always fills its container edge to edge with no trailing gap:
 *
 * - Two image badges (e.g. Google Play + Product Hunt): each gets flex-basis 0
 *   and a flex-grow equal to its own aspect ratio. Free space is then handed out
 *   in proportion to width-per-unit-height, so both badges resolve to the SAME
 *   height and together consume the row exactly.
 * - A text button + a badge: the badge keeps its fixed height (its own height
 *   can't be derived from a button) and the button flexes to absorb the rest.
 * - A button on its own: full width.
 */
export function ProductCtas({
  product,
  className,
}: {
  product: Product
  className?: string
}) {
  const { storeBadge, productHunt } = product
  const isLive = product.status === "live"
  const bothBadges = Boolean(storeBadge && productHunt)

  const buttonHref = product.href
  const isExternal = buttonHref.startsWith("http")

  return (
    <div className={cn("cta-row", className)}>
      {storeBadge ? (
        <a
          href={buttonHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${product.ctaLabel} — ${product.name}`}
          className={cn(
            "block transition-all duration-300 hover:opacity-90",
            "hover:drop-shadow-[0_6px_18px_rgba(255,255,255,0.12)]",
            bothBadges ? "cta-fill" : "shrink-0",
          )}
          style={
            bothBadges
              ? { flexGrow: storeBadge.width / storeBadge.height }
              : undefined
          }
        >
          <Image
            src={storeBadge.src}
            alt={storeBadge.alt}
            width={storeBadge.width}
            height={storeBadge.height}
            className={bothBadges ? "h-auto w-full" : "cta-badge"}
          />
        </a>
      ) : (
        <Link
          href={buttonHref}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className={cn(
            "cta-btn min-w-0 flex-1",
            isLive ? "btn-primary" : "btn-ghost",
          )}
        >
          <span className="truncate">{product.ctaLabel}</span>
          <ArrowUpRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
        </Link>
      )}

      {productHunt && (
        <a
          href={productHunt.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Leave a review for ${product.name} on Product Hunt`}
          className={cn(
            "block transition-opacity duration-300 hover:opacity-85",
            bothBadges ? "cta-fill" : "shrink-0",
          )}
          style={
            bothBadges
              ? { flexGrow: productHunt.width / productHunt.height }
              : undefined
          }
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- third-party badge served by Product Hunt */}
          <img
            src={productHunt.img}
            alt={productHunt.alt}
            width={productHunt.width}
            height={productHunt.height}
            loading="lazy"
            className={bothBadges ? "h-auto w-full" : "cta-badge"}
          />
        </a>
      )}
    </div>
  )
}
