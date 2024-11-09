import { DataTypes, Model } from "sequelize";
import sequelize from "../db";
import { BoardInstance } from "./Board";

interface BoardUserAttributes {
  boardId: string;
  userId: string;
  userBoardRoleId: string;
}

export interface BoardUserInstance
  extends Model<BoardUserAttributes>,
    BoardUserAttributes {
      Board: BoardInstance;
    }

const BoardUser = sequelize.define<BoardUserInstance>(
  "BoardUser",
  {
    boardId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    userBoardRoleId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "BoardUser",
  }
);

export default BoardUser;
