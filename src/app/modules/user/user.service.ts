import { User } from "./user.mode";

const getAllUserDb = async () => {
  return await User.find();
};

export const userService = { getAllUserDb };
