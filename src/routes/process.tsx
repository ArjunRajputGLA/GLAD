import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — Northbeam" },
      {
        name: "description",
        content:
          "Our development workflow, from discovery call to post-launch support — predictable, transparent, and built to ship.",
      },
      { property: "og:title", content: "Process — Northbeam" },
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

      <section className="relative pt-40 pb-16">
        <HeroBackground />
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Process</div>
          <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight">
            How we <span className="text-gradient">ship.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground max-w-2xl">
            Eight steps from first call to a live, supported product. No mystery,
            no scope creep, no rebuilds.
          </p>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <ol className="relative border-l border-border ml-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.03}>
                <li className="relative pl-10 pb-12 last:pb-0">
                  <span className="absolute -left-[13px] top-1 size-6 rounded-full bg-brand-gradient grid place-items-center text-[11px] font-semibold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.duration}</div>
                  <h2 className="mt-1 text-2xl font-semibold">{s.title}</h2>
                  <p className="mt-2 text-muted-foreground">{s.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>

          <div className="mt-16 surface-card p-8 text-center">
            <h3 className="text-2xl font-semibold">Ready to start at step one?</h3>
            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-primary-foreground glow-brand"
            >
              Book a discovery call <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
