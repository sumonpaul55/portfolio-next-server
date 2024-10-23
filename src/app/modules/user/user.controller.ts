import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userService } from "./user.service";

const getAllUser = catchAsync(async (req, res) => {
  const result = await userService.getAllUserDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Users retrive successfully",
    data: result,
  });
});

export const userController = { getAllUser };
