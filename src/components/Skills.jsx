import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import laravel from "../assets/laravel.png";
import php from "../assets/php.png";
import node from "../assets/node.webp";
import javascript from "../assets/java-script.png";
import react from "../assets/react.webp";
import express from "../assets/express.png";
import restApi from "../assets/rest.webp";
import postman from "../assets/postman.webp";
import github from "../assets/github.png";
import mysql from "../assets/mysql.png";
import postgresql from "../assets/psql.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";

const tailwindPath =
  "M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z";

const gitPath =
  "M12.24 0.65c-0.46-0.46-1.21-0.46-1.67 0L8.38 2.85l2.1 2.1c0.49-0.17 1.05-0.06 1.44 0.33 0.4 0.4 0.5 0.97 0.32 1.46l2.03 2.03c0.49-0.18 1.05-0.06 1.44 0.33 0.54 0.54 0.54 1.41 0 1.95-0.54 0.54-1.41 0.54-1.95 0-0.4-0.4-0.51-0.96-0.34-1.45l-2.02-2.02v5.32c0.14 0.08 0.27 0.18 0.39 0.29 0.54 0.54 0.54 1.41 0 1.95s-1.41 0.54-1.95 0c-0.54-0.54-0.54-1.41 0-1.95 0.14-0.14 0.3-0.24 0.47-0.31V8.41c-0.17-0.07-0.33-0.17-0.47-0.31-0.4-0.4-0.51-0.96-0.34-1.45L6.7 4.61 0.65 10.66c-0.46 0.46-0.46 1.21 0 1.67l11.94 11.94c0.46 0.46 1.21 0.46 1.67 0l11.09-11.09c0.46-0.46 0.46-1.21 0-1.67L12.24 0.65z";

const skillCategories = [
  {
    title: "Backend",
    description: "Server-side & APIs",
    skills: [
      { name: "Laravel", img: laravel },
      { name: "PHP", img: php },
      { name: "Node.js", img: node },
      { name: "Express.js", img: express },
      { name: "REST API", img: restApi },
    ],
  },
  {
    title: "Frontend",
    description: "User interfaces & experiences",
    skills: [
      { name: "React.js", img: react },
      { name: "JavaScript", img: javascript },
      { name: "HTML", img: html },
      { name: "CSS", img: css },
      { name: "Bootstrap", img: bootstrap },
      { name: "Tailwind CSS", path: tailwindPath },
    ],
  },
  {
    title: "Database",
    description: "Data modeling & storage",
    skills: [
      { name: "MySQL", img: mysql },
      { name: "PostgreSQL", img: postgresql },
    ],
  },
  {
    title: "Tools",
    description: "APIs & developer tooling",
    skills: [
      { name: "Postman", img: postman },
      { name: "Git", path: gitPath },
      { name: "GitHub", img: github },
    ],
  },
];

function TechTile({ skill, index, isInView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay: 0.08 + index * 0.05 }}
      className="flex flex-col items-center gap-2"
    >
      <div className="w-16 h-16 flex items-center justify-center rounded-lg border border-border-light bg-canvas/50">
        {skill.img ? (
          <img
            src={skill.img}
            alt={skill.name}
            className="w-10 h-10 object-contain"
          />
        ) : (
          <svg
            className="w-10 h-10 text-ink"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d={skill.path} />
          </svg>
        )}
      </div>
      <span className="text-[12px] text-ink-secondary font-mono text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 px-5 bg-canvas font-mono"
      ref={ref}
    >
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
            <span className="text-ink-muted">#</span> Technologies and tools I
            use daily.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.08 * i }}
              className="border border-border-light rounded-lg p-6 bg-surface"
            >
              <div className="flex items-center gap-3 mb-1">
                <span className="text-accent text-[11px] font-mono">
                  [{cat.title}]
                </span>
              </div>
              <p className="text-[12px] text-ink-muted font-mono mb-6">
                <span className="text-ink-muted">#</span> {cat.description}
              </p>

              <div className="grid grid-cols-3 gap-5">
                {cat.skills.map((skill, j) => (
                  <TechTile
                    key={skill.name}
                    skill={skill}
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
  );
}
