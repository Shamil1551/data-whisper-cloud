import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import { CAPABILITIES } from "@/lib/site-content";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Data Management Solutions | ChainSys India" },
      {
        name: "description",
        content:
          "Integration and migration, data quality and governance, catalog and lineage, archival and AI/ML insights — solutions delivered by ChainSys India in Chennai.",
      },
      { property: "og:title", content: "Data Management Solutions | ChainSys India" },
      {
        property: "og:description",
        content:
          "Six capability areas covering the full enterprise data lifecycle, from migration through governance to AI-powered insight.",
      },
    ],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  return (
    <div>
      <header className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Solutions</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold sm:text-5xl">
            Trusted data across the full lifecycle
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Each capability area below is delivered on the ChainSys Smart Data Platform, so
            migration, governance and analytics share the same models, rules and audit trail.
          </p>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5">
        {CAPABILITIES.map((capability, index) => (
          <section
            key={capability.slug}
            id={capability.slug}
            className="grid gap-8 border-b border-border py-14 lg:grid-cols-[1fr_1.2fr] lg:gap-16"
          >
            <div>
              <p className="font-display text-sm font-semibold text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                {capability.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {capability.summary}
              </p>
            </div>
            <ul className="space-y-4 lg:pt-14">
              {capability.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-sm leading-relaxed">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-display text-2xl font-semibold">
          Not sure where your programme should start?
        </h2>
        <Link
          to="/contact"
          className="inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-deep"
        >
          Ask our team
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </section>
    </div>
  );
}
