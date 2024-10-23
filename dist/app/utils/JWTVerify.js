"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createToken = void 0;
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AppError_1 = __importDefault(require("../errors/AppError"));
const http_status_codes_1 = require("http-status-codes");
// interface TokenPayload {
//   _id?: string; // Assuming _id can be optional
//   name: string;
//   email: string;
//   phone: string;
//   role: string;
//   profilePhoto?: string; // Optional if sometimes not provided
// }
const createToken = (JwtPayload, secret, expireIn) => {
    return jsonwebtoken_1.default.sign(JwtPayload, secret, { expiresIn: expireIn });
};
exports.createToken = createToken;
const verifyToken = (token, secret) => {
    try {
        return jsonwebtoken_1.default.verify(token, secret);
    }
    catch (error) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "you are not authorized");
    }
};
exports.verifyToken = verifyToken;
