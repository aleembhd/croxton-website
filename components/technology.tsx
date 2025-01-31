import Image from "next/image"

export function Technology() {
  return (
    <section id="technology" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h3 className="text-sm font-medium mb-4">CUTTING EDGE AI</h3>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Best-in-Class AI Technology</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-16">
          We use state-of-the-art AI technology to deliver exceptional AI voice agents, chatbots, and custom-coded
          solutions tailored to your specific needs.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          <Image
            src="/placeholder.svg"
            alt="OpenAI"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/placeholder.svg"
            alt="Anthropic"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/placeholder.svg"
            alt="Twilio"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/placeholder.svg"
            alt="Make"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/placeholder.svg"
            alt="Zapier"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  )
}

