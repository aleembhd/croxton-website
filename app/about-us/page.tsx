import type { Metadata } from "next"
import Link from "next/link"
import { PageShell } from "@/components/page-shell"
import { company, products, socials } from "@/lib/site"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Croxton Technologies is a product studio. We find everyday problems and build software that fixes them.",
}

export default function AboutUs() {
  return (
    <PageShell
      title="About Us"
      subtitle="Croxton — Where Technology Meets Efficiency"
    >
      <p>
        {company.legalName} builds useful software products that simplify everyday
        work, improve productivity and solve real problems. We look for the small
        frustrations people have quietly learned to live with, and we build focused
        tools that remove them.
      </p>

      <h2>What we believe</h2>
      <p>
        Most software is built to look good in a demo. We build for the hundredth time
        someone opens it — on an ordinary Tuesday, trying to get something done. That
        changes what you choose to build and, more often, what you choose to leave out.
      </p>
      <p>
        So we measure ourselves on one thing: whether a product earns a lasting place in
        someone&apos;s routine. Every product we run today has been shaped by the people
        using it and the feedback they send us.
      </p>

      <h2>What we build</h2>
      <ul>
        {products.map((product) => (
          <li key={product.slug}>
            <strong>{product.name}</strong> ({product.platform}
            {product.status === "soon" ? ", launching soon" : ""}) —{" "}
            {product.description}
          </li>
        ))}
      </ul>

      <h2>How we work</h2>
      <ul>
        <li>
          <strong>One problem per product.</strong> Each product does a single job
          completely rather than ten jobs partially.
        </li>
        <li>
          <strong>Privacy by default.</strong> We collect only what a product needs to
          function. Telix, for example, keeps all call data on your own device.
        </li>
        <li>
          <strong>Users decide the roadmap.</strong> What our users tell us is broken
          or missing is what gets built next.
        </li>
      </ul>

      <h2>Company details</h2>
      <ul>
        <li>
          <strong>Legal name:</strong> {company.legalName}
        </li>
        <li>
          <strong>Email:</strong> <Link href={socials.email}>{company.email}</Link>
        </li>
        <li>
          <strong>Phone:</strong>{" "}
          <Link href={`tel:${company.phone}`}>{company.phoneDisplay}</Link>
        </li>
        <li>
          <strong>Address:</strong> {company.address}
        </li>
        <li>
          <strong>Registered in:</strong> India
        </li>
      </ul>
    </PageShell>
  )
}
