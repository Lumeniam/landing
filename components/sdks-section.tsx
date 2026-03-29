"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const SDKS = [
  {
    name: "NestJS",
    lang: "typescript",
    code: `import { LumeniamModule } from '@lumeniam/nestjs';

@Module({
  imports: [
    LumeniamModule.forRoot({
      projectId: 'my-api',
      autoTickets: true,
    }),
  ],
})
export class AppModule {}`,
  },
  {
    name: "React",
    lang: "typescript",
    code: `import { LumeniamProvider } from '@lumeniam/react';

export default function App() {
  return (
    <LumeniamProvider projectId="my-app">
      <YourApp />
    </LumeniamProvider>
  );
}`,
  },
  {
    name: "Next.js",
    lang: "typescript",
    code: `// next.config.ts
import { withLumeniam } from '@lumeniam/nextjs';

export default withLumeniam({
  projectId: 'my-nextjs-app',
  captureServerErrors: true,
});`,
  },
  {
    name: "Flutter",
    lang: "dart",
    code: `import 'package:lumeniam_flutter/lumeniam.dart';

void main() {
  Lumeniam.init(
    projectId: 'my-flutter-app',
    autoTickets: true,
  );
  runApp(const MyApp());
}`,
  },
];

export default function SdksSection() {
  return (
    <section id="sdks" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Monitor your apps.{" "}
            <span className="gradient-text">Agents fix the bugs.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Drop in an SDK. Errors become auto-generated Jira tickets. Agents
            investigate, propose fixes, and create PRs.
          </p>
        </motion.div>

        <div className="mt-6 flex justify-center">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            Error in your app <ArrowRight className="h-4 w-4" /> Lumeniam
            detects <ArrowRight className="h-4 w-4" /> Jira ticket created{" "}
            <ArrowRight className="h-4 w-4" /> Agent creates PR
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SDKS.map((sdk, i) => (
            <motion.div
              key={sdk.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card overflow-hidden"
            >
              <div className="flex items-center gap-2 border-b border-white/5 px-5 py-3">
                <span className="h-3 w-3 rounded-full bg-red-500/40" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/40" />
                <span className="h-3 w-3 rounded-full bg-green-500/40" />
                <span className="ml-2 text-sm font-medium text-slate-400">
                  @lumeniam/{sdk.name.toLowerCase()}
                </span>
              </div>
              <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-slate-300">
                <code>{sdk.code}</code>
              </pre>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
