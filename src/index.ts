import app from "./app";
import sequelize from "./db";
import dotenv from "dotenv";
import { validateToken, validateTokenPermission } from "./grpcClient.ts";

dotenv.config();

const PORT = process.env.KANBAN_BOARDS_PORT || 5005;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    // (async () => {
    //   try {
    //     const token =
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE0NDc0NTczLTE0NWUtNDhmOC1iZDRhLTA3MzkwNDVhMWMxMiIsInVzZXJuYW1lIjoiU3VwZXJfRGVuXzc3NyIsImVtYWlsIjoia2F6aWV2MzBAbWFpbC5ydSIsInN0YXRlIjoiYWN0aXZlIiwicm9sZSI6InVzZXIiLCJwZXJtaXNzaW9ucyI6WyJjcmVhdGVfYm9hcmQiLCJ1cGRhdGVfYm9hcmQiLCJkZWxldGVfYm9hcmQiLCJjcmVhdGVfdGFzayIsInVwZGF0ZV90YXNrIiwiZGVsZXRlX3Rhc2siLCJjcmVhdGVfZXZlbnQiLCJ1cGRhdGVfZXZlbnQiLCJkZWxldGVfZXZlbnQiXSwiaWF0IjoxNzMwNjYzOTA0LCJleHAiOjE3MzA2NjU3MDR9.JU_bFfr6c4LHwXT3p1ee3SppNcszFqqg5cXdSzb_9kM";
    //     const actions = await validateToken(token);
    //     console.log(actions);
    //   } catch (error: any) {
    //     console.log("gRPC error: ", error.details);
    //   }
    // })();

    app.listen(PORT, () => {
      console.log("\x1b[32m", `Boards service started on PORT = ${PORT}`);
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

start();
