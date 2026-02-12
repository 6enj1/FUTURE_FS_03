import { z } from "zod/v4";

export const inquirySchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long"),
  email: z
    .string()
    .email("Invalid email address")
    .optional()
    .or(z.literal("")),
  service: z.string().optional(),
  message: z
    .string()
    .min(5, "Message must be at least 5 characters")
    .max(1000, "Message is too long"),
  // Honeypot — must be empty
  website: z.string().max(0, "Bot detected").optional(),
});

export type InquiryData = z.infer<typeof inquirySchema>;
