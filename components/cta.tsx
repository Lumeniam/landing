"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section id="cta" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card glow relative overflow-hidden p-12 text-center md:p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 to-[#a855f7]/5" />
          <div className="relative">
            <h2 className="text-3xl font-bold md:text-4xl">
              Ready to give your team{" "}
              <span className="gradient-text">superpowers?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-400">
              Deploy your AI agent team today. No coding needed, no data leaves
              your server, and setup takes less than 5 minutes.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your work email"
                className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-[#6366f1]/50"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full bg-[#6366f1] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#818cf8] hover:shadow-lg hover:shadow-[#6366f1]/25"
              >
                Request Access <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-4 text-sm text-slate-500">
              Or{" "}
              <a href="#" className="text-[#818cf8] underline transition-colors hover:text-white">
                install now
              </a>{" "}
              from the docs.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
