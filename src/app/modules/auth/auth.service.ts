import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/AppError";
import { User } from "../user/user.mode";
import { TUser } from "./auth.interface";
import { createToken } from "../../utils/JWTVerify";
import { config } from "../../config";
const registerUser = async (payload: TUser) => {
  const isExistUser = await User.isUserExistByEmail(payload.email);
  if (isExistUser) {
    throw new AppError(StatusCodes.BAD_REQUEST, "User already exist");
  }
  const newUser = await User.create(payload);
  // create token after register
  const JwtPayload = {
    _id: newUser?._id,
    name: newUser.name,
    email: newUser.email,
    phone: newUser.phone,
    role: newUser.role,
    profilePhoto: newUser?.profilePhoto,
  };
  const accessToken = createToken(JwtPayload, config.JWT_ACCESS_TOKEN_SECRET as string, config.JWT_ACCESS_EXPIRES_IN as string);
  const refreshToken = createToken(JwtPayload, config.JWT_REFRESH_SECRET as string, config.JWT_REFRESH_EXPIRES_IN as string);
  return { accessToken, refreshToken };
};

export const authService = {
  registerUser,
};
