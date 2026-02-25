'use client'

export default function ContactForm() {
    return (
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-wider mb-1.5 block">First name</label>
                    <input type="text" placeholder="Jane" className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-primary)] text-sm outline-none focus:border-emerald-500 transition-colors" />
                </div>
                <div>
                    <label className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-wider mb-1.5 block">Last name</label>
                    <input type="text" placeholder="Doe" className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-primary)] text-sm outline-none focus:border-emerald-500 transition-colors" />
                </div>
            </div>
            <div>
                <label className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-wider mb-1.5 block">Work email</label>
                <input type="email" placeholder="jane@company.com" className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-primary)] text-sm outline-none focus:border-emerald-500 transition-colors" />
            </div>
            <div>
                <label className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-wider mb-1.5 block">Subject</label>
                <select className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-secondary)] text-sm outline-none focus:border-emerald-500 transition-colors">
                    <option>Sales enquiry</option>
                    <option>Technical support</option>
                    <option>Partnership</option>
                    <option>Other</option>
                </select>
            </div>
            <div>
                <label className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-wider mb-1.5 block">Message</label>
                <textarea rows={4} placeholder="Tell us about your use case..." className="w-full px-4 py-2.5 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-2)] text-[var(--color-text-primary)] text-sm outline-none focus:border-emerald-500 transition-colors resize-none" />
            </div>
            <button type="submit" className="btn-primary w-full py-3 rounded-xl text-sm font-semibold">
                Send message
            </button>
        </form>
    )
}