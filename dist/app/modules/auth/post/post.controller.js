"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../utils/sendResponse"));
const post_service_1 = require("./post.service");
const createPost = (0, catchAsync_1.default)(async (req, res) => {
    const result = await post_service_1.postService.createPostDb(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Post created succesfully",
        data: result,
    });
});
const getPosts = (0, catchAsync_1.default)(async (req, res) => {
    const result = await post_service_1.postService.getAllPost();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "All Post Retrived successfully",
        data: result,
    });
});
const getPostById = (0, catchAsync_1.default)(async (req, res) => {
    const result = await post_service_1.postService.getPostById(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Post Retrived successfully",
        data: result,
    });
});
exports.postController = {
    createPost,
    getPosts,
    getPostById,
};
