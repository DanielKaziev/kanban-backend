import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import taskController from "../controllers/taskController";

const taskRouter = Router();

taskRouter.patch("/:taskId/move", authMiddleware(), taskController.moveTask);

export default taskRouter;
