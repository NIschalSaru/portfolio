import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import pingNepalImg from '../assets/pingnepal.webp'
import woorihakkyoImg from '../assets/woorihakkyo.webp'
import yatraNepalImg from '../assets/yatranepal.webp'
import beeSuiteImg from '../assets/beesuite.webp'
import rppImg from '../assets/rpp.jpg'
import ndnbImg from '../assets/ndnb.jpg'
import akaruiImg from '../assets/akurai.jpg'

const projects = [
  {
    title: 'ping-nepal',
    description:
      'Online bill payment & mobile recharge platform enabling users to recharge NTC/Ncell numbers and pay utility bills (electricity, landline, internet, TV, insurance, water) instantly and securely. Real-time processing with seamless service integrations.',
    tech: ['Laravel', 'PHP', 'MySQL', 'REST API', 'Jquery'],
    github: 'https://github.com/NIschalSaru',
    live: 'https://www.pingnepal.com/',
    image: pingNepalImg,
    tag: 'Full-Stack',
  },
  {
    title: 'woori-hakkyo',
    description:
      'Backend API for the Woori Hakkyo education app — Korean language learning and EPS-TOPIK exam prep. Structured learning modules, full-length mock exams (UBT & CBT), offline exams, study reminders, and in-app purchases. 10,000+ downloads with strong premium conversion.',
    tech: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    github: 'https://github.com/NIschalSaru',
    live: '#',
    image: woorihakkyoImg,
    tag: 'Backend',
  },
  {
    title: 'yatra-nepal',
    description:
      'Travel booking platform for booking hotels, domestic/international flights, bus tickets, vehicle rentals, and curated travel packages across Nepal. Advanced search & filters and secure payment integration.',
    tech: ['Laravel', 'PHP', 'MySQL', 'REST API'],
    github: 'https://github.com/NIschalSaru',
    live: 'https://yatraanepal.com.np/',
    image: yatraNepalImg,
    tag: 'Full-Stack',
  },
  {
    title: 'bee-suite',
    description:
      'HR & attendance management system supporting biometric devices, QR codes, and manual input with real-time updates. Customizable attendance policies, shift/overtime/leave rules, detailed reporting, automated alerts, and payroll/HR integrations.',
    tech: ['Laravel', 'PHP', 'Jquery', 'MySQL'],
    github: 'https://github.com/NIschalSaru',
    live: 'https://beetech.beesuiteerp.com/',
    image: beeSuiteImg,
    tag: 'Backend',
  },
  {
    title: 'rpp-membership',
    description:
      'Membership management system for Rastriya Prajatantra Party supporting General (free) and Active (paid) memberships with online application, Khalti payment integration, and an admin verification panel for generating membership ID cards.',
    tech: ['Laravel', 'PHP', 'PostgreSQL', 'Jquery', 'Bootstrap'],
    github: 'https://github.com/NIschalSaru',
    live: 'https://rpp.org.np/',
    image: rppImg,
    tag: 'Backend',
  },
  {
    title: 'ndnb-portal',
    description:
      'Full-stack website and client portal for Nepal Designers & Builders (NDB), a Kathmandu-based architecture, interior design and construction firm. Features project showcases, service listings, real-time progress tracking, and a clean professional interface for clients to explore design-build solutions across Nepal.',
    tech: ['React', 'JavaScript', 'Node.js', 'CSS', 'PostgreSQL'],
    github: 'https://github.com/NIschalSaru',
    live: 'https://ndnb.com.np/',
    image: ndnbImg,
    tag: 'Full-Stack',
  },

  {
    title: 'akarui-shorai',
    description:
      'Modern educational consultancy website for Akarui Shorai, a Japanese language and study-abroad firm based in Kathmandu. Helps students explore study and work opportunities in Japan through language classes, visa guidance, documentation support, and destination showcases with a clean, engaging interface.',
    tech: ['React', 'JavaScript', 'Node.js', 'CSS', 'PostgreSQL'],
    github: 'https://github.com/NIschalSaru',
    live: 'https://akaruishorai.com/',   // replace with exact live URL if different
    image: akaruiImg,
    tag: 'Full-Stack',
  },
]

function ArrowIcon() {
  return (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
    </svg>
  )
}

function ProjectRow({ project, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const reversed = index % 2 === 1

  return (
    <div ref={ref} className="relative py-14 md:py-20 border-b border-border-light last:border-b-0">
      <div
        className={`flex flex-col ${
          reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center gap-10 lg:gap-16`}
      >
        {/* image */}
        <motion.a
          href={project.live && project.live !== '#' ? project.live : project.github}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="group relative block w-full lg:w-[58%] shrink-0"
        >
          {project.image ? (
            <div className="relative rounded-2xl overflow-hidden bg-raised border border-border-light">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500" />
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-surface border border-border-light flex items-center justify-center text-ink translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <ArrowIcon />
              </div>
            </div>
          ) : (
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-raised border border-border-light">
              <div className="w-full h-full flex items-center justify-center text-ink-muted text-sm">
                {project.title}
              </div>
            </div>
          )}
        </motion.a>

        {/* content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-[42%]"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[13px] font-mono text-ink-muted">{String(index + 1).padStart(2, '0')}</span>
            <span className="h-px flex-1 bg-border-light" />
            <span className="text-[11px] font-mono uppercase tracking-wider text-ink-secondary">
              {project.tag}
            </span>
          </div>

          <h3 className="text-2xl md:text-[28px] font-semibold text-ink tracking-tight mb-4">
            {project.title}
          </h3>

          <p className="text-[15px] leading-relaxed text-ink-secondary mb-6">
            {project.description}
          </p>

          <ul className="flex flex-wrap gap-x-3 gap-y-1.5 mb-7 text-[12px] font-mono text-ink-muted">
            {project.tech.map((t, i) => (
              <li key={t} className="flex items-center gap-3">
                {t}
                {i !== project.tech.length - 1 && <span className="w-1 h-1 rounded-full bg-border" />}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-6 text-[13px] font-medium">
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-ink hover:text-accent transition-colors"
              >
                View live
                <ArrowIcon />
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-ink-secondary hover:text-accent transition-colors"
            >
              Source
              <ArrowIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default function Projects() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="relative py-24 md:py-32 px-5 sm:px-8">
      <div className="max-w-[1180px] mx-auto">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-4"
        >
          <p className="text-[12px] font-mono uppercase tracking-[0.2em] text-accent mb-4">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-ink mb-4">
            Projects
          </h2>
          <p className="text-ink-secondary text-[15px] leading-relaxed">
            A collection of full-stack platforms and backend systems I&apos;ve designed and shipped —
            from payment infrastructure to education tools.
          </p>
        </motion.div>

        <div className="mt-6">
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
