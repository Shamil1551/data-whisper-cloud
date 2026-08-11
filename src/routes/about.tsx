import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { COMPANY, PARTNERS } from "@/lib/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ChainSys India — Founded 1998, Chennai Delivery Centre" },
      {
        name: "description",
        content:
          "Chain-Sys Corporation was founded in 1998 and is headquartered in Rocklin, California, with offices in Michigan and Chennai, India.",
      },
      { property: "og:title", content: "About ChainSys India — Founded 1998" },
      {
        property: "og:description",
        content:
          "A technology company specialising in enterprise data management, cloud data integration and ERP platform implementations.",
      },
    ],
  }),
  component: AboutPage,
});

const FACTS = [
  { label: "Founded", value: "1998" },
  { label: "Headquarters", value: "Rocklin, California" },
  { label: "Global offices", value: "California, Michigan, Chennai" },
  { label: "Focus", value: "Enterprise data & ERP platforms" },
] as const;

function AboutPage() {
  return (
    <div>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About us</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">
            Enterprise data specialists since 1998
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            ChainSys (Chain-Sys Corporation) is a technology company specialising in enterprise data
            management, cloud data integration and ERP platform implementations. {COMPANY.name} is
            the India arm, operating from Ayanambakkam, Chennai.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <dl className="grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((fact) => (
            <div key={fact.label} className="bg-card p-7">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {fact.label}
              </dt>
              <dd className="mt-3 font-display text-lg font-semibold">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 border-t border-border px-5 py-16 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">What we do</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We help enterprises consolidate, cleanse and govern the data behind their core business
            systems, then keep it flowing reliably between them. That covers large-scale migrations
            onto modern cloud ERP, ongoing integration between applications, master data and quality
            governance, archival of retired systems, and analytics on top of the result.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Everything is delivered on our own Smart Data Platform, so the models and rules built
            during a programme continue to serve the business afterwards.
          </p>
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">Partner ecosystem</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            We maintain deep integration partnerships with major enterprise software ecosystems,
            which is why our accelerators cover thousands of standard objects out of the box.
          </p>
          <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
            {PARTNERS.map((partner) => (
              <li key={partner} className="font-display text-lg font-semibold text-foreground/70">
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="font-display text-2xl font-semibold">Work with the Chennai team</h2>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy"
          >
            Contact us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
