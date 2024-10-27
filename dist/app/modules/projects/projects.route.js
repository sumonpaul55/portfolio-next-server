"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
const express_1 = require("express");
const authGaurd_1 = __importDefault(require("../../middleware/authGaurd"));
const user_utils_1 = require("../../utils/user.utils");
const multer_config_1 = require("../../config/multer.config");
const bodyParser_1 = require("../../middleware/bodyParser");
const projects_controller_1 = require("./projects.controller");
const router = (0, express_1.Router)();
router.post("/", (0, authGaurd_1.default)(user_utils_1.USER_ROLE.ADMIN), multer_config_1.multerUpload.single("image"), bodyParser_1.parseBody, projects_controller_1.projectController.addProject);
router.get("/", projects_controller_1.projectController.getProject);
router.get("/:id", projects_controller_1.projectController.getProjectById);
exports.projectRouter = router;
