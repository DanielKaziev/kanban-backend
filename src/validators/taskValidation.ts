import { body, param } from "express-validator";
import { validatorErrorHandler } from "../utils/validator";

export const validateCreateTask = [
  param("eventId")
    .isUUID()
    .withMessage("Id must be an UUID")
    .notEmpty()
    .withMessage("Id is required"),
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
    .isLength({ min: 3, max: 256 })
    .withMessage("Description must be between 3 and 32 characters long"),
  validatorErrorHandler,
];
