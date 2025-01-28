"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFound = (req, res, next) => {
    res.status(406).json({
        success: false,
        message: "API Not found!",
        error: "",
    });
};
exports.default = notFound;
