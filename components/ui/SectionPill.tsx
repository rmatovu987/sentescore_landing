import { cn } from '@/lib/utils'

interface SectionPillProps {
  children: React.ReactNode
  className?: string
}

export default function SectionPill({ children, className }: SectionPillProps) {
  return (
    <div className={cn('section-pill', className)} role="note">
      <span className="dot-pulse w-2 h-2 rounded-full bg-emerald-500 inline-block" aria-hidden="true" />
      {children}
    </div>
  )
}
