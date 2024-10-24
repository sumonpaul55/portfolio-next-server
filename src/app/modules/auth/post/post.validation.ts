import { z } from "zod";

const createPostValidation = z.object({
  body: z.object({
    title: z.string({ required_error: "Post title required" }),
    post: z.any(),
    userId: z.string({ required_error: "User id required" }),
    category: z.string({ required_error: "Post category is required" }),
  }),
});

export const postValidation = {
  createPostValidation,
};
