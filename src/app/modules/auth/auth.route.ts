import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { authValidation } from "./auth.validation";
import { authController } from "./auth.controller";
import { multerUpload } from "../../config/multer.config";
import { parseBody } from "../../middleware/bodyParser";

const router = Router();

router.post("/register", multerUpload.single("image"), parseBody, validateRequest(authValidation.userValidationSchema), authController.registerUser);

export const authRoutes = router;
