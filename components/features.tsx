"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Users,
  Workflow,
  BookOpen,
  Layers,
  Cpu,
} from "lucide-react";

const FEATURES = [
  {
    icon: Monitor,
    title: "Virtual Office",
    description: "See your agents work in real-time. Every action, every decision — fully observable.",
  },
  {
    icon: Users,
    title: "Agent Coordination",
    description: "Agents communicate, delegate, and never collide. Locking, blackboard, and supervisor patterns built in.",
  },
  {
    icon: Workflow,
    title: "N8N-Style Workflows",
    description: "Build automations visually. Drag, drop, connect — no code required for complex agent pipelines.",
  },
  {
    icon: BookOpen,
    title: "Knowledge Base + RAG",
    description: "Agents learn your company. Auto-ingestion from docs, repos, and web scraping during onboarding.",
  },
  {
    icon: Layers,
    title: "20+ Industry Skills",
    description: "Code review, QA testing, security scanning, compliance checks, incident response, and more.",
  },
  {
    icon: Cpu,
    title: "Multi-LLM Support",
    description: "Claude, GPT, Grok, Gemini, or your own Ollama models. Switch anytime, per agent.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Everything your <span className="gradient-text">AI team</span> needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A fully-equipped platform, not a framework. Install and go.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card group p-7 transition-all hover:border-[#6366f1]/30"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#6366f1]/10 transition-colors group-hover:bg-[#6366f1]/20">
                <feature.icon className="h-5 w-5 text-[#6366f1]" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
