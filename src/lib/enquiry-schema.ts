import { z } from "zod";

export const enquirySchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
  company: z.string().trim().min(2, "Please enter your company").max(150),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  interest: z.string().trim().min(2, "Please select an area of interest").max(120),
  message: z.string().trim().min(10, "Tell us a little more (10+ characters)").max(2000),
});

export type EnquiryValues = z.infer<typeof enquirySchema>;
