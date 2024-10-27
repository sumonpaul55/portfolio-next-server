import { TPost } from "./post.interface";
import { Post } from "./post.mode";

const createPostDb = async (payload: TPost) => {
  return await Post.create(payload);
};
const getAllPost = async () => {
  return await Post.find().populate("userId");
};

const getPostById = async (postid: string) => {
  return await Post.findById(postid).populate("userId");
};
export const postService = {
  createPostDb,
  getAllPost,
  getPostById,
};
