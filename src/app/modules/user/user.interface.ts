/* eslint-disable no-unused-vars */
import { z } from "zod";
import { userValidation } from "./user.validation";
import { Model } from "mongoose";

export type TUser = z.infer<typeof userValidation.userValidationSchema>;

export interface TUserModel extends Model<TUser> {
  isUserExistByEmail(email: string): Promise<TUser>;
  isPasswordMatched(paylnTExtPassword: string, hashTagPassword: string): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(passwordChangedTimestamp: Date, jwtIssuedTimestamp: number): boolean;
}
