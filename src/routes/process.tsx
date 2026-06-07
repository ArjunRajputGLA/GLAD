import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { motion } from "framer-motion";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Antigravity Labs" },
      {
        name: "description",
        content:
          "Our development workflow, from discovery call to post-launch support — predictable, transparent, and built to ship.",
      },
      { property: "og:title", content: "Process — Antigravity Labs" },
      {
        property: "og:description",
        content: "Our development workflow, from discovery call to post-launch support.",
      },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

const steps = [
  {
    title: "Discovery Call",
    body: "A 30-minute conversation to understand your idea, users and constraints. We'll tell you honestly whether we're the right team.",
    duration: "Day 0",
  },
  {
    title: "Requirements Analysis",
    body: "We translate your vision into a written brief — scope, success metrics, risks and unknowns surfaced early.",
    duration: "Week 1",
  },
  {
    title: "Planning",
    body: "Fixed-scope proposal with timeline, milestones, and a clear pricing structure. No surprises later.",
    duration: "Week 1",
  },
  {
    title: "UI/UX Design",
    body: "Wireframes evolve into a polished interactive prototype in Figma. You sign off before a line of code is written.",
    duration: "Weeks 2 – 3",
  },
  {
    title: "Development",
    body: "Weekly sprints, weekly demos. You have access to staging, a Slack channel, and the codebase from day one.",
    duration: "Weeks 3 – N",
  },
  {
    title: "Testing",
    body: "Automated tests, manual QA, accessibility checks and performance budgets — every release passes the same bar.",
    duration: "Continuous",
  },
  {
    title: "Deployment",
    body: "We ship to production behind feature flags, monitor closely, and roll out to your users with zero downtime.",
    duration: "Launch week",
  },
  {
    title: "Post-Launch Support",
    body: "Bug fixes, performance work, and new features on a retainer — or a clean handoff to your in-house team. Your call.",
    duration: "Ongoing",
  },
];

function ProcessPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 overflow-hidden">
        <HeroBackground />
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-block w-6 h-px bg-brand-gradient" />
              Process
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              How we <span className="text-gradient">ship.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Eight steps from first call to a live, supported product. No mystery,
              no scope creep, no rebuilds.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative pb-28">
        <div className="mx-auto max-w-3xl px-6">
          <ol className="relative border-l border-border ml-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.04}>
                <li className="relative pl-10 pb-14 last:pb-0">
                  <span className="absolute -left-[13px] top-1 size-7 rounded-full bg-brand-gradient grid place-items-center text-[11px] font-semibold text-primary-foreground shadow-lg shadow-[var(--brand)]/20">
                    {i + 1}
                  </span>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{s.duration}</div>
                  <h2 className="mt-1.5 text-2xl font-semibold tracking-tight">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          {/* CTA */}
          <Reveal delay={0.3}>
            <div className="mt-20 glass-card p-10 text-center noise-bg">
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold tracking-tight">Ready to start at step one?</h3>
                <Link
                  to="/contact"
                  className="mt-6 btn-primary inline-flex animate-pulse-glow"
                >
                  Book a discovery call <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
