import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { contactValidation } from "./contact.validation";
import { contactController } from "./contact.controller";
import authGaurd from "../../middleware/authGaurd";
import { USER_ROLE } from "../../utils/user.utils";

const router = Router()
router.post("/contactme", validateRequest(contactValidation.contactDatavalidation), contactController.addContactData)

router.get("/getmessage", authGaurd(USER_ROLE.ADMIN), contactController.getMessage);

export const contactRouter = router