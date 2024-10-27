import { model, Schema } from "mongoose";
import { TProject } from "./projects.interface";

const projectsSchema = new Schema<TProject>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  liveLink: {
    type: String,
    required: [true, "liveLink is required"],
    default: "",
  },
  technology: {
    type: String,
    required: [true, "Technology is required"],
  },
  overview: {
    type: Schema.Types.Mixed, // Allows any type for the overview field
    required: false,
  },
  image: {
    type: String,
    required: false,
    default: "",
  },
});
export const Projects = model<TProject>("Projects", projectsSchema);
