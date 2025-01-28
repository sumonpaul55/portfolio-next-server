"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const user_mode_1 = require("./user.mode");
const getAllUserDb = async () => {
    return await user_mode_1.User.find();
};
exports.userService = { getAllUserDb };
