import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

import { enquirySchema } from "./enquiry-schema";

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => enquirySchema.parse(data))
  .handler(async ({ data }) => {
    const url = process.env["SUPABASE_URL"];
    const key = process.env["SUPABASE_PUBLISHABLE_KEY"];
    if (!url || !key) {
      return { ok: false as const, error: "Enquiry service is not configured." };
    }

    const supabase = createClient(url, key, {
      auth: { persistSession: false },
      global: {
        fetch: (input: RequestInfo | URL, init?: RequestInit) => {
          const headers = new Headers(init?.headers);
          if (key.startsWith("sb_") && headers.get("Authorization") === `Bearer ${key}`) {
            headers.delete("Authorization");
          }
          headers.set("apikey", key);
          return fetch(input, { ...init, headers });
        },
      },
    });

    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      company: data.company,
      phone: data.phone ?? null,
      interest: data.interest,
      message: data.message,
    });

    if (error) {
      console.error("enquiry insert failed", error.message);
      return { ok: false as const, error: "We could not save your enquiry. Please try again." };
    }

    return { ok: true as const };
  });

export type EnquiryInput = z.infer<typeof enquirySchema>;
