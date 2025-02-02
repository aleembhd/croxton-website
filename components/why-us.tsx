import { ImageIcon, Store, Truck } from "lucide-react"

export function WhyUs() {
  const features = [
    {
      icon: <ImageIcon className="w-8 h-8 text-[#0ea5e9]" />,
      title: "TAILORED SOLUTIONS",
      description: "We create custom AI applications, chatbots, and voice agents tailored to your specific needs.",
    },
    {
      icon: <Store className="w-8 h-8 text-[#0ea5e9]" />,
      title: "EXPERTISE IN AI AUTOMATION",
      description: "Our marketing and workflow automation solutions streamline processes and boost efficiency.",
    },
    {
      icon: <Truck className="w-8 h-8 text-[#0ea5e9]" />,
      title: "Strategic Partnership",
      description: "We provide expert guidance to align AI solutions with your business goals and drive growth.",
    },
  ]

  return (
    <section id="why-us" className="py-10 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">WHY CHOOSE US</h3>
          
          <div className="border border-[#0ea5e9] border-[0.2px] rounded-lg p-4 py-5">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Why work with us?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
          "Partner with us to transform your business with cutting-edge AI solutions. Boost efficiency, cut costs, and scale smarter. Ready to grow? Reach out now!"
          </p>
          </div>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-lg bg-[#002a3a] flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="p-4 rounded-full bg-[#001219]">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
