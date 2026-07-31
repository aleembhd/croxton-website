import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { company, socials } from "@/lib/site"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms that govern your use of the Croxton Technologies website and products.",
}

export default function TermsAndConditions() {
  return (
    <PageShell title="Terms and Conditions" subtitle="Effective date: January 2025">
      <p>
        These terms govern your use of the {company.legalName} website and our
        products, including Telix, ResumeLab and Aperture. By using any of them, you
        agree to these terms.
      </p>

      <h2>1. What we provide</h2>
      <p>
        Croxton builds and operates its own software products — currently a mobile
        application and web applications — which are made available to users directly,
        either free of charge or on a paid plan. These terms cover your use of those
        products and of this website.
      </p>

      <h2>2. Accounts</h2>
      <ul>
        <li>You are responsible for keeping your account credentials secure.</li>
        <li>You must provide accurate information when creating an account.</li>
        <li>You are responsible for activity that happens under your account.</li>
      </ul>

      <h2>3. Acceptable use</h2>
      <ul>
        <li>Use our products lawfully and as intended.</li>
        <li>
          Do not attempt to disrupt, reverse engineer or gain unauthorised access to our
          systems.
        </li>
        <li>
          Do not upload content you have no right to use. For Aperture in particular,
          only upload event photos you are permitted to share, and only a selfie of
          yourself.
        </li>
        <li>Do not use our products to harm, harass or impersonate others.</li>
      </ul>

      <h2>4. Your content</h2>
      <p>
        You keep ownership of everything you upload. You grant us only the limited
        permission needed to process that content so the product can deliver the result
        you asked for. See our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link> for details.
      </p>

      <h2>5. Intellectual property</h2>
      <p>
        All product code, design, content and branding — including the Croxton, Telix,
        ResumeLab and Aperture names and logos — belong to Croxton or its licensors.
        Unauthorised use is prohibited.
      </p>

      <h2>6. Payments and subscriptions</h2>
      <p>
        Paid plans are billed through our authorised payment gateway. Prices and
        inclusions are shown before you confirm payment. Access to a paid feature
        begins once payment is confirmed. Refunds are handled under our{" "}
        <Link href="/refund-cancellation">Refund and Cancellation Policy</Link>.
      </p>

      <h2>7. Availability and changes</h2>
      <p>
        We work to keep our products available and reliable, but we do not guarantee
        uninterrupted service. Features may be added, changed or discontinued as our
        products evolve. Where a change materially affects a paid plan, we will give
        reasonable notice.
      </p>

      <h2>8. Third-party services</h2>
      <p>
        Our products rely on third-party providers for hosting, AI processing and
        payments. Their availability can affect ours, and their own terms may apply to
        the portion of the service they provide.
      </p>

      <h2>9. Termination</h2>
      <p>
        We may suspend or terminate access for a breach of these terms. You may stop
        using our products or delete your account at any time.
      </p>

      <h2>10. Limitation of liability</h2>
      <p>
        Our products are provided on an &ldquo;as is&rdquo; basis. Croxton is not liable
        for indirect, incidental or consequential damages arising from their use. Where
        liability cannot be excluded, it is limited to the amount you paid us in the
        preceding twelve months.
      </p>

      <h2>11. Governing law</h2>
      <p>
        These terms are governed by the laws of India. Disputes are subject to the
        jurisdiction of the courts in Hyderabad, Telangana.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about these terms? Email{" "}
        <Link href={socials.email}>{company.email}</Link>.
      </p>
    </PageShell>
  )
}
