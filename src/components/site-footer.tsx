import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Globe } from "lucide-react";

import { COMPANY, PRODUCTS } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface text-surface-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-display text-lg font-semibold">
            Chain<span className="text-primary">Sys</span> India
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Enterprise data management, integration, governance and analytics — delivered by the
            Chennai team of Chain-Sys Corporation, founded 1998.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Company
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/solutions" className="text-foreground/80 hover:text-primary">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/products" className="text-foreground/80 hover:text-primary">
                Products
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-foreground/80 hover:text-primary">
                About us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-foreground/80 hover:text-primary">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Platform
          </h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {PRODUCTS.map((product) => (
              <li key={product.name}>
                <Link to="/products" className="text-foreground/80 hover:text-primary">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Chennai office
          </h2>
          <address className="mt-4 space-y-3 text-sm not-italic text-muted-foreground">
            <p className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {COMPANY.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
            <p className="flex items-center gap-2.5">
              <Phone className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={COMPANY.phoneHref} className="hover:text-primary">
                {COMPANY.phone}
              </a>
            </p>
            <p className="flex items-center gap-2.5">
              <Globe className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <a
                href={COMPANY.website}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                chainsys.ai
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
