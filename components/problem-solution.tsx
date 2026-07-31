"use client"

import { useId, useState } from "react"
import { ChevronDown, AlertCircle, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Collapsed problem/solution panel for a product card.
 *
 * The content stays in the DOM at all times (only clipped when closed), so the
 * copy is still indexed by search engines and readable by AI crawlers — unlike
 * an accordion that injects its content on click.
 *
 * Takes primitives rather than the whole Product: everything handed to a client
 * component is serialised into the RSC payload, and the full object would ship
 * the long problemPoints/solutionPoints arrays that only the product pages use.
 */
export function ProblemSolution({
  name,
  problem,
  solution,
}: {
  name: string
  problem: string
  solution: string
}) {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = useId()

  return (
    <div
      className={cn(
        "mt-7 overflow-hidden rounded-xl border transition-colors duration-300",
        isOpen
          ? "border-brand/25 bg-ink-800/60"
          : "border-white/[0.07] bg-ink-800/30 hover:border-white/20",
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-white">
          Why {name} exists
        </span>
        <span
          className={cn(
            "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            isOpen
              ? "rotate-180 border-brand/40 bg-brand/15 text-brand-light"
              : "border-white/10 bg-white/[0.04] text-muted",
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>

      {/* grid-rows 0fr -> 1fr gives a smooth height transition without JS measuring */}
      <div
        id={panelId}
        className={cn(
          "grid transition-all duration-500 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-5 border-t border-white/[0.07] px-5 py-5">
            <div>
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-red-300/90">
                <AlertCircle className="h-3.5 w-3.5" />
                The problem
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {problem}
              </p>
            </div>

            <div>
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-emerald-300/90">
                <Sparkles className="h-3.5 w-3.5" />
                The solution
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {solution}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
