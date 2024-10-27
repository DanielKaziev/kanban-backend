import { Request, Response, NextFunction } from "express";
import { ResponseError } from "../utils/errors";

class BoardController {
  public async getListBoards(req: Request, res: Response, next: NextFunction) {
    try {
      return ResponseError.NotImplemented
    } catch (error) {
      next(error);
    }
  }
  public async getBoardById(req: Request, res: Response, next: NextFunction) {
    try {
      return ResponseError.NotImplemented
    } catch (error) {
      next(error);
    }
  }
  public async createBoard(req: Request, res: Response, next: NextFunction) {
    try {
      return ResponseError.NotImplemented
    } catch (error) {
      next(error);
    }
  }
  public async updateBoardById(req: Request, res: Response, next: NextFunction) {
    try {
      return ResponseError.NotImplemented
    } catch (error) {
      next(error);
    }
  }
  public async deleteBoardById(req: Request, res: Response, next: NextFunction) {
    try {
      return ResponseError.NotImplemented
    } catch (error) {
      next(error);
    }
  }

}
export default new BoardController();
