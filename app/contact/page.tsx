import { generateMetadata } from '@/lib/metadata'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollRevealInit from '@/components/ui/ScrollRevealInit'
import { SITE } from '@/lib/constants'
import ContactForm from "@/app/contact/contact_form";

export const metadata = generateMetadata({
  title: 'Contact Us',
  description: 'Get in touch with the SenteScore team. Sales, support, partnerships — we\'re here to help.',
  path: '/contact',
})

export default function ContactPage() {
  return (
    <>
      <ScrollRevealInit />
      <Navbar />
      <main className="pt-20">
        <div className="section-bg py-16 lg:py-20 text-center px-6">
          <div className="section-pill mb-4 inline-flex">Get in touch</div>
          <h1 className="font-display font-bold text-4xl lg:text-5xl text-[var(--color-text-primary)] tracking-tight mt-4 mb-4">
            We'd love to <span className="gradient-text">hear from you</span>
          </h1>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-xl mx-auto">
            Whether you're ready to get started, have questions about pricing, or want to explore a partnership — reach out.
          </p>
        </div>

        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

            <div className="reveal from-left">
              <h2 className="font-display font-bold text-2xl text-[var(--color-text-primary)] mb-6">Contact options</h2>
              <div className="space-y-4">
                {[
                  { icon: '✉️', label: 'General enquiries', value: SITE.email },
                  { icon: '💼', label: 'Sales', value: 'sales@sentescore.com' },
                  { icon: '🛟', label: 'Support', value: 'support@sentescore.com' },
                  { icon: '🤝', label: 'Partnerships', value: 'partners@sentescore.com' },
                ].map((c) => (
                  <div key={c.label} className="card rounded-xl px-5 py-4 flex items-center gap-4">
                    <span className="text-xl">{c.icon}</span>
                    <div>
                      <div className="text-xs text-[var(--color-text-muted)] font-mono uppercase tracking-wider">{c.label}</div>
                      <a href={`mailto:${c.value}`} className="text-sm font-medium text-emerald-500 hover:underline">{c.value}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card rounded-2xl p-8 reveal from-right">
              <h2 className="font-display font-bold text-xl text-[var(--color-text-primary)] mb-6">Send us a message</h2>
                <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
