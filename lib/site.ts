/**
 * Single source of truth for company details, social links, the product
 * catalogue and user testimonials. Update this file when a product ships or a
 * link changes — every section on the site reads from here.
 */

/**
 * The canonical origin used for canonical URLs, sitemap, robots and JSON-LD.
 * IMPORTANT for SEO: change this in ONE place the moment a custom domain
 * (e.g. https://croxton.in) is pointed at Firebase Hosting.
 */
export const siteUrl = "https://croxton-website.web.app"

export const company = {
  name: "CROXTON",
  legalName: "Croxton Technologies",
  tagline: "Where Technology Meets Efficiency",
  /** One-sentence definition. This is the line search engines and AI assistants quote. */
  definition:
    "Croxton Technologies is an independent software product company based in Hyderabad, India, that builds and runs its own products — Telix, ResumeLab and Aperture AI.",
  city: "Hyderabad",
  region: "Telangana",
  country: "India",
  founded: "2024",
  email: "croxtontechnologies@gmail.com",
  phone: "+917672029401",
  phoneDisplay: "+91 76720 29401",
  address:
    "Plot No 466, Road No 9/3, Opp Avasa Building, Vaidehinagar, Vanastalipuram, Rangareddy, Telangana, India",
  hours: "Monday to Saturday, 10:00 AM – 6:00 PM IST",
}

export const socials = {
  linkedin: "https://www.linkedin.com/company/croxton-technologies/",
  twitter: "https://x.com/croxtonai",
  whatsapp: `https://wa.me/${company.phone}`,
  email: `mailto:${company.email}`,
  // Canonical profile URLs — the `igsh` query param on shared links is a
  // per-share tracking token and is deliberately dropped.
  instagram: "https://www.instagram.com/croxton.in",
  softwareFactory: "https://www.instagram.com/software_factory_",
}

export type ProductStatus = "live" | "soon"

export type Product = {
  slug: string
  name: string
  category: string
  platform: string
  /** Short where-to-get-it line, used on the hero chips */
  availability: string
  status: ProductStatus
  tagline: string
  /** Short paragraph framing the problem — also used in metadata and structured data */
  problem: string
  /** Short paragraph on how the product answers it. Pairs with `problem`. */
  solution: string
  description: string
  features: string[]
  /** Shown inside the collapsed "Problem & solution" panel on the product card */
  problemPoints: { title: string; body: string }[]
  solutionPoints: { title: string; body: string }[]
  /** Product Hunt review badge, where the product is listed */
  productHunt?: {
    href: string
    img: string
    alt: string
    width: number
    height: number
  }
  audience: string
  href: string
  ctaLabel: string
  /** Official store badge to use in place of a text button, where one exists */
  storeBadge?: { src: string; width: number; height: number; alt: string }
  /** Short searchable descriptor, e.g. "Android call tracker app" */
  descriptor: string
  /** Keywords people actually type when looking for this kind of tool */
  searchTerms: string[]
  /** schema.org applicationCategory */
  schemaCategory: string
  /** schema.org operatingSystem */
  schemaOs: string
  price: string
  /** Poster/preview image and its intrinsic dimensions, used to reserve layout space */
  image: { src: string; width: number; height: number }
  /** Transparent product wordmark, recoloured for the dark UI */
  logo: { src: string; width: number; height: number }
  /** Tailwind gradient classes for the product's icon tile */
  accent: string
}

