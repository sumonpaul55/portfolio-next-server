"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectService = void 0;
const projects_model_1 = require("./projects.model");
const addProjectDb = async (payload) => {
    return await projects_model_1.Projects.create(payload);
};
const getProjectDb = async () => {
    return await projects_model_1.Projects.find();
};
const getProjectByIdDb = async (id) => {
    return await projects_model_1.Projects.findById(id);
};
exports.projectService = {
    addProjectDb,
    getProjectDb,
    getProjectByIdDb,
};
