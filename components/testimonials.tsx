import { Quote } from "lucide-react"
import { testimonials } from "@/lib/site"

/**
 * Renders nothing until real testimonials are added to `testimonials` in
 * lib/site.ts. See the note there for the expected shape.
 */
export function Testimonials() {
  if (testimonials.length === 0) return null

  return (
    <section className="section border-t border-white/[0.07]">
      <div className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">In their words</p>
          <h2 className="heading-2 mt-6">
            The people using them <span className="text-gradient-brand">love them.</span>
          </h2>
          <p className="body-lg mx-auto mt-5">
            We don&apos;t chase reviews. These came from people who simply wanted to
            tell us the product helped.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <figure
              key={`${item.author}-${index}`}
              className="card card-hover flex flex-col p-7"
            >
              <Quote className="h-6 w-6 shrink-0 text-brand/50" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-white/90 md:text-base">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/[0.07] pt-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand/15 text-sm font-bold text-brand-light">
                  {item.author.trim().charAt(0).toUpperCase()}
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-white">
                    {item.author}
                  </span>
                  <span className="block truncate text-xs text-muted">
                    {item.role ? `${item.role} · ${item.product}` : item.product}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
