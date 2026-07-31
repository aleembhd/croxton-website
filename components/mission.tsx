import { ShieldCheck, Lock, EyeOff } from "lucide-react"

/**
 * Trust signals live here rather than in a section of their own. "Is this safe
 * to install?" is the question a visitor actually has after seeing the products,
 * so it gets answered in passing instead of being sold to them.
 */
const assurances = [
  {
    icon: <Lock className="h-5 w-5" />,
    title: "Privacy first",
    body: "We collect only what a product needs to work. Telix keeps your call history on your own device.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Secure by practice",
    body: "Built to OWASP secure-development practices from the first commit, not audited in afterwards.",
  },
  {
    icon: <EyeOff className="h-5 w-5" />,
    title: "No hidden tracking",
    body: "We don't sell your data and we don't follow you around. What you put in stays yours.",
  },
]

export function Mission() {
  return (
    <section
      id="mission"
      className="section relative scroll-mt-32 border-t border-white/[0.07]"
    >
      <div className="container-content">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Why we build</p>
          <h2 className="heading-2 mt-6">
            A problem first. <span className="text-gradient-brand">Then a product.</span>
          </h2>
          <p className="body-lg mx-auto mt-6">
            Everything we make starts the same way — we notice something that quietly
            makes someone&apos;s day harder, and we build the single tool that takes it
            away.
          </p>
          <p className="body-lg mx-auto mt-4">
            Then we ship it, keep it simple enough to understand in a minute, and let the
            people using it decide what comes next.
          </p>
        </div>

        {/*
          Trust cards. No divider rule above them — the cards are their own visual
          boundary, so a horizontal line just adds a second one.
        */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3 md:mt-16">
          {assurances.map((item) => (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/[0.07] bg-gradient-to-b
                         from-white/[0.04] to-white/[0.01] p-6 transition-all duration-300
                         hover:-translate-y-1 hover:border-brand/25
                         hover:shadow-[0_18px_40px_-26px_rgba(232,114,44,0.45)] md:p-7"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl border
                           border-white/10 bg-white/[0.05] text-brand-light transition-colors
                           duration-300 group-hover:border-brand/30 group-hover:bg-brand/15"
              >
                {item.icon}
              </span>
              <h3 className="mt-5 text-base font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
