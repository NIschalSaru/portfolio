import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/NIschalSaru',
    icon: (
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/nischal-saru-324454282/',
    icon: (
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/nischal0525/',
    icon: (
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://wa.me/9779818750424',
    icon: (
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    ),
  },
  {
    name: 'Email',
    href: 'mailto:nischalsaru.official@gmail.com',
    icon: (
      <>
        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
      </>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          year: new Date().getFullYear(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      setSent(true)
    } catch {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="relative py-16 md:py-24 px-5 font-mono" ref={ref}>
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[12px] text-ink-secondary mb-2">
            <span className="text-[#58a6ff]">$</span>
            <span className="text-ink ml-2">mail --to nischal</span>
          </p>
          <h2 className="section-heading mb-3">let&apos;s work together</h2>
          <p className="text-ink-secondary text-[14px] font-mono">
            <span className="text-ink-muted">#</span> Have a project or want to connect? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-raised text-accent rounded-lg flex-shrink-0 border border-border-light">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] text-ink font-mono font-medium">
                    <span className="text-[#15803d]">EMAIL</span>
                  </p>
                  <p className="text-[13px] text-ink-secondary font-mono mt-0.5">nischalsaru.official@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-raised text-accent rounded-lg flex-shrink-0 border border-border-light">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[13px] text-ink font-mono font-medium">
                    <span className="text-[#15803d]">LOCATION</span>
                  </p>
                  <p className="text-[13px] text-ink-secondary font-mono mt-0.5">Kathmandu, Nepal</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-[11px] text-ink-muted font-mono mb-3">
                <span className="text-ink-muted">#</span> social links
              </p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 bg-surface border border-border-light rounded-lg text-ink-muted hover:text-ink hover:border-border transition-all duration-200"
                    title={social.name}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-border-light rounded-lg p-6 bg-surface flex flex-col items-center justify-center text-center min-h-[400px]"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-ink mb-3">Message sent!</h3>
              <p className="text-[14px] text-ink-secondary leading-relaxed max-w-sm mb-8">
                Thank you for reaching out. I&apos;ve received your message and will get back to you as soon as possible.
              </p>
              <button
                onClick={() => {
                  setSent(false)
                  setFormData({ name: '', email: '', message: '' })
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 text-accent rounded-lg hover:bg-accent/20 transition-all duration-200 font-mono"
              >
                send another message
              </button>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, x: 24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="border border-border-light rounded-lg p-6 bg-surface"
            >
            <div className="mb-5">
              <label className="block text-[13px] text-ink-secondary font-mono mb-2">
                <span className="text-[#15803d]">Name: </span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-canvas border border-border-light rounded-lg text-ink placeholder-ink-faint focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all text-[14px] font-mono"
                placeholder="your name..."
              />
            </div>
            <div className="mb-5">
              <label className="block text-[13px] text-ink-secondary font-mono mb-2">
                <span className="text-[#15803d]">Email: </span>
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-canvas border border-border-light rounded-lg text-ink placeholder-ink-faint focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all text-[14px] font-mono"
                placeholder="your email..."
              />
            </div>
            <div className="mb-5">
              <label className="block text-[13px] text-ink-secondary font-mono mb-2">
                <span className="text-[#15803d]">Message: </span>
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-canvas border border-border-light rounded-lg text-ink placeholder-ink-faint focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/30 transition-all text-[14px] font-mono resize-none"
                placeholder="your message..."
              />
            </div>
            <button
              type="submit"
              disabled={isSending}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent/10 border border-accent/30 text-accent rounded-lg hover:bg-accent/20 transition-all duration-200 font-mono disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>
              {isSending ? 'sending...' : 'send message'}
            </button>
            {status.message && (
              <p
                className={`mt-4 text-[13px] font-mono ${
                  status.type === 'success' ? 'text-[#15803d]' : 'text-red-400'
                }`}
              >
                {status.message}
              </p>
            )}
            </motion.form>
          )}
        </div>
      </div>
    </section>
  )
}
