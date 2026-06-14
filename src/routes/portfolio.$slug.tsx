import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { projects } from "@/components/site/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/portfolio/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project: project as (typeof projects)[number] };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — GLAD studio` },
          { name: "description", content: loaderData.project.short },
          { property: "og:title", content: `${loaderData.project.name} — GLAD studio` },
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
        <Link to="/portfolio" className="mt-4 inline-block text-muted-foreground hover:text-foreground transition-colors">
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

      {/* Header section */}
      <section className="relative pt-32 pb-12">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group">
              <ArrowLeft className="size-3.5 group-hover:-translate-x-0.5 transition-transform" /> All projects
            </Link>
          </motion.div>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-end">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                <span className="inline-block w-6 h-px bg-brand-gradient" />
                {p.category}
              </div>
              <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight">
                <span className="text-gradient">{p.name}</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl leading-relaxed">{p.short}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6"
            >
              <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">Tech Stack</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t: string) => (
                  <span key={t} className="text-xs rounded-full border border-border px-3 py-1 text-muted-foreground">{t}</span>
                ))}
              </div>
              <div className="mt-6 text-xs uppercase tracking-wider text-muted-foreground font-medium">Outcome</div>
              <p className="mt-2 text-sm font-medium">{p.outcome}</p>
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-14 relative aspect-[16/8] rounded-2xl overflow-hidden border border-border shadow-2xl"
          >
            {(p as any).images && (p as any).images.length > 0 ? (
              <ImageCarousel images={(p as any).images} name={p.name} />
            ) : (
              <>
                <div className="absolute inset-0" style={{ background: p.gradient }} />
                <div className="absolute inset-0 grid-bg opacity-25" />
              </>
            )}
          </motion.div>
        </div>
      </section>

      {/* Challenge / Solution */}
      <section className="relative py-20 section-divider">
        <div className="mx-auto max-w-6xl px-6 grid gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <Block title="The Challenge">{p.challenge}</Block>
          </Reveal>
          <Reveal direction="right" delay={0.08}>
            <Block title="The Solution">{p.solution}</Block>
          </Reveal>
        </div>
      </section>

      {/* Features */}
      <section className="relative py-20 section-divider">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Key features</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-4 md:grid-cols-2" stagger={0.06}>
            {p.features.map((f: string) => (
              <RevealItem key={f} direction="scale">
                <div className="surface-card interactive-card p-6 flex items-start gap-3.5">
                  <div className="size-6 rounded-full bg-brand-gradient grid place-items-center shrink-0 mt-0.5">
                    <Check className="size-3.5 text-primary-foreground" />
                  </div>
                  <span className="text-sm font-medium">{f}</span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>



      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal direction="scale">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Have a similar project in mind?
            </h2>
            <Link
              to="/contact"
              className="mt-8 btn-primary inline-flex animate-pulse-glow"
            >
              Book a free consultation <ArrowRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="surface-card p-8 h-full">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-4 text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}

function ImageCarousel({ images, name }: { images: readonly string[]; name: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="absolute inset-0 bg-surface">
      <AnimatePresence initial={false}>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${name} image ${currentIndex + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? "bg-white w-6" : "bg-white/40 hover:bg-white/60 w-2"}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
