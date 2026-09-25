import { CallingCard } from '@/components/calling-card'
import {
  AboutSection,
  ContactSection,
  ExperienceSection,
  ProjectsSection,
  SkillsSection,
} from '@/components/profile-sections'
import { profile } from '@/lib/profile'

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Page() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-4xl flex-col px-4 py-6 md:px-6 md:py-12">
      <nav
        aria-label="Sections"
        className="sticky top-0 z-10 -mx-4 mb-6 bg-background/90 px-4 py-3 backdrop-blur md:-mx-6 md:px-6"
      >
        <ul className="flex gap-5 overflow-x-auto text-sm text-muted-foreground">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="whitespace-nowrap transition-colors hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <CallingCard />

      <main className="mt-6 flex flex-col">
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <footer className="mt-auto border-t border-border pt-6 font-mono text-xs text-muted-foreground">
        {profile.business}
      </footer>
    </div>
  )
}
