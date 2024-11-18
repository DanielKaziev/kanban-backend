import jwt from "jsonwebtoken";
import { Request } from "express";
import { RequestError } from "./errors";
import { EUserResponse } from "../config/messages";
import { ITokenData } from "../types/user";

export function getTokenData(req: Request) {
  const authorization = req.headers.authorization;
  if (!authorization) throw RequestError.Unauthorized(EUserResponse.NO_TOKEN);

  const token = authorization.split(" ")[1];

  return jwt.decode(token) as ITokenData;
}
