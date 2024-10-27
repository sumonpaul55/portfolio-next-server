import { Router } from "express";
import authGaurd from "../../middleware/authGaurd";
import { USER_ROLE } from "../../utils/user.utils";
import { multerUpload } from "../../config/multer.config";
import { parseBody } from "../../middleware/bodyParser";
import { projectController } from "./projects.controller";

const router = Router();

router.post("/", authGaurd(USER_ROLE.ADMIN), multerUpload.single("image"), parseBody, projectController.addProject);
router.get("/", projectController.getProject);
router.get("/:id", projectController.getProjectById);

export const projectRouter = router;
