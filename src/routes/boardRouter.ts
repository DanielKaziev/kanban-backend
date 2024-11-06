import { Router } from "express";
import boardController from "../controllers/boardController";
import authMiddleware from "../middlewares/authMiddleware";

const boardRouter = Router();

boardRouter.get("/", boardController.getListBoards);
boardRouter.get("/own", authMiddleware, boardController.getOwnListBoards);
boardRouter.get("/:id", boardController.getBoardById);
boardRouter.post("/", boardController.createBoard);
boardRouter.put("/:id", boardController.updateBoardById);
boardRouter.delete("/:id", boardController.deleteBoardById);

export default boardRouter;
