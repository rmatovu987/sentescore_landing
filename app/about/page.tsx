import { generateMetadata } from '@/lib/metadata'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import CTA from '@/components/sections/CTA'

export const metadata = generateMetadata({
  title: 'About Us',
  description:
    'SenteScore is on a mission to make credit decisioning accessible, accurate, and fair for lenders and borrowers across emerging markets.',
  path: '/about',
})

export default function AboutPage() {
  // @ts-ignore
    return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main className="pt-20">
        <div className="section-bg py-16 lg:py-24 text-center px-6">
          <div className="section-pill mb-4 inline-flex">Our mission</div>
          <h1 className="font-display font-bold text-4xl lg:text-6xl text-[var(--color-text-primary)] tracking-tight mt-4 mb-4">
            Making credit decisioning<br />
            <span className="gradient-text">fair and fast</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] text-xl max-w-2xl mx-auto">
            We believe every creditworthy borrower deserves access to capital — and every lender deserves the tools to identify them accurately.
          </p>
        </div>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 reveal from-bottom">
              <div>
                <h2 className="font-display font-bold text-3xl text-[var(--color-text-primary)] mb-4">Why we built SenteScore</h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  Traditional credit scoring models were built for western, highly-banked populations with decades of credit history. They fail billions of creditworthy people across emerging markets.
                </p>
                <p className="text-[var(--color-text-secondary)] leading-relaxed">
                  We built SenteScore so that lenders can define what creditworthiness means in their specific market — incorporating local income patterns, mobile money behavior, social guarantees, and any other signal that matters to them.
                </p>
              </div>
              <div className="card rounded-2xl p-8 text-center">
                <div className="font-display font-bold text-5xl text-[var(--color-text-primary)] mb-2">1.7B</div>
                <div className="text-[var(--color-text-secondary)]">adults globally remain unbanked</div>
                <div className="mt-4 h-px bg-[var(--color-border)]"></div>
                <div className="mt-4 font-display font-bold text-5xl text-[var(--color-text-primary)] mb-2">$5.2T</div>
                <div className="text-[var(--color-text-secondary)]">credit gap for SMEs in developing economies</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal from-bottom">
              {[
                { title: '2022', desc: 'SenteScore founded with a focus on dynamic credit decisioning' },
                { title: '2023', desc: 'Launched workflow automation and reached 50 lender clients' },
                { title: '2024', desc: 'Processed 2M+ applications across 12 countries' },
              ].map((item) => (
                <div key={item.title} className="card rounded-2xl p-6">
                  <div className="font-mono text-emerald-500 font-medium text-sm mb-2">{item.title}</div>
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
