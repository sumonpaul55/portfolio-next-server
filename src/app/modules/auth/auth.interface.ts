/* eslint-disable no-unused-vars */
// import { z } from "zod";
import { Model } from "mongoose";
// import { authValidation } from "./auth.validation";

// export type TUser = z.infer<typeof authValidation.userValidationSchema>;
export type TUser = {
  name: string;
  email: string;
  phone: string;
  role: string;
  password: string;
  address?: string | undefined;
  profilePhoto?: string | undefined;
  _id?: string;
};

export interface TUserModel extends Model<TUser> {
  isUserExistByEmail(email: string): Promise<TUser>;
  isPasswordMatched(paylnTExtPassword: string, hashTagPassword: string): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(passwordChangedTimestamp: Date, jwtIssuedTimestamp: number): boolean;
}
export type TloginUser = {
  email: string;
  password: string;
};
