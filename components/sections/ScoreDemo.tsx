'use client'

import { useState, useEffect } from 'react'
import SectionPill from '@/components/ui/SectionPill'
import { SCORE_PARAMS, computeScore, getScoreBand } from '@/lib/constants'

const BANDS = [
  { id: 'excellent', label: 'Excellent', range: '750–850', color: 'bg-emerald-500' },
  { id: 'good', label: 'Good', range: '700–749', color: 'bg-emerald-400' },
  { id: 'fair', label: 'Fair', range: '650–699', color: 'bg-amber-400' },
  { id: 'poor', label: 'Poor', range: '300–649', color: 'bg-red-400' },
]

function getBandId(score: number): string {
  if (score >= 750) return 'excellent'
  if (score >= 700) return 'good'
  if (score >= 650) return 'fair'
  return 'poor'
}

export default function ScoreDemo() {
  const [values, setValues] = useState<Record<string, number>>(
    Object.fromEntries(SCORE_PARAMS.map((p) => [p.id, p.defaultValue]))
  )
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDark(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDark(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const score = computeScore(values)
  const band = getScoreBand(score)
  const activeBand = getBandId(score)

  const circumference = 2 * Math.PI * 80
  const pct = (score - 300) / 550
  const dashArray = `${circumference * pct} ${circumference * (1 - pct)}`

  const trackBg = isDark ? '#334155' : '#e2e8f0'

  function handleSlider(id: string, val: number) {
    setValues((prev) => ({ ...prev, [id]: val }))
  }

  return (
    <section
      id="score-demo"
      className="section-bg py-24 lg:py-32"
      aria-labelledby="demo-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal from-bottom">
          <SectionPill className="mb-4">Interactive demo</SectionPill>
          <h2
            id="demo-heading"
            className="font-display font-bold text-4xl lg:text-5xl text-[var(--color-text-primary)] tracking-tight mb-4"
          >
            See scoring{' '}
            <span className="gradient-text">in action</span>
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg">
            Adjust the parameters below and watch the credit score update instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">

          {/* Sliders panel */}
          <div className="card rounded-2xl p-8 reveal from-left">
            <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-6">
              Scoring Parameters
            </h3>
            <div className="space-y-5">
              {SCORE_PARAMS.map((param) => {
                const v = values[param.id]
                return (
                  <div key={param.id}>
                    <div className="flex justify-between items-center mb-2">
                      <label
                        htmlFor={`demo-${param.id}`}
                        className="text-sm text-[var(--color-text-primary)] font-medium"
                      >
                        {param.label}
                      </label>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-[var(--color-text-muted)] font-mono">
                          {param.weight}%
                        </span>
                        <span className="text-sm text-emerald-500 font-semibold font-mono w-8 text-right">
                          {v}
                        </span>
                      </div>
                    </div>
                    <input
                      id={`demo-${param.id}`}
                      type="range"
                      min={0}
                      max={100}
                      value={v}
                      onChange={(e) => handleSlider(param.id, Number(e.target.value))}
                      aria-label={param.label}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={v}
                      style={{
                        background: `linear-gradient(to right, #10b981 ${v}%, ${trackBg} ${v}%)`,
                      }}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Score display */}
          <div className="card rounded-2xl p-8 flex flex-col items-center text-center reveal from-right">
            <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-widest mb-6">
              Credit Score
            </p>

            {/* Ring */}
            <div className="relative w-48 h-48 mb-6" role="img" aria-label={`Credit score: ${score} — ${band.label}`}>
              <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90" aria-hidden="true">
                <circle
                  cx="100" cy="100" r="80"
                  fill="none"
                  stroke={isDark ? '#334155' : '#e2e8f0'}
                  strokeWidth="14"
                />
                <circle
                  cx="100" cy="100" r="80"
                  fill="none"
                  stroke={band.color}
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray={dashArray}
                  className="score-ring"
                  style={{ stroke: band.color }}
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-display font-bold text-5xl text-[var(--color-text-primary)] leading-none">
                  {score}
                </span>
                <span className={`text-base font-semibold mt-1 ${band.tailwindColor}`}>
                  {band.label}
                </span>
              </div>
            </div>

            {/* Bands */}
            <div className="w-full space-y-1.5" role="list" aria-label="Score bands">
              {BANDS.map((b) => {
                const active = b.id === activeBand
                return (
                  <div
                    key={b.id}
                    role="listitem"
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                      active
                        ? 'bg-[var(--color-surface-2)]'
                        : 'opacity-40'
                    }`}
                    aria-current={active ? 'true' : undefined}
                  >
                    <div className={`w-3 h-3 rounded-full shrink-0 ${b.color}`} />
                    <span className={`text-sm flex-1 text-left ${active ? 'text-[var(--color-text-primary)] font-medium' : 'text-[var(--color-text-secondary)]'}`}>
                      {b.label}
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)] font-mono">{b.range}</span>
                  </div>
                )
              })}
            </div>

            <p className="mt-4 text-xs text-[var(--color-text-muted)] font-mono">
              Range: 300 – 850
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
