import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'ping-nepal',
    description:
      'Full-stack mobile recharge and bill payment platform with real-time transaction processing, user accounts, and payment gateway integration.',
    tech: ['Laravel', 'React', 'MySQL', 'REST API', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    tag: 'full-stack',
  },
  {
    title: 'admin-dashboard',
    description:
      'Comprehensive admin panel with user management, analytics dashboards, role-based access control, real-time reporting, and data visualizations.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Chart.js', 'Socket.io'],
    github: 'https://github.com',
    live: 'https://example.com',
    tag: 'frontend',
  },
  {
    title: 'ecommerce-api',
    description:
      'Scalable e-commerce backend with product catalog, cart system, checkout flow, Stripe payments, order tracking, and inventory management.',
    tech: ['Laravel', 'MySQL', 'PHP', 'Stripe', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    tag: 'backend',
  },
  {
    title: 'realtime-chat',
    description:
      'Messaging platform with real-time communication, group chats, file sharing, typing indicators, read receipts, and end-to-end encryption.',
    tech: ['Node.js', 'React', 'MongoDB', 'Socket.io', 'WebRTC'],
    github: 'https://github.com',
    live: 'https://example.com',
    tag: 'full-stack',
  },
]

function ProjectCard({ project, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.06 * index }}
      className="group"
    >
      <div className="border border-border-light rounded-lg p-6 bg-surface hover:border-border transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className="text-[11px] text-ink-secondary font-mono">
            <span className="text-ink-muted">drwxr-xr-x</span>
            <span className="mx-2 text-ink-muted">|</span>
            <span className="text-[#58a6ff]">{project.tag}/</span>
          </span>
          <div className="flex items-center gap-1">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ink-muted hover:text-ink rounded-lg hover:bg-hover transition-all"
              title="Source Code"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-ink-muted hover:text-ink rounded-lg hover:bg-hover transition-all"
              title="Live Demo"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
            </a>
          </div>
        </div>

        <h3 className="text-[15px] font-semibold text-ink mb-2 font-mono group-hover:text-accent transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-[13px] text-ink-secondary leading-relaxed mb-5 flex-1 font-mono">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border-light">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 text-[11px] text-ink-muted bg-raised rounded font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="relative py-24 md:py-32 px-5 font-mono" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[12px] text-ink-secondary mb-2">
            <span className="text-[#58a6ff]">$</span>
            <span className="text-ink ml-2">ls -la projects/</span>
          </p>
          <h2 className="section-heading mb-3">selected work</h2>
          <p className="text-ink-secondary text-[14px] font-mono">
            <span className="text-ink-muted">#</span> Projects I&apos;ve built — from full-stack platforms to developer tools.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
