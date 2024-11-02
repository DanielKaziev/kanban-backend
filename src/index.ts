import app from "./app";
import sequelize from "./db";
import dotenv from "dotenv";
import { validateToken } from "./grpcClient.ts";

dotenv.config();

const PORT = process.env.KANBAN_BOARDS_PORT || 5005;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    // (async () => {
    //   const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE0NDc0NTczLTE0NWUtNDhmOC1iZDRhLTA3MzkwNDVhMWMxMiIsInVzZXJuYW1lIjoiU3VwZXJfRGVuXzc3NyIsImVtYWlsIjoia2F6aWV2MzBAbWFpbC5ydSIsInN0YXRlIjoiYWN0aXZlIiwicm9sZSI6InVzZXIiLCJwZXJtaXNzaW9ucyI6WyJjcmVhdGVfYm9hcmQiLCJ1cGRhdGVfYm9hcmQiLCJkZWxldGVfYm9hcmQiLCJjcmVhdGVfdGFzayIsInVwZGF0ZV90YXNrIiwiZGVsZXRlX3Rhc2siLCJjcmVhdGVfZXZlbnQiLCJ1cGRhdGVfZXZlbnQiLCJkZWxldGVfZXZlbnQiXSwiaWF0IjoxNzMwNTc5NjEyLCJleHAiOjE3MzA1ODE0MTJ9.4Zv-1qmAEyyVL7JWz05HwI7A2Rb4ZBFbSClFZWMQBaw';
    //   const actions = await validateToken(token, "create_board");
    //   console.log(actions);
    // })();

    app.listen(PORT, () => {
      console.log("\x1b[32m", `Boards service started on PORT = ${PORT}`);
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

start();
