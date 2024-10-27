"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillsRoutes = void 0;
const express_1 = require("express");
const authGaurd_1 = __importDefault(require("../../middleware/authGaurd"));
const user_utils_1 = require("../../utils/user.utils");
const multer_config_1 = require("../../config/multer.config");
const bodyParser_1 = require("../../middleware/bodyParser");
const skills_controller_1 = require("./skills.controller");
const router = (0, express_1.Router)();
router.post("/", (0, authGaurd_1.default)(user_utils_1.USER_ROLE.ADMIN), multer_config_1.multerUpload.single("image"), bodyParser_1.parseBody, skills_controller_1.skillsController.addSkills);
router.get("/", skills_controller_1.skillsController.getSkills);
exports.skillsRoutes = router;
