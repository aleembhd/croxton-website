import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { company, socials } from "@/lib/site"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Croxton Technologies collects, uses and protects information across our website and products.",
}

export default function PrivacyPolicy() {
  return (
    <PageShell title="Privacy Policy" subtitle="Effective date: January 2025">
      <p>
        {company.legalName} (&ldquo;Croxton&rdquo;, &ldquo;we&rdquo;,
        &ldquo;our&rdquo;, or &ldquo;us&rdquo;) values your privacy. This policy
        explains how we collect, use, disclose and protect information across this
        website and the products we build — Telix, ResumeLab and Aperture.
      </p>

      <h2>1. Information we collect</h2>
      <ul>
        <li>
          <strong>Information you give us:</strong> name, email address, phone number
          and any details you send when you contact us or create a product account.
        </li>
        <li>
          <strong>Content you upload:</strong> files you choose to submit to a product,
          such as a resume in ResumeLab or event photos and a selfie in Aperture.
        </li>
        <li>
          <strong>Technical data:</strong> IP address, browser type, device information
          and pages visited.
        </li>
        <li>
          <strong>Usage data:</strong> how you interact with our website and products,
          collected via cookies and analytics tools.
        </li>
      </ul>

      <h2>2. Data that never reaches us</h2>
      <p>
        Some of our products are designed so that your data stays with you.{" "}
        <strong>Telix</strong> stores your call history, notes, tags, reminders and
        analytics <strong>on your device only</strong> — we do not receive, upload or
        store your call data on our servers.
      </p>

      <h2>3. How we use your information</h2>
      <ul>
        <li>To provide, operate and improve our products and website.</li>
        <li>To process the content you upload so a product can do its job.</li>
        <li>To respond to your questions and provide support.</li>
        <li>To process payments and issue receipts.</li>
        <li>To send product updates or announcements, only with your consent.</li>
        <li>To meet our legal and regulatory obligations.</li>
      </ul>

      <h2>4. Sharing your information</h2>
      <p>
        We do <strong>not</strong> sell or rent your data. We share it only with:
      </p>
      <ul>
        <li>
          Trusted service providers who help us operate our products — such as hosting,
          analytics, AI processing and payment gateway providers — under
          confidentiality obligations.
        </li>
        <li>Legal or regulatory authorities, where required by law.</li>
      </ul>

      <h2>5. Retention and deletion</h2>
      <p>
        We keep the content you upload only as long as needed to deliver the feature you
        asked for, plus any period required by law. You can ask us to delete your
        account and associated content at any time by emailing{" "}
        <Link href={socials.email}>{company.email}</Link>.
      </p>

      <h2>6. Cookies</h2>
      <p>
        We use cookies for performance and analytics on this website. You can disable
        them through your browser settings; core pages will continue to work.
      </p>

      <h2>7. Data security</h2>
      <p>
        We use encryption in transit, secure hosting and access controls to safeguard
        your data. No system is perfectly secure, but we work to limit both the amount
        of data we hold and the number of people who can reach it.
      </p>

      <h2>8. Your rights</h2>
      <ul>
        <li>Access, correct or delete the data we hold about you.</li>
        <li>Withdraw your consent at any time.</li>
        <li>Ask us how a specific product handles your data.</li>
      </ul>

      <h2>9. Children</h2>
      <p>
        Our products are not directed at children under 13, and we do not knowingly
        collect their personal information.
      </p>

      <h2>10. Changes to this policy</h2>
      <p>
        If we make material changes, we will update the effective date above and, where
        appropriate, notify users inside the affected product.
      </p>

      <h2>11. Contact us</h2>
      <p>
        For any privacy concern or request, email{" "}
        <Link href={socials.email}>{company.email}</Link>.
      </p>
    </PageShell>
  )
}
