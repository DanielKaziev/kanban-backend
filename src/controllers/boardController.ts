import { Request, Response, NextFunction } from "express";
import { ResponseError } from "../utils/errors";
import { getAuthHeader, getTokenData } from "../utils/token";
import boardService from "../service/boardService";

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
      const token = getAuthHeader(req);
      const { id } = getTokenData(token);
      
      const data = await boardService.getListBoardsByUserId(id)
      console.log(data);
      
      return res.json(data);
      throw ResponseError.NotImplemented("NotImplemented");
    } catch (error) {
      next(error);
    }
  }
  public async createBoard(req: Request, res: Response, next: NextFunction) {
    try {
      throw ResponseError.NotImplemented("NotImplemented");
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
