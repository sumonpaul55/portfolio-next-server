import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { skillsService } from "./skills.service";

const addSkills = catchAsync(async (req, res) => {
  const result = await skillsService.addSkillsDB({ ...req.body, image: req?.file?.path });
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Skills created successfully",
    data: result,
  });
});
const getSkills = catchAsync(async (req, res) => {
  const result = await skillsService.getAllSkills();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Skills retrived successfully",
    data: result,
  });
});
export const skillsController = {
  addSkills,
  getSkills,
};
