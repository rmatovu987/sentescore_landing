'use client'

import { useState } from 'react'
import Link from 'next/link'
import SectionPill from '@/components/ui/SectionPill'
import { PLANS, ADD_ONS, type Plan } from '@/lib/constants'
import { formatCurrency } from '@/lib/utils'

interface PricingProps {
  showHeader?: boolean
}

export default function Pricing({ showHeader = true }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section
      id="pricing"
      className="section-bg py-24 lg:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        {showHeader && (
          <div className="text-center max-w-2xl mx-auto mb-12 reveal from-bottom">
            <SectionPill className="mb-4">Transparent pricing</SectionPill>
            <h2
              id="pricing-heading"
              className="font-display font-bold text-4xl lg:text-5xl text-[var(--color-text-primary)] tracking-tight mb-4"
            >
              Plans that scale with{' '}
              <span className="gradient-text">your portfolio</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-lg">
              All plans include full feature access. Save 10% with annual billing.
            </p>
          </div>
        )}

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-10 reveal from-bottom">
          <span
            className={`text-sm transition-colors ${
              !isAnnual
                ? 'text-[var(--color-text-primary)] font-medium'
                : 'text-[var(--color-text-muted)]'
            }`}
          >
            Monthly
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            aria-pressed={isAnnual}
            aria-label="Toggle annual billing"
            className={`relative w-14 h-7 rounded-full border-none cursor-pointer transition-colors duration-300 ${
              isAnnual ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'
            }`}
          >
            <span
              className={`absolute top-0.5 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${
                isAnnual ? 'right-0.5 left-auto' : 'left-0.5'
              }`}
            />
          </button>
          <span
            className={`text-sm transition-colors ${
              isAnnual
                ? 'text-[var(--color-text-primary)] font-medium'
                : 'text-[var(--color-text-muted)]'
            }`}
          >
            Annual{' '}
            <span className="text-emerald-500 font-mono text-xs">Save 10%</span>
          </span>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {PLANS.map((plan, i) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              isAnnual={isAnnual}
              revealDelay={i * 2 + 1}
            />
          ))}
        </div>

        {/* Add-ons */}
        <div className="card rounded-2xl p-8 reveal from-bottom mb-6">
          <div className="flex items-center gap-3 mb-6">
            <div
              className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-sm"
              aria-hidden="true"
            >
              🧩
            </div>
            <h3 className="font-display font-semibold text-xl text-[var(--color-text-primary)]">
              SaaS Add-Ons{' '}
              <span className="font-sans font-normal text-base text-[var(--color-text-secondary)]">
                (Available on all tiers)
              </span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {ADD_ONS.map((addon) => (
              <div
                key={addon.label}
                className="addon-row flex items-center justify-between px-4 py-3 rounded-xl border border-[var(--color-border)] cursor-default"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg" aria-hidden="true">{addon.icon}</span>
                  <div>
                    <div className="text-sm font-medium text-[var(--color-text-primary)]">
                      {addon.label}
                    </div>
                    <div className="text-xs text-[var(--color-text-muted)]">
                      {addon.description}
                    </div>
                  </div>
                </div>
                <div className="text-emerald-500 font-semibold font-mono text-sm shrink-0 ml-3">
                  {addon.price}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Exclusivity */}
        <div
          className="card rounded-2xl p-6 border border-amber-300/40 dark:border-amber-500/20 reveal from-bottom text-center"
          style={{ background: 'rgba(251,191,36,0.03)' }}
        >
          <div className="text-amber-600 dark:text-amber-400 font-semibold text-sm mb-2">
            ✨ Optional — Exclusivity Package
          </div>
          <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed max-w-xl mx-auto">
            <strong className="text-[var(--color-text-primary)]">$5,000 one-time fee.</strong>{' '}
            Lock in exclusive platform features and prevent competitors in your region from accessing
            the same configuration. Available on all plans.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── PLAN CARD ────────────────────────────────────────────────────────────────
function PlanCard({
  plan,
  isAnnual,
  revealDelay,
}: {
  plan: Plan
  isAnnual: boolean
  revealDelay: number
}) {
  // Corrected pricing calculations:
  // Year 1 annual  = annualFee + onboarding
  // Year 1 monthly = (monthlyFee × 12) + onboarding
  // Year 2+        = annualFee (the plan's own annual fee — no extra onboarding)

  const displayPrice = isAnnual ? plan.annualFee : plan.monthlyFee
  const year1Total = isAnnual
    ? plan.annualFee + plan.onboarding
    : plan.monthlyFee * 12 + plan.onboarding
  const year2Plus = plan.annualFee  // Year 2+ always = the plan's annual fee

  return (
    <article
      className={`flex flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1.5 reveal from-bottom reveal-d${revealDelay} ${
        plan.popular
          ? 'plan-popular bg-[var(--color-surface)]'
          : 'card'
      }`}
      aria-label={`${plan.name} plan`}
    >
      {/* Popular bar */}
      {plan.popular && (
        <div
          className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600"
          aria-hidden="true"
        />
      )}

      {/* Badge */}
      {plan.popular && (
        <div className="flex justify-end mb-1">
          <span className="text-xs font-mono font-bold text-white bg-emerald-500 px-2.5 py-1 rounded-full tracking-wider">
            POPULAR
          </span>
        </div>
      )}

      {/* Plan name */}
      <div className={`mb-6 ${plan.popular ? 'mt-1' : ''}`}>
        <h3 className="font-display font-bold text-2xl text-[var(--color-text-primary)] mb-1">
          {plan.name}
        </h3>
        <p className="text-[var(--color-text-secondary)] text-sm">{plan.tagline}</p>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-end gap-2 mb-1">
          <span className="font-display font-bold text-4xl text-[var(--color-text-primary)]">
            {formatCurrency(displayPrice)}
          </span>
          <span className="text-[var(--color-text-secondary)] text-sm mb-1">
            /{isAnnual ? 'year' : 'month'}
          </span>
        </div>
        <p className="text-xs text-[var(--color-text-muted)]">
          + {formatCurrency(plan.onboarding)} one-time onboarding fee
        </p>

        {/* Breakdown box */}
        <div
          className={`mt-3 p-3 rounded-xl border text-xs ${
            plan.popular
              ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800'
              : 'bg-[var(--color-surface-2)] border-[var(--color-border)]'
          }`}
        >
          <div className="flex justify-between mb-1">
            <span className="text-[var(--color-text-secondary)]">
              Year 1 total ({isAnnual ? 'annual' : 'monthly'})
            </span>
            <span
              className={`font-semibold ${
                plan.popular
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-[var(--color-text-primary)]'
              }`}
            >
              {formatCurrency(year1Total)}
            </span>
          </div>
          <div className="flex justify-between text-[var(--color-text-muted)]">
            <span>Year 2+ per year</span>
            <span>{formatCurrency(year2Plus)}</span>
          </div>
        </div>
      </div>

      {/* Features list */}
      <ul className="space-y-2.5 flex-1 mb-6" aria-label={`${plan.name} features`}>
        {Object.entries(plan.features).map(([key, value]) => (
          <li key={key} className="flex items-start gap-2.5 text-sm">
            <span className="text-emerald-500 mt-0.5 shrink-0" aria-hidden="true">✓</span>
            <span className="text-[var(--color-text-secondary)]">
              <span className="text-[var(--color-text-primary)] font-medium">
                {featureLabel(key)}:{' '}
              </span>
              {value}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {plan.ctaVariant === 'primary' ? (
        <Link
          href="/pricing"
          className="btn-primary py-3 px-6 rounded-xl text-sm font-semibold text-center block"
        >
          {plan.ctaLabel}
        </Link>
      ) : (
        <Link
          href={plan.id === 'enterprise' ? '/contact' : '/pricing'}
          className="btn-outline py-3 px-6 rounded-xl text-sm font-semibold text-center block"
        >
          {plan.ctaLabel}
        </Link>
      )}
    </article>
  )
}

function featureLabel(key: string): string {
  const map: Record<string, string> = {
    applications: 'Applications',
    workflows: 'Workflows',
    scoringRules: 'Scoring rules',
    users: 'Users',
    storage: 'Storage',
    support: 'Support',
    integrations: 'Integrations',
  }
  return map[key] ?? key
}
