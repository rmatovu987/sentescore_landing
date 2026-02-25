import SectionPill from '@/components/ui/SectionPill'
import { FEATURES } from '@/lib/constants'

interface FeaturesProps {
  showHeader?: boolean
}

export default function Features({ showHeader = true }: FeaturesProps) {
  return (
    <section
      id="features"
      className="section-bg py-24 lg:py-32"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {showHeader && (
          <div className="text-center max-w-2xl mx-auto mb-16 reveal from-bottom">
            <SectionPill className="mb-4">Platform capabilities</SectionPill>
            <h2
              id="features-heading"
              className="font-display font-bold text-4xl lg:text-5xl text-[var(--color-text-primary)] mb-4 tracking-tight"
            >
              Everything built for{' '}
              <span className="gradient-text">smarter lending</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
              From parameter setup to final disbursement, SenteScore handles the complete credit lifecycle.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <article
              key={feature.title}
              className={`card rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1.5 reveal from-bottom reveal-d${Math.min(i % 3, 5) + 1}`}
            >
              <div
                className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl mb-4"
                aria-hidden="true"
              >
                {feature.icon}
              </div>
              <p className="text-xs font-mono text-emerald-500 mb-2 tracking-wider uppercase">
                {feature.tag}
              </p>
              <h3 className="font-display font-semibold text-lg text-[var(--color-text-primary)] mb-2">
                {feature.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
