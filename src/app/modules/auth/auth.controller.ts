import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { authService } from "./auth.service";
const registerUser = catchAsync(async (req, res) => {
  if (!req.file) {
    throw new AppError(StatusCodes.NOT_FOUND, "Image is missing");
  }
  const result = await authService.registerUser({ ...req?.body, profilePhoto: req?.file?.path });
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "User Create successfully",
    data: result,
  });
});
const loginUser = catchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await authService.loginUserDB(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Loggedin Successfully",
    data: result,
  });
});

export const authController = {
  registerUser,
  loginUser,
};
