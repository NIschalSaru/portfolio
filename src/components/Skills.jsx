import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    title: 'Frontend',
    description: 'User interfaces & experiences',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML / CSS'],
  },
  {
    title: 'Backend',
    description: 'Server-side & APIs',
    skills: ['Laravel', 'Node.js', 'PHP', 'REST APIs', 'Express.js'],
  },
  {
    title: 'Database',
    description: 'Data modeling & storage',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'SQLite'],
  },
]

function SkillItem({ name, index, isInView }) {
  return (
    <motion.span
      initial={{ opacity: 0, x: -8 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.3, delay: 0.1 + index * 0.04 }}
      className="inline-block px-3 py-1.5 text-[13px] text-ink-secondary border border-border-light rounded-md bg-canvas/50 font-mono"
    >
      {name}
    </motion.span>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="relative py-24 md:py-32 px-5 bg-canvas font-mono" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[12px] text-ink-secondary mb-2">
            <span className="text-[#58a6ff]">$</span>
            <span className="text-ink ml-2">ls /skills/</span>
          </p>
          <h2 className="section-heading mb-3">technical stack</h2>
          <p className="text-ink-secondary text-[14px] font-mono">
            <span className="text-ink-muted">#</span> Technologies and tools I use daily.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="border border-border-light rounded-lg p-6 bg-surface"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-accent text-[11px] font-mono">[{cat.title}]</span>
              </div>
              <p className="text-[12px] text-ink-muted font-mono mb-5 ml-0">
                <span className="text-ink-muted">#</span> {cat.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, j) => (
                  <SkillItem
                    key={skill}
                    name={skill}
                    index={j}
                    isInView={isInView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
