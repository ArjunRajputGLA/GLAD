export function SectionHeading({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
        <span className="inline-block w-6 h-px bg-brand-gradient" />
        {eyebrow}
      </div>
      <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
        {title}
      </h2>
      {sub && (
        <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{sub}</p>
      )}
    </div>
  );
}
