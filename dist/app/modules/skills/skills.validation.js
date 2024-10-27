"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillValidation = void 0;
const zod_1 = require("zod");
const skillsValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "skills name is required" }),
        description: zod_1.z.string({ required_error: "Please provide skills description" }),
        image: zod_1.z.string().optional(),
    }),
});
exports.skillValidation = {
    skillsValidationSchema,
};
