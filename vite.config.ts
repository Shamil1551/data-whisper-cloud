import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  // The Lovable config wrapper defaults Nitro to the Cloudflare Workers preset, which produces
  // a `wrangler`-shaped build Vercel can't run. This app deploys to Vercel, so pin that preset
  // explicitly instead of relying on autodetection.
  nitro: {
    preset: "vercel",
  },
});
