export const services = [
  {
    slug: "mvp",
    title: "MVP Development",
    short: "Ship a credible v1 in weeks, not quarters.",
    description:
      "Helping startups launch products quickly and efficiently — from clickable prototype to production-ready MVP.",
    benefits: [
      "Validate ideas with real users fast",
      "Investor-ready demos and pitch assets",
      "Production foundations from day one",
    ],
    tech: ["Next.js", "TanStack Start", "Supabase", "Stripe", "Vercel"],
    timeline: "4 – 8 weeks",
  },
  {
    slug: "web",
    title: "Web Application Development",
    short: "Custom dashboards, SaaS, CRM and internal platforms.",
    description:
      "We design and build robust web applications — from analytics dashboards to multi-tenant SaaS — with clean architecture and modern UX.",
    benefits: [
      "Type-safe, scalable frontends",
      "Auth, billing & permissions handled",
      "Performance budgets out of the box",
    ],
    tech: ["React 19", "TypeScript", "Postgres", "tRPC", "Tailwind"],
    timeline: "6 – 16 weeks",
  },
  {
    slug: "mobile",
    title: "Mobile App Development",
    short: "Cross-platform apps for Android and iOS.",
    description:
      "Single codebase, native feel. We build Flutter applications that ship to both stores with polished UX and offline-first capability.",
    benefits: [
      "One team, two platforms",
      "Native performance and gestures",
      "CI/CD to TestFlight & Play Console",
    ],
    tech: ["Flutter", "Dart", "Firebase", "RevenueCat", "Fastlane"],
    timeline: "8 – 16 weeks",
  },
  {
    slug: "ai",
    title: "AI Solutions",
    short: "Chatbots, agents, RAG and intelligent workflows.",
    description:
      "We integrate LLMs into your product where they create real leverage — support automation, smart search, document workflows and assistants.",
    benefits: [
      "RAG over your own data",
      "Cost-aware model routing",
      "Guardrails, evals and observability",
    ],
    tech: ["OpenAI", "Anthropic", "LangGraph", "pgvector", "Lovable AI"],
    timeline: "3 – 10 weeks",
  },
  {
    slug: "automation",
    title: "Business Automation",
    short: "Cut the busywork your team shouldn't be doing.",
    description:
      "Custom internal tools and automations that connect the systems you already use and remove manual work from your operations.",
    benefits: [
      "Save dozens of hours per week",
      "Fewer human errors, cleaner data",
      "Integrates with the stack you have",
    ],
    tech: ["Node.js", "n8n", "Zapier", "Postgres", "Webhooks"],
    timeline: "2 – 6 weeks",
  },
] as const;

