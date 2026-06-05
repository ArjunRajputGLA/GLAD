import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
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
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal } from "@/components/site/Reveal";
import { services, projects, testimonials, faqs } from "@/components/site/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Northbeam — Web, Mobile & AI Product Studio" },
      {
        name: "description",
        content:
          "We help startups and growing businesses ship web apps, mobile apps and AI-powered products that scale.",
      },
      { property: "og:title", content: "Northbeam — Web, Mobile & AI Product Studio" },
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

function Hero() {
  return (
    <section className="relative pt-40 pb-32">
      <HeroBackground />
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-brand-gradient" />
            Now booking projects for Q3 — 2 slots left
          </div>
          <h1 className="mt-6 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            Building <span className="text-gradient">Web, Mobile &amp; AI</span>
            <br />products that scale.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We help startups and growing businesses transform ideas into powerful
            digital products — through custom software, mobile applications, and
            AI-powered solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-primary-foreground glow-brand hover:opacity-95 transition"
            >
              Book free consultation
              <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-surface transition"
            >
              View our work
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl">
            {[
              ["40+", "Products shipped"],
              ["10+", "Years combined"],
              ["94%", "Client retention"],
              ["3", "Senior engineers"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="text-2xl md:text-3xl font-semibold text-gradient">{k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{v}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Senior product engineering, end to end."
            sub="Five focused practices — picked because they're where small teams create the most leverage."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.slug];
            return (
              <Reveal key={s.slug} delay={i * 0.05}>
                <Link
                  to="/services"
                  className="group relative block surface-card p-6 h-full hover:border-ring/60 transition-colors"
                >
                  <div className="absolute inset-0 rounded-[inherit] bg-brand-soft opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative">
                    <div className="size-11 rounded-xl bg-brand-gradient grid place-items-center text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.short}</p>
                    <div className="mt-5 inline-flex items-center gap-1 text-sm text-foreground/80 group-hover:text-foreground">
                      Learn more <ArrowRight className="size-3.5" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Why teams choose us"
            title="A small studio that ships like a product team."
          />
        </Reveal>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.05}>
              <div className="surface-card p-6 h-full">
                <w.icon className="size-5 text-foreground" />
                <h3 className="mt-4 text-base font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading
            eyebrow="How we work"
            title="A clear, predictable process."
            sub="From first call to launch, you always know where we are and what's next."
          />
        </Reveal>
        <div className="mt-14 relative">
          <div className="absolute left-0 right-0 top-5 h-px bg-gradient-to-r from-transparent via-border to-transparent hidden md:block" />
          <ol className="grid gap-6 md:grid-cols-6">
            {processSteps.map((step, i) => (
              <Reveal key={step} delay={i * 0.05}>
                <li className="relative">
                  <div className="size-10 rounded-full bg-surface border border-border grid place-items-center text-sm font-semibold relative z-10">
                    <span className="text-gradient">0{i + 1}</span>
                  </div>
                  <h4 className="mt-4 font-medium">{step}</h4>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
        <div className="mt-10">
          <Link to="/process" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
            See the full process <ArrowRight className="size-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Featured() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <SectionHeading eyebrow="Featured work" title="Selected projects." />
            <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
              View all <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group block surface-card overflow-hidden hover:border-ring/60 transition"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0" style={{ background: p.gradient }} />
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
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Kind words" title="What our clients say." />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.05}>
              <figure className="surface-card p-6 h-full">
                <blockquote className="text-base leading-relaxed">“{t.quote}”</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <div className="size-9 rounded-full bg-brand-gradient" />
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Common questions." />
        </Reveal>
        <Reveal>
          <Accordion type="single" collapsible className="mt-10 w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTA() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden surface-card p-10 md:p-14">
          <div className="absolute inset-0 bg-brand-soft opacity-60" />
          <div
            className="absolute -top-20 -right-20 size-[420px] rounded-full blur-3xl opacity-40"
            style={{ background: "radial-gradient(closest-side, var(--brand), transparent)" }}
          />
          <div className="relative grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
                Let's build something <span className="text-gradient">great together.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-md">
                Tell us about your project. We'll reply within one business day with
                next steps or honest feedback if we're not the right fit.
              </p>
              <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2"><Check className="size-4 text-foreground" /> 30-minute discovery call</div>
                <div className="flex items-center gap-2"><Check className="size-4 text-foreground" /> Fixed-scope proposal in 48 hours</div>
                <div className="flex items-center gap-2"><Check className="size-4 text-foreground" /> NDA available on request</div>
              </div>
            </div>
            <ContactForm submitted={submitted} setSubmitted={setSubmitted} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm({
  submitted,
  setSubmitted,
}: {
  submitted: boolean;
  setSubmitted: (v: boolean) => void;
}) {
  if (submitted) {
    return (
      <div className="surface-card p-8 text-center">
        <div className="mx-auto size-12 rounded-full bg-brand-gradient grid place-items-center text-primary-foreground">
          <Check className="size-6" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Thanks — we got it.</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          We'll be in touch within one business day.
        </p>
      </div>
    );
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="surface-card p-6 space-y-3"
    >
      <div className="grid gap-3 md:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
      </div>
      <Field label="Company" name="company" />
      <Field label="Project description" name="project" textarea required />
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
        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-primary-foreground glow-brand hover:opacity-95 transition"
      >
        Send & book call <ArrowRight className="size-4" />
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const cls =
    "w-full rounded-lg bg-background/60 border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/60";
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground">{label}</span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={`${cls} mt-1`} />
      ) : (
        <input name={name} type={type} required={required} className={`${cls} mt-1`} />
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-xs text-muted-foreground">{label}</span>
      <select
        name={name}
        className="mt-1 w-full rounded-lg bg-background/60 border border-border px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring/60"
      >
        {options.map((o) => (
          <option key={o} className="bg-background">{o}</option>
        ))}
      </select>
    </label>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{eyebrow}</div>
      <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}
