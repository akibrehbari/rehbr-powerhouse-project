import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Cpu,
  Zap,
  Hammer,
  HardHat,
  Package,
  Truck,
  Wrench,
  Cog,
  Route as RouteIcon,
  ArrowUpRight,
  MapPin,
  ShieldCheck,
  Gauge,
  Handshake,
} from "lucide-react";

import { PageShell } from "@/components/site/PageShell";
import { Reveal, Stagger, Item } from "@/components/site/Reveal";
import { absoluteUrl } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Rehbr — General Supply Chain: Electronics, Engineering, Tools & More in Pakistan",
      },
      {
        name: "description",
        content:
          "Rehbr delivers electronics, engineering equipment, tools, construction materials, general goods and vehicles — one general supply chain across Pakistan.",
      },
      { property: "og:title", content: "Rehbr — Supply Chain, Engineered" },
      {
        property: "og:description",
        content:
          "A general supply chain for electronics, engineering, tools, construction and everyday goods.",
      },
      { property: "og:url", content: absoluteUrl("/") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: Home,
});

const services = [
  {
    icon: Cpu,
    title: "Electronics & Devices",
    body: "Sourcing, warehousing and last-mile delivery of consumer and industrial electronics.",
  },
  {
    icon: Zap,
    title: "Electrical & Engineering",
    body: "Industrial-grade electrical and engineering equipment moved on schedule, full chain of custody.",
  },
  {
    icon: Hammer,
    title: "Tools & Hardware",
    body: "Hand tools, power tools and industrial hardware, sourced and stocked reliably.",
  },
  {
    icon: HardHat,
    title: "Civil Engineering",
    body: "Construction materials and civil engineering supplies, delivered on project timelines.",
  },
  {
    icon: Package,
    title: "General Goods",
    body: "Consumer and general merchandise sourced, warehoused and distributed at scale.",
  },
  {
    icon: Truck,
    title: "Vehicles & Fleet",
    body: "Commercial and utility vehicles procured, inspected and delivered to your yard.",
  },
  {
    icon: Cog,
    title: "Spare Parts",
    body: "OEM and aftermarket parts kept in stock. Fast dispatch, low downtime.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    body: "In-house workshops with certified technicians for vehicles and equipment alike.",
  },
  {
    icon: RouteIcon,
    title: "Logistics & Distribution",
    body: "End-to-end logistics — dispatch, tracking, delivery and reporting.",
  },
];

