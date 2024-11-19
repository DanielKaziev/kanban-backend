import { Router } from "express";
import boardController from "../controllers/boardController";
import authMiddleware from "../middlewares/authMiddleware";
import {
  validateCreateBoard,
  validateIdBoard,
} from "../validators/boardValidation";
import eventController from "../controllers/eventController";

const boardRouter = Router();

boardRouter.get("/own", authMiddleware(), boardController.getOwnListBoards);
boardRouter.get(
  "/:boardId",
  authMiddleware(),
  validateIdBoard,
  boardController.getBoardById
);
boardRouter.post(
  "/",
  authMiddleware("control_board"),
  validateCreateBoard,
  boardController.createBoard
);
boardRouter.delete(
  "/:boardId",
  authMiddleware("control_board"),
  validateIdBoard,
  boardController.deleteBoardById
);

boardRouter.get(
  "/:boardId/events",
  authMiddleware(),
  eventController.getListEvents
);
boardRouter.post(
  "/:boardId/events",
  authMiddleware(),
  eventController.createEvent
);

export default boardRouter;
