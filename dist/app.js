"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("./routes"));
const globalErrorhandler_1 = __importDefault(require("./app/middleware/globalErrorhandler"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
// middleware
app.use((0, cors_1.default)({ origin: ["http://localhost:3000"], credentials: true }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
// url encoded
// app.use(express.urlencoded());
// application routes
app.use("/api", routes_1.default);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use(globalErrorhandler_1.default);
// not found route
app.use(notFound_1.default);
exports.default = app;
