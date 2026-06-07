export function LogoStrip() {
  const logos = [
    "Stripe", "Vercel", "Supabase", "OpenAI", "Shopify",
    "Figma", "Linear", "Notion", "Slack", "Intercom",
  ];

  return (
    <div className="relative overflow-hidden py-6">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Scrolling track */}
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((name, i) => (
          <div
            key={`${name}-${i}`}
            className="mx-8 flex items-center gap-2 text-muted-foreground/40 select-none"
          >
            <div className="size-5 rounded bg-muted-foreground/20" />
            <span className="text-sm font-medium tracking-wide">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
