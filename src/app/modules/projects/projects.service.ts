import { TProject } from "./projects.interface";
import { Projects } from "./projects.model";

const addProjectDb = async (payload: TProject) => {
  return await Projects.create(payload);
};

const getProjectDb = async () => {
  return await Projects.find();
};
const getProjectByIdDb = async (id: string) => {
  return await Projects.findById(id);
};
export const projectService = {
  addProjectDb,
  getProjectDb,
  getProjectByIdDb,
};
