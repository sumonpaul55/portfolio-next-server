import { z } from "zod";

const contactDatavalidation = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"), // Name must be a non-empty string
    email: z.string().email("Invalid email address"), // Email must be a valid email address
    message: z.string().min(1, "Message is required"), // Message must be a non-empty string
    phone: z.string().min(1, "Phone is required"), // Phone must be a non-empty string
  })
});


export const contactValidation = { contactDatavalidation }