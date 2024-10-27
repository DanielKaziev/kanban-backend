import app from "./app";
import sequelize from "./db";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.KANBAN_BOARDS_PORT || 5005;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => {
      console.log("\x1b[32m", `Boards service started on PORT = ${PORT}`);
    });
  } catch (err) {
    console.log("Error: ", err);
  }
};

start();
