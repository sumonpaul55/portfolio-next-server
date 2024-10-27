"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Projects = void 0;
const mongoose_1 = require("mongoose");
const projectsSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.Mixed, // Allows any type for the overview field
        required: false,
    },
    image: {
        type: String,
        required: false,
        default: "",
    },
});
exports.Projects = (0, mongoose_1.model)("Projects", projectsSchema);
