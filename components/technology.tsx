import Image from "next/image"

export function Technology() {
  return (
    <section id="technology" className="py-2 px-4">
      <div className="container mx-auto text-center">
      <h3 className="text-2xl font-bold mb-4">CUTTING EDGE AI</h3>
        <div className="border border-[#0ea5e9] border-[0.2px] rounded-lg p-4 py-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Best-in-Class AI Technology</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
          We use state-of-the-art AI technology to deliver exceptional AI voice agents, chatbots, and custom-coded solutions tailored to your specific needs.
          </p>
          </div>
        <div className="mb-12"></div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
          <Image
            src="/deepseek.png"
            alt="Deepseek Logo"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/qwen2.5.png"
            alt="Qwen Logo"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/openai.png"
            alt="OpenAI Logo"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/claude.png"
            alt="Claude Logo"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/v0.png"
            alt="V0 Logo"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/voiceflow.png"
            alt="Voiceflow Logo"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/cursor.png"
            alt="Cursor Logo"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
          <Image
            src="/firebase.png"
            alt="Firebase Logo"
            width={120}
            height={40}
            className="opacity-70 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  )
}

