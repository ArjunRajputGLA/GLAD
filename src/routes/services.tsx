import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal } from "@/components/site/Reveal";
import { services } from "@/components/site/data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Northbeam" },
      {
        name: "description",
        content:
          "MVP development, web and mobile applications, AI solutions and business automation — built by a senior team.",
      },
      { property: "og:title", content: "Services — Northbeam" },
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

function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative pt-40 pb-16">
        <HeroBackground />
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Services</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight">
              Built for <span className="text-gradient">ambitious teams.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              Five focused services — each delivered by senior engineers, with clear
              timelines, fixed scope, and code you fully own.
            </p>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6 space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.03}>
              <article className="surface-card p-8 md:p-10 grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} — {s.slug.toUpperCase()}
                  </div>
                  <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight">{s.title}</h2>
                  <p className="mt-4 text-muted-foreground max-w-2xl">{s.description}</p>

                  <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    Benefits
                  </h3>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm">
                        <Check className="size-4 mt-0.5 text-foreground" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Technologies
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {s.tech.map((t) => (
                        <span key={t} className="text-xs rounded-full border border-border px-2.5 py-1 text-muted-foreground">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Estimated timeline
                    </h3>
                    <p className="mt-2 text-lg font-medium text-gradient">{s.timeline}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-95"
                  >
                    Start a project <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
