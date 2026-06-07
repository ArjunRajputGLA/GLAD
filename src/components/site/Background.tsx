import { motion, useScroll, useTransform } from "framer-motion";

export function HeroBackground() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -50]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.3]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10 noise-bg">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Primary orb — vivid purple */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute -top-32 -left-24 size-[560px] rounded-full blur-[100px] opacity-35 animate-float"
      >
        <div
          className="size-full rounded-full"
          style={{ background: "radial-gradient(closest-side, var(--brand), transparent)" }}
        />
      </motion.div>

      {/* Secondary orb — electric blue */}
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute top-16 -right-40 size-[640px] rounded-full blur-[120px] opacity-30 animate-float-2"
      >
        <div
          className="size-full rounded-full"
          style={{
            background: "radial-gradient(closest-side, var(--brand-2), transparent)",
          }}
        />
      </motion.div>

      {/* Tertiary orb — cyan accent (new) */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute -bottom-20 left-1/3 size-[400px] rounded-full blur-[100px] opacity-20 animate-float"
      >
        <div
          className="size-full rounded-full"
          style={{
            background: "radial-gradient(closest-side, var(--brand-3), transparent)",
            animationDelay: "-8s",
          }}
        />
      </motion.div>

      {/* Gradient fade to background at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}

/** Lighter variant for inner-page sections (no orbs, just texture) */
export function SectionBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10 noise-bg">
      <div className="absolute inset-0 dot-bg opacity-40" />
    </div>
  );
}
