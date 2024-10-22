"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const multer_config_1 = require("../../config/multer.config");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const user_validation_1 = require("./user.validation");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
router.post("/register", multer_config_1.multerUpload.single("image"), (0, validateRequest_1.default)(user_validation_1.userValidation.userValidationSchema), user_controller_1.userController.registerUser);
exports.userRoute = router;
