import { body, param } from "express-validator";
import { validatorErrorHandler } from "../utils/validator";

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
  validatorErrorHandler,
];

export const validateDeleteBoard = [
  param("id")
    .isUUID()
    .withMessage("Id must be an UUID")
    .notEmpty()
    .withMessage("Id is required"),
  validatorErrorHandler,
];
