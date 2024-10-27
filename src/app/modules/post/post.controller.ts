import { StatusCodes } from "http-status-codes";
import { postService } from "./post.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const createPost = catchAsync(async (req, res) => {
  const result = await postService.createPostDb(req.body);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Post created succesfully",
    data: result,
  });
});

const getPosts = catchAsync(async (req, res) => {
  const result = await postService.getAllPost();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "All Post Retrived successfully",
    data: result,
  });
});
const getPostById = catchAsync(async (req, res) => {
  const result = await postService.getPostById(req.params.id);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Post Retrived successfully",
    data: result,
  });
});
export const postController = {
  createPost,
  getPosts,
  getPostById,
};