export const products: Product[] = [
  {
    slug: "telix",
    name: "Telix",
    category: "Dialer & Call Tracker",
    platform: "Android",
    availability: "Available on Play Store",
    status: "live",
    tagline: "Every missed call could be a lost deal.",
    problem:
      "When you make calls all day, the call itself is the easy part. Remembering who to follow up with, what was agreed and which leads are going cold is where deals quietly slip away — and a normal dialer gives you none of that.",
    solution:
      "Telix turns your dialer into a record you can actually use. Tag and annotate any call as it happens, get reminded before a follow-up goes cold, and see your own calling patterns at a glance — all stored on your device, never uploaded.",
    description:
      "A modern Android dialer with call notes, tags, reminders and offline analytics. Everything stays on your device, so your call history is never someone else's data.",
    features: [
      "Notes and tags on every call",
      "Follow-up reminders you won't miss",
      "Offline call analytics and top callers",
      "Export call reports as CSV",
      "Works offline — data stays on your phone",
    ],
    problemPoints: [
      {
        title: "Calls get missed",
        body: "Important follow-ups are lost forever.",
      },
      {
        title: "Call history is messy",
        body: "Hard to find numbers or past conversations.",
      },
      {
        title: "No visibility",
        body: "You don't know who called, how much, or how often.",
      },
      {
        title: "Reporting takes time",
        body: "Manual tracking is slow and tiring.",
      },
      {
        title: "Leads slip away",
        body: "Without proper organization, deals get delayed or lost.",
      },
    ],
    solutionPoints: [
      {
        title: "Everything organized",
        body: "Find any call, any number, anytime in seconds.",
      },
      {
        title: "Add notes and tags",
        body: "Mark important calls and never forget what matters.",
      },
      {
        title: "Understand activity",
        body: "See calls, durations, top callers and patterns.",
      },
      {
        title: "Export and share",
        body: "Get reports in CSV and share instantly.",
      },
      {
        title: "Better follow-ups",
        body: "Stay organized and close more deals.",
      },
    ],
    productHunt: {
      href: "https://www.producthunt.com/products/telix-dailer-call-tracker/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-telix-dailer-call-tracker",
      img: "https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1280473&theme=light",
      alt: "Telix : Dialer & Call Tracker - Modern phone dialer with tags, notes & offline analytics | Product Hunt",
      width: 250,
      height: 54,
    },
    audience:
      "Real estate and sales teams, telemarketers, recruiters, customer support and small businesses",
    href: "https://play.google.com/store/apps/details?id=com.telix.app",
    ctaLabel: "Get it on Google Play",
    storeBadge: {
      src: "/playstore-badge.webp",
      width: 566,
      height: 170,
      alt: "Get it on Google Play",
    },
    descriptor: "Android dialer and call tracker app",
    searchTerms: [
      "call tracker app",
      "Android dialer with notes",
      "call log app for sales",
      "offline call analytics",
      "call reminder app",
    ],
    schemaCategory: "BusinessApplication",
    schemaOs: "Android",
    price: "0",
    image: { src: "/telix.webp", width: 1600, height: 1131 },
    logo: { src: "/telix-logo.webp", width: 641, height: 192 },
    accent: "from-amber-400/25 to-brand/10",
  },
  {
    slug: "resumelab",
    name: "ResumeLab",
    category: "AI Resume Builder",
    platform: "Web app",
    availability: "Available on web",
    status: "live",
    tagline: "Create. Customize. Download. Get hired.",
    problem:
      "Most resumes are rejected by software before a person ever reads them. Rebuilding one to get past those filters means fighting formatting for an evening, and you still can't tell whether it worked.",
    solution:
      "ResumeLab builds the resume around what the filters are looking for. Start from a file you already have or from scratch, let AI sharpen each line, then export a clean PDF or DOCX that gets through the software and still reads well to a human.",
    description:
      "Upload an existing resume or start from scratch, sharpen the wording with AI, pick a professional template and export a clean PDF or DOCX built to pass applicant tracking systems.",
    features: [
      "AI-powered content suggestions",
      "Modern, ATS-friendly templates",
      "Upload an existing resume or build fresh",
      "Export as PDF or DOCX instantly",
      "Ready in minutes, not hours",
    ],
    problemPoints: [
      {
        title: "Software rejects you first",
        body: "Applicant tracking systems filter out most resumes before a person ever reads one.",
      },
      {
        title: "Formatting eats the evening",
        body: "Aligning margins and columns by hand takes hours you wanted to spend applying.",
      },
      {
        title: "The blank page is the hardest part",
        body: "Knowing how to phrase your own experience is harder than doing the work was.",
      },
      {
        title: "One resume for every role",
        body: "A single generic resume rarely matches what a specific listing is asking for.",
      },
      {
        title: "The file breaks on arrival",
        body: "Layouts shift between devices, and recruiters open something you never designed.",
      },
    ],
    solutionPoints: [
      {
        title: "ATS-optimized templates",
        body: "Built specifically to get read by the software before a human sees it.",
      },
      {
        title: "AI that sharpens your words",
        body: "Smart suggestions turn plain duties into results worth reading.",
      },
      {
        title: "Start from what you have",
        body: "Upload an existing resume or build a new one from scratch.",
      },
      {
        title: "Change anything, break nothing",
        body: "Swap templates and reorder sections without the layout falling apart.",
      },
      {
        title: "Export clean, every time",
        body: "Download high-quality PDF or DOCX that looks the same everywhere.",
      },
    ],
    productHunt: {
      href: "https://www.producthunt.com/products/resumelab/reviews/new?utm_source=badge-product_review&utm_medium=badge&utm_source=badge-resumelab",
      img: "https://api.producthunt.com/widgets/embed-image/v1/product_review.svg?product_id=1275085&theme=light",
      alt: "ResumeLab - Build an ATS-friendly resume in minutes with ResumeLab. | Product Hunt",
      width: 250,
      height: 54,
    },
    audience: "Students and graduates, working professionals and career changers",
    href: "https://resumelab.duckdns.org/",
    ctaLabel: "Open ResumeLab",
    descriptor: "AI resume builder for ATS-friendly resumes",
    searchTerms: [
      "ATS friendly resume builder",
      "AI resume builder",
      "free resume maker PDF DOCX",
      "resume checker for job applications",
      "resume templates for freshers",
    ],
    schemaCategory: "BusinessApplication",
    schemaOs: "Web",
    price: "0",
    image: { src: "/resume-labs.webp", width: 1600, height: 1067 },
    logo: { src: "/resumelab-logo.webp", width: 744, height: 192 },
    accent: "from-cyan/25 to-cyan/5",
  },
  {
    slug: "aperture",
    name: "Aperture AI",
    category: "AI Photo Search",
    platform: "Web app",
    availability: "Coming soon · on web",
    status: "soon",
    tagline: "Find yourself. Instantly.",
    problem:
      "After a wedding or a college fest, thousands of photos land in one shared drive. Finding the handful you're actually in means scrolling for hours, so most guests give up and the photos are never seen.",
    solution:
      "Aperture indexes every face in the gallery once, securely. After that a single selfie is enough — guests get every photo they appear in within seconds, and organisers stop fielding the same request from everyone.",
    description:
      "Upload an event's photos once and AI securely indexes every face. Then anyone uploads a selfie and instantly gets every photo they appear in. No scrolling required.",
    features: [
      "Upload from Google Drive or a local folder",
      "AI indexes every face securely",
      "One selfie finds all your photos",
      "Built for events with thousands of images",
      "Private and secure by design",
    ],
    problemPoints: [
      {
        title: "Thousands of photos, no way to search",
        body: "A shared drive after an event is just folders inside folders.",
      },
      {
        title: "Hours of scrolling for a handful of shots",
        body: "Finding the photos you're actually in costs an entire evening.",
      },
      {
        title: "Most guests simply give up",
        body: "The photos exist, but the people in them never see them.",
      },
      {
        title: "Organisers get buried",
        body: "Every guest asks the same question: can you send me mine?",
      },
      {
        title: "Memories nobody can find",
        body: "A photo that can't be located may as well not have been taken.",
      },
    ],
    solutionPoints: [
      {
        title: "Upload the gallery once",
        body: "Bring photos straight from Google Drive or a local folder.",
      },
      {
        title: "AI indexes every face",
        body: "The whole gallery is processed and indexed securely.",
      },
      {
        title: "One selfie finds you",
        body: "Guests upload a single selfie and get every photo they appear in.",
      },
      {
        title: "Seconds, not evenings",
        body: "Results come back instantly, however large the event was.",
      },
      {
        title: "Private by design",
        body: "Photos and face data stay protected throughout.",
      },
    ],
    audience:
      "Weddings, college fests, marathons, conferences, concerts and corporate events",
    href: `mailto:${company.email}?subject=Aperture%20AI%20waitlist`,
    ctaLabel: "Join the waitlist",
    descriptor: "AI face-search for event photos",
    searchTerms: [
      "find my photos from event",
      "AI face search photos",
      "wedding photo search by selfie",
      "college fest photo finder",
      "event photo gallery face recognition",
    ],
    schemaCategory: "MultimediaApplication",
    schemaOs: "Web",
    price: "0",
    image: { src: "/aperture.webp", width: 1600, height: 1067 },
    logo: { src: "/aperture-logo.webp", width: 1039, height: 192 },
    accent: "from-violet-400/25 to-brand/10",
  },
]

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * TESTIMONIALS — this array is intentionally EMPTY.
 *
 * The testimonials section only renders when there is something in here, so
 * nothing invented can ever reach the live site. Paste in the real reviews from
 * the Telix Play Console / ResumeLab users using the shape below, and the
 * section appears automatically:
 *
 *   { quote: "...", author: "R. Kumar", role: "Real estate agent", product: "Telix" }
 *
 * Keep `author` to whatever the reviewer is publicly shown as. Use their words
 * verbatim — trimming for length is fine, rewriting is not.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export type Testimonial = {
  quote: string
  author: string
  role?: string
  product: string
}

