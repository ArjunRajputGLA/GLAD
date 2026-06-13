import { Link } from "@tanstack/react-router";
import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import logo from "../../routes/images/website logo(black background compatible).png";

const socials = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border mt-32 noise-bg">
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Website Logo"
                className="h-12 w-auto object-contain"
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
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="mailto:hello@gladstudio.dev" className="hover:text-foreground transition-colors">hello@gladstudio.dev</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">WhatsApp</a></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Book a call</Link></li>
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
