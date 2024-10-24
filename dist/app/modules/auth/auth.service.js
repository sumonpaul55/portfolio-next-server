"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authService = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_mode_1 = require("../user/user.mode");
const JWTVerify_1 = require("../../utils/JWTVerify");
const config_1 = require("../../config");
const registerUser = async (payload) => {
    const isExistUser = await user_mode_1.User.isUserExistByEmail(payload.email);
    if (isExistUser) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "User already exist");
    }
    const newUser = await user_mode_1.User.create(payload);
    // create token after register
    const JwtPayload = {
        _id: newUser?._id,
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
        profilePhoto: newUser?.profilePhoto,
    };
    const accessToken = (0, JWTVerify_1.createToken)(JwtPayload, config_1.config.JWT_ACCESS_TOKEN_SECRET, config_1.config.JWT_ACCESS_EXPIRES_IN);
    // const refreshToken = createToken(JwtPayload, config.JWT_REFRESH_SECRET as string, config.JWT_REFRESH_EXPIRES_IN as string);
    return { accessToken };
};
const loginUserDB = async (payload) => {
    const isExistUser = await user_mode_1.User.isUserExistByEmail(payload.email);
    if (!isExistUser) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.BAD_REQUEST, "User not found");
    }
    // ispassword mathched
    const passwordMatched = await user_mode_1.User.isPasswordMatched(payload.password, isExistUser?.password);
    if (!passwordMatched) {
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Password does not matched");
    }
    // create token after register
    const JwtPayload = {
        _id: isExistUser?._id,
        name: isExistUser.name,
        email: isExistUser.email,
        phone: isExistUser.phone,
        role: isExistUser.role,
        profilePhoto: isExistUser?.profilePhoto,
    };
    const accessToken = (0, JWTVerify_1.createToken)(JwtPayload, config_1.config.JWT_ACCESS_TOKEN_SECRET, config_1.config.JWT_ACCESS_EXPIRES_IN);
    // const refreshToken = createToken(JwtPayload, config.JWT_REFRESH_SECRET as string, config.JWT_REFRESH_EXPIRES_IN as string);
    return { accessToken };
};
exports.authService = {
    registerUser,
    loginUserDB,
};
