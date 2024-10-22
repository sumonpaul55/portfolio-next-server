import { Router } from "express";
import { multerUpload } from "../../config/multer.config";
import validateRequest from "../../middleware/validateRequest";
import { userValidation } from "./user.validation";
import { userController } from "./user.controller";

const router = Router();

router.post("/register", multerUpload.single("image"), validateRequest(userValidation.userValidationSchema), userController.registerUser);

export const userRoute = router;
