import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyUs } from "@/components/why-us"
import { Technology } from "@/components/technology"
import { Footer } from "@/components/footer"
// Remove or properly import Firebase if needed
// import firebaseApp from "../firebase"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <WhyUs />
      <Technology />
      <Footer />
    </main>
  )
}

