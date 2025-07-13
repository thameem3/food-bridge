import HeroSection from "@/app/Homepage/Hero-section"
import MissionSection from "@/app/Homepage/Mission-section"
import WhoCanJoin from "@/app/Homepage/Whocanjoin"
import ContactSection from "@/app/Homepage/Contact-section"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MissionSection/>
      <WhoCanJoin/>
      <ContactSection/>
      <Footer/>
    </main>
  )
}
