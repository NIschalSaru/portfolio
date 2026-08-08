import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const experiences = [
  {
    role: 'Software Developer',
    company: 'Beetech Solution Pvt. Ltd. — Chabahil, Kathmandu',
    period: 'Mar 2025 — Present',
    description:
      'Developing and maintaining web applications and backend APIs using Laravel, PHP, and modern JavaScript technologies with a focus on performance, security, and scalability. Designing and integrating RESTful APIs and third-party payment/booking services for production platforms, collaborating in an Agile environment, and contributing to full-lifecycle development of travel booking, education, utility payment, and HR/attendance systems.',
    technologies: ['Laravel', 'PHP', 'JavaScript', 'REST API'],
  },
  {
    role: 'Software Developer',
    company: 'Shangrila Informatics — Rudramati Marga, Kathmandu',
    period: 'Jun 2023 — Feb 2025',
    description:
      'Developed and maintained web applications using Laravel, ensuring high performance and responsiveness across platforms. Integrated RESTful APIs for seamless frontend-backend data exchange, worked with cross-functional teams to identify and prioritize features, and conducted code reviews and developed unit & system tests to maintain software quality.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'REST API'],
  },
  {
    role: 'Software Developer Intern',
    company: 'Shangrila Informatics — Rudramati Marga, Kathmandu',
    period: 'Mar 2023 — May 2023',
    description:
      'Developed and tested web applications using PHP and Laravel. Participated in code reviews and debugging processes to ensure code quality and project standards, and used Git for version control while collaborating via Jira in an Agile environment.',
    technologies: ['PHP', 'Laravel', 'Git', 'Jira'],
  },
]

function ChevronLeft() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [index, setIndex] = useState(0)
  const count = experiences.length

  const prev = () => setIndex((i) => (i - 1 + count) % count)
  const next = () => setIndex((i) => (i + 1) % count)

  const exp = experiences[index]

  return (
    <section id="experience" className="relative py-24 md:py-32 px-5 bg-canvas font-mono" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl"
        >
          <div className="relative mb-8">
            <div className="absolute left-0 right-0 top-1/2 h-px bg-border-light -translate-y-1/2" />
            <div className="relative flex justify-between">
              {experiences.map((e, i) => (
                <button
                  key={e.role}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to ${e.role}`}
                  className="group flex flex-col items-center"
                >
                  <span
                    className={`w-3.5 h-3.5 rounded-full border-2 transition-colors duration-200 ${
                      i === index
                        ? 'bg-accent border-accent'
                        : 'bg-canvas border-ink-muted group-hover:border-accent'
                    }`}
                  />
                  <span
                    className={`mt-2 text-[10px] tracking-wide transition-colors duration-200 ${
                      i === index ? 'text-accent' : 'text-ink-muted'
                    }`}
                  >
                    {e.period.split('—')[0].trim()}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="border border-border-light rounded-lg p-6 bg-surface"
              >
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
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-5 mt-6">
            <button
              onClick={prev}
              aria-label="Previous experience"
              className="p-2.5 rounded-full border border-border-light text-ink-muted hover:text-ink hover:border-border transition-all duration-200"
            >
              <ChevronLeft />
            </button>
            <span className="text-[12px] text-ink-muted font-mono">
              {index + 1} / {count}
            </span>
            <button
              onClick={next}
              aria-label="Next experience"
              className="p-2.5 rounded-full border border-border-light text-ink-muted hover:text-ink hover:border-border transition-all duration-200"
            >
              <ChevronRight />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
