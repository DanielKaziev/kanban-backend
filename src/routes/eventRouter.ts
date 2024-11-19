import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import taskController from "../controllers/taskController";
import { validateCreateTask } from "../validators/taskValidation";

const eventRouter = Router();

eventRouter.get(
  "/:eventId/tasks",
  authMiddleware(),
  taskController.getListTasks
);
eventRouter.post(
  "/:eventId/tasks",
  authMiddleware(),
  validateCreateTask,
  taskController.createTask
);

export default eventRouter;
