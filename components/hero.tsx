import { Linkedin, Twitter, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://linkedin.com/company/croxton",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://twitter.com/croxton",
      label: "Twitter",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:contact@croxton.ai",
      label: "Email",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      href: "https://wa.me/your-whatsapp-number",
      label: "WhatsApp",
    },
  ]

  return (
    <section id="hero" className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center max-w-[1000px]">
        <h1 className="text-2xl font-bold mb-8">AUTOMATE YOUR BUSINESS WITH AI</h1>
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
          We build <span className="text-[#0ea5e9]">AI-driven</span> automated growth systems for B2B businesses.
        </div>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-[800px] mx-auto">
          We use advanced AI technology and automation to simplify marketing and business tasks, helping you attract
          more clients, boost productivity, and reduce costs.
        </p>
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#002a3a] hover:bg-[#0ea5e9] transition-colors duration-300"
              aria-label={link.label}
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

