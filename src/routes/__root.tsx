import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logoUrl from "./images/main logo.png";
import { ThemeProvider } from "../components/theme-provider";
import { FloatingFooter } from "../components/site/FloatingFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Glad Studio — Web, Mobile & AI Development Agency" },
      {
        name: "description",
        content:
          "Glad Studio is a full-service digital agency specializing in AI-powered web apps, mobile development, and data engineering. Based in India, serving clients globally.",
      },
      {
        name: "keywords",
        content:
          "web development agency, AI development, mobile app development, data engineering, React, Flutter, machine learning, India",
      },
      { name: "robots", content: "index, follow" },
      { name: "theme-color", content: "#0A0A0B" },
      { name: "author", content: "Glad Studio" },
      // Open Graph
      { property: "og:title", content: "Glad Studio — Web, Mobile & AI Development Agency" },
      {
        property: "og:description",
        content:
          "Glad Studio is a full-service digital agency specializing in AI-powered web apps, mobile development, and data engineering. Based in India, serving clients globally.",
      },
      { property: "og:url", content: "https://gladstudio.net/" },
      { property: "og:image", content: "https://gladstudio.net/og-image.png" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Glad Studio" },
      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Glad Studio — Web, Mobile & AI Development Agency" },
      {
        name: "twitter:description",
        content:
          "Glad Studio is a full-service digital agency specializing in AI-powered web apps, mobile development, and data engineering. Based in India, serving clients globally.",
      },
      { name: "twitter:image", content: "https://gladstudio.net/og-image.png" },
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: logoUrl },
      { rel: "canonical", href: "https://gladstudio.net/" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Glad Studio",
          "url": "https://gladstudio.net",
          "logo": "https://gladstudio.net/og-image.png",
          "description": "Web, Mobile & AI development agency",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
          },
          "serviceType": [
            "Web Development",
            "Mobile App Development",
            "AI Development",
            "Data Engineering",
          ],
          "sameAs": [
            "https://linkedin.com/company/gladstudio",
            "https://instagram.com/gladstudio",
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider defaultTheme="dark" storageKey="glad-ui-theme">
          {children}
        </ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <FloatingFooter />
    </QueryClientProvider>
  );
}
