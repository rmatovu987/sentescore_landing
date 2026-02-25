import SectionPill from '@/components/ui/SectionPill'

const STEPS = [
  {
    number: '01',
    title: 'Define scoring parameters',
    description:
      'Create custom parameters from any data source — financial history, behavioral signals, alternative data. Set weights, thresholds, and scoring bands that reflect your lending philosophy.',
    checks: [
      '100+ pre-built parameter types',
      'Custom formula builder',
      'A/B test scoring models',
      'Import alternative data sources',
    ],
  },
  {
    number: '02',
    title: 'Build your decision workflow',
    description:
      'Map the full loan lifecycle — from submission, through scoring, manual review, approval, and disbursement — with conditional routing at every decision point.',
    checks: [
      'Visual drag-and-drop editor',
      'Conditional branching logic',
      'Manual review queues',
      'Automated notifications',
    ],
  },
  {
    number: '03',
    title: 'Process all applications',
    description:
      'Embed application forms on your site, connect via REST API, or import in bulk. Applications are automatically routed through your workflows and scored in real time.',
    checks: [
      'Embeddable application forms',
      'REST API with webhooks',
      'Bulk CSV import',
      '<1s real-time decisioning',
    ],
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32"
      aria-labelledby="hiw-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 reveal from-bottom">
          <SectionPill className="mb-4">How it works</SectionPill>
          <h2
            id="hiw-heading"
            className="font-display font-bold text-4xl lg:text-5xl text-[var(--color-text-primary)] tracking-tight"
          >
            Up and running in{' '}
            <span className="gradient-text">under a day</span>
          </h2>
        </div>

        {/* Step connectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`${i < STEPS.length - 1 ? 'step-connector' : ''} reveal from-bottom reveal-d${i * 2 + 1}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-white font-display font-bold text-lg shrink-0 shadow-btn">
                  {step.number}
                </div>
              </div>
              <h3 className="font-display font-semibold text-xl text-[var(--color-text-primary)] mb-3">
                {step.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Alternating detail rows */}
        <div className="space-y-24">
          {STEPS.map((step, i) => (
            <div
              key={`detail-${step.number}`}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                i % 2 === 1 ? 'lg:flex lg:flex-row-reverse' : ''
              }`}
            >
              {/* Text */}
              <div className={`reveal ${i % 2 === 0 ? 'from-left' : 'from-right'}`}>
                <div className="font-mono text-emerald-500/30 font-bold leading-none mb-3 select-none"
                  style={{ fontSize: '5rem' }}
                  aria-hidden="true"
                >
                  {step.number}
                </div>
                <h3 className="font-display font-bold text-3xl text-[var(--color-text-primary)] mb-4 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-6">
                  {step.description}
                </p>
                <ul className="space-y-3" role="list">
                  {step.checks.map((check) => (
                    <li key={check} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0">
                        ✓
                      </span>
                      {check}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual card */}
              <div className={`reveal ${i % 2 === 0 ? 'from-right' : 'from-left'}`}>
                <StepVisual step={i} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function StepVisual({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div className="card rounded-2xl p-6">
        <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
          Parameter Builder
        </p>
        <div className="space-y-4">
          {[
            { label: 'Monthly Income', pct: 75, weight: '30%' },
            { label: 'Repayment History', pct: 88, weight: '25%' },
            { label: 'Employment Stability', pct: 62, weight: '20%' },
            { label: 'Debt-to-Income', pct: 51, weight: '15%' },
            { label: 'Alt Data Score', pct: 44, weight: '10%' },
          ].map((p) => (
            <div key={p.label}>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[var(--color-text-primary)] font-medium">{p.label}</span>
                <div className="flex gap-3">
                  <span className="text-[var(--color-text-muted)] text-xs font-mono">{p.weight}</span>
                  <span className="text-emerald-500 font-semibold font-mono text-sm">{p.pct}</span>
                </div>
              </div>
              <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-full"
                  style={{ width: `${p.pct}%` }}
                />
              </div>
            </div>
          ))}
          <div className="pt-3 border-t border-[var(--color-border)] flex justify-between items-center">
            <span className="text-xs text-[var(--color-text-muted)]">Total weight</span>
            <span className="text-emerald-500 font-mono font-semibold">100%</span>
          </div>
        </div>
      </div>
    )
  }

  if (step === 1) {
    const nodes = [
      { label: 'Application Received', color: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400', icon: '📥' },
      { label: 'Auto Score', color: 'bg-[var(--color-surface-2)] border-[var(--color-border)] text-[var(--color-text-primary)]', icon: '⚡' },
      { label: 'Score ≥ 650?', color: 'bg-amber-500/8 border-amber-400/30 text-amber-600 dark:text-amber-400', icon: '❓', branch: true },
      { label: 'Auto Approve', color: 'bg-emerald-500/8 border-emerald-500/25 text-emerald-600 dark:text-emerald-400', icon: '✅' },
    ]
    return (
      <div className="card rounded-2xl p-6">
        <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
          Decision Workflow
        </p>
        <div className="flex flex-col gap-0">
          {nodes.map((node, i) => (
            <div key={node.label} className="flex flex-col items-center w-full">
              <div className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium w-full ${node.color}`}>
                <span>{node.icon}</span>
                <span className="flex-1">{node.label}</span>
                {node.branch && (
                  <div className="flex gap-2 ml-auto">
                    <span className="text-xs text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded">Yes →</span>
                    <span className="text-xs text-red-500 bg-red-50 dark:bg-red-900/20 px-1.5 py-0.5 rounded">No → Review</span>
                  </div>
                )}
              </div>
              {i < nodes.length - 1 && (
                <div className="w-px h-5 bg-gradient-to-b from-emerald-500/50 to-emerald-500/10 my-0.5" />
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="card rounded-2xl p-6">
      <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-4">
        Loan Application
      </p>
      <div className="space-y-3">
        {[
          { label: 'Full Name', value: 'Amara Nwosu' },
          { label: 'Requested Amount', value: '$15,000' },
          { label: 'Monthly Income', value: '$3,200' },
          { label: 'Employment Status', value: 'Employed' },
        ].map((field) => (
          <div key={field.label} className="flex items-center gap-3">
            <div className="w-4 h-4 rounded-full border border-emerald-500/40 flex items-center justify-center shrink-0">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
            </div>
            <div className="flex-1 flex items-center justify-between">
              <span className="text-xs text-[var(--color-text-muted)]">{field.label}</span>
              <span className="text-sm text-[var(--color-text-primary)] font-medium">{field.value}</span>
            </div>
          </div>
        ))}
        <div className="mt-4 p-3 bg-emerald-500/8 rounded-xl border border-emerald-500/20 flex items-center gap-3">
          <span className="text-2xl">⚡</span>
          <div>
            <div className="text-emerald-600 dark:text-emerald-400 text-sm font-semibold">Score: 742 · Approved</div>
            <div className="text-[var(--color-text-muted)] text-xs">Decision in 0.4 seconds</div>
          </div>
        </div>
      </div>
    </div>
  )
}
