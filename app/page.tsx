import { generateMetadata } from '@/lib/metadata'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import ScoreDemo from '@/components/sections/ScoreDemo'
import Workflows from '@/components/sections/Workflows'
import Pricing from '@/components/sections/Pricing'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'

export const metadata = generateMetadata()

export default function HomePage() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <ScoreDemo />
        <Workflows />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
