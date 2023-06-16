import express from "express";
import * as dotenv from "dotenv";
import softJobsRouter from "./src/routes/softJobs.routes.js";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", softJobsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`funcionando en: http://localhost:${PORT}/`);
});
