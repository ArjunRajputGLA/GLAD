import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { services } from "@/components/site/data";
import { motion } from "framer-motion";
import {
  Rocket,
  Layout,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Antigravity Labs" },
      {
        name: "description",
        content:
          "MVP development, web and mobile applications, AI solutions and business automation — built by a senior team.",
      },
      { property: "og:title", content: "Services — Antigravity Labs" },
      {
        property: "og:description",
        content:
          "MVP development, web and mobile applications, AI solutions and business automation — built by a senior team.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const serviceIcons: Record<string, typeof Rocket> = {
  mvp: Rocket,
  web: Layout,
  mobile: Smartphone,
  ai: Sparkles,
  automation: Workflow,
};

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-16 md:pt-44 overflow-hidden">
        <HeroBackground />
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-block w-6 h-px bg-brand-gradient" />
              Services
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              Built for <span className="text-gradient">ambitious teams.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Five focused services — each delivered by senior engineers, with clear
              timelines, fixed scope, and code you fully own.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="relative pb-28">
        <div className="mx-auto max-w-7xl px-6 space-y-8">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.slug];
            return (
              <Reveal key={s.slug} delay={i * 0.04}>
                <article className="surface-card interactive-card shine-on-hover p-8 md:p-12 grid gap-10 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-3 mb-3">
                      {Icon && (
                        <div className="size-10 rounded-lg bg-brand-gradient grid place-items-center text-primary-foreground shadow-lg shadow-[var(--brand)]/20">
                          <Icon className="size-4" />
                        </div>
                      )}
                      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                        {String(i + 1).padStart(2, "0")} — {s.slug.toUpperCase()}
                      </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{s.title}</h2>
                    <p className="mt-4 text-muted-foreground max-w-2xl leading-relaxed">{s.description}</p>

                    <h3 className="mt-8 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Benefits
                    </h3>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5 text-sm">
                          <div className="size-5 rounded-full bg-brand-gradient grid place-items-center mt-0.5 shrink-0">
                            <Check className="size-3 text-primary-foreground" />
                          </div>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-7">
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Technologies
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.tech.map((t) => (
                          <span key={t} className="text-xs rounded-full border border-border px-3 py-1 text-muted-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Estimated timeline
                      </h3>
                      <p className="mt-2 text-xl font-semibold text-gradient">{s.timeline}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="btn-primary text-sm"
                    >
                      Start a project <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
