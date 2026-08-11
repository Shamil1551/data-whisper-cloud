import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

import { COMPANY } from "@/lib/site-content";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

function Wordmark() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="grid size-8 place-items-center rounded-sm bg-primary text-primary-foreground font-display text-sm font-bold">
        CS
      </span>
      <span className="font-display text-base font-semibold tracking-tight">
        Chain<span className="text-primary">Sys</span>
        <span className="ml-1.5 hidden text-[11px] font-normal uppercase tracking-[0.18em] text-muted-foreground sm:inline">
          India
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <Wordmark />

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-sm px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={COMPANY.phoneHref}
            className="hidden items-center gap-2 text-sm font-medium text-foreground lg:flex"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {COMPANY.phone}
          </a>
          <Link
            to="/contact"
            className="hidden rounded-sm bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-navy md:inline-flex"
          >
            Talk to us
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-sm border border-border md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              className="block rounded-sm px-2 py-2.5 text-sm text-muted-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={COMPANY.phoneHref}
            className="mt-1 block rounded-sm px-2 py-2.5 text-sm font-medium text-primary"
          >
            Call {COMPANY.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
