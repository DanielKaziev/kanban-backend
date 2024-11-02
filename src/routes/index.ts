import { Router } from "express";
import boardRouter from "./boardRouter";

const router = Router();

router.use("/boards", boardRouter);

export default router;
