import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { Testimonials } from "@/components/testimonials"
import { Mission } from "@/components/mission"
import { Technology } from "@/components/technology"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { HomeStructuredData } from "@/components/structured-data"

export default function Home() {
  return (
    <>
      <HomeStructuredData />
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Products />
        <Testimonials />
        <Mission />
        <Technology />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
