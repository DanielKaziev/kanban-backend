import { Router } from "express";
import boardRouter from "./boardRouter";
import eventRouter from "./eventRouter";

const router = Router();

router.use("/boards", boardRouter);
router.use("/events", eventRouter);

export default router;
