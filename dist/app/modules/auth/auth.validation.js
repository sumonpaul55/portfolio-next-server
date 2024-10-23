"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidation = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "User name is required" }),
        email: zod_1.z.string({ required_error: "User email is required" }).email({ message: "Provide a valid email" }),
        phone: zod_1.z.string({ required_error: "Phone is required" }),
        address: zod_1.z.string().optional(),
        role: zod_1.z.string({ required_error: "role is required" }),
        password: zod_1.z.string(),
        profilePhoto: zod_1.z.string({ required_error: "Profile image is required" }).optional(),
    }),
});
const updateUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "User name is required" }).optional(),
        email: zod_1.z.string({ required_error: "User email is required" }).email({ message: "Provide a valid email" }).optional(),
        phone: zod_1.z.string({ required_error: "Phone is required" }).optional(),
        address: zod_1.z.string().optional().optional(),
        role: zod_1.z.string({ required_error: "role is required" }).optional(),
        profilePhoto: zod_1.z.string({ required_error: "Profile image is required" }).optional(),
    }),
});
exports.authValidation = {
    userValidationSchema,
    updateUserValidationSchema,
};
