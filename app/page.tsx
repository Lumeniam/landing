import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import Features from "@/components/features";
import Comparison from "@/components/comparison";
import HowItWorks from "@/components/how-it-works";
import AgentShowcase from "@/components/agent-showcase";
import SdksSection from "@/components/sdks-section";
import Pricing from "@/components/pricing";
import Cta from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Features />
        <Comparison />
        <HowItWorks />
        <AgentShowcase />
        <SdksSection />
        <Pricing />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
