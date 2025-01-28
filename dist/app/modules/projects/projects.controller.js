"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const projects_service_1 = require("./projects.service");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const addProject = (0, catchAsync_1.default)(async (req, res) => {
    const result = await projects_service_1.projectService.addProjectDb({ ...req.body, image: req?.file?.path });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Project Added successfully",
        data: result,
    });
});
const getProject = (0, catchAsync_1.default)(async (req, res) => {
    const result = await projects_service_1.projectService.getProjectDb();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Project retrived successfully",
        data: result,
    });
});
const getProjectById = (0, catchAsync_1.default)(async (req, res) => {
    const result = await projects_service_1.projectService.getProjectByIdDb(req.params.id);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Project retrived successfully",
        data: result,
    });
});
exports.projectController = { addProject, getProject, getProjectById };
