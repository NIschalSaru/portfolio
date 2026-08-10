import { motion } from "framer-motion";
import myself from "../assets/profile.png";
import resume from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center px-5 pt-16 overflow-hidden hero-glitch"
    >
      {/* <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-border-light/40 rounded-full blur-[100px]" />
      </div> */}

      <div className="relative w-full max-w-[1100px] mx-auto">
        <div className="hidden sm:flex absolute right-0 top-0 h-full w-[55%] pointer-events-none overflow-hidden z-0 items-center justify-center">
          <motion.img
            src={myself}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full object-contain object-right"
            style={{ mixBlendMode: "luminosity", filter: "grayscale(100%)" }}
          />
          <div className="absolute right-0 top-0 h-full aspect-[3456/3340] pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-canvas from-0% via-canvas/60 via-55% to-transparent to-100%" />
            <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-canvas from-0% via-canvas/60 via-55% to-transparent to-100%" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative z-10"
        >
          <p className="text-accent font-mono text-[14px] mb-4">
            Hi, my name is
          </p>
          <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold text-ink leading-[1.1] tracking-tight">
            Nischal Saru
          </h1>
          <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-ink-secondary leading-[1.15] mt-2">
            Full-Stack Developer
          </h2>
          <p className="text-[15px] sm:text-[16px] text-ink-secondary leading-relaxed max-w-xl mt-5">
            I build production-grade web applications with clean, maintainable
            code. Specializing in Laravel, PHP, Node.js, and RESTful API design
            to power secure, high-performance platforms.
          </p>
        </motion.div>

        <div className="flex sm:hidden relative w-full mt-10 rounded-2xl overflow-hidden">
          <motion.img
            src={myself}
            alt=""
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="w-full h-[300px] object-cover object-center"
            style={{ mixBlendMode: "luminosity", filter: "grayscale(100%)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/0 to-transparent" />
          {/* <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-canvas via-canvas/0 to-transparent" /> */}
          {/* <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-canvas via-canvas/0 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-canvas via-canvas/0 to-transparent" /> */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="relative z-10 flex flex-wrap justify-center sm:justify-start gap-3 mt-8"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white font-semibold text-sm rounded-full transition-all duration-200 shadow-sm hover:bg-accent-hover hover:shadow-md"
          >
            View Projects
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </a>
          <a
            href={resume}
            download
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface text-ink font-semibold text-sm rounded-full border border-border-light shadow-sm hover:shadow-md hover:border-border transition-all duration-200"
          >
            <svg
              className="w-4 h-4 text-ink-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface text-ink font-semibold text-sm rounded-full border border-border-light shadow-sm hover:shadow-md hover:border-border transition-all duration-200"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
