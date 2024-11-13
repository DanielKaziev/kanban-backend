import { Router } from "express";
import boardController from "../controllers/boardController";
import authMiddleware from "../middlewares/authMiddleware";
import { validateCreateBoard } from "../validators/boardValidation";

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
boardRouter.delete("/:id", boardController.deleteBoardById);

export default boardRouter;
