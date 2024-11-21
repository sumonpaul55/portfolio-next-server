import { z } from "zod";

const projectValidationSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "name Is required" }),
    liveLink: z.string(),
    techonology: z.string({ required_error: "Technology is required" }),
    overview: z.any().optional(),
    image: z.string().optional(),
  }),
});
export const projectValidation = {
  projectValidationSchema,
};
