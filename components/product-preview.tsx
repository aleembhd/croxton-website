"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { X, Maximize2 } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/site"

/** Only the fields the preview needs — see the note on props below. */
export type PreviewProduct = Pick<
  Product,
  "name" | "descriptor" | "tagline" | "status" | "image" | "accent"
>

/**
 * The product poster. Tapping it opens a full-screen lightbox, because these
 * posters carry a lot of fine detail that can't be read at card size.
 *
 * Portrait (2:3) and landscape (~1.4:1) posters both sit in the same slot, so
 * the frame keeps a consistent aspect ratio and letterboxes with `object-contain`
 * rather than cropping anyone's artwork.
 *
 * Takes a narrowed product: anything passed to a client component is serialised
 * into the RSC payload, so handing over the whole object would ship the long
 * problem/solution and keyword arrays this component never reads.
 */
export function ProductPreview({ product }: { product: PreviewProduct }) {
  const [isOpen, setIsOpen] = useState(false)
  const isUpcoming = product.status === "soon"

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  const isPortrait = product.image.height > product.image.width

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={`View the ${product.name} overview in full size`}
        className={cn(
          "group relative block w-full overflow-hidden rounded-2xl border border-white/10",
          "bg-gradient-to-br p-2.5 transition-all duration-500 md:p-3",
          "hover:border-brand/40 hover:shadow-[0_20px_60px_-25px_rgba(232,114,44,0.45)]",
          product.accent,
        )}
      >
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-xl bg-white/[0.03]",
            isPortrait ? "aspect-[3/4] sm:aspect-[4/5]" : "aspect-[4/3] sm:aspect-[3/2]",
          )}
        >
          <Image
            src={product.image.src}
            alt={`${product.name} — ${product.descriptor}. ${product.tagline}`}
            fill
            sizes="(max-width: 1024px) 92vw, 46vw"
            className="object-contain object-top transition-transform duration-700 group-hover:scale-[1.02]"
          />

          {/* Coming-soon corner ribbon — the preview stays fully visible */}
          {isUpcoming && (
            <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 overflow-hidden">
              <span
                className="absolute right-[-46px] top-[26px] w-[170px] rotate-45 bg-brand py-1.5 text-center
                           text-[10px] font-bold uppercase tracking-[0.14em] text-white shadow-lg"
              >
                Coming soon
              </span>
            </div>
          )}

          <span
            className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-lg border border-white/15
                       bg-ink/75 px-2.5 py-1.5 text-[11px] font-semibold text-white/85 opacity-0 backdrop-blur-sm
                       transition-opacity duration-300 group-hover:opacity-100"
          >
            <Maximize2 className="h-3 w-3" />
            View full size
          </span>
        </div>
      </button>

      {/* Lightbox */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} overview`}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[60] flex animate-fade-in items-center justify-center bg-ink/95 p-4 backdrop-blur-md md:p-8"
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close"
            className="fixed right-4 top-4 z-10 rounded-xl border border-white/15 bg-ink/80 p-2.5 text-white
                       transition-colors hover:border-white/40 md:right-8 md:top-8"
          >
            <X className="h-5 w-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-full w-full max-w-4xl overflow-y-auto rounded-xl"
          >
            <Image
              src={product.image.src}
              alt={`${product.name} — ${product.descriptor}`}
              width={product.image.width}
              height={product.image.height}
              sizes="(max-width: 900px) 96vw, 900px"
              className="h-auto w-full rounded-xl"
            />
          </div>
        </div>
      )}
    </>
  )
}
