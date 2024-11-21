"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectValidation = void 0;
const zod_1 = require("zod");
const projectValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "name Is required" }),
        liveLink: zod_1.z.string(),
        techonology: zod_1.z.string({ required_error: "Technology is required" }),
        overview: zod_1.z.any().optional(),
        image: zod_1.z.string().optional(),
    }),
});
exports.projectValidation = {
    projectValidationSchema,
};
