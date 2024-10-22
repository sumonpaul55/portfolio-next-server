"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = require("../../config");
const userSchema = new mongoose_1.Schema({
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
    this.password = await bcryptjs_1.default.hash(this.password, Number(config_1.config.BYCRYPT_SALT_ROUT));
    next();
});
// set empty after saving password
userSchema.post("save", function (doc, next) {
    doc.password = "";
    next();
});
// check user exist by email
userSchema.statics.isUserExistByEmail = async function (email) {
    return await exports.User.findOne({ email }).select("+password");
};
// is password matched
userSchema.statics.isPasswordMatched = async function (plainTextPassword, hashTagPassword) {
    return await bcryptjs_1.default.compare(plainTextPassword, hashTagPassword);
};
userSchema.statics.isJWTIssuedBeforePasswordChanged = function (passwordChangedTimestamp, jwtIssuedTimestamp) {
    const passwordChangedTime = new Date(passwordChangedTimestamp).getTime() / 1000;
    return passwordChangedTime > jwtIssuedTimestamp;
};
exports.User = (0, mongoose_1.model)("User", userSchema);
