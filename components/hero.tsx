import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { company, products } from "@/lib/site"
import { cn } from "@/lib/utils"

// Copies of the product set laid end to end. The marquee shifts by -50%, i.e.
// exactly half the copies, so the content is periodic and the loop never jumps.
// An even count is required for that to hold.
const SCROLLER_PASSES = 4

const scrollerItems = Array.from({ length: SCROLLER_PASSES }, (_, pass) =>
  products.map((product) => ({ product, isClone: pass > 0 })),
).flat()

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-0 pt-32 md:pt-40"
    >
      {/* Ambient background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-dots mask-fade-b opacity-60" />
        <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 animate-glow rounded-full bg-brand/20 blur-[140px]" />
        <div className="absolute -right-32 top-40 h-[320px] w-[320px] rounded-full bg-cyan/10 blur-[120px]" />
      </div>

      <div className="container-content px-5 md:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow-tagline animate-fade-in">{company.tagline}</p>

          <h1 className="heading-1 mt-7 animate-fade-up">
            {company.legalName} builds{" "}
            <span className="text-gradient-brand">products that solve real problems.</span>
          </h1>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 animate-fade-up [animation-delay:160ms] sm:flex-row">
            <Link href="#products" className="btn-primary w-full sm:w-auto">
              See our products
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="#mission" className="btn-ghost w-full sm:w-auto">
              Why we build
            </Link>
          </div>
        </div>
      </div>

      {/*
        Continuous product logo scroller. Renders `passes` copies of the three
        products and translates by exactly -50%, so the loop is seamless with no
        visible restart. Pauses on hover to keep the links clickable.
      */}
      <div className="group mask-fade-x relative mt-14 overflow-hidden animate-fade-in [animation-delay:280ms] md:mt-16">
        <div
          className="flex w-max animate-marquee items-stretch gap-4 sm:gap-6
                     group-hover:[animation-play-state:paused] motion-reduce:animate-none"
        >
          {scrollerItems.map(({ product, isClone }, i) => (
            <Link
              key={`${product.slug}-${i}`}
              href={`/products/${product.slug}`}
              aria-hidden={isClone || undefined}
              tabIndex={isClone ? -1 : undefined}
              className="group/tile flex shrink-0 items-center px-6 sm:px-9"
            >
              {/* Transparent dark-mode wordmarks — no tile, straight on the hero */}
              <Image
                src={product.logo.src}
                alt={isClone ? "" : `${product.name} — ${product.descriptor}`}
                width={product.logo.width}
                height={product.logo.height}
                className="h-10 w-auto opacity-90 transition-opacity duration-300
                           group-hover/tile:opacity-100 sm:h-12"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
