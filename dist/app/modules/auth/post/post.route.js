"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const authGaurd_1 = __importDefault(require("../../../middleware/authGaurd"));
const user_utils_1 = require("../../../utils/user.utils");
const validateRequest_1 = __importDefault(require("../../../middleware/validateRequest"));
const post_validation_1 = require("./post.validation");
const post_controller_1 = require("./post.controller");
const router = (0, express_1.Router)();
router.post("/", (0, authGaurd_1.default)(user_utils_1.USER_ROLE.ADMIN, user_utils_1.USER_ROLE.USER), (0, validateRequest_1.default)(post_validation_1.postValidation.createPostValidation), post_controller_1.postController.createPost);
router.get("/", post_controller_1.postController.getPosts);
router.get("/:id", post_controller_1.postController.getPostById);
exports.postRouter = router;
