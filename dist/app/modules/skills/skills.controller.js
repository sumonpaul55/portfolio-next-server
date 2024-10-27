"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillsController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const skills_service_1 = require("./skills.service");
const addSkills = (0, catchAsync_1.default)(async (req, res) => {
    const result = await skills_service_1.skillsService.addSkillsDB({ ...req.body, image: req?.file?.path });
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Skills created successfully",
        data: result,
    });
});
const getSkills = (0, catchAsync_1.default)(async (req, res) => {
    const result = await skills_service_1.skillsService.getAllSkills();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Skills retrived successfully",
        data: result,
    });
});
exports.skillsController = {
    addSkills,
    getSkills,
};
