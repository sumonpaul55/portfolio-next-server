import { z } from "zod";

const userValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "User name is required" }),
    email: z.string({ required_error: "User email is required" }).email({ message: "Provide a valid email" }),
    phone: z.string({ required_error: "Phone is required" }),
    address: z.string().optional(),
    role: z.string({ required_error: "role is required" }).optional(),
    password: z.string(),
    profilePhoto: z.string({ required_error: "Profile image is required" }).optional(),
  }),
});
const updateUserValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "User name is required" }).optional(),
    email: z.string({ required_error: "User email is required" }).email({ message: "Provide a valid email" }).optional(),
    phone: z.string({ required_error: "Phone is required" }).optional(),
    address: z.string().optional().optional(),
    role: z.string({ required_error: "role is required" }).optional(),
    profilePhoto: z.string({ required_error: "Profile image is required" }).optional(),
  }),
});

const loginValidation = z.object({
  body: z.object({
    email: z.string({ required_error: "User email is required" }).email({ message: "Provide a valid email" }),
    password: z.string({ required_error: "Password is required" }),
  }),
});

export const authValidation = {
  userValidationSchema,
  updateUserValidationSchema,
  loginValidation,
};
