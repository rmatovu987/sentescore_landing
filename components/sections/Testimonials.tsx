import { TESTIMONIALS } from '@/lib/constants'

const AVATAR_COLORS: Record<string, string> = {
  emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
  sky: 'bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-400',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
}

export default function Testimonials() {
  return (
    <section
      className="py-24 lg:py-32"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16 reveal from-bottom">
          <h2
            id="testimonials-heading"
            className="font-display font-bold text-4xl lg:text-5xl text-[var(--color-text-primary)] tracking-tight"
          >
            Trusted by lenders{' '}
            <span className="gradient-text">worldwide</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={t.author}
              className={`card rounded-2xl p-6 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1.5 hover:rotate-[-0.4deg] reveal from-bottom reveal-d${i * 2 + 1}`}
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-emerald-400/50"
                fill="currentColor"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path d="M10 8C6.7 8 4 10.7 4 14v10h10V14H7c0-1.7 1.3-3 3-3V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-7c0-1.7 1.3-3 3-3V8z" />
              </svg>

              <p className="text-[var(--color-text-secondary)] leading-relaxed flex-1">
                {t.quote}
              </p>

              <footer className="flex items-center gap-3 pt-3 border-t border-[var(--color-border)]">
                <div
                  className={`w-10 h-10 rounded-full ${AVATAR_COLORS[t.color]} flex items-center justify-center text-sm font-bold shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="not-italic text-sm font-semibold text-[var(--color-text-primary)]">
                    {t.author}
                  </cite>
                  <p className="text-xs text-[var(--color-text-muted)]">{t.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
