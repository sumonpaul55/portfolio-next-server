import { z } from "zod";
import { contactDatavalidation } from "./contact.validation";

export type TContactData = z.infer<typeof contactDatavalidation>;