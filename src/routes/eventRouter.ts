import { Router } from "express";
import eventController from "../controllers/eventController";
import { authMiddleware } from "../middlewares/authMiddleware";

const eventRouter = Router();

eventRouter.get("/:boardId", authMiddleware(), eventController.getListEvents);
eventRouter.post("/:boardId", authMiddleware(), eventController.createEvent);

export default eventRouter;
