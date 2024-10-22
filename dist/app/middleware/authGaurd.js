"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("../errors/AppError"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
const user_mode_1 = require("../modules/user/user.mode");
const http_status_codes_1 = require("http-status-codes");
const authGaurd = (...requiredRoles) => {
    return (0, catchAsync_1.default)(async (req, res, next) => {
        const token = req.headers.authorization;
        // check if the token is missin
        if (!token) {
            throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "You are not authorized");
        }
        // checking if the given token is valid
        const decoded = jsonwebtoken_1.default.verify(token, config_1.config.JWT_ACCESSTOKEN);
        const { email, role } = decoded;
        // check if the user is exist
        const user = await user_mode_1.User.isUserExistByEmail(email);
        if (!user) {
            throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "You are not eligible for this oparation");
        }
        // checking
        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new AppError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "You are not eligible");
        }
        req.user = decoded;
        next();
    });
};
exports.default = authGaurd;
