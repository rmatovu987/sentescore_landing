// ─── SITE CONFIG ────────────────────────────────────────────────────────────
export const SITE = {
  name: 'SenteScore',
  tagline: 'Intelligent Credit Scoring & Workflow Automation',
  description:
    'SenteScore empowers lenders and fintechs to build dynamic credit scoring models with custom parameters, automated workflows, and seamless application management — all in one intelligent platform.',
  url: 'https://sentescore.com',
  email: 'hello@sentescore.com',
  social: {
    twitter: 'https://twitter.com/sentescore',
    linkedin: 'https://linkedin.com/company/sentescore',
    github: 'https://github.com/sentescore',
  },
}

// ─── PRICING DATA ────────────────────────────────────────────────────────────
export interface Plan {
  id: string
  name: string
  tagline: string
  monthlyFee: number
  annualFee: number
  onboarding: number
  popular: boolean
  ctaLabel: string
  ctaVariant: 'primary' | 'outline'
  features: {
    applications: string
    workflows: string
    scoringRules: string
    users: string
    storage: string
    support: string
    integrations: string
  }
  accentColor: string
}

// Pricing corrections:
// Year 1 annual = annualFee + onboarding
// Year 1 monthly = (monthlyFee * 12) + onboarding
// Year 2+ = annualFee (no onboarding)
// Professional Year 2+ = $5,500 (NOT $3,850 — that was wrong)

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'For teams getting started with smarter lending',
    monthlyFee: 450,
    annualFee: 4860,
    onboarding: 200,
    popular: false,
    ctaLabel: 'Start free trial',
    ctaVariant: 'outline',
    features: {
      applications: '< 200 / month',
      workflows: 'Up to 3',
      scoringRules: 'Up to 5',
      users: 'Up to 10',
      storage: '5 GB',
      support: '< 72h email',
      integrations: '> $500 per integration',
    },
    accentColor: 'emerald',
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'For growing lenders with advanced needs',
    monthlyFee: 700,
    annualFee: 7560,
    onboarding: 500,
    popular: true,
    ctaLabel: 'Start free trial',
    ctaVariant: 'primary',
    features: {
      applications: '< 1,000 / month',
      workflows: 'Up to 10',
      scoringRules: 'Up to 10',
      users: 'Up to 25',
      storage: '10 GB',
      support: '< 48h email',
      integrations: '> $500 per integration',
    },
    accentColor: 'emerald',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For large institutions with unlimited scale',
    monthlyFee: 1400,
    annualFee: 15120,
    onboarding: 800,
    popular: false,
    ctaLabel: 'Contact sales',
    ctaVariant: 'outline',
    features: {
      applications: 'Unlimited',
      workflows: 'Unlimited',
      scoringRules: 'Unlimited',
      users: 'Unlimited',
      storage: '50 GB',
      support: '< 24h email & WhatsApp',
      integrations: '> $500',
    },
    accentColor: 'emerald',
  },
]

// ─── ADD-ONS ─────────────────────────────────────────────────────────────────
export interface AddOn {
  label: string
  description: string
  price: string
  icon: string
}

export const ADD_ONS: AddOn[] = [
  {
    label: 'Additional applications',
    description: 'Per application over plan limit',
    price: '$1',
    icon: '📄',
  },
  {
    label: 'Additional users',
    description: 'Per user, per month',
    price: '$5 / user / mo',
    icon: '👤',
  },
  {
    label: 'Extra training session',
    description: 'Dedicated onboarding or training',
    price: '$150',
    icon: '🎓',
  },
  {
    label: 'Custom report',
    description: 'Bespoke reporting build',
    price: '$300',
    icon: '📊',
  },
  {
    label: 'Tier upgrades',
    description: 'Move between plans anytime',
    price: 'Free',
    icon: '⬆️',
  },
  {
    label: 'Further customizations',
    description: 'Custom dev & unique requirements',
    price: 'On request',
    icon: '🔧',
  },
]

// ─── FEATURES ─────────────────────────────────────────────────────────────────
export interface Feature {
  icon: string
  tag: string
  title: string
  description: string
}

