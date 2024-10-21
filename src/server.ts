import app from "./app";
import mongoose from "mongoose";
import { config } from "./app/config";
// getting-started.js

async function main() {
  await mongoose.connect(config.DB_URL as string);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

  app.listen(config.post, () => {
    console.log(`Example app listening on port ${config.post}`);
  });
}

main();
