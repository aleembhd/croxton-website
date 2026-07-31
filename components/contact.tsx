import Link from "next/link"
import {
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram,
  LifeBuoy,
  Bell,
  ArrowUpRight,
} from "lucide-react"
import { company, socials, products } from "@/lib/site"

const follow = [
  { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn", href: socials.linkedin },
  { icon: <Twitter className="h-4 w-4" />, label: "X", href: socials.twitter },
  { icon: <Instagram className="h-4 w-4" />, label: "Instagram", href: socials.instagram },
  {
    icon: <Instagram className="h-4 w-4" />,
    label: "Software Factory",
    href: socials.softwareFactory,
  },
]

export function Contact() {
  const upcoming = products.find((p) => p.status === "soon")

  const channels = [
    {
      icon: <LifeBuoy className="h-5 w-5" />,
      kind: "Email",
      title: "Product support",
      body: "Something not working, or an idea for what we should add next.",
      value: company.email,
      href: socials.email,
      external: false,
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      kind: "WhatsApp",
      title: "Quick question",
      body: "The fastest way to reach us. Usually answered the same day.",
      value: company.phoneDisplay,
      href: socials.whatsapp,
      external: true,
    },
    {
      icon: <Bell className="h-5 w-5" />,
      kind: "Waitlist",
      title: "Launch notifications",
      body: `Be told the day ${upcoming ? upcoming.name : "our next product"} goes live.`,
      value: "Join the waitlist",
      href: upcoming ? upcoming.href : socials.email,
      external: false,
    },
  ]

  return (
    <section
      id="contact"
      className="section relative scroll-mt-32 overflow-hidden border-t border-white/[0.07]"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute bottom-[-260px] left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-brand/15 blur-[130px]" />
      </div>

      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Support &amp; updates</p>
          <h2 className="heading-2 mt-6">
            Using our products? <span className="text-gradient-brand">We&apos;re here.</span>
          </h2>
          <p className="body-lg mx-auto mt-5">
            Report a bug, request a feature, or ask a question about any product. We read
            every message and reply within 24 hours on business days.
          </p>
        </div>

        {/* Whole card is the link — a single, obvious target rather than a small text link */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-4 md:grid-cols-3">
          {channels.map((channel) => (
            <Link
              key={channel.title}
              href={channel.href}
              target={channel.external ? "_blank" : undefined}
              rel={channel.external ? "noopener noreferrer" : undefined}
              className="group relative flex flex-col overflow-hidden rounded-2xl border
                         border-white/[0.07] bg-gradient-to-b from-white/[0.04] to-white/[0.01]
                         p-6 transition-all duration-300 hover:-translate-y-1
                         hover:border-brand/30 hover:shadow-[0_18px_40px_-24px_rgba(232,114,44,0.5)]
                         md:p-7"
            >
              {/* Warm wash that fades in on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 -top-16 h-32 bg-brand/20 opacity-0
                           blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="flex items-center justify-between gap-3">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-xl border
                             border-white/10 bg-white/[0.05] text-brand-light transition-colors
                             duration-300 group-hover:border-brand/30 group-hover:bg-brand/15"
                >
                  {channel.icon}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted/70">
                  {channel.kind}
                </span>
              </div>

              <h3 className="mt-5 text-base font-bold text-white md:text-lg">
                {channel.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {channel.body}
              </p>

              <span className="mt-6 flex items-center justify-between gap-3 border-t border-white/[0.07] pt-4">
                <span className="truncate text-sm font-semibold text-brand-light transition-colors duration-300 group-hover:text-brand">
                  {channel.value}
                </span>
                <ArrowUpRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-muted transition-all duration-300
                             group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                             group-hover:text-brand-light"
                />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted/70">
            Follow along
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {follow.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:border-brand/30 hover:text-white"
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-muted">{company.hours}</p>
        </div>
      </div>
    </section>
  )
}
