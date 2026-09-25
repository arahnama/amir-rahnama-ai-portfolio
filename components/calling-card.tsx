import { Mail } from 'lucide-react'
import { profile } from '@/lib/profile'

export function CallingCard() {
  return (
    <header className="relative overflow-hidden rounded-xl bg-navy text-navy-foreground shadow-xl shadow-navy/20">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:2rem_2rem]"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-accent" />

      <div className="relative flex flex-col gap-10 p-8 md:p-12">
        <p className="font-mono text-xs uppercase tracking-widest text-navy-foreground/60">
          {profile.business}
        </p>

        <div className="flex flex-col gap-3">
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">{profile.name}</h1>
          <p className="text-lg text-navy-foreground/80 md:text-xl">
            <span className="text-accent-bright">{profile.role}</span>
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-navy-foreground/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-navy-foreground/70">
            {profile.education.map((e) => (
              <li key={e.degree}>
                {e.degree} {e.field}
              </li>
            ))}
            <li>8+ years applied ML</li>
          </ul>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 self-start rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy-foreground sm:self-auto"
          >
            <Mail className="size-4" aria-hidden="true" />
            Get in touch
          </a>
        </div>
      </div>
    </header>
  )
}
