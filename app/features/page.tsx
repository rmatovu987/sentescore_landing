import { generateMetadata } from '@/lib/metadata'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Workflows from '@/components/sections/Workflows'
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'

export const metadata = generateMetadata({
  title: 'Features',
  description:
    'Explore SenteScore features: dynamic credit scoring parameters, visual workflow builder, unified application hub, REST API integrations, real-time analytics, and compliance tools.',
  path: '/features',
  keywords: ['credit scoring features', 'workflow builder', 'loan origination features'],
})

export default function FeaturesPage() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main className="pt-20">
        <div className="section-bg py-16 lg:py-24 text-center px-6">
          <div className="section-pill mb-4 inline-flex">Platform capabilities</div>
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-[var(--color-text-primary)] tracking-tight mt-4 mb-4">
            Everything built for<br />
            <span className="gradient-text">smarter lending</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">
            From parameter setup to final disbursement, SenteScore handles the complete credit lifecycle.
          </p>
        </div>
        <Features showHeader={false} />
        <HowItWorks />
        <Workflows />
      </main>
      <Footer />
    </>
  )
}
