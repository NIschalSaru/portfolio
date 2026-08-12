import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Line = ({ children, delay, className = "" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay, duration: 0.3 }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      className="relative pt-10 md:pt-14 pb-16 md:pb-24 px-5 font-mono"
      ref={ref}
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <p className="text-[12px] text-ink-secondary mb-2">
            <span className="text-[#58a6ff]">$</span>
            <span className="text-ink ml-2">cat about.txt</span>
          </p>
          <h2 className="section-heading">about me</h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5"
          >
            <Line delay={0.3}>
              <p className="text-[14px] text-ink-secondary leading-[1.8]">
                <span className="text-accent">
                  I&apos;m a results-driven software developer based in Nepal
                  with hands-on experience designing and developing web
                  applications and robust backend systems.
                </span>{" "}
                Proficient in Laravel, PHP, and modern JavaScript technologies
                including React.js and Node.js.
              </p>
            </Line>
            <Line delay={0.6}>
              <p className="text-[14px] text-ink-secondary leading-[1.8] mt-5">
                With strong expertise in RESTful API design, database
                management, and building secure, high-performance solutions —{" "}
                <span className="text-ink">
                  I&apos;ve shipped production platforms across travel booking,
                  education, utility payment, and HR/attendance.
                </span>{" "}
                I&apos;m committed to writing clean, maintainable code and
                delivering products used by thousands.
              </p>
            </Line>
            <Line delay={0.9}>
              <p className="text-[14px] text-ink-secondary leading-[1.8] mt-5">
                <span className="text-warm">
                  I believe great software is built at the intersection of
                  technical excellence and genuine empathy for users.
                </span>{" "}
                When I&apos;m not coding, I&apos;m exploring new technologies
                and continuously improving my skills to deliver impactful
                software products.
              </p>
            </Line>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
