import SectionPill from '@/components/ui/SectionPill'
import { WORKFLOW_TEMPLATES } from '@/lib/constants'

const ACCENT_STYLES: Record<string, { border: string; stepBg: string; stepText: string }> = {
  emerald: {
    border: 'border-l-emerald-500',
    stepBg: 'bg-emerald-100 dark:bg-emerald-900/30',
    stepText: 'text-emerald-700 dark:text-emerald-400',
  },
  amber: {
    border: 'border-l-amber-400',
    stepBg: 'bg-amber-100 dark:bg-amber-900/30',
    stepText: 'text-amber-700 dark:text-amber-400',
  },
  sky: {
    border: 'border-l-sky-400',
    stepBg: 'bg-sky-100 dark:bg-sky-900/30',
    stepText: 'text-sky-700 dark:text-sky-400',
  },
}

export default function Workflows() {
  return (
    <section
      id="workflows"
      className="py-24 lg:py-32"
      aria-labelledby="workflows-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal from-bottom">
          <SectionPill className="mb-4">Workflow templates</SectionPill>
          <h2
            id="workflows-heading"
            className="font-display font-bold text-4xl lg:text-5xl text-[var(--color-text-primary)] tracking-tight mb-4"
          >
            A workflow for every{' '}
            <span className="gradient-text">lending product</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed">
            Run multiple workflows simultaneously. Each with its own scoring model, rules, and notifications.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {WORKFLOW_TEMPLATES.map((wf, i) => {
            const styles = ACCENT_STYLES[wf.accentColor] ?? ACCENT_STYLES.emerald
            return (
              <article
                key={wf.title}
                className={`card rounded-2xl p-6 border-l-4 ${styles.border} transition-transform duration-300 hover:-translate-y-1.5 reveal from-bottom reveal-d${i * 2 + 1}`}
              >
                {/* Tag & status */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[var(--color-text-muted)] bg-[var(--color-surface-2)] px-2 py-1 rounded-full border border-[var(--color-border)]">
                    {wf.tag}
                  </span>
                  <span className="dot-pulse w-2 h-2 rounded-full bg-emerald-500 inline-block" aria-label="Active" />
                </div>

                <h3 className="font-display font-semibold text-xl text-[var(--color-text-primary)] mb-2">
                  {wf.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-5">
                  {wf.description}
                </p>

                {/* Steps */}
                <ol className="space-y-2.5 mb-5" aria-label={`${wf.title} workflow steps`}>
                  {wf.steps.map((step, j) => (
                    <li key={step} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                      <span
                        className={`w-6 h-6 rounded-full ${styles.stepBg} ${styles.stepText} text-xs flex items-center justify-center font-bold shrink-0`}
                        aria-hidden="true"
                      >
                        {j + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>

                <button
                  type="button"
                  className="btn-outline w-full py-2.5 rounded-xl text-sm font-medium"
                >
                  Use this template
                </button>
              </article>
            )
          })}
        </div>

        {/* Custom link */}
        <div className="text-center reveal from-bottom">
          <p className="text-[var(--color-text-secondary)] text-sm">
            Need something custom?{' '}
            <a href="#" className="text-emerald-500 hover:underline underline-offset-2 font-medium">
              Build your own workflow from scratch →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
