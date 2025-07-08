import HeroSection from "@/components/home/Hero-section"
import MissionSection from "@/components/home/Mission-section"
import WhoCanJoin from "@/components/home/Whocanjoin"
import ContactSection from "@/components/home/Contact-section"
import Footer from "@/components/shared/Footer"

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
