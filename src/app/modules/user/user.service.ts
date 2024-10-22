import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { TUser } from "./user.interface";
import { User } from "./user.mode";

const registerUser = async (payload: TUser) => {
  const isExistUser = await User.isUserExistByEmail(payload.email);
  if (isExistUser) {
    throw new AppError(StatusCodes.BAD_REQUEST, "User already exist");
  }
  return await User.create(payload);
};

export const userService = {
  registerUser,
};
