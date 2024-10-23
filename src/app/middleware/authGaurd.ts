import AppError from "../errors/AppError";
import catchAsync from "../utils/catchAsync";
import { USER_ROLE } from "../utils/user.utils";
import jwt, { JwtPayload } from "jsonwebtoken";
import { config } from "../config";
import { User } from "../modules/user/user.mode";
import { StatusCodes } from "http-status-codes";

const authGaurd = (...requiredRoles: (keyof typeof USER_ROLE)[]) => {
  return catchAsync(async (req, res, next) => {
    const token = req.headers.authorization;
    // check if the token is missin
    if (!token) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "You are not authorized");
    }
    // checking if the given token is valid
    const decoded = jwt.verify(token, config.JWT_ACCESS_TOKEN_SECRET as string) as JwtPayload;
    const { email, role } = decoded;
    // check if the user is exist
    const user = await User.isUserExistByEmail(email);
    if (!user) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "You are not eligible for this oparation");
    }
    // checking
    if (requiredRoles && !requiredRoles.includes(role)) {
      throw new AppError(StatusCodes.UNAUTHORIZED, "You are not eligible");
    }
    req.user = decoded as JwtPayload;
    next();
  });
};
export default authGaurd;
