import { generateMetadata } from '@/lib/metadata'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Pricing from '@/components/sections/Pricing'
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'

export const metadata = generateMetadata({
  title: 'Pricing',
  description:
    'Transparent pricing for every stage of growth. Starter at $350/month, Professional at $500/month, Enterprise at $1,000/month. All plans include onboarding support.',
  path: '/pricing',
  keywords: ['credit scoring pricing', 'fintech pricing', 'SaaS pricing'],
})

export default function PricingPage() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main className="pt-20">
        <div className="section-bg py-16 lg:py-24 text-center px-6">
          <div className="section-pill mb-4 inline-flex">Transparent pricing</div>
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-[var(--color-text-primary)] tracking-tight mt-4 mb-4">
            Plans that scale with<br />
            <span className="gradient-text">your portfolio</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">
            All plans include full feature access and onboarding support.
            No hidden fees. Cancel anytime.
          </p>
        </div>
        <Pricing showHeader={false} />
      </main>
      <Footer />
    </>
  )
}
