import { Request, Response, NextFunction } from "express";
import { ResponseError } from "../utils/errors";
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
      throw ResponseError.NotImplemented("NotImplemented");
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
      throw ResponseError.NotImplemented("NotImplemented");
    } catch (error) {
      next(error);
    }
  }
}
export default new BoardController();
