"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestCookies = void 0;
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const validateRequest = (zodSchema) => {
    return (0, catchAsync_1.default)(async (req, res, next) => {
        await zodSchema.parseAsync({
            body: req.body,
        });
        next();
    });
};
const validateRequestCookies = (schema) => {
    return (0, catchAsync_1.default)(async (req, res, next) => {
        const parsedCookies = await schema.parseAsync({
            cookies: req.cookies,
        });
        req.cookies = parsedCookies.cookies;
        next();
    });
};
exports.validateRequestCookies = validateRequestCookies;
exports.default = validateRequest;