export const testimonials: Testimonial[] = []

/**
 * NOT CURRENTLY RENDERED. The FAQ section was removed from the homepage to keep
 * it uncluttered, and the FAQPage structured data went with it — that schema is
 * only valid when the questions are visible on the same page.
 *
 * Kept here because this is the strongest asset for getting quoted by Google and
 * AI assistants: each answer is written self-contained so it can be lifted as a
 * whole sentence. Wire it up again if a dedicated /faq page is ever added.
 */
export const faqs = [
  {
    q: "What is Croxton Technologies?",
    a: "Croxton Technologies is an independent software product company based in Hyderabad, Telangana, India. Rather than doing client projects, Croxton builds and runs its own products: Telix, an Android dialer and call tracker; ResumeLab, an AI resume builder; and Aperture AI, an AI photo search tool for events.",
  },
  {
    q: "What products does Croxton Technologies make?",
    a: "Croxton Technologies currently makes three products. Telix is an Android dialer and call tracker with notes, tags, reminders and offline analytics. ResumeLab is a web app that builds ATS-friendly resumes with AI assistance and exports them as PDF or DOCX. Aperture AI is a web app that uses face recognition to find every photo you appear in from a large event gallery, and is launching soon.",
  },
  {
    q: "What is Telix and who is it for?",
    a: "Telix is a free Android dialer and call tracker app made by Croxton Technologies. It lets you add notes and tags to any call, set follow-up reminders, view offline call analytics, and export call reports as CSV. It is built for real estate and sales teams, telemarketers, recruiters, customer support teams and small businesses who need to remember the context behind every call.",
  },
  {
    q: "Does Telix upload my call data to the internet?",
    a: "No. Telix stores all call history, notes, tags, reminders and analytics locally on your own Android device, and works offline. Croxton Technologies does not receive, upload or store your call data on its servers.",
  },
  {
    q: "What is ResumeLab and is it ATS-friendly?",
    a: "ResumeLab is a free AI resume builder from Croxton Technologies, available as a web app. You can upload an existing resume or start from scratch, improve the wording with AI suggestions, choose from professional templates, and export a finished resume as a PDF or DOCX. Its templates are built specifically to pass applicant tracking systems (ATS), which is what filters out most resumes before a recruiter reads them.",
  },
  {
    q: "What is Aperture AI and when is it launching?",
    a: "Aperture AI is an upcoming web app from Croxton Technologies that finds your photos in large event galleries. An organiser uploads the event photos once from Google Drive or a local folder, AI securely indexes every face, and then any guest uploads a single selfie to instantly get every photo they appear in. It is designed for weddings, college fests, marathons, conferences, concerts and corporate events, and is launching soon — you can join the waitlist by email to get access at launch.",
  },
  {
    q: "Where is Croxton Technologies located?",
    a: "Croxton Technologies is registered in India and based in Hyderabad, Telangana, at Plot No 466, Road No 9/3, Opp Avasa Building, Vaidehinagar, Vanastalipuram, Rangareddy. It can be reached at croxtontechnologies@gmail.com or on +91 76720 29401, Monday to Saturday, 10:00 AM to 6:00 PM IST.",
  },
  {
    q: "How do I get support for a Croxton product?",
    a: "Email croxtontechnologies@gmail.com or message +91 76720 29401 on WhatsApp. Croxton Technologies typically replies within 24 hours on business days, Monday to Saturday, 10:00 AM to 6:00 PM IST.",
  },
]

export const navLinks = [
  { href: "/#products", label: "Products" },
  { href: "/#mission", label: "Why We Build" },
  { href: "/#contact", label: "Contact" },
]

export const legalLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/contact-us", label: "Contact Us" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-conditions", label: "Terms & Conditions" },
  { href: "/refund-cancellation", label: "Refund & Cancellation" },
  { href: "/shipping-delivery", label: "Shipping & Delivery" },
]
