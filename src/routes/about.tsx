import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, ShieldCheck, Eye, Sparkles } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Antigravity Labs" },
      {
        name: "description",
        content:
          "We build products, not just software. A senior team of engineers helping startups and businesses bring ideas to life.",
      },
      { property: "og:title", content: "About — Antigravity Labs" },
      {
        property: "og:description",
        content:
          "We build products, not just software. A senior team of engineers helping startups and businesses bring ideas to life.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Lightbulb, title: "Innovation", body: "We pick technology that compounds — modern stacks, AI where it matters." },
  { icon: ShieldCheck, title: "Reliability", body: "We ship on time and stand behind what we build." },
  { icon: Eye, title: "Transparency", body: "You see the work as it happens. No black boxes, ever." },
  { icon: Sparkles, title: "Quality", body: "Type-safe, tested, observable. Boring code so your product can be exciting." },
];

const team = [
  { name: "Aarav Mehta", role: "Co-founder · Product Engineer", bio: "Full-stack engineer with 8+ years building SaaS and AI products." },
  { name: "Sofia Rivera", role: "Co-founder · Mobile Lead", bio: "Flutter & iOS specialist. Shipped 20+ apps across fintech and edtech." },
  { name: "Daniel Park", role: "Co-founder · AI & Infrastructure", bio: "Designs scalable systems and LLM-powered features that just work." },
];

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 md:pt-44 overflow-hidden">
        <HeroBackground />
        <div className="mx-auto max-w-5xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-block w-6 h-px bg-brand-gradient" />
              About
            </div>
            <h1 className="mt-4 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl leading-[1.05]">
              We build <span className="text-gradient">products</span>,<br />not just software.
            </h1>
            <p className="mt-7 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Antigravity Labs is a small studio of three senior engineers. We help startups
              and growing businesses turn ideas into shipped products — web, mobile
              and AI — with the rigor of a great in-house team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="relative py-20 section-divider">
        <div className="mx-auto max-w-5xl px-6 grid gap-12 md:grid-cols-2 items-start">
          <Reveal direction="left">
            <h2 className="text-3xl font-semibold tracking-tight">Our story</h2>
          </Reveal>
          <Reveal direction="right" delay={0.08}>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We started Antigravity Labs because we kept seeing the same thing: founders
                spending months on agencies that overpromised, underdelivered, and
                left them with code they couldn't maintain.
              </p>
              <p>
                So we built something different — a tiny, senior team that works on
                a small number of projects at a time, ships every week, and treats
                your product like our own.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 section-divider noise-bg">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading eyebrow="What drives us" title="Values." />
          </Reveal>
          <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="surface-card interactive-card p-7 h-full">
                  <div className="size-10 rounded-lg bg-surface-2 grid place-items-center">
                    <v.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-semibold tracking-tight">{v.title}</h3>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Team */}
      <section className="relative py-24 section-divider">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <SectionHeading eyebrow="The people" title="The team." />
          </Reveal>
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.08}>
            {team.map((m) => (
              <RevealItem key={m.name} direction="scale">
                <div className="surface-card interactive-card overflow-hidden">
                  <div className="aspect-square bg-brand-gradient relative overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-25" />
                    <div className="absolute inset-0 grid place-items-center text-5xl font-display font-semibold text-white/90 drop-shadow-lg">
                      {m.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold tracking-tight">{m.name}</h3>
                    <div className="text-xs text-muted-foreground mt-1">{m.role}</div>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Footer />
    </div>
  );
}
