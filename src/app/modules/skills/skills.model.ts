import { model, Schema } from "mongoose";
import { TSkills } from "./skills.interface";

const SkillSchema = new Schema<TSkills>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },
});
export const Skills = model<TSkills>("Skills", SkillSchema);
