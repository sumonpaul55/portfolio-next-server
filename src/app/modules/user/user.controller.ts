import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import { userService } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
const registerUser = catchAsync(async (req, res) => {
  if (!req.file) {
    throw new AppError(StatusCodes.NOT_FOUND, "Image is missing");
  }
  const result = await userService.registerUser({ ...req?.body, profilePhoto: req?.file?.path });
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User Create successfully",
    data: result,
  });
});

export const userController = {
  registerUser,
};
