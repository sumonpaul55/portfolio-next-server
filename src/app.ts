import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes";
import globalErrorHandler from "./app/middleware/globalErrorhandler";
import notFound from "./app/middleware/notFound";
// middleware
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(cookieParser());

app.use(cookieParser());

// application routes
app.use(globalErrorHandler);
app.use(notFound);
app.use("/api", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
