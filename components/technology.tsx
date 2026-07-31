import Image from "next/image"

const logos = [
  { src: "/openai.webp", alt: "OpenAI" },
  { src: "/claude.webp", alt: "Claude" },
  { src: "/deepseek.webp", alt: "DeepSeek" },
  { src: "/qwen2.5.webp", alt: "Qwen" },
  { src: "/firebase.webp", alt: "Firebase" },
  { src: "/cursor.webp", alt: "Cursor" },
  { src: "/v0.webp", alt: "v0" },
  { src: "/voiceflow.webp", alt: "Voiceflow" },
]

export function Technology() {
  return (
    <section className="section border-t border-white/[0.07]">
      <div className="container-content">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Our toolkit</p>
          <h2 className="mt-6 text-2xl font-bold tracking-[-0.01em] md:text-3xl">
            Built with the best tools available
          </h2>
          <p className="body-lg mt-4">
            We stay deliberately unromantic about our stack — we use whatever gets a
            working product into someone&apos;s hands fastest.
          </p>
        </div>
      </div>

      {/* Edge-to-edge marquee */}
      <div className="mask-fade-x relative mt-14 overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-14 md:gap-20">
          {[...logos, ...logos].map((logo, i) => (
            <Image
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              aria-hidden={i >= logos.length}
              className="h-8 w-auto shrink-0 opacity-45 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-10"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
