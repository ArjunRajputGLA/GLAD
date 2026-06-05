import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Mail, Linkedin, MessageCircle, Calendar } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { HeroBackground } from "@/components/site/Background";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Northbeam" },
      {
        name: "description",
        content:
          "Let's discuss your project. Book a free 30-minute consultation with Northbeam.",
      },
      { property: "og:title", content: "Contact — Northbeam" },
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

      <section className="relative pt-40 pb-20">
        <HeroBackground />
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Contact</div>
            <h1 className="mt-3 text-5xl md:text-6xl font-semibold tracking-tight">
              Let's discuss your <span className="text-gradient">project.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-lg">
              Tell us what you're building. We'll reply within one business day
              with next steps — or honest feedback if we're not the right fit.
            </p>

            <div className="mt-10 space-y-4">
              <ContactItem icon={Mail} label="Email" value="hello@northbeam.dev" href="mailto:hello@northbeam.dev" />
              <ContactItem icon={Linkedin} label="LinkedIn" value="linkedin.com/company/northbeam" href="#" />
              <ContactItem icon={MessageCircle} label="WhatsApp" value="+1 (415) 555-0142" href="#" />
              <ContactItem icon={Calendar} label="Calendar" value="cal.com/northbeam — 30 min" href="#" />
            </div>

            <div className="mt-10 surface-card p-5">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                Calendly Integration
              </div>
              <div className="aspect-[4/3] rounded-lg border border-dashed border-border grid place-items-center text-sm text-muted-foreground bg-background/40">
                <div className="text-center px-4">
                  <Calendar className="size-6 mx-auto mb-2 opacity-60" />
                  Calendly booking widget appears here.
                </div>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="surface-card p-10 text-center">
                <div className="mx-auto size-14 rounded-full bg-brand-gradient grid place-items-center text-primary-foreground">
                  <Check className="size-7" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold">Message received.</h2>
                <p className="mt-2 text-muted-foreground">
                  We'll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="surface-card p-7 space-y-3"
              >
                <h2 className="text-xl font-semibold">Project enquiry</h2>
                <p className="text-sm text-muted-foreground">All fields are kept confidential.</p>
                <div className="grid gap-3 md:grid-cols-2 pt-2">
                  <Field label="Name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <Field label="Company" name="company" />
                <Field label="Project description" name="project" textarea required />
                <SelectField
                  label="Budget range"
                  name="budget"
                  options={["Under $15k", "$15k – $40k", "$40k – $100k", "$100k+", "Not sure yet"]}
                />
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-primary-foreground glow-brand hover:opacity-95 transition"
                >
                  Send enquiry <ArrowRight className="size-4" />
                </button>
              </form>
            )}
          </div>
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
      <div className="size-11 rounded-xl surface-card grid place-items-center group-hover:border-ring/60 transition">
        <Icon className="size-4" />
      </div>
      <div>
        <div className="text-xs text-muted-foreground">{label}</div>
        <div className="text-sm font-medium group-hover:text-gradient">{value}</div>
      </div>
    </a>
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
        <textarea name={name} required={required} rows={5} className={`${cls} mt-1`} />
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
