"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postValidation = void 0;
const zod_1 = require("zod");
const createPostValidation = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({ required_error: "Post title required" }),
        post: zod_1.z.any(),
        userId: zod_1.z.string({ required_error: "User id required" }),
        category: zod_1.z.string({ required_error: "Post category is required" }),
    }),
});
exports.postValidation = {
    createPostValidation,
};
