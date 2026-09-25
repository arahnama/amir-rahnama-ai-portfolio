import type { ReactNode } from 'react'

export function CardSection({
  id,
  label,
  children,
}: {
  id: string
  label: string
  children: ReactNode
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className="grid scroll-mt-24 gap-4 border-t border-border py-10 md:grid-cols-[10rem_1fr] md:gap-10"
    >
      <h2
        id={`${id}-heading`}
        className="flex items-center gap-2 self-start pt-1.5 font-mono text-xs font-medium uppercase tracking-widest text-accent"
      >
        <span aria-hidden="true" className="h-px w-4 bg-accent" />
        {label}
      </h2>
      <div>{children}</div>
    </section>
  )
}