export const FEATURES: Feature[] = [
  {
    icon: '⚡',
    tag: 'Fully customizable',
    title: 'Dynamic Score Parameters',
    description:
      'Define any combination of scoring parameters — income, behavior, psychometrics, transaction history. No rigid templates. Your model, your rules.',
  },
  {
    icon: '🔀',
    tag: 'Drag & drop',
    title: 'Visual Workflow Builder',
    description:
      'Design multi-step decision workflows with conditional branching, automated approvals, manual review queues, and real-time notifications.',
  },
  {
    icon: '📋',
    tag: 'One dashboard',
    title: 'Unified Application Hub',
    description:
      'All applications from all workflows in one place. Filter, sort, search, bulk-act, and export with complete audit trails for every decision.',
  },
  {
    icon: '🔗',
    tag: 'Open ecosystem',
    title: 'Integrations & REST API',
    description:
      'Connect to credit bureaus, bank statements, KYC providers, payroll APIs. Build with our REST API or use pre-built connectors.',
  },
  {
    icon: '📊',
    tag: 'Live insights',
    title: 'Real-time Analytics',
    description:
      'Track approval rates, portfolio performance, model accuracy, and workflow bottlenecks with live dashboards and scheduled reports.',
  },
  {
    icon: '🛡️',
    tag: 'Enterprise-grade',
    title: 'Compliance & Audit Ready',
    description:
      'Every scoring decision is explainable, logged, and traceable. Built-in fair lending checks, audit logs, and data residency controls.',
  },
]

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
export interface Testimonial {
  quote: string
  author: string
  role: string
  initials: string
  color: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'SenteScore cut our loan approval time from 3 days to under 4 minutes. Defining our own scoring parameters for our local market was the game-changer we needed.',
    author: 'John Doe',
    role: 'Head of Credit, Test',
    initials: 'JD',
    color: 'emerald',
  },
  {
    quote:
      'We run 5 different loan products on SenteScore simultaneously. One dashboard for all applications while each product keeps its own workflow is exactly what growing teams need.',
    author: 'Jane Doe',
    role: 'CTO, Test Microfinance',
    initials: 'JD',
    color: 'sky',
  },
  {
    quote:
      'Alternative data scoring opened up lending to customers invisible to traditional bureaus. Our approved portfolio doubled in 6 months.',
    author: 'Joe Doe',
    role: 'Director of Lending, Test MF',
    initials: 'JD',
    color: 'purple',
  },
]

// ─── WORKFLOW TEMPLATES ───────────────────────────────────────────────────────
export interface WorkflowTemplate {
  tag: string
  title: string
  description: string
  steps: string[]
  accentColor: string
}

export const WORKFLOW_TEMPLATES: WorkflowTemplate[] = [
  {
    tag: 'Consumer lending',
    title: 'Personal Loans',
    description:
      'Instant approvals for qualified borrowers. Manual review queues for borderline cases with configurable thresholds.',
    steps: [
      'Submit application',
      'Auto-score',
      'Income verification',
      'KYC check',
      'Decision',
      'Disbursement',
    ],
    accentColor: 'emerald',
  },
  {
    tag: 'Business lending',
    title: 'SME Business Credit',
    description:
      'Multi-factor scoring combining financials, industry data, and director credit profiles for comprehensive assessment.',
    steps: [
      'Business profile',
      'Financial review',
      'Director scoring',
      'Risk assessment',
      'Committee approval',
      'Offer letter',
    ],
    accentColor: 'amber',
  },
  {
    tag: 'Microfinance',
    title: 'Microfinance',
    description:
      'Fast, simplified workflows for small-ticket loans with alternative data and group guarantee models. Built for volume.',
    steps: [
      'Mobile application',
      'Alt-data scoring',
      'Group guarantee',
      'Auto decision',
      'Mobile disbursement',
    ],
    accentColor: 'sky',
  },
]

// ─── SCORE DEMO PARAMS ────────────────────────────────────────────────────────
export interface ScoreParam {
  id: string
  label: string
  weight: number
  defaultValue: number
}

export const SCORE_PARAMS: ScoreParam[] = [
  { id: 'income', label: 'Monthly Income', weight: 25, defaultValue: 70 },
  { id: 'history', label: 'Repayment History', weight: 30, defaultValue: 85 },
  { id: 'employment', label: 'Employment Stability', weight: 20, defaultValue: 60 },
  { id: 'dti', label: 'Debt-to-Income Ratio', weight: 15, defaultValue: 50 },
  { id: 'altdata', label: 'Alternative Data Score', weight: 10, defaultValue: 45 },
]

export function computeScore(values: Record<string, number>): number {
  const raw = SCORE_PARAMS.reduce(
    (acc, p) => acc + (values[p.id] / 100) * p.weight,
    0
  )
  return Math.round(300 + raw * 5.5)
}

export function getScoreBand(score: number): {
  label: string
  color: string
  tailwindColor: string
  range: string
} {
  if (score >= 750)
    return { label: 'Excellent', color: '#10b981', tailwindColor: 'text-emerald-500', range: '750–850' }
  if (score >= 700)
    return { label: 'Good', color: '#34d399', tailwindColor: 'text-emerald-400', range: '700–749' }
  if (score >= 650)
    return { label: 'Fair', color: '#f59e0b', tailwindColor: 'text-amber-500', range: '650–699' }
  return { label: 'Poor', color: '#ef4444', tailwindColor: 'text-red-500', range: '300–649' }
}

// ─── STATS ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: '2M+', label: 'Applications processed' },
  { value: '98.4%', label: 'Decision accuracy' },
  { value: '<0.8s', label: 'Avg. scoring time' },
  { value: '150+', label: 'Lenders trust us' },
]
