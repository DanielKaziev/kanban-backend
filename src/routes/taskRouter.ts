import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import taskController from "../controllers/taskController";
import { validateCreateTask } from "../validators/taskValidation";

const taskRouter = Router();

taskRouter.get("/:eventId", authMiddleware(), taskController.getListTasks);
taskRouter.post("/:eventId", authMiddleware(), validateCreateTask, taskController.createTask);

export default taskRouter;
