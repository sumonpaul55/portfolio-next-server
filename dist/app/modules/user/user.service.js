"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_mode_1 = require("./user.mode");
const registerUser = async (payload) => {
    const isExistUser = await user_mode_1.User.isUserExistByEmail(payload.email);
    if (isExistUser) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "User already exist");
    }
    return await user_mode_1.User.create(payload);
};
exports.userService = {
    registerUser,
};
