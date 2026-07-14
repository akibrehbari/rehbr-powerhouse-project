import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Rehbr" },
      {
        name: "description",
        content:
          "Get in touch with Rehbr. Head office in Satellite Town, Rawalpindi. Talk to operations about your supply chain, fleet or maintenance needs.",
      },
      { property: "og:title", content: "Contact — Rehbr" },
      {
        property: "og:description",
        content: "Talk to Rehbr operations about your next project.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Talk to operations."
        intro="Tell us the load, the route and the deadline. We'll come back with a plan."
      />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Info */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="text-4xl lg:text-5xl">Direct line.</h2>
              <p className="mt-4 text-muted-foreground">
                No forms in the way. If it's urgent, call.
              </p>

              <ul className="mt-10 space-y-6">
                <li className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center bg-signal text-ink">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Head Office
                    </p>
                    <p className="mt-1 font-semibold">
                      C 14/8, Satellite Town, Rawalpindi
                    </p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center bg-signal text-ink">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Email
                    </p>
                    <a
                      href="mailto:info@rehbr.com"
                      className="mt-1 block font-semibold hover:text-signal-deep"
                    >
                      info@rehbr.com
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center bg-signal text-ink">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      Phone
                    </p>
                    <a
                      href="tel:+92000000000"
                      className="mt-1 block font-semibold hover:text-signal-deep"
                    >
                      +92 000 000 0000
                    </a>
                  </div>
                </li>
              </ul>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="border-4 border-ink bg-card p-8 lg:p-10"
              >
                <h3 className="font-display text-2xl uppercase">
                  Project brief
                </h3>
                <div className="diag-stripes mt-3 h-1.5 w-16" aria-hidden />

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Company" name="company" />
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>

                <div className="mt-6">
                  <Field label="Service line" name="service" />
                </div>

                <div className="mt-6">
                  <label className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    Details
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full border-2 border-input bg-background px-4 py-3 text-base focus:border-ink focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 text-sm font-bold uppercase tracking-widest text-signal hover:bg-black sm:w-auto"
                >
                  {sent ? "Message received" : "Send message"}
                  <Send
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </button>

                {sent && (
                  <p className="mt-4 text-sm text-signal-deep">
                    Thanks — operations will get back to you within one business day.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-xs font-bold uppercase tracking-widest text-muted-foreground"
      >
        {label} {required && <span className="text-signal-deep">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full border-2 border-input bg-background px-4 py-3 text-base focus:border-ink focus:outline-none"
      />
    </div>
  );
}
