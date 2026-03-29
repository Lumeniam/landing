"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Shield, Code, Eye, MessageSquare } from "lucide-react";

const AGENT_BUBBLES = [
  { icon: Shield, label: "CISO", x: "10%", y: "20%", delay: 0 },
  { icon: Code, label: "QA", x: "75%", y: "15%", delay: 0.2 },
  { icon: Eye, label: "DevOps", x: "85%", y: "55%", delay: 0.4 },
  { icon: MessageSquare, label: "PM", x: "5%", y: "60%", delay: 0.6 },
];

export default function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-6 inline-block rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-4 py-1.5 text-sm text-[#818cf8]">
            Enterprise AI Agent Platform
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
        >
          Your AI Team.{" "}
          <span className="gradient-text">Not Just an Assistant.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl"
        >
          Lumeniam deploys a complete team of AI agents on your server. They
          code, review, secure, plan, and report — 24/7. You stay in control.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#cta"
            className="flex items-center gap-2 rounded-full bg-[#6366f1] px-8 py-3.5 font-medium text-white transition-all hover:bg-[#818cf8] hover:shadow-lg hover:shadow-[#6366f1]/25"
          >
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 font-medium text-slate-300 transition-all hover:border-white/20 hover:bg-white/10"
          >
            <Play className="h-4 w-4" /> Watch Demo
          </a>
        </motion.div>

        {/* Virtual Office Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative mx-auto mt-16 max-w-4xl"
        >
          <div className="glass-card glow relative h-64 overflow-hidden p-8 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-[#a855f7]/5" />
            <p className="relative text-sm font-medium text-slate-500">
              Virtual Office — Live Agent Activity
            </p>

            {AGENT_BUBBLES.map((agent) => (
              <motion.div
                key={agent.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + agent.delay }}
                style={{ left: agent.x, top: agent.y }}
                className="absolute"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: agent.delay }}
                  className="flex items-center gap-2 rounded-xl border border-[#6366f1]/20 bg-[#0a0f1e]/90 px-3 py-2 backdrop-blur-sm"
                >
                  <agent.icon className="h-4 w-4 text-[#6366f1]" />
                  <span className="text-xs text-slate-300">{agent.label}</span>
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
