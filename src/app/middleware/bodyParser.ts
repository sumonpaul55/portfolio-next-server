import { StatusCodes } from "http-status-codes";
import AppError from "../errors/AppError";
import catchAsync from "../utils/catchAsync";

export const parseBody = catchAsync(async (req, res, next) => {
  // console.log(req.body.data);
  if (!req.body.data) {
    throw new AppError(StatusCodes.NOT_FOUND, "Please provide data in the body under data key");
  }
  req.body = JSON.parse(req.body.data);
  next();
});
