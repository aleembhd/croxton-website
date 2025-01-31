import { Phone, Bot, Code } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "AI Voice Agents",
      description:
        "We specialize in creating advanced AI voice agents to optimize customer engagement and automate your business operations.",
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Chatbots",
      description:
        "We design and deploy intelligent AI chatbots to elevate customer support and automate routine interactions.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Coded AI Apps",
      description:
        "We develop custom-coded AI applications tailored to your specific needs, providing innovative solutions.",
    },
  ]

  return (
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-sm font-medium mb-4">OUR SERVICES</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We offer a range of AI-driven services including custom-coded applications, intelligent chatbots, and
            advanced voice agents to transform your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-8 rounded-lg border border-gray-800 bg-gray-900/50">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

