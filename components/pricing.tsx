"use client";

import { motion } from "framer-motion";
import {
  Check,
  Server,
  Users,
  Plug,
  Code,
  Palette,
  RefreshCw,
} from "lucide-react";

const INCLUDES = [
  { icon: Users, text: "Unlimited agents" },
  { icon: Plug, text: "All integrations (250+)" },
  { icon: Code, text: "All SDKs (NestJS, React, Next.js, Flutter)" },
  { icon: Palette, text: "Whitelabel (custom colors, logo)" },
  { icon: RefreshCw, text: "Lifetime updates" },
  { icon: Server, text: "Self-hosted — your data stays yours" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            One license. <span className="gradient-text">Everything included.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="glass-card glow mt-12 p-10 text-center"
        >
          <span className="text-sm font-medium tracking-wider text-[#818cf8]">
            ENTERPRISE LICENSE
          </span>
          <div className="mt-4 flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold md:text-6xl">$3,999</span>
            <span className="text-slate-400">/license</span>
          </div>
          <p className="mt-3 text-slate-400">
            One-time purchase. Installs on your server. Your data stays yours.
          </p>

          <div className="mx-auto mt-10 grid max-w-md gap-4 text-left">
            {INCLUDES.map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#6366f1]/10">
                  <Check className="h-4 w-4 text-[#6366f1]" />
                </div>
                <span className="text-sm text-slate-300">{item.text}</span>
              </div>
            ))}
          </div>

          <a
            href="#cta"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#6366f1] px-10 py-4 font-medium text-white transition-all hover:bg-[#818cf8] hover:shadow-lg hover:shadow-[#6366f1]/25"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
}
