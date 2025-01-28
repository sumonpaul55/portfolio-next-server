"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const contact_service_1 = require("./contact.service");
const addContactData = (0, catchAsync_1.default)(async (req, res) => {
    const result = await contact_service_1.contactService.addContactDataDb(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Form submitted successfully",
        data: result
    });
});
const getMessage = (0, catchAsync_1.default)(async (req, res) => {
    const result = await contact_service_1.contactService.getContactMessage(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "All message retrive successfully",
        data: result
    });
});
exports.contactController = {
    addContactData, getMessage
};
