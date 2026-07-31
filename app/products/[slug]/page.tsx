import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowUpRight, Check, Lock, AlertCircle, Sparkles } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductPreview } from "@/components/product-preview"
import { ProductCtas } from "@/components/product-ctas"
import { ProductStructuredData } from "@/components/structured-data"
import { products, company, siteUrl } from "@/lib/site"

/**
 * A dedicated, indexable page per product. Anchors on a one-pager cannot rank
 * for "Telix app" or "ATS resume builder" — separate URLs with their own title,
 * H1 and structured data can.
 */
export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }))
}

export function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Metadata {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) return {}

  const title = `${product.name} — ${product.descriptor}`
  const description = `${product.description} Built by ${company.legalName}.`
  const url = `${siteUrl}/products/${product.slug}`

  return {
    title,
    description,
    keywords: product.searchTerms,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | CROXTON`,
      description,
      url,
      type: "website",
      images: [{ url: `${siteUrl}${product.image.src}`, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | CROXTON`,
      description,
      images: [`${siteUrl}${product.image.src}`],
    },
  }
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug)
  if (!product) notFound()

  const otherProducts = products.filter((p) => p.slug !== product.slug)
  const isLive = product.status === "live"

  return (
    <>
      <ProductStructuredData product={product} />
      <Header />

      <main className="min-h-screen px-5 pb-24 pt-32 md:px-8 md:pt-40">
        <div className="container-content">
          <nav aria-label="Breadcrumb" className="text-sm">
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 font-medium text-muted transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              All products
            </Link>
          </nav>

          <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                {isLive ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Live now
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-light">
                    <Lock className="h-3 w-3" />
                    Coming soon
                  </span>
                )}
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-muted">
                  {product.platform}
                </span>
              </div>

              {/* Keyword-bearing H1 */}
              <h1 className="heading-2 mt-6">
                {product.name} —{" "}
                <span className="text-gradient-brand">{product.descriptor}</span>
              </h1>

              <p className="mt-5 text-lg font-semibold text-white md:text-xl">
                {product.tagline}
              </p>

              <p className="mt-6 text-sm leading-relaxed text-muted md:text-base">
                {product.description}
              </p>

              <ProductCtas product={product} className="mt-8" />
            </div>

            <div className="lg:pt-4">
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
          </div>

          {/* Problem / solution — expanded here, since this page is the deep dive */}
          <section className="mt-20 grid gap-10 border-t border-white/[0.07] pt-14 md:grid-cols-2 md:gap-14">
            <div>
              <h2 className="flex items-center gap-2.5 text-xl font-bold md:text-2xl">
                <AlertCircle className="h-5 w-5 text-red-300/90" />
                The problem
              </h2>
              <ul className="mt-6 space-y-5">
                {product.problemPoints.map((point) => (
                  <li key={point.title}>
                    <h3 className="text-sm font-semibold text-white md:text-base">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{point.body}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-white/[0.07] pt-10 md:border-l md:border-t-0 md:pl-14 md:pt-0">
              <h2 className="flex items-center gap-2.5 text-xl font-bold md:text-2xl">
                <Sparkles className="h-5 w-5 text-emerald-300/90" />
                How {product.name} solves it
              </h2>
              <ul className="mt-6 space-y-5">
                {product.solutionPoints.map((point) => (
                  <li key={point.title}>
                    <h3 className="text-sm font-semibold text-white md:text-base">
                      {point.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{point.body}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Features */}
          <section className="mt-20 border-t border-white/[0.07] pt-14">
            <h2 className="text-2xl font-bold md:text-3xl">
              What {product.name} does
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {product.features.map((feature) => (
                <li key={feature} className="card flex items-start gap-3 p-5">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-light" />
                  <span className="text-sm text-white/90">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Audience */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold md:text-3xl">Who it&apos;s for</h2>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
              {product.audience}.
            </p>
          </section>

          {/* Other products */}
          <section className="mt-20 border-t border-white/[0.07] pt-14">
            <h2 className="text-2xl font-bold md:text-3xl">
              Other products by {company.legalName}
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {otherProducts.map((other) => (
                <Link
                  key={other.slug}
                  href={`/products/${other.slug}`}
                  className="card card-hover group p-7"
                >
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-lg font-bold">{other.name}</h3>
                    {other.status === "soon" && (
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-brand-light">
                        Soon
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted">{other.descriptor}</p>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    {other.tagline}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-light">
                    Learn more
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}
