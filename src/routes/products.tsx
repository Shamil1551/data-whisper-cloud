import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import platformImage from "@/assets/platform.jpg";
import { PRODUCTS } from "@/lib/site-content";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Smart Data Platform: dataZap, dataZen, dataZense | ChainSys India" },
      {
        name: "description",
        content:
          "The ChainSys Smart Data Platform: dataZap for migration and integration, dataZen for master data and quality, dataZense for analytics and cataloging.",
      },
      {
        property: "og:title",
        content: "Smart Data Platform: dataZap, dataZen, dataZense | ChainSys India",
      },
      {
        property: "og:description",
        content:
          "One AI-powered platform for end-to-end enterprise data needs, with deep Oracle, SAP and Salesforce integration.",
      },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div>
      <header className="border-b border-border bg-navy text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 sm:py-20 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Smart Data Platform
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold sm:text-5xl">
              Three products, one governed foundation
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85">
              The Smart Data Platform is an AI-powered platform designed to handle end-to-end data
              needs. Its three product families share metadata, quality rules and lineage, so work
              done during migration keeps paying off in governance and analytics.
            </p>
          </div>
          <img
            src={platformImage}
            alt="Illustration of the ChainSys Smart Data Platform layers"
            width={1400}
            height={900}
            loading="lazy"
            className="rounded-md"
          />
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-20 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <article
            key={product.name}
            className="flex flex-col rounded-md border border-border bg-card p-8 shadow-card"
          >
            <h2 className="font-display text-2xl font-semibold text-primary">{product.name}</h2>
            <p className="mt-2 text-sm font-medium text-foreground">{product.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {product.description}
            </p>
            <ul className="mt-6 space-y-3 border-t border-border pt-6 text-sm">
              {product.points.map((point) => (
                <li key={point} className="flex gap-2.5">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              See the platform against your own systems
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your ERP, CRM and cloud landscape and we will walk through a relevant scenario.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy"
          >
            Request a walkthrough
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
