import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";
import {
  ArrowRight,
  Rocket,
  Layout,
  Smartphone,
  Sparkles,
  Workflow,
  Gauge,
  MessageSquare,
  Layers,
  Shield,
  Check,
  Quote,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal, RevealGroup, RevealItem } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ProjectCard } from "@/components/site/ProjectCard";
import { AnimatedCounter } from "@/components/site/AnimatedCounter";
import { LogoStrip } from "@/components/site/LogoStrip";
import { Field, SelectField } from "@/components/site/FormFields";
import { services, projects, testimonials, faqs } from "@/components/site/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useTheme } from "@/components/theme-provider";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GLAD: Growing Localized Applications Dynamically" },
      {
        name: "description",
        content:
          "We help startups and growing businesses ship web apps, mobile apps and AI-powered products that scale.",
      },
      { property: "og:title", content: "GLAD: Growing Localized Applications Dynamically" },
      {
        property: "og:description",
        content:
          "We help startups and growing businesses ship web apps, mobile apps and AI-powered products that scale.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const serviceIcons = {
  mvp: Rocket,
  web: Layout,
  mobile: Smartphone,
  ai: Sparkles,
  automation: Workflow,
} as const;

const whyUs = [
  { icon: Gauge, title: "Fast Development", body: "Weeks, not quarters. Senior team, focused scope, no agency overhead." },
  { icon: MessageSquare, title: "Transparent Communication", body: "Async updates, weekly demos, and a Slack channel you actually use." },
  { icon: Layers, title: "Modern Technologies", body: "TypeScript, React 19, Flutter, Postgres, and AI built into your product, not bolted on." },
  { icon: Shield, title: "Scalable Architecture", body: "Production-ready from day one — type-safe, tested, observable." },
];

const processSteps = [
  "Discovery", "Planning", "Design", "Development", "Testing", "Launch",
];

function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <TechStrip />
      <Services />
      <WhyUs />
      <Process />
      <Featured />
      <Testimonials />
      <Faq />
      <FinalCTA />
      <Footer />
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────── */

function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      <HeroBackground />

      {/* Spline 3D Scene - Absolutely positioned to share the root stacking context for mix-blend-screen */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/2 max-w-[800px] h-[600px] spline-scene z-10 pointer-events-auto transition-all duration-700"
      >
        <Spline
          scene="https://prod.spline.design/WUDd1kLf1Uh-ftTW/scene.splinecode"
          className="w-full h-full"
        />
        <div className="absolute bottom-4 right-5 z-20 pointer-events-none border border-white/10 bg-[#1A1A1A] px-5 py-2.5 rounded-full flex items-center gap-2">
          <span className="relative flex size-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full size-2 bg-emerald-400" />
          </span>
          <span className="text-[11px] font-bold text-white tracking-wider uppercase">Interactive</span>
        </div>
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 relative z-20 w-full pointer-events-none">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="max-w-3xl pointer-events-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/50 backdrop-blur-sm px-4 py-1.5 text-xs text-muted-foreground">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full size-2 bg-emerald-400" />
                </span>
                Now booking projects for Q3 — 2 slots left
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 text-5xl md:text-7xl lg:text-[5.25rem] font-semibold leading-[1.05] tracking-tight"
            >
              Building{" "}
              <span className="text-gradient animate-gradient bg-[length:200%_auto]">
                Web, Mobile &amp; AI
              </span>
              <br />
              products that scale.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-7 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              We help startups and growing businesses transform ideas into powerful
              digital products — through custom software, mobile applications, and
              AI-powered solutions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <HeroCTA />
              <Link
                to="/portfolio"
                className="btn-secondary"
              >
                View our work
              </Link>
            </motion.div>
          </div>

          {/* Empty spacer to maintain grid layout, Spline is absolutely positioned behind */}
          <div className="hidden lg:block w-full h-[600px]" />
        </div>
      </div>
    </section>
  );
}

