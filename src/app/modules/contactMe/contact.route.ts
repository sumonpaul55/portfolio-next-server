import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { contactValidation } from "./contact.validation";
import { contactController } from "./contact.controller";

const router = Router()
router.post("/contact-me", validateRequest(contactValidation.contactDatavalidation), contactController.addContactData)

export const contactRouter = router