import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { absoluteUrl } from "@/lib/seo";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as
  | string
  | undefined;

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
      { property: "og:url", content: absoluteUrl("/contact") },
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/contact") }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
                      href="mailto:aqibjaveed508@gmail.com"
                      className="mt-1 block font-semibold hover:text-signal-deep"
                    >
                      aqibjaveed508@gmail.com
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
                      href="tel:+923468333522"
                      className="mt-1 block font-semibold hover:text-signal-deep"
                    >
                      +92 346 8333522
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
                onSubmit={async (e) => {
                  e.preventDefault();
                  setError(null);

                  if (!WEB3FORMS_ACCESS_KEY) {
                    setError(
                      "Form isn't configured yet — email us directly for now.",
                    );
                    return;
                  }

                  const form = e.currentTarget;
                  const formData = new FormData(form);
                  formData.append("access_key", WEB3FORMS_ACCESS_KEY);
                  formData.append("subject", "New project brief — Rehbr website");
                  formData.append("from_name", "Rehbr website");

                  setSending(true);
                  try {
                    const res = await fetch("https://api.web3forms.com/submit", {
                      method: "POST",
                      headers: { Accept: "application/json" },
                      body: formData,
                    });
                    const result = await res.json();
                    if (result.success) {
                      setSent(true);
                      form.reset();
                    } else {
                      setError("Something went wrong. Please try again or call us.");
                    }
                  } catch {
                    setError("Something went wrong. Please try again or call us.");
                  } finally {
                    setSending(false);
                  }
                }}
                className="border-4 border-ink bg-card p-8 lg:p-10"
              >
                <h3 className="font-display text-2xl uppercase">
                  Project brief
                </h3>
                <div className="diag-stripes mt-3 h-1.5 w-16" aria-hidden />

                {/* honeypot */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

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
                  disabled={sending}
                  className="group mt-8 inline-flex w-full items-center justify-center gap-2 bg-ink px-6 py-4 text-sm font-bold uppercase tracking-widest text-signal hover:bg-black disabled:opacity-60 sm:w-auto"
                >
                  {sending ? "Sending…" : sent ? "Message sent" : "Send message"}
                  {sending ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  )}
                </button>

                {sent && (
                  <p className="mt-4 text-sm text-signal-deep">
                    Thanks — operations will get back to you within one business day.
                  </p>
                )}
                {error && (
                  <p className="mt-4 text-sm text-destructive">{error}</p>
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
