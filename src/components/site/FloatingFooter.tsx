import { useState, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, Phone, Briefcase, Mail, Layout } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { getCalApi } from "@calcom/embed-react";
import { useTheme } from "../theme-provider";

export function FloatingFooter() {
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        theme:
          theme === "dark" ||
            (theme === "system" &&
              typeof window !== "undefined" &&
              window.matchMedia("(prefers-color-scheme: dark)").matches)
            ? "dark"
            : "light",
      });
    })();
  }, [theme]);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    // Show after scrolling 400px, hide when near the real footer (last 600px)
    const nearBottom = scrollY + winHeight > docHeight - 600;
    setVisible(scrollY > 400 && !nearBottom);
  }, []);

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const calConfig = JSON.stringify({
    layout: "month_view",
    theme:
      theme === "dark" ||
        (theme === "system" &&
          typeof window !== "undefined" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? "dark"
        : "light",
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2.5rem)] max-w-xl"
        >
          <div className="floating-bar flex items-center justify-between gap-3 px-2.5 py-2 rounded-2xl">
            {/* Quick nav pills */}
            <div className="flex items-center gap-1">
              <Link
                to="/services"
                className="floating-bar-link"
              >
                <Briefcase className="size-3.5" />
                <span className="hidden sm:inline">Services</span>
              </Link>
              <Link
                to="/portfolio"
                className="floating-bar-link"
              >
                <Layout className="size-3.5" />
                <span className="hidden sm:inline">Work</span>
              </Link>
              <Link
                to="/contact"
                className="floating-bar-link"
              >
                <Mail className="size-3.5" />
                <span className="hidden sm:inline">Contact</span>
              </Link>
            </div>

            {/* CTA + Back to top */}
            <div className="flex items-center gap-2 ml-auto">
              <button
                data-cal-link="arjun-rajput-2mdsis"
                data-cal-config={calConfig}
                className="inline-flex items-center gap-1.5 rounded-xl bg-brand-gradient px-4 py-2 text-xs font-medium text-primary-foreground shadow-md shadow-[var(--brand)]/20 hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone className="size-3" />
                Book a Call
              </button>
              <button
                onClick={scrollToTop}
                className="size-8 rounded-xl border border-border bg-surface/80 backdrop-blur-sm grid place-items-center text-muted-foreground hover:text-foreground hover:border-ring/40 transition-all duration-300 hover:-translate-y-0.5"
                aria-label="Back to top"
              >
                <ArrowUp className="size-3.5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
