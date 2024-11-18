import { Request, Response, NextFunction } from "express";
import { RequestError, ResponseError } from "../utils/errors";
import { getTokenData } from "../utils/token";
import boardService from "../service/boardService";
import { IBoardCreate } from "../types/boards";

class BoardController {
  public async getListBoards(req: Request, res: Response, next: NextFunction) {
    try {
      throw ResponseError.NotImplemented("NotImplemented");
    } catch (error) {
      next(error);
    }
  }
  public async getBoardById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: boardId } = req.params;
      const { id: userId } = getTokenData(req);

      const board = await boardService.getBoardById(boardId, userId);

      return res.json(board);
    } catch (error) {
      next(error);
    }
  }
  public async getOwnListBoards(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id } = getTokenData(req);

      const data = await boardService.getListBoardsByUserId(id);

      return res.json(data);
    } catch (error) {
      next(error);
    }
  }
  public async createBoard(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = getTokenData(req);
      const boardInfo = req.body as IBoardCreate;

      const boardRes = await boardService.createBoard({
        ...boardInfo,
        userId: id,
      });

      return res.status(201).json(boardRes);
    } catch (error) {
      next(error);
    }
  }
  public async updateBoardById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      throw ResponseError.NotImplemented("NotImplemented");
    } catch (error) {
      next(error);
    }
  }
  public async deleteBoardById(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id: boardId } = req.params;
      const { id: userId } = getTokenData(req);
      if (!boardId) throw RequestError.BadRequest("Id was not provided!");

      await boardService.deleteBoardById(boardId, userId);

      return res.status(204).end();
    } catch (error) {
      next(error);
    }
  }
}
export default new BoardController();
