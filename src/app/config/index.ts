import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });
export const config = {
  post: process.env.PORT,
  DB_URL: process.env.MONOGO_URL,
  NODE_ENV: process.env.NODE_ENV,
  BYCRYPT_SALT_ROUT: process.env.BYCRYPT_SALT_ROUND,
  CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  CLOUDINARYY_API_KEY: process.env.CLOUDINARYY_API_KEY,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN,
  JWT_ACCESS_EXPIRES_IN: process.env.JWT_ACCESS_EXPIRES_IN,
  JWT_REFRESH_EXPIRES_IN: process.env.JWT_REFRESH_EXPIRES_IN,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
};
