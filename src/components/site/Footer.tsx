import { Link } from "@tanstack/react-router";
import { ArrowUp, Linkedin, Twitter } from "lucide-react";
import darkLogo from "../../routes/images/website logo(black background compatible).png";
import lightLogo from "../../routes/images/website logo(white background compatible).png";
import discordLogo from "../../routes/images/discord-black-logo.png";
import redditLogo from "../../routes/images/reddit-logo.png";
import { useState, useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useTheme } from "../theme-provider";

const socials = [
  { icon: Twitter, href: "https://x.com/_GLAD_Studio", label: "X (Twitter)" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/glad-studio-2k26", label: "LinkedIn" },
  { icon: ({ className }: { className?: string }) => <img src={discordLogo} alt="Discord" className={`${className} scale-125 dark:invert`} />, href: "https://discord.gg/VK6EVX6k", label: "Discord" },
  { icon: ({ className }: { className?: string }) => <img src={redditLogo} alt="Reddit" className={`${className} scale-125 dark:invert`} />, href: "https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK", label: "Reddit" },
];

export function Footer() {
  const [isClient, setIsClient] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        "hideEventTypeDetails": false,
        "layout": "month_view",
        "theme": theme === "dark" || (theme === "system" && typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light"
      });
    })();
  }, [theme]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border mt-32 noise-bg">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <img
                src={darkLogo}
                alt="Website Logo"
                className="h-12 w-auto object-contain hidden dark:block"
              />
              <img
                src={lightLogo}
                alt="Website Logo"
                className="h-12 w-auto object-contain block dark:hidden"
              />
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground leading-relaxed">
              A premium software studio building web, mobile, and AI-powered
              products for startups and growing businesses.
            </p>
            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="size-9 rounded-lg border border-border grid place-items-center text-muted-foreground hover:text-foreground hover:border-ring/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Studio links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Studio</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link></li>
              <li><Link to="/process" className="hover:text-foreground transition-colors">Process</Link></li>
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact links */}
          <div className="md:col-span-2">
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm text-muted-foreground">
              <li><a href="mailto:hello@gladstudio.net" className="hover:text-foreground transition-colors">hello@gladstudio.net</a></li>
              <li><a href="https://x.com/_GLAD_Studio" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
              <li><a href="https://www.linkedin.com/company/glad-studio-2k26" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://discord.gg/VK6EVX6k" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://www.reddit.com/r/GLADStudio/s/z5nCr2xFAK" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">Reddit</a></li>
              <li><button data-cal-link="arjun-rajput-2mdsis" data-cal-config={JSON.stringify({layout: 'month_view', theme: theme === 'dark' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light'})} className="hover:text-foreground transition-colors cursor-pointer text-left">Book a call</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} GLAD studio. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group"
          >
            Back to top
            <ArrowUp className="size-3 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>

    </footer>
  );
}
