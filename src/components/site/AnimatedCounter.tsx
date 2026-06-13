import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate, useTransform } from "framer-motion";

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const display = useTransform(count, (latest) => `${prefix}${Math.round(latest)}${suffix}`);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });

    return () => {
      controls.stop();
    };
  }, [isInView, target, duration, count]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
} 