import { Zap } from "lucide-react";

const LINKS = [
  { label: "Documentation", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "SDKs", href: "#sdks" },
  { label: "Pricing", href: "#pricing" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <Zap className="h-5 w-5 text-[#6366f1]" />
          <span className="font-bold text-white">Lumeniam</span>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-slate-500 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-slate-600">
          Built with NemoClaw/OpenClaw by NVIDIA
        </p>
      </div>
    </footer>
  );
}
