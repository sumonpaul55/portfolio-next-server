import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { contactService } from "./contact.service";

const addContactData = catchAsync(async (req, res) => {
    const result = await contactService.addContactDataDb(req.body)
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Form submitted successfully",
        data: result
    })
})

const getMessage = catchAsync(async (req, res) => {
    const result = await contactService.getContactMessage()
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "All message retrive successfully",
        data: result
    })
})

export const contactController = {
    addContactData, getMessage
}