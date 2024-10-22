import { model, Schema } from "mongoose";
import { TUser, TUserModel } from "./user.interface";
import bcrypt from "bcryptjs";
import { config } from "../../config";
const userSchema = new Schema<TUser, TUserModel>({
  name: { type: String },
  email: { type: String, trim: true, lowercase: true, unique: true },
  phone: { type: String },
  address: { type: String },
  role: { type: String, default: "USER" },
  password: { type: String },
  profilePhoto: { type: String, default: "" },
});
// make password hash tag using bycrypt
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, Number(config.BYCRYPT_SALT_ROUT));
  next();
});

// set empty after saving password
userSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});
// check user exist by email
userSchema.statics.isUserExistByEmail = async function (email: string) {
  return await User.findOne({ email }).select("+password");
};

// is password matched
userSchema.statics.isPasswordMatched = async function (plainTextPassword, hashTagPassword) {
  return await bcrypt.compare(plainTextPassword, hashTagPassword);
};

userSchema.statics.isJWTIssuedBeforePasswordChanged = function (passwordChangedTimestamp: number, jwtIssuedTimestamp: number) {
  const passwordChangedTime = new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

export const User = model<TUser, TUserModel>("User", userSchema);
