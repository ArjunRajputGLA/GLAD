import { createFileRoute } from "@tanstack/react-router";
import { Lightbulb, ShieldCheck, Eye, Sparkles } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Northbeam" },
      {
        name: "description",
        content:
          "We build products, not just software. A senior team of engineers helping startups and businesses bring ideas to life.",
      },
      { property: "og:title", content: "About — Northbeam" },
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
      <section className="relative pt-40 pb-20">
        <HeroBackground />
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">About</div>
          <h1 className="mt-3 text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
            We build <span className="text-gradient">products</span>,<br />not just software.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Northbeam is a small studio of three senior engineers. We help startups
            and growing businesses turn ideas into shipped products — web, mobile
            and AI — with the rigor of a great in-house team.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-5xl px-6 grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">Our story</h2>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We started Northbeam because we kept seeing the same thing: founders
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

      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Values.</h2>
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="surface-card p-6 h-full">
                  <v.icon className="size-5" />
                  <h3 className="mt-4 font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">The team.</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.05}>
                <div className="surface-card p-6">
                  <div className="aspect-square rounded-xl bg-brand-gradient mb-5 relative overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-30" />
                    <div className="absolute inset-0 grid place-items-center text-5xl font-display font-semibold text-white/90">
                      {m.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                  <div className="text-xs text-muted-foreground">{m.role}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
