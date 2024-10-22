import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });
export const config = {
  post: process.env.PORT,
  DB_URL: process.env.MONOGO_URL,
  NODE_ENV: process.env.NODE_ENV,
  JWT_ACCESSTOKEN: process.env.JWT_ACCESS_TOKEN,
  BYCRYPT_SALT_ROUT: process.env.BYCRYPT_SALT_ROUND,
};
