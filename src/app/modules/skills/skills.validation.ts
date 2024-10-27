import { z } from "zod";

const skillsValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "skills name is required" }),
    description: z.string({ required_error: "Please provide skills description" }),
    image: z.string().optional(),
  }),
});
export const skillValidation = {
  skillsValidationSchema,
};
