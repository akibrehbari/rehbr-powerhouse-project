import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Reveal, Stagger, Item } from "@/components/site/Reveal";
import { Target, Compass, Flag } from "lucide-react";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Rehbr — General Supply Chain Company in Rawalpindi, Pakistan" },
      {
        name: "description",
        content:
          "Rehbr is a general supply chain management company — electronics, engineering, tools, construction materials, general goods and vehicles — headquartered in Rawalpindi.",
      },
      { property: "og:title", content: "About Rehbr" },
      {
        property: "og:description",
        content: "Our story, vision and mission — built on consistency and long-term partnerships.",
      },
      { property: "og:url", content: absoluteUrl("/about") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/about") }],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About Rehbr"
        title="A supply chain built for the long haul."
        intro="Headquartered in Rawalpindi with workshops across Gilgit, Rehbr runs general supply chain operations — electronics, engineering, tools, construction materials, general goods and vehicles."
      />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-signal-deep">
                Our story
              </p>
              <h2 className="mt-4 text-5xl">Ground-up, not top-down.</h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground">
                Rehbr was built by operators, not consultants. We started with a
                single workshop and a promise: keep the goods moving, keep the
                books honest.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Today, we run a coordinated supply chain across electronics,
                engineering, tools, construction materials, general goods and
                vehicles — sourcing, warehousing, dispatch, maintenance and
                delivery — from a single accountable team.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-steel via-ink to-ink" />
        <div className="hero-grid absolute inset-0 opacity-20" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <Stagger className="grid gap-10 md:grid-cols-3">
            {[
              {
                icon: Compass,
                label: "Vision",
                body: "To be a trusted and reliable name in supply chain management — known for consistency, quality and long-term partnerships.",
              },
              {
                icon: Target,
                label: "Mission",
                body: "To deliver efficient, transparent and scalable supply chain solutions across every sector we serve — from electronics to construction.",
              },
              {
                icon: Flag,
                label: "Promise",
                body: "Right load, right route, right time — every job, every week, every year.",
              },
            ].map((v) => (
              <Item
                key={v.label}
                className="border-t-4 border-signal bg-steel/70 p-8 backdrop-blur"
              >
                <v.icon size={36} className="text-signal" />
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.4em] text-signal">
                  {v.label}
                </p>
                <p className="mt-4 text-lg text-white/85">{v.body}</p>
              </Item>
            ))}
          </Stagger>
        </div>
        <div className="diag-stripes h-3 w-full" aria-hidden />
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 lg:px-10 lg:py-20">
        <Reveal>
          <blockquote className="text-3xl leading-tight sm:text-5xl">
            <span className="font-display uppercase text-signal-deep">
              "We move
            </span>{" "}
            <span className="font-display uppercase">
              because someone depends on it arriving."
            </span>
          </blockquote>
          <p className="mt-8 text-sm font-bold uppercase tracking-widest text-muted-foreground">
            — Operating principle
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}
