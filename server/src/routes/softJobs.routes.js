import { Router } from "express";
import { softJobsController } from "../controllers/softJobs.controller.js";
import { verifyToken } from "../middlewares/softJobs.middlewares.js";

const softJobsRouter = Router();

softJobsRouter.post("/login", softJobsController.tokenGen);
softJobsRouter.get("/usuarios", verifyToken, softJobsController.getUser);
softJobsRouter.post("/usuarios", softJobsController.createUser);

export default softJobsRouter;
