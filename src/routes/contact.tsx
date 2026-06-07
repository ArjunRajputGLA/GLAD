import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Mail, Linkedin, MessageCircle, Calendar, Shield } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";
import { Reveal } from "@/components/site/Reveal";
import { Field, SelectField } from "@/components/site/FormFields";
import { motion } from "framer-motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Antigravity Labs" },
      {
        name: "description",
        content:
          "Let's discuss your project. Book a free 30-minute consultation with Antigravity Labs.",
      },
      { property: "og:title", content: "Contact — Antigravity Labs" },
      {
        property: "og:description",
        content: "Let's discuss your project. Book a free 30-minute consultation.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative pt-36 pb-24 md:pt-44 overflow-hidden">
        <HeroBackground />
        <div className="mx-auto max-w-6xl px-6 grid gap-14 lg:grid-cols-[1.1fr_1fr]">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="inline-block w-6 h-px bg-brand-gradient" />
              Contact
            </div>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1]">
              Let's discuss your <span className="text-gradient">project.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              Tell us what you're building. We'll reply within one business day
              with next steps — or honest feedback if we're not the right fit.
            </p>

            {/* Contact items */}
            <div className="mt-10 space-y-4">
              <ContactItem icon={Mail} label="Email" value="hello@antigravity.dev" href="mailto:hello@antigravity.dev" />
              <ContactItem icon={Linkedin} label="LinkedIn" value="linkedin.com/company/antigravity" href="#" />
              <ContactItem icon={MessageCircle} label="WhatsApp" value="+1 (415) 555-0142" href="#" />
              <ContactItem icon={Calendar} label="Calendar" value="cal.com/antigravity — 30 min" href="#" />
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-3">
              {["NDA on request", "Reply < 24h", "No obligation"].map((badge) => (
                <div key={badge} className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 backdrop-blur-sm px-3.5 py-1.5 text-xs text-muted-foreground">
                  <Shield className="size-3" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column — Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center"
              >
                <div className="mx-auto size-16 rounded-full bg-brand-gradient grid place-items-center text-primary-foreground shadow-lg shadow-[var(--brand)]/20">
                  <Check className="size-8" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold">Message received.</h2>
                <p className="mt-3 text-muted-foreground">
                  We'll be in touch within one business day.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="glass-card p-8 space-y-5"
              >
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">Project enquiry</h2>
                  <p className="mt-1 text-sm text-muted-foreground">All fields are kept confidential.</p>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <Field label="Name" name="name" placeholder="Your name" required />
                  <Field label="Email" name="email" type="email" placeholder="you@company.com" required />
                </div>
                <Field label="Company" name="company" placeholder="Company name" />
                <Field label="Project description" name="project" textarea placeholder="Tell us about your project..." required />
                <SelectField
                  label="Budget range"
                  name="budget"
                  options={["Under $15k", "$15k – $40k", "$40k – $100k", "$100k+", "Not sure yet"]}
                />
                <button
                  type="submit"
                  className="w-full btn-primary justify-center mt-2"
                >
                  Send enquiry <ArrowRight className="size-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a href={href} className="flex items-center gap-4 group">
      <div className="size-11 rounded-xl surface-card grid place-items-center group-hover:border-ring/40 transition-all duration-300 group-hover:-translate-y-0.5">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium group-hover:text-gradient transition-colors">{value}</div>
      </div>
    </a>
  );
}
