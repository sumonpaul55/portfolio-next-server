/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt, { JwtPayload } from "jsonwebtoken";
import AppError from "../errors/AppError";
import { StatusCodes } from "http-status-codes";

// interface TokenPayload {
//   _id?: string; // Assuming _id can be optional
//   name: string;
//   email: string;
//   phone: string;
//   role: string;
//   profilePhoto?: string; // Optional if sometimes not provided
// }
export const createToken = (JwtPayload: any, secret: string, expireIn: string) => {
  return jwt.sign(JwtPayload, secret, { expiresIn: expireIn });
};

export const verifyToken = (token: string, secret: string): JwtPayload | Error => {
  try {
    return jwt.verify(token, secret) as JwtPayload;
  } catch (error: any) {
    throw new AppError(StatusCodes.UNAUTHORIZED, "you are not authorized");
  }
};
