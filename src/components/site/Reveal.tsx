import { motion, type Variants, type Transition } from "framer-motion";
import type { ReactNode } from "react";

type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "blur";

const directionMap: Record<RevealDirection, { opacity: number; y?: number; x?: number; scale?: number; filter?: string }> = {
  up:    { opacity: 0, y: 32 },
  down:  { opacity: 0, y: -32 },
  left:  { opacity: 0, x: 40 },
  right: { opacity: 0, x: -40 },
  scale: { opacity: 0, scale: 0.92 },
  blur:  { opacity: 0, filter: "blur(12px)" },
};

function buildVariants(direction: RevealDirection): Variants {
  const hidden = directionMap[direction];
  const show: Record<string, unknown> = { opacity: 1 };
  if ("y" in hidden) show.y = 0;
  if ("x" in hidden) show.x = 0;
  if ("scale" in hidden) show.scale = 1;
  if ("filter" in hidden) show.filter = "blur(0px)";

  return {
    hidden,
    show: {
      ...show,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };
}

export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  direction?: RevealDirection;
  className?: string;
  once?: boolean;
}) {
  const variants = buildVariants(direction);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-60px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container — children should use RevealItem */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Individual child inside a RevealGroup */
export function RevealItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
}) {
  return (
    <motion.div className={className} variants={buildVariants(direction)}>
      {children}
    </motion.div>
  );
}
