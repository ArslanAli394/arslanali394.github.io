"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-muted-light">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          {/* Left: Avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-3xl font-bold text-white shadow-lg">
                AA
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Arslan Ali</h3>
                <p className="text-muted">Web Developer & Cloud Engineer</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white p-4 text-center shadow-sm"
                >
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-muted leading-relaxed text-lg">
              {about.bio}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "AWS",
                "CI/CD",
                "Docker",
                "Azure DevOps",
                "Git",
                "Python",
                "SQL",
                "MongoDB",
                "Automation Scripts",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
