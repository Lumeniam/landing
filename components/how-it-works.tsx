"use client";

import { motion } from "framer-motion";
import { Terminal, Settings, Plug, Rocket } from "lucide-react";

const STEPS = [
  {
    icon: Terminal,
    number: "01",
    title: "Install",
    description: "One command. Two minutes. Runs on your server with Docker — your data never leaves.",
    code: "npx lumeniam init",
  },
  {
    icon: Settings,
    number: "02",
    title: "Configure",
    description: "Onboarding wizard + Lumi AI assistant walk you through setup. Pick your industry template.",
    code: null,
  },
  {
    icon: Plug,
    number: "03",
    title: "Connect",
    description: "Link GitHub, Jira, Slack, and 250+ tools in one click via Nango. Agents get to work immediately.",
    code: null,
  },
  {
    icon: Rocket,
    number: "04",
    title: "Work",
    description: "Agents start reviewing PRs, scanning for vulnerabilities, updating docs, and filing tickets autonomously.",
    code: null,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Up and running in{" "}
            <span className="gradient-text">minutes, not months</span>
          </h2>
        </motion.div>

        <div className="relative space-y-12">
          {/* Connecting line */}
          <div className="absolute left-[39px] top-0 hidden h-full w-px bg-gradient-to-b from-[#6366f1]/40 via-[#6366f1]/20 to-transparent md:block" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex gap-6"
            >
              <div className="relative z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-[#6366f1]/20 bg-[#0a0f1e]">
                <step.icon className="h-8 w-8 text-[#6366f1]" />
              </div>
              <div className="flex-1 pt-2">
                <span className="text-xs font-bold tracking-widest text-[#6366f1]">
                  STEP {step.number}
                </span>
                <h3 className="mt-1 text-xl font-bold">{step.title}</h3>
                <p className="mt-2 text-slate-400">{step.description}</p>
                {step.code && (
                  <div className="mt-3 inline-block rounded-lg border border-white/5 bg-black/40 px-4 py-2 font-mono text-sm text-[#818cf8]">
                    {step.code}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
