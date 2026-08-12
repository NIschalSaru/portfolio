import { motion } from "framer-motion";
import myself from "../assets/profile.png";
import resume from "../assets/resume.pdf";
import Effect from "./Effect.jsx";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] flex items-center px-5 pt-16 overflow-hidden"
    >
      <Effect />
      <div className="relative w-full max-w-[1100px] mx-auto">
        {/* Desktop profile image */}
        <div className="hidden sm:flex absolute right-0 top-0 h-full w-[55%] pointer-events-none overflow-hidden z-0 items-center justify-center">
          <motion.img
            src={myself}
            alt=""
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 1.4, ease: "easeOut" },
              scale: { duration: 1.6, ease: [0.22, 1, 0.36, 1] },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="w-full h-full object-contain object-right"
            style={{
              mixBlendMode: "luminosity",
              filter: "grayscale(100%)",
            }}
          />

          {/* Soft edge fades */}
          <div className="absolute right-0 top-0 h-full aspect-[3456/3340] pointer-events-none">
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-canvas from-0% via-canvas/60 via-55% to-transparent to-100%" />
            <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-canvas from-0% via-canvas/60 via-55% to-transparent to-100%" />
          </div>
        </div>

        {/* Text content */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.p
            variants={item}
            className="text-accent font-mono text-[14px] mb-4"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            variants={item}
            className="text-[36px] sm:text-[44px] md:text-[52px] font-bold text-ink leading-[1.1] tracking-tight"
          >
            Nischal Saru
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-ink-secondary leading-[1.15] mt-2"
          >
            Software Developer
          </motion.h2>

          <motion.p
            variants={item}
            className="text-[15px] sm:text-[16px] text-ink-secondary leading-relaxed max-w-xl mt-5"
          >
            I build production-grade web applications with clean, maintainable
            code. Specializing in Laravel, PHP, Node.js, and RESTful API design
            to power secure, high-performance platforms.
          </motion.p>
        </motion.div>

        {/* Mobile image */}
        <div className="flex sm:hidden relative w-full mt-10 rounded-2xl overflow-hidden">
          <motion.img
            src={myself}
            alt=""
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
            className="w-full h-[300px] object-cover object-center"
            style={{
              mixBlendMode: "luminosity",
              filter: "grayscale(100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-canvas via-canvas/0 to-transparent" />
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 flex flex-wrap justify-center sm:justify-start gap-3 mt-8"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-accent text-white font-semibold text-sm rounded-full transition-all duration-300 shadow-sm hover:bg-accent-hover hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
          >
            View Projects
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
            className="group inline-flex items-center gap-2 px-6 py-3.5 bg-surface text-ink font-semibold text-sm rounded-full border border-border-light shadow-sm hover:shadow-md hover:border-border hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            <svg
              className="w-4 h-4 text-ink-muted transition-transform duration-300 group-hover:translate-y-0.5"
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
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-surface text-ink font-semibold text-sm rounded-full border border-border-light shadow-sm hover:shadow-md hover:border-border hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
