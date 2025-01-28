"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postService = void 0;
const post_mode_1 = require("./post.mode");
const createPostDb = async (payload) => {
    return await post_mode_1.Post.create(payload);
};
const getAllPost = async () => {
    return await post_mode_1.Post.find().populate("userId");
};
const getPostById = async (postid) => {
    return await post_mode_1.Post.findById(postid).populate("userId");
};
exports.postService = {
    createPostDb,
    getAllPost,
    getPostById,
};
