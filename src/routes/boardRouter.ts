import { Router } from "express";
import boardController from "../controllers/boardController";
import authMiddleware from "../middlewares/authMiddleware";
import {
  validateCreateBoard,
  validateDeleteBoard,
} from "../validators/boardValidation";

const boardRouter = Router();

boardRouter.get("/", boardController.getListBoards);
boardRouter.get("/own", authMiddleware(), boardController.getOwnListBoards);
boardRouter.get("/:id", boardController.getBoardById);
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
  validateDeleteBoard,
  boardController.deleteBoardById
);

export default boardRouter;
