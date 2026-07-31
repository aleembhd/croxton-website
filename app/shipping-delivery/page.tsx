import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { company, socials } from "@/lib/site"

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description:
    "How Croxton Technologies delivers access to its digital products — Telix, ResumeLab and Aperture.",
}

export default function ShippingDelivery() {
  return (
    <PageShell
      title="Shipping and Delivery Policy"
      subtitle="Last updated: January 2025"
    >
      <p>
        {company.legalName} sells <strong>digital products only</strong>. Nothing we
        sell is shipped physically, so there are no couriers, tracking numbers or
        delivery charges involved.
      </p>

      <h2>1. How delivery works</h2>
      <ul>
        <li>
          <strong>Telix (Android):</strong> delivered through the Google Play Store.
          Install the app and it is available on your device immediately. Any in-app
          purchase unlocks within the app as soon as Google confirms payment.
        </li>
        <li>
          <strong>ResumeLab (web app):</strong> delivered instantly in your browser at{" "}
          <Link
            href="https://resumelab.duckdns.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            resumelab.duckdns.org
          </Link>
          . Nothing to install.
        </li>
        <li>
          <strong>Aperture (web app):</strong> launching soon. Waitlist members receive
          an access link by email at launch.
        </li>
      </ul>

      <h2>2. Delivery timeframe</h2>
      <ul>
        <li>
          <strong>Free access:</strong> immediate, as soon as you install the app or
          open the web product.
        </li>
        <li>
          <strong>Paid plans:</strong> activated automatically within minutes of a
          successful payment.
        </li>
        <li>
          <strong>If a payment succeeds but access does not unlock:</strong> email us and
          we will activate it manually, usually within 24 hours on business days.
        </li>
      </ul>

      <h2>3. Confirmation</h2>
      <p>
        You receive an email confirmation and receipt for every paid purchase. Keep the
        payment or order ID — it is what we need to help you fastest.
      </p>

      <h2>4. Availability</h2>
      <ul>
        <li>Our products are available worldwide, with no extra charge by region.</li>
        <li>
          A current browser is required for our web products; Telix requires a supported
          Android version as listed on its Play Store page.
        </li>
        <li>
          Some features depend on third-party services, so availability can vary
          briefly during an outage.
        </li>
      </ul>

      <h2>5. Problems after delivery</h2>
      <ul>
        <li>Contact us and we will help you get the product working.</li>
        <li>Bugs and access issues are fixed at no additional cost.</li>
        <li>
          If we cannot resolve a problem that prevents you from using a paid feature,
          see our <Link href="/refund-cancellation">Refund and Cancellation Policy</Link>
          .
        </li>
      </ul>

      <h2>6. Contact us</h2>
      <ul>
        <li>
          <strong>Email:</strong> <Link href={socials.email}>{company.email}</Link>
        </li>
        <li>
          <strong>Phone:</strong>{" "}
          <Link href={`tel:${company.phone}`}>{company.phoneDisplay}</Link>
        </li>
        <li>
          <strong>Hours:</strong> {company.hours}
        </li>
      </ul>
    </PageShell>
  )
}
