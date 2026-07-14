import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Reveal, Stagger, Item } from "@/components/site/Reveal";
import { MapPin, Building2, Wrench } from "lucide-react";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — Rawalpindi Head Office & Gilgit Workshops | Rehbr" },
      {
        name: "description",
        content:
          "Rehbr head office in Rawalpindi and workshops across Gilgit — I-10 Auto Market, PIA Link Road and Jutial Bus Stand.",
      },
      { property: "og:title", content: "Locations — Rehbr" },
      {
        property: "og:description",
        content: "Where Rehbr operates across Pakistan.",
      },
      { property: "og:url", content: absoluteUrl("/locations") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/locations") }],
  }),
  component: Locations,
});

const garages = [
  {
    name: "I-10 Auto Market",
    city: "Gilgit",
    detail: "Central auto-market garage for daily fleet servicing and parts.",
  },
  {
    name: "PIA Link Road",
    city: "Gilgit",
    detail: "Roadside garage covering breakdown response along the PIA corridor.",
  },
  {
    name: "Jutial Bus Stand",
    city: "Gilgit",
    detail: "Bus-stand garage servicing commercial transport and heavy-duty vehicles.",
  },
];

function Locations() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="On the ground"
        title="Where Rehbr operates."
        intro="Head office in Rawalpindi. Three workshops across Gilgit servicing vehicles and equipment on the northern corridor."
      />

      {/* HEAD OFFICE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex items-center gap-3">
                <Building2 size={24} className="text-signal-deep" />
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-signal-deep">
                  Head Office
                </p>
              </div>
              <h2 className="mt-4 text-5xl lg:text-6xl">Rawalpindi.</h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Our command centre. Operations, dispatch, procurement and
                accounts, all under one roof.
              </p>
              <address className="mt-8 not-italic">
                <p className="flex items-start gap-2 text-lg font-semibold">
                  <MapPin size={20} className="mt-1 shrink-0 text-signal-deep" />
                  C 14/8, Satellite Town,<br />Rawalpindi, Pakistan
                </p>
              </address>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="aspect-[4/3] w-full overflow-hidden border-4 border-ink">
                <iframe
                  title="Rehbr Head Office — Satellite Town, Rawalpindi"
                  src="https://www.google.com/maps?q=Satellite%20Town%2C%20Rawalpindi&output=embed"
                  className="h-full w-full grayscale-[0.4]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* GARAGES */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-steel via-ink to-ink" />
        <div className="hero-grid absolute inset-0 opacity-20" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <Wrench size={24} className="text-signal" />
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-signal">
                Workshops
              </p>
            </div>
            <h2 className="mt-4 text-5xl text-white lg:text-7xl">Gilgit.</h2>
            <p className="mt-6 max-w-2xl text-lg text-white/70">
              Three workshops, one team. Certified technicians, stocked parts
              and fast response times across the region.
            </p>
          </Reveal>

          <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
            {garages.map((g) => (
              <Item
                key={g.name}
                className="border-l-4 border-signal bg-steel/70 p-8 backdrop-blur"
              >
                <MapPin size={20} className="text-signal" />
                <h3 className="mt-6 text-2xl text-white">{g.name}</h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-widest text-white/60">
                  {g.city}
                </p>
                <p className="mt-4 text-sm text-white/75">{g.detail}</p>
              </Item>
            ))}
          </Stagger>

          <Reveal delay={0.2}>
            <div className="mt-14 aspect-[16/7] w-full overflow-hidden border-4 border-signal">
              <iframe
                title="Rehbr Garages — Gilgit"
                src="https://www.google.com/maps?q=Gilgit%2C%20Pakistan&output=embed"
                className="h-full w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
