"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloudinaryUpload = void 0;
const cloudinary_1 = require("cloudinary");
const _1 = require(".");
cloudinary_1.v2.config({
    cloud_name: _1.config.CLOUDINARY_CLOUD_NAME,
    api_key: _1.config.CLOUDINARYY_API_KEY,
    api_secret: _1.config.CLOUDINARY_API_SECRET,
});
exports.cloudinaryUpload = cloudinary_1.v2;
