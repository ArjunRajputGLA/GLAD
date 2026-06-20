import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface Project {
  slug: string;
  name: string;
  category: string;
  short: string;
  tech: readonly string[];
  gradient: string;
  thumbnail?: string;
  images?: readonly string[];
}

export function ProjectCard({ project: p, className }: { project: Project; className?: string }) {
  return (
    <Link
      to="/portfolio/$slug"
      params={{ slug: p.slug }}
      className={`group surface-card interactive-card shine-on-hover overflow-hidden flex flex-col h-full ${className || ""}`}
    >
      {/* Gradient or Image thumbnail */}
      <div className="relative flex-1 min-h-[240px] overflow-hidden">
        {p.thumbnail ? (
          <img 
            src={p.thumbnail} 
            alt={p.name} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        ) : (
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
            style={{ background: p.gradient }}
          />
        )}
        <div className="absolute inset-0 grid-bg opacity-25" />
        {/* Bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--surface)] to-transparent opacity-80" />
      </div>

      {/* Card body */}
      <div className="relative p-5">
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">
          {p.category}
        </div>
        <h3 className="mt-1.5 text-lg font-semibold tracking-tight">{p.name}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{p.short}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] rounded-full border border-border px-2.5 py-0.5 text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
