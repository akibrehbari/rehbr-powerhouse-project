import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import {
  Cpu,
  Zap,
  Hammer,
  HardHat,
  Package,
  Truck,
  Cog,
  Wrench,
  Route as RouteIcon,
  ArrowUpRight,
} from "lucide-react";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — General Supply Chain, Sourcing & Logistics | Rehbr" },
      {
        name: "description",
        content:
          "Rehbr services: electronics, engineering equipment, tools, construction materials, general goods, vehicles, spare parts, maintenance and distribution.",
      },
      { property: "og:title", content: "Services — Rehbr" },
      {
        property: "og:description",
        content: "Nine service lines, one accountable supply chain operation.",
      },
      { property: "og:url", content: absoluteUrl("/services") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/services") }],
  }),
  component: Services,
});

const services = [
  {
    icon: Cpu,
    title: "Electronics & Devices",
    body: "From consumer electronics to industrial devices, we handle procurement, warehousing, quality checks and delivery. Sensitive shipments, packed and moved with care.",
    bullets: ["OEM sourcing", "Secure warehousing", "Serial-level tracking"],
  },
  {
    icon: Zap,
    title: "Electrical & Engineering Equipment",
    body: "Industrial-grade electrical and engineering equipment — panels, cabling, switchgear and machinery — supplied to sites on schedule with full chain of custody.",
    bullets: ["Bulk supply", "Project logistics", "Site-ready delivery"],
  },
  {
    icon: Hammer,
    title: "Tools & Industrial Hardware",
    body: "Hand tools, power tools and industrial hardware sourced and stocked for workshops, contractors and job sites, with reliable restocking cycles.",
    bullets: ["Bulk & retail sourcing", "Stocked inventory", "Fast restocking"],
  },
  {
    icon: HardHat,
    title: "Civil Engineering & Construction Materials",
    body: "Construction materials and civil engineering supplies moved from source to site — coordinated around project timelines, not the other way round.",
    bullets: ["Project sourcing", "Site delivery", "Timeline coordination"],
  },
  {
    icon: Package,
    title: "General Goods & Consumer Products",
    body: "General merchandise and consumer products sourced, warehoused and distributed at scale, for retailers and distributors who need it done reliably.",
    bullets: ["Wholesale sourcing", "Warehousing", "Distribution"],
  },
  {
    icon: Truck,
    title: "Vehicles & Fleet",
    body: "Commercial and utility vehicles sourced, inspected and delivered. Whether it's a single unit or a full fleet, we handle the paperwork and the wheels.",
    bullets: ["Fleet procurement", "Pre-delivery inspection", "Documentation"],
  },
  {
    icon: Cog,
    title: "Spare Parts & Components",
    body: "OEM and aftermarket parts in stock and moving. Low downtime, fast dispatch and a supply chain built around your maintenance schedule.",
    bullets: ["OEM & aftermarket", "24-hour dispatch", "Warranty support"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Technical Support",
    body: "In-house workshops staffed with certified technicians. Scheduled servicing, breakdown response and repairs for vehicles and equipment alike.",
    bullets: ["Scheduled servicing", "Breakdown response", "Technical support"],
  },
  {
    icon: RouteIcon,
    title: "Logistics & Distribution",
    body: "End-to-end logistics across every category we move — dispatch planning, live tracking, delivery and transparent reporting.",
    bullets: ["Dispatch planning", "Live tracking", "Transparent reporting"],
  },
];

function Services() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Capabilities"
        title="Nine service lines, one operation."
        intro="From electronics to construction materials, tools to vehicles — everything Rehbr does connects back to a single principle: keep the load moving, keep the customer informed."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="space-y-16 lg:space-y-24">
          {services.map((s, i) => (
            <Reveal key={s.title}>
              <article className="grid gap-8 border-t border-border pt-16 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-1">
                  <span className="font-mono text-xs text-muted-foreground">
                    0{i + 1}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <s.icon size={44} className="text-signal-deep" />
                  <h2 className="mt-6 text-4xl lg:text-5xl">{s.title}</h2>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-lg text-muted-foreground">{s.body}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                    {s.bullets.map((b) => (
                      <li
                        key={b}
                        className="border-l-2 border-signal pl-3 text-sm font-semibold uppercase tracking-wide"
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 py-20 lg:flex-row lg:items-center lg:px-10">
          <h2 className="text-4xl lg:text-6xl">
            <span className="text-signal">Right load.</span> Right route.
          </h2>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-signal px-7 py-4 text-sm font-bold uppercase tracking-widest text-ink hover:bg-white"
          >
            Talk to operations
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
        <div className="diag-stripes h-3 w-full" aria-hidden />
      </section>
    </PageShell>
  );
}
