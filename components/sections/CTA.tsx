import Link from 'next/link'
import SectionPill from '@/components/ui/SectionPill'

export default function CTA() {
  return (
    <section
      className="section-bg py-24 lg:py-32"
      aria-label="Call to action — start free trial"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <div className="reveal zoom-in">
          <div
            className="relative card rounded-3xl p-12 lg:p-16 overflow-hidden"
          >
            {/* Decorative blobs */}
            <div
              className="blob blob-a w-80 h-80 absolute -top-10 -right-10 pointer-events-none"
              style={{ background: 'rgba(16,185,129,0.08)' }}
              aria-hidden="true"
            />
            <div
              className="blob blob-b w-64 h-64 absolute -bottom-10 -left-10 pointer-events-none"
              style={{ background: 'rgba(16,185,129,0.05)', animationDelay: '4s' }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <SectionPill>14-day free trial — no card required</SectionPill>
              </div>

              <h2
                className="font-display font-bold text-[var(--color-text-primary)] mb-6 leading-tight tracking-tight"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
              >
                Ready to transform<br />
                <span className="gradient-text">how you lend?</span>
              </h2>

              <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Join 150+ lenders using SenteScore to make faster, smarter, fairer credit decisions.
                Full feature access from day one.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <Link
                  href="/pricing"
                  className="btn-primary px-10 py-4 rounded-2xl text-base font-semibold"
                >
                  Start your free trial
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline px-10 py-4 rounded-2xl text-base font-medium"
                >
                  Talk to sales
                </Link>
              </div>

              <p className="text-xs text-[var(--color-text-muted)]">
                14-day free trial · No credit card · Full feature access · Cancel anytime
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
