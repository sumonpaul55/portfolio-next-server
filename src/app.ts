import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import router from "./routes";
import globalErrorHandler from "./app/middleware/globalErrorhandler";
import notFound from "./app/middleware/notFound";
// middleware
app.use(cors({ origin: ["http://localhost:3000"] }));
app.use(cookieParser());
app.use(express.json());
// url encoded
// app.use(express.urlencoded());

// application routes
app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(globalErrorHandler);
// not found route
app.use(notFound);
export default app;
