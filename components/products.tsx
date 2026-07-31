import Link from "next/link"
import { Check, Lock } from "lucide-react"
import { products, type Product } from "@/lib/site"
import { ProductPreview } from "@/components/product-preview"
import { ProblemSolution } from "@/components/problem-solution"
import { ProductCtas } from "@/components/product-ctas"
import { cn } from "@/lib/utils"

function StatusBadge({ status }: { status: Product["status"] }) {
  if (status === "live") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
        </span>
        Live now
      </span>
    )
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-light">
      <Lock className="h-3 w-3" />
      Coming soon
    </span>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  // Alternate which side the poster sits on, on desktop only.
  const posterFirst = index % 2 === 1

  return (
    <article className="card card-hover overflow-hidden p-5 sm:p-7 md:p-9">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Poster */}
        <div className={cn(posterFirst && "lg:order-2")}>
          <ProductPreview
            product={{
              name: product.name,
              descriptor: product.descriptor,
              tagline: product.tagline,
              status: product.status,
              image: product.image,
              accent: product.accent,
            }}
          />
        </div>

        {/* Copy */}
        <div className={cn(posterFirst && "lg:order-1")}>
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={product.status} />
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-muted">
              {product.platform}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-bold leading-tight md:text-3xl">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-muted">{product.descriptor}</p>

          <p className="mt-5 text-lg font-semibold leading-snug text-white md:text-xl">
            {product.tagline}
          </p>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {product.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-white/85">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                {feature}
              </li>
            ))}
          </ul>

          <ProblemSolution
            name={product.name}
            problem={product.problem}
            solution={product.solution}
          />

          <ProductCtas product={product} className="mt-7" />
        </div>
      </div>
    </article>
  )
}

export function Products() {
  return (
    // pt override: the hero has no bottom padding, so this section owns the
    // entire gap between the logo scroller and the products.
    <section id="products" className="section relative scroll-mt-32 pt-12 md:pt-16">
      <div className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Our products</p>
          <h2 className="heading-2 mt-6">
            What we&apos;ve <span className="text-gradient-brand">built.</span>
          </h2>
        </div>

        <div className="mt-14 space-y-8">
          {products.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
