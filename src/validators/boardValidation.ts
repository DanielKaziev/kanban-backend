import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { RequestError } from "../utils/errors";

export const validateCreateBoard = [
  body("name")
    .isString()
    .withMessage("Name must be a string")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 32 })
    .withMessage("Name must be between 3 and 32 characters long"),

  body("description")
    .isString()
    .withMessage("Description must be a string")
    .isLength({ min: 3, max: 32 })
    .withMessage("Description must be between 3 and 32 characters long"),

  body("isPrivate")
    .isBoolean()
    .withMessage("isPrivate must be a boolean")
    .notEmpty()
    .withMessage("isPrivate is required"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw RequestError.BadRequest(errors.array()[0].msg);
    }
    next();
  },
];
