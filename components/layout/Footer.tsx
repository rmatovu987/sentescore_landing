import Link from 'next/link'
import Logo from '@/components/ui/Logo'
import { SITE } from '@/lib/constants'

const FOOTER_LINKS = {
  Product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Demo', href: '/#score-demo' },
    { label: 'API Docs', href: '#' },
    { label: 'Changelog', href: '#' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'GDPR', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
  Support: [
    { label: 'Documentation', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Status Page', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'Community', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-[var(--color-border)] bg-[var(--color-bg)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" aria-label={`${SITE.name} home`} className="inline-block mb-4">
              <Logo />
            </Link>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5">
              Intelligent credit scoring and workflow automation for modern lenders.
            </p>
            {/* Social links */}
            <nav aria-label="Social media links" className="flex items-center gap-2">
              {[
                { label: 'Twitter / X', href: SITE.social.twitter, char: 'X' },
                { label: 'LinkedIn', href: SITE.social.linkedin, char: 'in' },
                { label: 'GitHub', href: SITE.social.github, char: 'gh' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-8 h-8 rounded-lg bg-[var(--color-surface-2)] border border-[var(--color-border)] flex items-center justify-center text-xs font-mono font-bold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-emerald-500/40 transition-all duration-200"
                >
                  {s.char}
                </a>
              ))}
            </nav>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-4">
                {section}
              </h3>
              <ul className="space-y-2.5" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-emerald-500 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved. Hosted at{' '}
            <span className="font-mono">sentescore.com</span>
          </p>
          <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
            <span className="dot-pulse w-2 h-2 rounded-full bg-emerald-500 inline-block" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  )
}
