"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skills = void 0;
const mongoose_1 = require("mongoose");
const SkillSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false },
});
exports.Skills = (0, mongoose_1.model)("Skills", SkillSchema);
