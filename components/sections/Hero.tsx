import Link from 'next/link'
import SectionPill from '@/components/ui/SectionPill'
import DashboardPreview from '@/components/ui/DashboardPreview'
import { STATS } from '@/lib/constants'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 overflow-hidden"
      aria-label="Hero section"
      style={{
        background:
          'radial-gradient(ellipse 80% 55% at 50% -5%, rgba(16,185,129,0.13) 0%, transparent 70%), radial-gradient(ellipse 55% 40% at 85% 45%, rgba(52,211,153,0.07) 0%, transparent 60%), var(--color-bg)',
      }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-70 pointer-events-none" aria-hidden="true" />

      {/* Floating blobs */}
      <div className="blob blob-a w-96 h-96 bg-emerald-500/8 absolute top-10 -right-20 pointer-events-none" aria-hidden="true" />
      <div className="blob blob-b w-72 h-72 bg-emerald-400/6 absolute bottom-24 -left-16 pointer-events-none" aria-hidden="true" />
      <div className="blob blob-c w-52 h-52 bg-emerald-600/5 absolute top-1/2 left-1/3 pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">

        {/* Pill */}
        <div className="hero-enter d-100 flex justify-center mb-8">
          <SectionPill>AI-powered credit decisioning</SectionPill>
        </div>

        {/* Headline */}
        <h1
          className="hero-enter d-200 font-display font-bold leading-[0.92] tracking-tight mb-6 text-[var(--color-text-primary)]"
          style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)' }}
        >
          Score smarter.<br />
          <em className="not-italic gradient-text">Lend faster.</em>
        </h1>

        {/* Subheadline */}
        <p className="hero-enter d-300 text-lg lg:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed text-balance">
          SenteScore gives lenders the power to define dynamic credit parameters,
          build automated workflows, and manage every application — in one intelligent platform.
        </p>

        {/* CTAs */}
        <div className="hero-enter d-400 flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/pricing"
            className="btn-primary px-8 py-4 rounded-2xl text-base font-semibold"
          >
            Start free — no card required
          </Link>
          <Link
            href="/#how-it-works"
            className="btn-outline px-8 py-4 rounded-2xl text-base font-medium flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
            See how it works
          </Link>
        </div>

        {/* Stats bar */}
        <div
          className="hero-enter d-500 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-[var(--color-border)] max-w-3xl mx-auto bg-[var(--color-border)]"
          role="list"
          aria-label="Platform statistics"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-[var(--color-surface)] px-6 py-5 text-center"
              role="listitem"
            >
              <div className="font-display font-bold text-2xl text-[var(--color-text-primary)] mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-[var(--color-text-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Dashboard preview */}
      <div className="hero-enter d-600 relative z-10 mt-16 w-full max-w-5xl mx-auto">
        <DashboardPreview />
      </div>
    </section>
  )
}
