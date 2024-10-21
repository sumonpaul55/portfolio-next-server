import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join((process.cwd(), ".env")) });
export const config = {
  post: process.env.PORT,
  DB_URL: process.env.MONOGO_URL,
};
