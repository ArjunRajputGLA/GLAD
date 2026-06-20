import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { ProjectCard } from "@/components/site/ProjectCard";
import { projects } from "@/components/site/data";
import { motion } from "framer-motion";

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio — GLAD studio" },
      {
        name: "description",
        content:
          "Selected projects across SaaS, mobile, AI and business automation — built by GLAD studio for startups and growing businesses.",
      },
      { property: "og:title", content: "Portfolio — GLAD studio" },
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
              Portfolio
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              Selected <span className="text-gradient">work.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A small sample of what we've shipped — from MVPs to AI products and
              internal platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="relative pb-28">
        <div className="mx-auto max-w-7xl px-6">
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {projects.map((p) => (
              <RevealItem key={p.slug} className="h-full">
                <ProjectCard project={p} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Footer />
    </div>
  );
}