function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <PageShell>
      {/* HERO */}
      <section
        ref={ref}
        className="relative isolate min-h-[92vh] overflow-hidden bg-ink text-white"
      >
        <motion.div
          style={{ y }}
          className="absolute inset-0 -z-10 bg-gradient-to-b from-steel via-ink to-ink"
          aria-hidden
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 30% 20%, var(--signal) 0%, transparent 55%)",
            }}
          />
        </motion.div>
        <div className="hero-grid absolute inset-0 -z-10 opacity-30" aria-hidden />

        <motion.div
          style={{ opacity }}
          className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40 lg:px-10 lg:pb-32"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="text-xs font-bold uppercase tracking-[0.5em] text-signal"
          >
            Rawalpindi · Gilgit · Pakistan
          </motion.p>

          <div className="mt-6 overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl leading-[0.9] text-white sm:text-8xl lg:text-[10rem]"
            >
              Supply Chain,
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 1.7, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-6xl leading-[0.9] text-signal sm:text-8xl lg:text-[10rem]"
            >
              Engineered.
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.0, duration: 0.6 }}
            className="mt-8 max-w-xl text-lg text-white/80"
          >
            Rehbr moves electronics, engineering equipment, tools, construction
            materials, general goods and vehicles — with the discipline of a
            specialist and the reach of a national operator.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 bg-signal px-7 py-4 text-sm font-bold uppercase tracking-widest text-ink transition-colors hover:bg-white"
            >
              Explore services
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-widest text-white hover:border-signal hover:text-signal"
            >
              Get a quote
            </Link>
          </motion.div>
        </motion.div>

        <div className="diag-stripes absolute inset-x-0 bottom-0 h-3" aria-hidden />
      </section>

      {/* INTRO STRIP */}
      <section className="bg-signal text-ink">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3 lg:px-10">
          {[
            { k: "9", v: "Service lines" },
            { k: "4", v: "Locations in Pakistan" },
            { k: "24/7", v: "Dispatch operations" },
          ].map((s) => (
            <div key={s.v} className="flex items-baseline gap-4">
              <span className="font-display text-5xl">{s.k}</span>
              <span className="text-sm font-semibold uppercase tracking-widest">
                {s.v}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-signal-deep">
                About Rehbr
              </p>
              <h2 className="mt-4 text-5xl lg:text-6xl">
                Built for the whole supply chain.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground">
                Rehbr is a general supply chain management company — moving
                electronics, engineering equipment, tools, construction
                materials, general goods and vehicles for businesses across
                Pakistan. From our head office in Rawalpindi to our workshops
                in Gilgit, we run a tight operation on hard-worn ground.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                We don't chase trends. We chase throughput, reliability and
                partnerships that outlast the equipment we handle.
              </p>
              <Link
                to="/about"
                className="mt-8 inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-bold uppercase tracking-widest text-ink hover:border-signal-deep hover:text-signal-deep"
              >
                Read our story <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
            <Reveal className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-signal">
                What we move
              </p>
              <h2 className="mt-4 text-5xl lg:text-7xl text-white">
                Nine lines. One operation.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 bg-signal px-6 py-3 text-sm font-bold uppercase tracking-widest text-ink hover:bg-white"
              >
                All services
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          </div>

          <Stagger
            className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-3"
            gap={0.06}
          >
            {services.map((s, i) => (
              <Item key={s.title} className="group relative bg-ink p-8">
                <div className="flex items-start justify-between">
                  <s.icon size={36} className="text-signal" />
                  <span className="font-mono text-xs text-white/40">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-8 text-2xl text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {s.body}
                </p>
                <div className="mt-6 h-px w-10 bg-signal transition-all duration-300 group-hover:w-full" />
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      {/* WHY US - parallax */}
      <WhyUs />

      {/* LOCATIONS PREVIEW */}
      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-signal-deep">
                On the ground
              </p>
              <h2 className="mt-4 text-5xl lg:text-6xl">Where we operate.</h2>
              <p className="mt-6 text-muted-foreground">
                Head office in Rawalpindi. Three workshops in Gilgit servicing
                vehicles and equipment across the northern corridor.
              </p>
              <Link
                to="/locations"
                className="mt-8 inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-sm font-bold uppercase tracking-widest text-ink hover:border-signal-deep hover:text-signal-deep"
              >
                See all locations <ArrowUpRight size={16} />
              </Link>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <Stagger className="grid gap-4 sm:grid-cols-2">
              {[
                { city: "Rawalpindi", label: "Head Office", addr: "C 14/8, Satellite Town" },
                { city: "Gilgit", label: "Workshop", addr: "I-10 Auto Market" },
                { city: "Gilgit", label: "Workshop", addr: "PIA Link Road" },
                { city: "Gilgit", label: "Workshop", addr: "Jutial Bus Stand" },
              ].map((l) => (
                <Item
                  key={l.addr}
                  className="border border-border bg-card p-6 transition-colors hover:border-signal-deep"
                >
                  <MapPin size={20} className="text-signal-deep" />
                  <p className="mt-4 font-display text-2xl">{l.city}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {l.label}
                  </p>
                  <p className="mt-4 text-sm text-foreground/80">{l.addr}</p>
                </Item>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-signal text-ink">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <h2 className="text-5xl lg:text-7xl">
                Move it with Rehbr.
              </h2>
              <p className="mt-6 max-w-xl text-lg">
                Tell us the load, the route and the deadline. We'll build the
                supply chain around it.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-ink px-8 py-5 text-sm font-bold uppercase tracking-widest text-signal hover:bg-black"
              >
                Start a project
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="diag-stripes absolute inset-x-0 bottom-0 h-3" aria-hidden />
      </section>
    </PageShell>
  );
}

function WhyUs() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  const pillars = [
    {
      icon: ShieldCheck,
      title: "Dependable",
      body: "Fixed processes. No surprises on the delivery note.",
    },
    {
      icon: Gauge,
      title: "Efficient",
      body: "Right-sized fleets and lean routing. Every trip earns its diesel.",
    },
    {
      icon: Handshake,
      title: "Partners",
      body: "Long-term contracts backed by transparent reporting.",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-steel text-white"
    >
      <motion.div style={{ y }} className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-steel to-ink" />
        <div className="hero-grid absolute inset-0 opacity-20" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <Reveal className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.4em] text-signal">
            Why Rehbr
          </p>
          <h2 className="mt-4 text-5xl text-white lg:text-7xl">
            Consistency, quality, partnership.
          </h2>
        </Reveal>

        <Stagger className="mt-16 grid gap-8 md:grid-cols-3">
          {pillars.map((p) => (
            <Item
              key={p.title}
              className="border-l-4 border-signal bg-ink/60 p-8 backdrop-blur"
            >
              <p.icon size={32} className="text-signal" />
              <h3 className="mt-6 text-3xl text-white">{p.title}</h3>
              <p className="mt-3 text-white/70">{p.body}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
