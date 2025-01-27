"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactRouter = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const contact_validation_1 = require("./contact.validation");
const contact_controller_1 = require("./contact.controller");
const authGaurd_1 = __importDefault(require("../../middleware/authGaurd"));
const user_utils_1 = require("../../utils/user.utils");
const router = (0, express_1.Router)();
router.post("/contactme", (0, validateRequest_1.default)(contact_validation_1.contactValidation.contactDatavalidation), contact_controller_1.contactController.addContactData);
router.get("/getmessage", (0, authGaurd_1.default)(user_utils_1.USER_ROLE.ADMIN), contact_controller_1.contactController.getMessage);
exports.contactRouter = router;
