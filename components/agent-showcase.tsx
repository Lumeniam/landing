"use client";

import { motion } from "framer-motion";
import { Shield, Bug, BookOpen, Server } from "lucide-react";

const AGENTS = [
  {
    icon: Shield,
    name: "CISO Agent",
    role: "Security",
    color: "from-red-500/20 to-red-500/5",
    borderColor: "border-red-500/20",
    iconColor: "text-red-400",
    description:
      "Scans your repos for secrets, vulnerabilities, and misconfigs 24/7. Auto-generates security reports and compliance checks.",
    actions: ["Secret detection", "CVE scanning", "Compliance reports", "Access audits"],
  },
  {
    icon: Bug,
    name: "QA Agent",
    role: "Quality",
    color: "from-amber-500/20 to-amber-500/5",
    borderColor: "border-amber-500/20",
    iconColor: "text-amber-400",
    description:
      "Reviews every PR, writes tests, and catches bugs before production. Never misses a code review again.",
    actions: ["PR reviews", "Test generation", "Bug detection", "Coverage reports"],
  },
  {
    icon: BookOpen,
    name: "Knowledge Manager",
    role: "Documentation",
    color: "from-emerald-500/20 to-emerald-500/5",
    borderColor: "border-emerald-500/20",
    iconColor: "text-emerald-400",
    description:
      "Keeps your documentation alive and accurate. Auto-updates when code changes. Answers team questions instantly.",
    actions: ["Doc generation", "RAG answers", "Changelog updates", "Onboarding guides"],
  },
  {
    icon: Server,
    name: "DevOps Agent",
    role: "Operations",
    color: "from-blue-500/20 to-blue-500/5",
    borderColor: "border-blue-500/20",
    iconColor: "text-blue-400",
    description:
      "Monitors deployments, catches failures, auto-generates incident tickets. First responder to production issues.",
    actions: ["Deploy monitoring", "Incident tickets", "Log analysis", "Alert triage"],
  },
];

export default function AgentShowcase() {
  return (
    <section id="agents" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Meet your <span className="gradient-text">AI agents</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Each agent has a personality, tools, memory, and the ability to take
            real actions. They coordinate, never collide.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {AGENTS.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass-card overflow-hidden ${agent.borderColor} p-7`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} pointer-events-none`} />
              <div className="relative">
                <div className="mb-4 flex items-center gap-3">
                  <agent.icon className={`h-6 w-6 ${agent.iconColor}`} />
                  <div>
                    <h3 className="font-bold">{agent.name}</h3>
                    <span className="text-xs text-slate-500">{agent.role}</span>
                  </div>
                  <span className="ml-auto flex items-center gap-1.5 text-xs text-green-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" /> Active
                  </span>
                </div>
                <p className="mb-4 text-sm text-slate-400">{agent.description}</p>
                <div className="flex flex-wrap gap-2">
                  {agent.actions.map((action) => (
                    <span
                      key={action}
                      className="rounded-full border border-white/5 bg-white/5 px-3 py-1 text-xs text-slate-300"
                    >
                      {action}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
