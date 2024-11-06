import { Request, Response, NextFunction } from "express";
import { RequestError } from "../utils/errors";
import { EUserResponse } from "../config/messages";
import { validateToken, validateTokenPermission } from "../grpcClient.ts";

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.method === "OPTIONS") return next();

    const authorization = req.headers.authorization;
    if (!authorization) {
      return next(RequestError.Unauthorized(EUserResponse.NO_TOKEN));
    }

    const token = authorization.split(" ")[1];
    if (!token) {
      return next(RequestError.Unauthorized(EUserResponse.NO_TOKEN));
    }

    const userData = await validateToken(token);
    if (!userData.access) {
      return next(RequestError.Custom(userData.code, userData.message));
    }

    next();
  } catch (err) {
    next(RequestError.Unauthorized(EUserResponse.UNAUTHORIZED_USER));
  }
};

export const authWithPermissionMiddleware = (requiredPermission: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.method === "OPTIONS") return next();

      const authorization = req.headers.authorization;
      if (!authorization) {
        return next(RequestError.Unauthorized(EUserResponse.NO_TOKEN));
      }

      const token = authorization.split(" ")[1];
      if (!token) {
        return next(RequestError.Unauthorized(EUserResponse.NO_TOKEN));
      }

      const userData = await validateTokenPermission(token, requiredPermission);
      if (!userData.access) {
        return next(RequestError.Custom(userData.code, userData.message));
      }

      next();
    } catch (err) {
      next(RequestError.Unauthorized(EUserResponse.UNAUTHORIZED_USER));
    }
  };
};

export default authMiddleware;