function HeroCTA() {
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        "hideEventTypeDetails": false,
        "layout": "month_view",
        "theme": theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light"
      });
    })();
  }, [theme]);

  return (
    <>
      <button
        data-cal-link="arjun-rajput-2mdsis"
        data-cal-config={JSON.stringify({layout: 'month_view', theme: theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'})}
        className="group btn-primary animate-pulse-glow"
      >
        Book a Call
        <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
      </button>

    </>
  );
}

/* ─── Tech Logo Strip ───────────────────────────────── */

function TechStrip() {
  return (
    <section className="relative py-6 section-divider">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">
          Technologies we work with
        </p>
        <LogoStrip />
      </div>
    </section>
  );
}

/* ─── Services ──────────────────────────────────────── */

function Services() {
  return (
    <section className="relative py-28 section-divider">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Senior product engineering, end to end."
            sub="Five focused practices — picked because they're where small teams create the most leverage."
          />
        </Reveal>
        <RevealGroup className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
          {services.map((s) => {
            const Icon = serviceIcons[s.slug];
            return (
              <RevealItem key={s.slug}>
                <Link
                  to="/services"
                  className="group relative block surface-card interactive-card shine-on-hover p-7 h-full"
                >
                  <div className="relative z-[2]">
                    <div className="size-12 rounded-xl bg-brand-gradient grid place-items-center text-primary-foreground shadow-lg shadow-[var(--brand)]/20">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-6 text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{s.short}</p>
                    <div className="mt-6 inline-flex items-center gap-1.5 text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                      Learn more
                      <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ─── Why Us ────────────────────────────────────────── */

function WhyUs() {
  return (
    <section className="relative py-28 section-divider noise-bg">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Why teams choose us"
            title="A small studio that ships like a product team."
          />
        </Reveal>
        <RevealGroup className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4" stagger={0.06}>
          {whyUs.map((w) => (
            <RevealItem key={w.title}>
              <div className="surface-card interactive-card p-7 h-full">
                <div className="size-10 rounded-lg bg-surface-2 grid place-items-center">
                  <w.icon className="size-5 text-foreground" />
                </div>
                <h3 className="mt-5 text-base font-semibold tracking-tight">{w.title}</h3>
                <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">{w.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ─── Process ───────────────────────────────────────── */

function Process() {
  return (
    <section className="relative py-28 section-divider">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="A clear, predictable process."
            sub="From first call to launch, you always know where we are and what's next."
          />
        </Reveal>
        <div className="mt-16 relative">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-6 h-px bg-gradient-to-r from-transparent via-border to-transparent hidden md:block" />
          <RevealGroup className="grid gap-8 md:grid-cols-6" stagger={0.06}>
            {processSteps.map((step, i) => (
              <RevealItem key={step} direction="scale">
                <div className="relative text-center md:text-left">
                  <div className="size-12 rounded-full bg-surface border border-border grid place-items-center text-sm font-semibold relative z-10 mx-auto md:mx-0 shadow-lg">
                    <span className="text-gradient">0{i + 1}</span>
                  </div>
                  <h4 className="mt-4 font-medium tracking-tight">{step}</h4>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
        <Reveal delay={0.3}>
          <div className="mt-12">
            <Link to="/process" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors group">
              See the full process
              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Featured Work ─────────────────────────────────── */

function Featured() {
  return (
    <section className="relative py-28 section-divider">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionHeading eyebrow="Featured work" title="Selected projects." />
            <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors group">
              View all
              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </Reveal>
        <RevealGroup className="mt-14 grid gap-6 grid-cols-1 md:grid-cols-12" stagger={0.08}>
          {projects.map((p, i) => {
            const spanClasses = [
              "md:col-span-8",
              "md:col-span-4",
              "md:col-span-4",
              "md:col-span-8",
              "md:col-span-6",
              "md:col-span-6",
            ];
            return (
              <RevealItem key={p.slug} className={`w-full ${spanClasses[i]}`}>
                <ProjectCard project={p} className="h-full !rounded-[20px]" />
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ─── Testimonials ──────────────────────────────────── */

function Testimonials() {
  return (
    <section className="relative py-28 section-divider noise-bg">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Kind words" title="What our clients say." />
        </Reveal>
        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-3" stagger={0.08}>
          {testimonials.map((t) => (
            <RevealItem key={t.name}>
              <figure className="surface-card interactive-card p-7 h-full flex flex-col">
                <Quote className="size-8 text-brand/30 mb-3 -ml-1" />
                <blockquote className="text-base leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 pt-5 border-t border-border">
                  <div className="size-10 rounded-full bg-brand-gradient grid place-items-center text-primary-foreground text-sm font-semibold">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────── */

function Faq() {
  return (
    <section className="relative py-28 section-divider">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Common questions." center />
        </Reveal>
        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="mt-12 w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

/* ─── Final CTA ─────────────────────────────────────── */

function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden glass-card p-10 md:p-16">
          {/* Background effects */}
          <div className="absolute inset-0 bg-brand-soft opacity-50" />
          <div
            className="absolute -top-24 -right-24 size-[480px] rounded-full blur-[120px] opacity-30"
            style={{ background: "radial-gradient(closest-side, var(--brand), transparent)" }}
          />
          <div
            className="absolute -bottom-24 -left-24 size-[380px] rounded-full blur-[100px] opacity-20"
            style={{ background: "radial-gradient(closest-side, var(--brand-2), transparent)" }}
          />

          <div className="relative z-10 grid gap-12 lg:grid-cols-2 items-start">
            <Reveal direction="left">
              <div>
                <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
                  Let's build something{" "}
                  <span className="text-gradient">great together.</span>
                </h2>
                <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
                  Tell us about your project. We'll reply within one business day with
                  next steps or honest feedback if we're not the right fit.
                </p>
                <div className="mt-8 space-y-3.5 text-sm text-muted-foreground">
                  {[
                    "30-minute discovery call",
                    "Fixed-scope proposal in 48 hours",
                    "Direct access to senior engineers",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="size-5 rounded-full bg-brand-gradient grid place-items-center">
                        <Check className="size-3 text-primary-foreground" />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.1}>
              <ContactForm submitted={submitted} setSubmitted={setSubmitted} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Form ──────────────────────────────────── */

function ContactForm({
  submitted,
  setSubmitted,
}: {
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
}) {
  const [loading, setLoading] = useState(false);

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-card p-10 text-center"
      >
        <div className="mx-auto size-14 rounded-full bg-brand-gradient grid place-items-center text-primary-foreground shadow-lg shadow-[var(--brand)]/20">
          <Check className="size-7" />
        </div>
        <h3 className="mt-5 text-xl font-semibold">Thanks — we got it.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We'll be in touch within one business day.
        </p>
      </motion.div>
    );
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      await fetch("https://formsubmit.co/ajax/hello@gladstudio.net", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
      });
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-card p-7 space-y-4"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" name="name" placeholder="Your name" required />
        <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
      </div>
      <Field label="Company" name="company" placeholder="Company name" />
      <Field label="Project description" name="project" textarea placeholder="Tell us about your project..." required />
      <SelectField
        label="Budget range"
        name="budget"
        options={[
          "Under $15k",
          "$15k – $40k",
          "$40k – $100k",
          "$100k+",
          "Not sure yet",
        ]}
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send & book call"} <ArrowRight className="size-4" />
      </button>
    </form>
  );
}
