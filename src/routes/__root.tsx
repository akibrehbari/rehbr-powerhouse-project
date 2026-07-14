import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { Preloader } from "../components/site/Preloader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ink px-4 text-white">
      <div className="hero-grid absolute inset-0 opacity-20" aria-hidden />
      <div className="relative text-center">
        <p className="font-display text-[10rem] leading-none text-signal sm:text-[16rem]">
          404
        </p>
        <div className="diag-stripes mx-auto h-2 w-40" aria-hidden />
        <h2 className="mt-6 font-display text-3xl uppercase tracking-tight">
          Off the supply route
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
          This page isn't on the manifest. Let's get you back to the yard.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-signal px-6 py-3 text-sm font-bold uppercase tracking-widest text-ink hover:bg-white"
        >
          Return home →
        </a>
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
    <div className="flex min-h-screen items-center justify-center bg-ink px-4 text-white">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl uppercase text-signal">
          System halted
        </h1>
        <p className="mt-3 text-sm text-white/70">
          Something jammed on our end. Reset and try again.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-signal px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-ink hover:bg-white"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-white/30 px-5 py-2.5 text-sm font-bold uppercase tracking-wider hover:bg-white/10"
          >
            Home
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
      { title: "Rehbr — Industrial Supply Chain Management" },
      {
        name: "description",
        content:
          "Rehbr moves electronics, electrical equipment, vehicles and spare parts with precision. Supply chain, maintenance and logistics across Pakistan.",
      },
      { name: "author", content: "Rehbr" },
      { name: "theme-color", content: "#111111" },
      { property: "og:site_name", content: "Rehbr" },
      { property: "og:title", content: "Rehbr — Industrial Supply Chain Management" },
      {
        property: "og:description",
        content:
          "Electronics, electrical, vehicles, spare parts, maintenance and vehicle supply chain — engineered for the long haul.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Rehbr — Industrial Supply Chain" },
      {
        name: "twitter:description",
        content: "Supply chain, engineered. Electronics, electrical & automotive.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Rehbr",
          description:
            "Supply chain management for electronics, electrical equipment and automotive.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "C 14/8, Satellite Town",
            addressLocality: "Rawalpindi",
            addressCountry: "PK",
          },
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
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <Nav />
      <Outlet />
      <Footer />
    </QueryClientProvider>
  );
}
