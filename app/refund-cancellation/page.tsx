import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { company, socials } from "@/lib/site"

export const metadata: Metadata = {
  title: "Refund & Cancellation",
  description:
    "How cancellations and refunds work for Croxton Technologies product plans and purchases.",
}

export default function RefundCancellation() {
  return (
    <PageShell
      title="Refund and Cancellation Policy"
      subtitle="Effective date: January 2025"
    >
      <p>
        {company.legalName} sells access to its own software products. This policy
        explains how cancellations and refunds work for those purchases.
      </p>

      <h2>1. Cancelling a subscription</h2>
      <ul>
        <li>
          You can cancel a subscription at any time from your account settings or by
          emailing us.
        </li>
        <li>
          On cancellation, you keep access until the end of the period you have already
          paid for. We do not charge you again after that.
        </li>
        <li>
          Part-used billing periods are not pro-rated unless required by law or stated
          otherwise below.
        </li>
      </ul>

      <h2>2. Refund eligibility</h2>
      <ul>
        <li>
          <strong>Within 7 days of a first purchase:</strong> if the product does not
          work as described for you, contact us and we will refund the payment in full.
        </li>
        <li>
          <strong>Duplicate or accidental charges:</strong> refunded in full, always.
        </li>
        <li>
          <strong>A fault on our side:</strong> if a defect or outage prevented you from
          using a paid feature and we could not resolve it, we will refund the affected
          period.
        </li>
        <li>
          <strong>Not eligible:</strong> renewals you forgot to cancel after the period
          has begun and the product has been used, or requests made purely because a
          feature you expected is on our roadmap rather than shipped.
        </li>
      </ul>

      <h2>3. Purchases made through app stores</h2>
      <p>
        Anything bought inside <strong>Telix</strong> via Google Play is processed by
        Google, and refunds for those purchases are handled under the Google Play refund
        policy. Contact us and we will help, but the refund itself must be issued by
        Google.
      </p>

      <h2>4. Refund timeline</h2>
      <p>
        Approved refunds are processed within 7–10 business days to the original payment
        method. The time it takes to appear on your statement depends on your bank or
        card issuer.
      </p>

      <h2>5. How to request a refund</h2>
      <p>
        Email <Link href={socials.email}>{company.email}</Link> with the product name,
        the email address on the account, the payment or order ID, and a short note on
        what went wrong. We respond within 24 hours on business days.
      </p>
    </PageShell>
  )
}