export const projects = [
  {
    slug: "lumen-crm",
    name: "Lumen CRM",
    category: "SaaS Platform",
    short: "A modern CRM rebuilt around AI-assisted pipelines.",
    tech: ["Next.js", "Postgres", "OpenAI"],
    gradient: "linear-gradient(135deg, #7c3aed, #2563eb)",
    challenge:
      "An early-stage sales team was drowning in legacy CRM workflows that slowed reps down instead of helping them.",
    solution:
      "We rebuilt the core pipeline experience from scratch, layered an LLM assistant for note-taking and forecasting, and shipped a polished web app in 10 weeks.",
    features: [
      "Drag-and-drop pipelines",
      "AI meeting summarizer",
      "Forecasting dashboards",
      "Role-based permissions",
    ],
    outcome: "3x faster deal updates, 28% lift in qualified pipeline within Q1.",
  },
  {
    slug: "northwind-mobile",
    name: "Northwind",
    category: "Mobile App",
    short: "A Flutter app for field service teams across 40+ cities.",
    tech: ["Flutter", "Firebase", "Stripe"],
    gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
    challenge:
      "Field technicians needed an offline-first app that worked on sites with bad connectivity and still synced reliably.",
    solution:
      "We designed an offline-first architecture, built a Flutter app for iOS and Android, and integrated a custom scheduling backend.",
    features: ["Offline sync", "Route optimization", "In-app payments", "Photo uploads"],
    outcome: "Job completion rate improved from 71% to 94%.",
  },
  {
    slug: "atlas-ai",
    name: "Atlas AI",
    category: "AI Product",
    short: "RAG-powered knowledge assistant for an EdTech platform.",
    tech: ["LangGraph", "pgvector", "OpenAI"],
    gradient: "linear-gradient(135deg, #db2777, #7c3aed)",
    challenge:
      "Students were dropping off because they couldn't find answers buried in hundreds of hours of course content.",
    solution:
      "We built a retrieval-augmented assistant with citations, evals, and guardrails — integrated directly into the learning experience.",
    features: ["Citations to source", "Topic-aware retrieval", "Eval dashboard", "Streaming UX"],
    outcome: "Course completion up 41% in three months.",
  },
  {
    slug: "ledger-ops",
    name: "LedgerOps",
    category: "Business Automation",
    short: "An internal ops tool replacing 14 spreadsheets.",
    tech: ["Node.js", "Postgres", "n8n"],
    gradient: "linear-gradient(135deg, #0ea5e9, #6366f1)",
    challenge:
      "An SME was running its entire operation across spreadsheets and email threads — error-prone and impossible to scale.",
    solution:
      "We built a single internal platform with role-based access, audit logs, and automations that connect to their accounting and CRM stack.",
    features: ["Unified dashboard", "Approval workflows", "Audit log", "Slack alerts"],
    outcome: "Saved an estimated 60+ hours of manual work per week.",
  },
  {
    slug: "pulse-edu",
    name: "Pulse EDU",
    category: "Education SaaS",
    short: "A live cohort platform for educators.",
    tech: ["React", "Supabase", "Daily.co"],
    gradient: "linear-gradient(135deg, #f59e0b, #db2777)",
    challenge:
      "An education business was stitching together Zoom, Notion and Stripe — and losing students in the gaps.",
    solution:
      "We shipped a unified live cohort platform with scheduling, payments, attendance and analytics in a single product.",
    features: ["Live sessions", "Cohort analytics", "Payments", "Email automations"],
    outcome: "Retention from week 1 to week 6 went from 52% to 78%.",
  },
  {
    slug: "vault-mvp",
    name: "Vault",
    category: "MVP",
    short: "A fintech MVP shipped in 6 weeks.",
    tech: ["TanStack Start", "Supabase", "Plaid"],
    gradient: "linear-gradient(135deg, #10b981, #2563eb)",
    challenge:
      "A founder needed an investor-ready MVP that could demo real bank data without compromising on quality.",
    solution:
      "We delivered a polished web MVP with Plaid integration, a clean dashboard, and a credible onboarding flow — in time for their seed round.",
    features: ["Bank linking", "Spending insights", "Goal tracking", "Onboarding"],
    outcome: "Closed a $1.4M seed round shortly after launch.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "They felt like a true product team, not an agency. We shipped our MVP in six weeks and raised our seed the month after.",
    name: "Priya Sharma",
    role: "Founder, Vault",
  },
  {
    quote:
      "Senior engineers, transparent communication, no fluff. They rebuilt our core product without breaking anything in production.",
    name: "Marcus Lee",
    role: "CTO, Lumen",
  },
  {
    quote:
      "The AI assistant they built has become the single biggest reason students stay on our platform.",
    name: "Elena Rossi",
    role: "Head of Product, Atlas",
  },
];

export const faqs = [
  {
    q: "How much does a typical project cost?",
    a: "MVPs typically range from $15k to $45k. Larger web platforms and mobile apps usually fall between $40k and $150k. We always scope and price in writing before any work starts.",
  },
  {
    q: "How fast can you start?",
    a: "Most projects begin within 1–2 weeks of signing. For urgent work, we can sometimes start within a few days.",
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Yes — most of our clients are non-technical. We translate ideas into specs, designs, and shipped product, and we make sure you always understand the trade-offs.",
  },
  {
    q: "What happens after launch?",
    a: "We offer ongoing support packages for bug fixes, performance, and new features. Many clients keep us on as a fractional product team.",
  },
  {
    q: "Who owns the code?",
    a: "You do. Full IP transfer is included by default — code, designs, and infrastructure all belong to you.",
  },
];
