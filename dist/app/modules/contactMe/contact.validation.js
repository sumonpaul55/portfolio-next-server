"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactValidation = void 0;
const zod_1 = require("zod");
const contactDatavalidation = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"), // Name must be a non-empty string
    email: zod_1.z.string().email("Invalid email address"), // Email must be a valid email address
    message: zod_1.z.string().min(1, "Message is required"), // Message must be a non-empty string
});
exports.contactValidation = { contactDatavalidation };
