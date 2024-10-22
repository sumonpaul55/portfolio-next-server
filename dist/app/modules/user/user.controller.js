"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const http_status_1 = require("http-status");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const user_service_1 = require("./user.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const registerUser = (0, catchAsync_1.default)(async (req, res) => {
    if (!req.file) {
        throw new AppError_1.default(http_status_1.httpStatus.NOT_FOUND, "Image is missing");
    }
    const result = await user_service_1.userService.registerUser({ ...req?.body, profilePhoto: req?.file?.path });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.httpStatus.OK,
        success: true,
        message: "User Create successfully",
        data: result,
    });
});
exports.userController = {
    registerUser,
};
