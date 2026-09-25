import { ArrowUpRight } from 'lucide-react'
import { CardSection } from '@/components/card-section'
import { profile } from '@/lib/profile'

export function AboutSection() {
  return (
    <CardSection id="about" label="About">
      <p className="text-pretty text-base leading-relaxed text-foreground/85 md:text-lg">{profile.about}</p>
    </CardSection>
  )
}

export function SkillsSection() {
  return (
    <CardSection id="skills" label="AI/ML Skills">
      <ul className="flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground"
          >
            {skill}
          </li>
        ))}
      </ul>
    </CardSection>
  )
}

export function ProjectsSection() {
  return (
    <CardSection id="projects" label="Selected Projects">
      <ul className="grid gap-3 sm:grid-cols-3">
        {profile.projectAreas.map((area) => (
          <li key={area.sector} className="flex flex-col gap-2 rounded-lg border border-border bg-card p-5">
            <h3 className="font-semibold text-foreground">{area.sector}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{area.summary}</p>
          </li>
        ))}
      </ul>
    </CardSection>
  )
}

export function ExperienceSection() {
  return (
    <CardSection id="experience" label="Experience">
      <dl className="flex flex-col divide-y divide-border rounded-lg border border-border bg-card">
        <div className="flex flex-col gap-1 p-5">
          <dt className="font-semibold text-foreground">{profile.business}</dt>
          <dd className="text-sm text-muted-foreground">{profile.role}</dd>
        </div>
        <div className="flex flex-col gap-1 p-5">
          <dt className="font-semibold text-foreground">8+ years of applied experience</dt>
          <dd className="text-sm leading-relaxed text-muted-foreground">
            Machine learning, NLP, and data science across financial services, government, and research.
          </dd>
        </div>
        <div className="flex flex-col gap-2 p-5">
          <dt className="font-semibold text-foreground">Education</dt>
          {profile.education.map((e) => (
            <dd key={e.degree} className="flex items-baseline gap-3 text-sm text-muted-foreground">
              <span className="w-12 font-mono text-xs text-accent">{e.degree}</span>
              {e.field}
            </dd>
          ))}
        </div>
      </dl>
    </CardSection>
  )
}

export function ContactSection() {
  return (
    <CardSection id="contact" label="Contact">
      <div className="flex flex-col gap-4">
        <p className="leading-relaxed text-foreground/85">
          For inquiries about {profile.business}, reach me by email.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-2 self-start break-all text-lg font-semibold text-foreground underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent md:text-xl"
        >
          {profile.email}
          <ArrowUpRight
            className="size-5 shrink-0 text-accent transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>
    </CardSection>
  )
}
