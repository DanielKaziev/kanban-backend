import { Router } from "express";
import boardController from "../controllers/boardController";
import authMiddleware from "../middlewares/authMiddleware";
import {
  validateCreateBoard,
  validateIdBoard,
} from "../validators/boardValidation";

const boardRouter = Router();

boardRouter.get("/", boardController.getListBoards);
boardRouter.get("/own", authMiddleware(), boardController.getOwnListBoards);
boardRouter.get(
  "/:id",
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
boardRouter.put("/:id", boardController.updateBoardById);
boardRouter.delete(
  "/:id",
  authMiddleware("control_board"),
  validateIdBoard,
  boardController.deleteBoardById
);

export default boardRouter;
