import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

const experiences = [
  {
    role: 'Software Developer',
    company: 'Beetech Solution Pvt. Ltd.',
    location: 'Chabahil, Kathmandu',
    range: 'Mar 2025 — Present',
    url: '',
    description:
      'Developing and maintaining web applications and backend APIs using Laravel, PHP, and modern JavaScript technologies with a focus on performance, security, and scalability. Designing and integrating RESTful APIs and third-party payment/booking services for production platforms, collaborating in an Agile environment, and contributing to full-lifecycle development of travel booking, education, utility payment, and HR/attendance systems.',
    technologies: ['Laravel', 'PHP', 'JavaScript', 'REST API'],
  },
  {
    role: 'Software Developer',
    company: 'Shangrila Informatics',
    location: 'Rudramati Marga, Kathmandu',
    range: 'Mar 2023 — Feb 2025',
    url: '',
    description:
      'Started as an intern and grew into a full-time developer role. Developed and maintained web applications using Laravel, ensuring high performance and responsiveness across platforms. Integrated RESTful APIs for seamless frontend-backend data exchange, worked with cross-functional teams to identify and prioritize features, and conducted code reviews and developed unit & system tests to maintain software quality. Used Git for version control while collaborating via Jira in an Agile environment.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Git', 'Jira'],
  },
]

const easing = [0.645, 0.045, 0.355, 1]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [index, setIndex] = useState(0)
  const count = experiences.length
  const tabsRef = useRef([])
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    const el = tabsRef.current[index]
    if (el && typeof el.scrollIntoView === 'function') {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [index])

  const onKeyDown = (e) => {
    const key = e.key
    if (key !== 'ArrowUp' && key !== 'ArrowDown' && key !== 'ArrowLeft' && key !== 'ArrowRight') return
    e.preventDefault()
    if (key === 'ArrowDown' || key === 'ArrowRight') setIndex((i) => (i + 1) % count)
    else setIndex((i) => (i - 1 + count) % count)
  }

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
          className="max-w-[1000px]"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-0">
            <div
              role="tablist"
              aria-label="Job tabs"
              onKeyDown={onKeyDown}
              className="relative w-full md:w-[220px] shrink-0 flex md:block overflow-x-auto overflow-y-hidden md:overflow-visible pb-3 md:pb-0 pr-2 md:pr-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {experiences.map((exp, i) => (
                <button
                  key={exp.company}
                  ref={(el) => (tabsRef.current[i] = el)}
                  role="tab"
                  id={`tab-${i}`}
                  aria-selected={index === i}
                  aria-controls={`panel-${i}`}
                  onClick={() => setIndex(i)}
                  className={`relative shrink-0 min-w-[110px] md:min-w-0 md:w-full h-[42px] px-4 md:px-0 md:pl-5 md:pr-4 text-[13px] font-mono whitespace-nowrap flex items-center justify-center md:justify-start border-b-2 md:border-b-0 border-l-0 md:border-l-2 transition-colors duration-200 ${
                    index === i
                      ? 'text-accent border-accent'
                      : 'text-ink-muted border-border-light hover:text-ink'
                  }`}
                >
                  {exp.company}
                  {index === i && (
                    <motion.span
                      layoutId="experience-active-indicator"
                      transition={{ duration: 0.25, ease: easing }}
                      className="absolute left-0 bottom-0 z-10 h-[2px] w-full bg-accent rounded md:left-0 md:bottom-auto md:top-0 md:h-full md:w-[2px]"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="flex-1 md:ml-42 min-w-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  role="tabpanel"
                  id={`panel-${index}`}
                  aria-labelledby={`tab-${index}`}
                  className="md:pt-2.5"
                >
                  <h3 className="text-[20px] md:text-[22px] font-medium text-ink leading-tight">
                    <span>{experiences[index].role}</span>
                    <span className="text-accent">
                      &nbsp;@&nbsp;
                      {experiences[index].url ? (
                        <a
                          href={experiences[index].url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:underline underline-offset-4"
                        >
                          {experiences[index].company}
                        </a>
                      ) : (
                        <span>{experiences[index].company}</span>
                      )}
                    </span>
                  </h3>

                  <p className="mt-1 mb-6 text-[13px] text-ink-muted font-mono">
                    {experiences[index].range}
                    {experiences[index].location ? ` · ${experiences[index].location}` : ''}
                  </p>

                  <ul className="list-none p-0 m-0">
                    <li className="relative pl-[30px] mb-3 text-[14px] text-ink-secondary leading-relaxed before:absolute before:left-0 before:top-0 before:text-accent before:content-['▹']">
                      {experiences[index].description}
                    </li>
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-5">
                    {experiences[index].technologies.map((tech) => (
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
