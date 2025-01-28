"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("./app/config");
// getting-started.js
async function main() {
    await mongoose_1.default.connect(config_1.config.DB_URL);
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    app_1.default.listen(config_1.config.post, () => {
        console.log(`Example app listening on port ${config_1.config.post}`);
    });
}
main();
