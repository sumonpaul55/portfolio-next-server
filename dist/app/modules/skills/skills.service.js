"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillsService = void 0;
const skills_model_1 = require("./skills.model");
const addSkillsDB = async (payload) => {
    return await skills_model_1.Skills.create(payload);
};
const getAllSkills = async () => {
    return await skills_model_1.Skills.find();
};
exports.skillsService = {
    addSkillsDB,
    getAllSkills,
};
