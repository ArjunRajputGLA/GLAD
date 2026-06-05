import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/components/site/data";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Northbeam" },
      {
        name: "description",
        content:
          "Selected projects across SaaS, mobile, AI and business automation — built by Northbeam for startups and growing businesses.",
      },
      { property: "og:title", content: "Portfolio — Northbeam" },
      {
        property: "og:description",
        content: "Selected projects across SaaS, mobile, AI and business automation.",
      },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative pt-40 pb-16">
        <HeroBackground />
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Portfolio</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight">
              Selected <span className="text-gradient">work.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              A small sample of what we've shipped — from MVPs to AI products and
              internal platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-7xl px-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group block surface-card overflow-hidden hover:border-ring/60 transition"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: p.gradient }} />
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="text-4xl font-display font-semibold text-white/90">{p.name}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-xs text-muted-foreground">{p.category}</div>
                  <h3 className="mt-1 text-lg font-semibold">{p.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.short}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span key={t} className="text-[11px] rounded-full border border-border px-2 py-0.5 text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
