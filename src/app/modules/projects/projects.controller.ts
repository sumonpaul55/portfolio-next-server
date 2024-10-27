import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { projectService } from "./projects.service";
import sendResponse from "../../utils/sendResponse";

const addProject = catchAsync(async (req, res) => {
  const result = await projectService.addProjectDb({ ...req.body, image: req?.file?.path });
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Project Added successfully",
    data: result,
  });
});

const getProject = catchAsync(async (req, res) => {
  const result = await projectService.getProjectDb();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Project retrived successfully",
    data: result,
  });
});
const getProjectById = catchAsync(async (req, res) => {
  const result = await projectService.getProjectByIdDb(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Project retrived successfully",
    data: result,
  });
});
export const projectController = { addProject, getProject, getProjectById };
