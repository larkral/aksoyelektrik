import CompletedWorksSection from "@/components/completed-works-section";
import SolarPackagesSection from "@/components/solar-packages-section";
import ScrollToTop from "@/components/scroll-to-top";
import FloatingContact from "@/components/floating-contact"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"



export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
         <CompletedWorksSection />
        <SolarPackagesSection />
        <Services />
        <FAQ />
        <Contact />
        <FloatingContact />
        <ScrollToTop />
      </main>
      <Footer />
    </>
  )
}
