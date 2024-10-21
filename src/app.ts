import express from "express";
const app = express();
import cors from "cors";
// middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
