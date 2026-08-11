import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { MapPin, Phone, Globe, Loader2, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { enquirySchema, type EnquiryValues } from "@/lib/enquiry-schema";
import { submitEnquiry } from "@/lib/enquiry.functions";
import { CAPABILITIES, COMPANY, MAP_EMBED_SRC } from "@/lib/site-content";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ChainSys India — Chennai Office" },
      {
        name: "description",
        content:
          "Contact Chain-Sys India Pvt Ltd in Ayanambakkam, Chennai. Call 044 3054 4100 or send an enquiry about data migration, governance and analytics.",
      },
      { property: "og:title", content: "Contact ChainSys India — Chennai Office" },
      {
        property: "og:description",
        content:
          "Reach the ChainSys India team in Chennai: 85 Ponniamman Nagar, Ayanambakkam, Chennai 600095. Phone 044 3054 4100.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: COMPANY.name,
          telephone: "+91 44 3054 4100",
          url: COMPANY.website,
          address: {
            "@type": "PostalAddress",
            streetAddress: "85 Ponniamman Nagar, Ayanambakam, 39 Poonniamman Nagar, Ayanambakkam",
            addressLocality: "Chennai",
            addressRegion: "Tamil Nadu",
            postalCode: "600095",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const EMPTY: EnquiryValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  interest: "",
  message: "",
};

const fieldClass =
  "mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/30";
const labelClass = "block text-sm font-medium text-foreground";

function ContactPage() {
  const send = useServerFn(submitEnquiry);
  const [values, setValues] = useState<EnquiryValues>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryValues, string>>>({});
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (key: keyof EnquiryValues) => (event: { target: { value: string } }) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = enquirySchema.safeParse(values);
    if (!parsed.success) {
      const next: Partial<Record<keyof EnquiryValues, string>> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof EnquiryValues;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    setPending(true);
    try {
      const result = await send({ data: parsed.data });
      if (result.ok) {
        setSent(true);
        setValues(EMPTY);
        toast.success("Thanks — your enquiry has reached our Chennai team.");
      } else {
        toast.error(result.error);
      }
    } catch {
      toast.error("Something went wrong. Please call us on " + COMPANY.phone + ".");
    } finally {
      setPending(false);
    }
  }

  return (
    <div>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
            Talk to ChainSys India
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Tell us about your systems, data volumes and timeline. We will come back with the
            relevant capability and a suggested next step.
          </p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-14 px-5 py-16 lg:grid-cols-[1.15fr_1fr]">
        <section aria-labelledby="enquiry-heading">
          <h2 id="enquiry-heading" className="font-display text-2xl font-semibold">
            Send an enquiry
          </h2>

          {sent ? (
            <div className="mt-8 rounded-md border border-border bg-card p-8 shadow-card">
              <CheckCircle2 className="size-7 text-primary" aria-hidden="true" />
              <p className="mt-4 font-display text-lg font-semibold">Enquiry received</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Thank you. Our team will reply by email shortly. For anything urgent, call{" "}
                <a href={COMPANY.phoneHref} className="text-primary hover:underline">
                  {COMPANY.phone}
                </a>
                .
              </p>
              <button
                type="button"
                onClick={() => setSent(false)}
                className="mt-6 text-sm font-medium text-primary hover:underline"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={values.name}
                    onChange={update("name")}
                    maxLength={100}
                    className={fieldClass}
                    autoComplete="name"
                  />
                  {errors.name && <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>}
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={values.email}
                    onChange={update("email")}
                    maxLength={255}
                    className={fieldClass}
                    autoComplete="email"
                  />
                  {errors.email && <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label className={labelClass} htmlFor="company">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    value={values.company}
                    onChange={update("company")}
                    maxLength={150}
                    className={fieldClass}
                    autoComplete="organization"
                  />
                  {errors.company && (
                    <p className="mt-1.5 text-xs text-destructive">{errors.company}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone <span className="text-muted-foreground">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={values.phone ?? ""}
                    onChange={update("phone")}
                    maxLength={30}
                    className={fieldClass}
                    autoComplete="tel"
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="interest">
                  Area of interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  value={values.interest}
                  onChange={update("interest")}
                  className={fieldClass}
                >
                  <option value="">Select an area</option>
                  {CAPABILITIES.map((capability) => (
                    <option key={capability.slug} value={capability.title}>
                      {capability.title}
                    </option>
                  ))}
                  <option value="Something else">Something else</option>
                </select>
                {errors.interest && (
                  <p className="mt-1.5 text-xs text-destructive">{errors.interest}</p>
                )}
              </div>

              <div>
                <label className={labelClass} htmlFor="message">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={update("message")}
                  maxLength={2000}
                  className={fieldClass}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={pending}
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy disabled:opacity-60"
              >
                {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
                {pending ? "Sending…" : "Send enquiry"}
              </button>
            </form>
          )}
        </section>

        <section aria-labelledby="office-heading">
          <h2 id="office-heading" className="font-display text-2xl font-semibold">
            Chennai office
          </h2>
          <address className="mt-8 space-y-5 text-sm not-italic">
            <p className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <span className="leading-relaxed">
                <span className="block font-medium text-foreground">{COMPANY.name}</span>
                {COMPANY.addressLines.map((line) => (
                  <span key={line} className="block text-muted-foreground">
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <p className="flex items-center gap-3">
              <Phone className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <a href={COMPANY.phoneHref} className="font-medium hover:text-primary">
                {COMPANY.phone}
              </a>
            </p>
            <p className="flex items-center gap-3">
              <Globe className="size-5 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={COMPANY.website}
                target="_blank"
                rel="noreferrer"
                className="font-medium hover:text-primary"
              >
                www.chainsys.ai
              </a>
            </p>
          </address>

          <div className="mt-8 overflow-hidden rounded-md border border-border shadow-card">
            <iframe
              title="Map showing the Chain-Sys India office in Ayanambakkam, Chennai"
              src={MAP_EMBED_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
