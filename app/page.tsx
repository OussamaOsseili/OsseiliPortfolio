import { Hero } from "@/components/hero"
import { Work } from "@/components/work"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t">
        <p>© 2025 Oussama Osseili. All rights reserved.</p>
      </footer>
    </>
  )
}
