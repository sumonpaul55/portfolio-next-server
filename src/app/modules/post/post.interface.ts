import mongoose from "mongoose";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TPost = {
  title: string;
  post: any;
  userId: mongoose.Schema.Types.ObjectId;
  category: string;
};
