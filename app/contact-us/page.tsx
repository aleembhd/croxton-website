import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { company, socials } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Croxton Technologies about our products, support, or the Aperture waitlist.",
}

export default function ContactUs() {
  return (
    <PageShell
      title="Contact Us"
      subtitle="Product support, feedback, or a problem you think we should solve — we read everything."
    >
      <h2>Reach us directly</h2>
      <ul>
        <li>
          <strong>Email:</strong> <Link href={socials.email}>{company.email}</Link> —
          best for support and detailed questions.
        </li>
        <li>
          <strong>WhatsApp:</strong>{" "}
          <Link href={socials.whatsapp} target="_blank" rel="noopener noreferrer">
            {company.phoneDisplay}
          </Link>{" "}
          — quickest for a short question.
        </li>
        <li>
          <strong>Phone:</strong>{" "}
          <Link href={`tel:${company.phone}`}>{company.phoneDisplay}</Link>
        </li>
      </ul>
      <p>We typically respond within 24 hours on business days.</p>

      <h2>Follow our work</h2>
      <ul>
        <li>
          <Link href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>{" "}
          — company updates and product launches.
        </li>
        <li>
          <Link href={socials.twitter} target="_blank" rel="noopener noreferrer">
            X (Twitter)
          </Link>{" "}
          — build-in-public notes.
        </li>
        <li>
          <Link href={socials.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>{" "}
          and{" "}
          <Link href={socials.softwareFactory} target="_blank" rel="noopener noreferrer">
            Software Factory
          </Link>{" "}
          — where we post our content.
        </li>
      </ul>

      <h2>Business details</h2>
      <ul>
        <li>
          <strong>Company name:</strong> {company.legalName}
        </li>
        <li>
          <strong>Address:</strong> {company.address}
        </li>
        <li>
          <strong>Working hours:</strong> {company.hours}
        </li>
        <li>
          <strong>Registered in:</strong> India
        </li>
      </ul>
    </PageShell>
  )
}
