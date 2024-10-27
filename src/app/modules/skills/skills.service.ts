import { TSkills } from "./skills.interface";
import { Skills } from "./skills.model";

const addSkillsDB = async (payload: TSkills) => {
  return await Skills.create(payload);
};
const getAllSkills = async () => {
  return await Skills.find();
};

export const skillsService = {
  addSkillsDB,
  getAllSkills,
};
