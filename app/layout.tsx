import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lumeniam - Your AI Team. Not Just an Assistant.",
  description:
    "Deploy a complete team of AI agents on your server. They code, review, secure, plan, and report — 24/7. Enterprise-grade AI agent management platform.",
  keywords: [
    "AI agents",
    "enterprise AI",
    "agent management",
    "CISO agent",
    "QA agent",
    "DevOps AI",
    "multi-agent platform",
  ],
  openGraph: {
    title: "Lumeniam - Your AI Team. Not Just an Assistant.",
    description:
      "Deploy a complete team of AI agents on your server. They code, review, secure, plan, and report — 24/7.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
