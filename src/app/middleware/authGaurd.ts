import { HttpStatus } from "http-status-ts";
import AppError from "../errors/AppError";
import catchAsync from "../utils/catchAsync";
import { USER_ROLE } from "../utils/user.utils";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config";
import { User } from "../modules/user/user.mode";

const authGaurd = (...requiredRoles: (keyof typeof USER_ROLE)[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    // check if the token is missin
    if (!token) {
      throw new AppError(HttpStatus.UNAUTHORIZED, "You are not authorized");
    }
    // checking if the given token is valid
    const decoded = jwt.verify(token, config.JWT_ACCESSTOKEN as string) as JwtPayload;
    const { email, role } = decoded;
    // check if the user is exist
    const user = await User.isUserExistByEmail(email);
    if (!user) {
      throw new AppError(HttpStatus.UNAUTHORIZED, "You are not eligible for this oparation");
    }
    // checking
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(HttpStatus.UNAUTHORIZED, "You are not eligible");
    }
    req.user = decoded as JwtPayload;
    next();
  });
};
export default authGaurd;
