import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Database, GitCompareArrows, ShieldCheck, Network, Archive, Sparkles } from "lucide-react";

import heroImage from "@/assets/hero-data.jpg";
import platformImage from "@/assets/platform.jpg";
import { CAPABILITIES, PARTNERS, PRODUCTS } from "@/lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChainSys India — Enterprise Data Management & Integration" },
      {
        name: "description",
        content:
          "Chain-Sys India Pvt Ltd, Chennai: enterprise data management, integration and migration, data quality, catalog and lineage, archival and AI/ML insights.",
      },
      { property: "og:title", content: "ChainSys India — Enterprise Data Management & Integration" },
      {
        property: "og:description",
        content:
          "Unlock value from your data with the ChainSys Smart Data Platform — dataZap, dataZen and dataZense, delivered from Chennai.",
      },
    ],
  }),
  component: HomePage,
});

const ICONS = [Database, GitCompareArrows, ShieldCheck, Network, Archive, Sparkles];

function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-navy text-primary-foreground">
        <img
          src={heroImage}
          alt=""
          width={1600}
          height={1000}
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover opacity-45"
        />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:py-32">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary-foreground/70">
            Chain-Sys India Pvt Ltd &middot; Chennai
          </p>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Unlock value from your data
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
            Empower your teams with trusted, real-time data to drive smarter decisions and
            accelerate growth — on one AI-powered Smart Data Platform for migration, integration,
            governance and analytics.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-primary-foreground px-6 py-3 text-sm font-semibold text-navy transition-opacity hover:opacity-90"
            >
              Talk to our Chennai team
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:py-24">
        <h2 className="max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
          Everything your enterprise data estate needs
        </h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((capability, index) => {
            const Icon = ICONS[index] ?? Database;
            return (
              <article key={capability.slug} className="bg-card p-7">
                <Icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg font-semibold">{capability.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {capability.summary}
                </p>
              </article>
            );
          })}
        </div>
        <div className="mt-10">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Explore solutions in detail
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Smart Data Platform
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
              One AI-powered platform, three product families
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              The ChainSys Smart Data Platform handles end-to-end data needs — from the first
              legacy extract to the governed dashboard your board reviews. Deep integration
              partnerships with Oracle, SAP and Salesforce mean thousands of objects work on day one.
            </p>
            <ul className="mt-8 space-y-5">
              {PRODUCTS.map((product) => (
                <li key={product.name} className="border-l-2 border-primary pl-4">
                  <p className="font-display text-base font-semibold">{product.name}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy"
              >
                See the platform
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
          <img
            src={platformImage}
            alt="Layered illustration of the ChainSys Smart Data Platform architecture"
            width={1400}
            height={900}
            loading="lazy"
            className="rounded-md shadow-card"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Integration partnerships
        </p>
        <ul className="mt-6 flex flex-wrap items-center gap-x-10 gap-y-4">
          {PARTNERS.map((partner) => (
            <li key={partner} className="font-display text-xl font-semibold text-foreground/70">
              {partner}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Ready to put your data to work?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tell us about your systems and timeline. Our Chennai team will get back to you.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy"
          >
            Start a conversation
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
