import { Router } from "express";
import authGaurd from "../../middleware/authGaurd";
import { USER_ROLE } from "../../utils/user.utils";
import { multerUpload } from "../../config/multer.config";
import { parseBody } from "../../middleware/bodyParser";
import { skillsController } from "./skills.controller";

const router = Router();
router.post("/", authGaurd(USER_ROLE.ADMIN), multerUpload.single("image"), parseBody, skillsController.addSkills);
router.get("/", skillsController.getSkills);

export const skillsRoutes = router;
