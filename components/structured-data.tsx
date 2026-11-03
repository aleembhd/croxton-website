import {
  company,
  siteUrl,
  socials,
  products,
  founder,
  type Product,
} from "@/lib/site"

/**
 * schema.org JSON-LD. This is how Google, Bing and AI assistants (ChatGPT,
 * Gemini, Perplexity) read the site as *data* rather than guessing from prose:
 * who Croxton is, what products exist, and the answers to common questions.
 */

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Content is authored by us in lib/site.ts, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

const organizationId = `${siteUrl}/#organization`
const founderId = `${siteUrl}/#founder`

/**
 * The founder as a distinct Person entity, cross-linked with the Organization
 * (`founder` ↔ `worksFor`). Both directions matter: it's the pair of references
 * that lets a search engine treat "Abdul Aleem" and "Croxton Technologies" as
 * two connected entities rather than two unrelated strings.
 *
 * Renders no visible text — this is metadata only.
 */
export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": founderId,
    name: founder.name,
    jobTitle: founder.jobTitle,
    worksFor: { "@id": organizationId },
    ...(founder.sameAs.length > 0 ? { sameAs: founder.sameAs } : {}),
  }
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: company.legalName,
    alternateName: company.name,
    url: siteUrl,
    logo: `${siteUrl}/croxton-logo.webp`,
    image: `${siteUrl}/croxton-logo.webp`,
    slogan: company.tagline,
    description: company.definition,
    foundingDate: company.founded,
    founder: { "@id": founderId },
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Plot No 466, Road No 9/3, Opp Avasa Building, Vaidehinagar, Vanastalipuram",
      addressLocality: company.city,
      addressRegion: company.region,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: company.email,
      telephone: company.phone,
      availableLanguage: ["en", "hi", "te"],
    },
    sameAs: [socials.linkedin, socials.twitter, socials.instagram],
    knowsAbout: products.flatMap((p) => p.searchTerms),
    makesOffer: products.map((p) => ({
      "@type": "Offer",
      itemOffered: { "@type": "SoftwareApplication", name: p.name },
    })),
  }
}

export function productSchema(product: Product) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}/products/${product.slug}/#software`,
    name: product.name,
    alternateName: `${product.name} — ${product.category}`,
    description: product.description,
    applicationCategory: product.schemaCategory,
    operatingSystem: product.schemaOs,
    url: `${siteUrl}/products/${product.slug}`,
    image: `${siteUrl}${product.image.src}`,
    screenshot: `${siteUrl}${product.image.src}`,
    keywords: product.searchTerms.join(", "),
    featureList: product.features,
    publisher: { "@id": organizationId },
    author: { "@id": organizationId },
  }

  // A product sold on a quote has no price to publish, and its link is a
  // contact link rather than somewhere to install from.
  if (product.price === undefined) return schema

  schema.offers = {
    "@type": "Offer",
    price: product.price,
    priceCurrency: "INR",
    availability:
      product.status === "live"
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
  }

  if (product.status === "live") {
    schema.installUrl = product.href
    schema.downloadUrl = product.href
  }

  return schema
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: company.name,
    description: company.definition,
    publisher: { "@id": organizationId },
    inLanguage: "en",
  }
}

export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`,
    })),
  }
}

/** Everything the homepage needs. */
export function HomeStructuredData() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={personSchema()} />
      <JsonLd data={websiteSchema()} />
      {products.map((product) => (
        <JsonLd key={product.slug} data={productSchema(product)} />
      ))}
    </>
  )
}

/** Everything a single product page needs. */
export function ProductStructuredData({ product }: { product: Product }) {
  return (
    <>
      <JsonLd data={productSchema(product)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/#products" },
          { name: product.name, path: `/products/${product.slug}` },
        ])}
      />
    </>
  )
}
