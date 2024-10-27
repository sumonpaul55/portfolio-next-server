import mongoose, { Schema } from "mongoose";
import { TPost } from "./post.interface";

// Define the Post schema
const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    post: {
      type: Schema.Types.Mixed, // You can use Mixed for flexible post content or specify another type if necessary
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Assuming you're referencing a User model
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create and export the Post model
export const Post = mongoose.model<TPost>("Post", PostSchema);
