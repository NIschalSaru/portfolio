import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const experiences = [
  {
    role: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2023 — Present',
    description:
      'Leading development of enterprise web applications, architecting scalable backend services with Laravel and building responsive React frontends. Mentoring junior developers and establishing coding standards.',
    technologies: ['Laravel', 'React', 'PostgreSQL', 'Redis'],
  },
  {
    role: 'Full Stack Developer',
    company: 'WebInnovate Studio',
    period: '2021 — 2023',
    description:
      'Built and maintained multiple client projects using Laravel and React. Developed RESTful APIs, integrated third-party services, and optimized database performance for high-traffic applications.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Docker'],
  },
  {
    role: 'Backend Developer',
    company: 'DataFlow Systems',
    period: '2019 — 2021',
    description:
      'Developed server-side logic, designed database schemas, and built REST APIs. Worked extensively with PHP, MySQL, and Redis for caching, queuing, and real-time data processing.',
    technologies: ['PHP', 'MySQL', 'Redis', 'AWS'],
  },
  {
    role: 'Junior Developer',
    company: 'StartUp Labs',
    period: '2018 — 2019',
    description:
      'Started my career building web applications with PHP and JavaScript. Collaborated on frontend and backend tasks, learned modern development practices, and contributed to early-stage products.',
    technologies: ['PHP', 'JavaScript', 'jQuery', 'MySQL'],
  },
]

function TimelineItem({ exp, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08 * index }}
      className="relative pl-8 pb-10 last:pb-0 group"
    >
      <div className="absolute left-[3px] top-2 w-2.5 h-2.5 rounded-full border-[3px] border-ink-muted bg-canvas group-hover:bg-accent transition-colors duration-200" />
      {index < experiences.length - 1 && (
        <div className="absolute left-[7px] top-6 bottom-0 w-px bg-border-light" />
      )}

      <div className="border border-border-light rounded-lg p-6 bg-surface">
        <div className="flex flex-wrap items-center gap-3 mb-2.5">
          <span className="text-[11px] font-mono text-ink-secondary bg-raised px-2.5 py-1 rounded">
            <span className="text-[#58a6ff]">[</span>
            {exp.period}
            <span className="text-[#58a6ff]">]</span>
          </span>
        </div>
        <h3 className="text-[15px] font-semibold text-ink mb-0.5 font-mono">{exp.role}</h3>
        <p className="text-[13px] text-ink-muted mb-3 font-mono">
          <span className="text-accent">@</span> {exp.company}
        </p>
        <p className="text-[13px] text-ink-secondary leading-relaxed mb-4 font-mono">
          {exp.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {exp.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[11px] text-ink-muted bg-raised rounded font-mono"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="experience" className="relative py-24 md:py-32 px-5 bg-canvas font-mono" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[12px] text-ink-secondary mb-2">
            <span className="text-[#58a6ff]">$</span>
            <span className="text-ink ml-2">history --career</span>
          </p>
          <h2 className="section-heading mb-3">where I&apos;ve worked</h2>
          <p className="text-ink-secondary text-[14px] font-mono">
            <span className="text-ink-muted">#</span> My professional journey building products and solving real problems.
          </p>
        </motion.div>

        <div>
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.role} exp={exp} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
