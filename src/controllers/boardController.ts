import { Request, Response, NextFunction } from "express";
import { RequestError, ResponseError } from "../utils/errors";
import { EUserResponse } from "../config/messages";
import { validateToken } from "../grpcClient.ts";

class BoardController {
  public async getListBoards(req: Request, res: Response, next: NextFunction) {
    try {
      return ResponseError.NotImplemented;
    } catch (error) {
      next(error);
    }
  }
  public async getBoardById(req: Request, res: Response, next: NextFunction) {
    try {
      return ResponseError.NotImplemented;
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
      const { authorization } = req.headers;
      if (!authorization)
        return RequestError.Unauthorized(EUserResponse.NO_TOKEN);
      const token = authorization.slice(7).trim();

      const responseValid = await validateToken(token);
      if (!responseValid.access)
        return RequestError.Unauthorized(responseValid.message);

      return ResponseError.NotImplemented("NotImplemented");
    } catch (error) {
      next(error);
    }
  }
  public async createBoard(req: Request, res: Response, next: NextFunction) {
    try {
      return ResponseError.NotImplemented;
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
      return ResponseError.NotImplemented;
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
      return ResponseError.NotImplemented;
    } catch (error) {
      next(error);
    }
  }
}
export default new BoardController();
