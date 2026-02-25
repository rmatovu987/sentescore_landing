const RECENT_APPS = [
  { name: 'John Adebayo', amount: '$12,000', score: 742, status: 'Approved', statusColor: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-400' },
  { name: 'Sarah Kimani', amount: '$5,500', score: 618, status: 'Review', statusColor: 'text-amber-500', bg: 'bg-amber-100 dark:bg-amber-900/30', text: 'text-amber-700 dark:text-amber-400' },
  { name: 'Michael Osei', amount: '$25,000', score: 801, status: 'Approved', statusColor: 'text-emerald-500', bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-400' },
  { name: 'Fatima Diallo', amount: '$8,200', score: 555, status: 'Declined', statusColor: 'text-red-500', bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-400' },
]

const ACTIVE_WORKFLOWS = [
  { name: 'Personal Loan', count: 84, steps: 6 },
  { name: 'Business Credit', count: 31, steps: 9 },
  { name: 'Microfinance', count: 147, steps: 4 },
]

const PARAM_BARS = [
  { label: 'Payment history', value: 95 },
  { label: 'Utilization', value: 72 },
  { label: 'Income ratio', value: 88 },
]

const SIDEBAR_ITEMS = ['Dashboard', 'Applications', 'Workflows', 'Score Rules', 'Reports']

export default function DashboardPreview() {
  return (
    <div
      className="card rounded-2xl overflow-hidden"
      aria-label="SenteScore dashboard preview"
      role="img"
    >
      {/* Chrome bar */}
      <div className="bg-[var(--color-surface-2)] px-4 py-3 border-b border-[var(--color-border)] flex items-center gap-3">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-amber-400/80" />
          <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex-1">
          <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-md px-3 py-1 font-mono text-xs text-[var(--color-text-muted)] max-w-xs mx-auto text-center">
            app.sentescore.com/dashboard
          </div>
        </div>
      </div>

      {/* Dashboard body */}
      <div className="p-5 bg-[var(--color-surface)]/80 grid grid-cols-12 gap-4 min-h-[300px]">
        {/* Sidebar */}
        <aside className="col-span-2 flex flex-col gap-1" aria-label="Navigation sidebar">
          <p className="text-xs font-mono text-[var(--color-text-muted)] mb-2 px-2">MENU</p>
          {SIDEBAR_ITEMS.map((item, i) => (
            <div
              key={item}
              className={`px-3 py-2 rounded-lg text-xs font-medium cursor-default ${
                i === 0
                  ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-2)]'
              }`}
            >
              {item}
            </div>
          ))}
        </aside>

        {/* Main */}
        <div className="col-span-10 grid grid-cols-3 gap-4">
          {/* Score ring card */}
          <div className="card rounded-xl p-4">
            <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
              Credit Score
            </p>
            <div className="flex justify-center mb-3">
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90" aria-hidden="true">
                  <circle cx="40" cy="40" r="32" fill="none" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="6" />
                  <circle
                    cx="40" cy="40" r="32"
                    fill="none" stroke="#10b981" strokeWidth="6"
                    strokeLinecap="round" strokeDasharray="157 44"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-display font-bold text-lg text-[var(--color-text-primary)] leading-none">780</span>
                  <span className="text-emerald-500 text-xs font-medium">High</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              {PARAM_BARS.map((p) => (
                <div key={p.label}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-[var(--color-text-muted)]">{p.label}</span>
                    <span className="text-[var(--color-text-secondary)] font-medium">{p.value}</span>
                  </div>
                  <div className="h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
                      style={{ width: `${p.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent applications */}
          <div className="card rounded-xl p-4 col-span-2">
            <div className="flex justify-between items-center mb-3">
              <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider">
                Recent Applications
              </p>
              <span className="text-xs text-emerald-500 cursor-pointer hover:underline">View all</span>
            </div>
            <div className="space-y-2">
              {RECENT_APPS.map((app) => (
                <div key={app.name} className="flex items-center justify-between py-1.5 border-b border-[var(--color-border)] last:border-0">
                  <div className="flex items-center gap-2">
                    <div className={`w-6 h-6 rounded-full ${app.bg} flex items-center justify-center text-xs font-bold ${app.text}`}>
                      {app.name[0]}
                    </div>
                    <div>
                      <div className="text-xs font-medium text-[var(--color-text-primary)]">{app.name}</div>
                      <div className="text-xs text-[var(--color-text-muted)]">{app.amount}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-[var(--color-text-secondary)]">{app.score}</div>
                    <div className={`text-xs font-semibold ${app.statusColor}`}>{app.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Workflows row */}
          <div className="card rounded-xl p-4 col-span-3">
            <p className="text-xs font-mono text-[var(--color-text-muted)] uppercase tracking-wider mb-3">
              Active Workflows
            </p>
            <div className="grid grid-cols-3 gap-3">
              {ACTIVE_WORKFLOWS.map((wf) => (
                <div key={wf.name} className="bg-[var(--color-surface-2)] rounded-lg p-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-[var(--color-text-primary)]">{wf.name}</span>
                    <span className="text-xs text-emerald-500 bg-emerald-50 dark:bg-emerald-900/30 px-1.5 py-0.5 rounded-full">Active</span>
                  </div>
                  <div className="font-display font-bold text-xl text-[var(--color-text-primary)]">{wf.count}</div>
                  <div className="text-xs text-[var(--color-text-muted)]">{wf.steps} steps · today</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
