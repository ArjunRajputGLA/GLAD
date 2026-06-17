import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollProgress } from "./ScrollProgress";
import darkLogo from "../../routes/images/website logo(black background compatible).png";
import lightLogo from "../../routes/images/website logo(white background compatible).png";
import { useTheme } from "../theme-provider";
import { getCalApi } from "@calcom/embed-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/process", label: "Process" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = (e: React.MouseEvent) => {
    const newTheme = theme === "dark" ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;

    document.documentElement.classList.add("view-transitioning");

    const transition = document.startViewTransition(() => {
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(newTheme);
      setTheme(newTheme);
    });

    transition.ready.then(() => {
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 600,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });

    transition.finished.then(() => {
      document.documentElement.classList.remove("view-transitioning");
    });
  };

  useEffect(() => {
    setIsClient(true);
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        "hideEventTypeDetails": false,
        "layout": "month_view",
        "theme": theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light",
        "cssVarsPerTheme": {
          "light": {
            "cal-brand": "#8b5cf6",
            "cal-text": "#0a0a0a",
            "cal-bg": "#fcfcfc"
          },
          "dark": {
            "cal-brand": "#a855f7",
            "cal-text": "#fafafa",
            "cal-bg": "#151518",
            "cal-bg-muted": "#1c1c20"
          }
        }
      });
    })();
  }, [theme]);

  return (
    <>
      <ScrollProgress />
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-background/60 border-b border-border shadow-lg shadow-background/20"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src={darkLogo}
              alt="Website Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 hidden dark:block"
            />
            <img
              src={lightLogo}
              alt="Website Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 block dark:hidden"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="relative px-3.5 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-surface/60"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={handleThemeToggle}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-surface/60 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </button>
            <button
              data-cal-link="arjun-rajput-2mdsis"
              data-cal-config={JSON.stringify({layout: 'month_view', theme: theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'})}
              className="btn-primary text-sm !py-2 !px-5"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface/60 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-2xl"
            >
              <div className="px-6 py-5 flex flex-col gap-1">
                {nav.map((n, i) => (
                  <motion.div
                    key={n.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      to={n.to}
                      onClick={() => setOpen(false)}
                      className="block px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-surface/60 transition-colors"
                    >
                      {n.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={handleThemeToggle}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-surface/60 transition-colors"
                    aria-label="Toggle theme"
                  >
                    <span>Theme</span>
                    {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
                  </button>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <button
                    onClick={() => setOpen(false)}
                    data-cal-link="arjun-rajput-2mdsis"
                    data-cal-config={JSON.stringify({layout: 'month_view', theme: theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'})}
                    className="w-full mt-3 btn-primary justify-center text-sm"
                  >
                    Book a Call
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>


    </>
  );
}
