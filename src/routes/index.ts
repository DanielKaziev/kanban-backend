import { Router } from "express";
import boardRouter from "./boardRouter";
import eventRouter from "./eventRouter";
import taskRouter from "./taskRouter";

const router = Router();

router.use("/boards", boardRouter);
router.use("/events", eventRouter);
router.use("/tasks", taskRouter);

export default router;
