export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div
        className="absolute -top-40 -left-20 size-[520px] rounded-full blur-3xl opacity-40 animate-float"
        style={{ background: "radial-gradient(closest-side, var(--brand), transparent)" }}
      />
      <div
        className="absolute top-20 -right-32 size-[600px] rounded-full blur-3xl opacity-40 animate-float"
        style={{
          background: "radial-gradient(closest-side, var(--brand-2), transparent)",
          animationDelay: "-6s",
        }}
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
