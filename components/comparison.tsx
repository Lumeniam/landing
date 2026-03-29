"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

interface Row {
  feature: string;
  chatgpt: "yes" | "no" | "limited";
  crewai: "yes" | "no" | "diy";
  lumeniam: string;
}

const ROWS: Row[] = [
  { feature: "Ready to use", chatgpt: "yes", crewai: "no", lumeniam: "Yes" },
  { feature: "Multi-agent team", chatgpt: "no", crewai: "diy", lumeniam: "Pre-configured" },
  { feature: "Visual management", chatgpt: "no", crewai: "no", lumeniam: "Virtual office" },
  { feature: "Tool integration", chatgpt: "limited", crewai: "diy", lumeniam: "250+ via Nango" },
  { feature: "Your server", chatgpt: "no", crewai: "diy", lumeniam: "One-command install" },
  { feature: "Security agent", chatgpt: "no", crewai: "no", lumeniam: "CISO built-in" },
  { feature: "Log monitoring", chatgpt: "no", crewai: "no", lumeniam: "SDKs + auto-tickets" },
  { feature: "Industry templates", chatgpt: "no", crewai: "no", lumeniam: "5 industries" },
];

function CellIcon({ value }: { value: string }) {
  if (value === "yes") return <Check className="mx-auto h-5 w-5 text-green-400" />;
  if (value === "no") return <X className="mx-auto h-5 w-5 text-red-400/60" />;
  if (value === "limited" || value === "diy")
    return <Minus className="mx-auto h-5 w-5 text-yellow-400/60" />;
  return <span className="text-sm font-medium text-[#818cf8]">{value}</span>;
}

export default function Comparison() {
  return (
    <section id="comparison" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Why Not Just Use <span className="gradient-text">ChatGPT?</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="px-6 py-4 text-left font-medium text-slate-400">Feature</th>
                  <th className="px-6 py-4 text-center font-medium text-slate-400">ChatGPT / Claude</th>
                  <th className="px-6 py-4 text-center font-medium text-slate-400">Crew.ai / LangChain</th>
                  <th className="px-6 py-4 text-center font-medium text-[#818cf8]">Lumeniam</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={row.feature} className={i < ROWS.length - 1 ? "border-b border-white/5" : ""}>
                    <td className="px-6 py-4 font-medium">{row.feature}</td>
                    <td className="px-6 py-4 text-center"><CellIcon value={row.chatgpt} /></td>
                    <td className="px-6 py-4 text-center"><CellIcon value={row.crewai} /></td>
                    <td className="px-6 py-4 text-center"><CellIcon value={row.lumeniam} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
