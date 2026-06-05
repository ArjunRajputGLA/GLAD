import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="size-8 rounded-lg bg-brand-gradient grid place-items-center text-primary-foreground font-bold">
              N
            </span>
            <span className="font-display font-semibold tracking-tight text-lg">
              Northbeam.dev
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A small, senior team building web, mobile, and AI-powered products
            for startups and growing businesses.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Studio</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/process" className="hover:text-foreground">Process</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="mailto:hello@northbeam.dev" className="hover:text-foreground">hello@northbeam.dev</a></li>
            <li><a href="#" className="hover:text-foreground">LinkedIn</a></li>
            <li><a href="#" className="hover:text-foreground">WhatsApp</a></li>
            <li><Link to="/contact" className="hover:text-foreground">Book a call</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Northbeam Studio. All rights reserved.</p>
          <p>Built with care in dark mode.</p>
        </div>
      </div>
    </footer>
  );
}
