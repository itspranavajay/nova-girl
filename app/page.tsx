import HomePage from "../components/HomePage"
import ProposalSection from "../components/ProposalSection"
import PoetrySection from "../components/PoetrySection"
import Footer from "../components/Footer"
import BackgroundMusic from "../components/BackgroundMusic"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BackgroundMusic />
      <HomePage />
      <ProposalSection />
      <PoetrySection />
      <Footer />
    </main>
  )
}

