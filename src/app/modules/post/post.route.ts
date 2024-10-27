import { Router } from "express";
import { postValidation } from "./post.validation";
import { postController } from "./post.controller";
import authGaurd from "../../middleware/authGaurd";
import { USER_ROLE } from "../../utils/user.utils";
import validateRequest from "../../middleware/validateRequest";

const router = Router();

router.post("/", authGaurd(USER_ROLE.ADMIN, USER_ROLE.USER), validateRequest(postValidation.createPostValidation), postController.createPost);
router.get("/", postController.getPosts);
router.get("/:id", postController.getPostById);
export const postRouter = router;
