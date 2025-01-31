import { ImageIcon, Store, Truck } from "lucide-react"

export function WhyUs() {
  const features = [
    {
      icon: <ImageIcon className="w-12 h-12 text-[#0ea5e9]" />,
      title: "Tailored Solutions",
      description: "We create custom AI applications, chatbots, and voice agents tailored to your specific needs.",
    },
    {
      icon: <Store className="w-12 h-12 text-[#0ea5e9]" />,
      title: "Expertise in Automation",
      description: "Our marketing and workflow automation solutions streamline processes and boost efficiency.",
    },
    {
      icon: <Truck className="w-12 h-12 text-[#0ea5e9]" />,
      title: "Strategic Partnership",
      description: "We provide expert guidance to align AI solutions with your business goals and drive growth.",
    },
  ]

  return (
    <section id="why-us" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">WHY US</h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Why work with us?</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
            Discover why partnering with us can revolutionize your business operations and drive unparalleled growth.
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-8 rounded-lg bg-[#002a3a] flex items-start gap-6">
              <div className="p-4 rounded-full bg-[#001219]">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

