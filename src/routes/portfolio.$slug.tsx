import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { projects } from "@/components/site/data";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project: project as (typeof projects)[number] };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — Northbeam` },
          { name: "description", content: loaderData.project.short },
          { property: "og:title", content: `${loaderData.project.name} — Northbeam` },
          { property: "og:description", content: loaderData.project.short },
          { property: "og:type", content: "article" },
          { property: "og:url", content: `/portfolio/${loaderData.project.slug}` },
        ]
      : [],
    links: loaderData
      ? [{ rel: "canonical", href: `/portfolio/${loaderData.project.slug}` }]
      : [],
  }),
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="text-2xl font-semibold">Project not found</h1>
        <Link to="/portfolio" className="mt-4 inline-block text-muted-foreground hover:text-foreground">
          ← Back to portfolio
        </Link>
      </div>
    </div>
  ),
  component: ProjectPage,
});

function ProjectPage() {
  const { project: p } = Route.useLoaderData();

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-32 pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <Link to="/portfolio" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-3.5" /> All projects
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-end">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{p.category}</div>
              <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight">
                <span className="text-gradient">{p.name}</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">{p.short}</p>
            </div>
            <div className="surface-card p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Tech Stack</div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs rounded-full border border-border px-2.5 py-1 text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">Outcome</div>
              <p className="mt-2 text-sm">{p.outcome}</p>
            </div>
          </div>

          <div className="mt-12 relative aspect-[16/8] rounded-2xl overflow-hidden border border-border">
            <div className="absolute inset-0" style={{ background: p.gradient }} />
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-6xl md:text-8xl font-display font-semibold text-white/90">{p.name}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <Block title="The Challenge">{p.challenge}</Block>
          </Reveal>
          <Reveal delay={0.05}>
            <Block title="The Solution">{p.solution}</Block>
          </Reveal>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Key features</h2>
          </Reveal>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {p.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.04}>
                <div className="surface-card p-5 flex items-start gap-3">
                  <Check className="size-4 mt-0.5 text-foreground" />
                  <span className="text-sm">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Screenshots</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {[0, 1].map((i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-border">
                  <div className="absolute inset-0 opacity-90" style={{ background: p.gradient }} />
                  <div className="absolute inset-0 grid-bg opacity-30" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Have a similar project in mind?
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-primary-foreground glow-brand"
          >
            Book a free consultation <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="surface-card p-8">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}
