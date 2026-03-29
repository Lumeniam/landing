"use client";

import { motion } from "framer-motion";
import { Clock, ShieldAlert, Brain } from "lucide-react";

const PAIN_POINTS = [
  {
    icon: Clock,
    title: "Your team wastes hours on repetitive tasks",
    description:
      "Code reviews, ticket creation, documentation updates — your best engineers spend 40% of their time on work AI agents can handle.",
  },
  {
    icon: ShieldAlert,
    title: "Security vulnerabilities go unnoticed for weeks",
    description:
      "Without constant scanning, secrets leak, dependencies rot, and compliance gaps grow until an incident forces attention.",
  },
  {
    icon: Brain,
    title: "Knowledge is trapped in people's heads",
    description:
      "Onboarding takes months. Critical context lives in Slack threads and personal notes. When someone leaves, knowledge leaves too.",
  },
];

export default function Problem() {
  return (
    <section className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            AI assistants answer questions.{" "}
            <span className="gradient-text">Lumeniam agents DO things.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            The gap between asking an AI for help and having AI that actually
            works alongside your team is enormous. Lumeniam bridges it.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#6366f1]/10">
                <point.icon className="h-6 w-6 text-[#6366f1]" />
              </div>
              <h3 className="mb-3 text-lg font-semibold">{point.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
