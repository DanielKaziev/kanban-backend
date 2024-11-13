import { DataTypes, Model } from "sequelize";
import sequelize from "../db";
import { BoardInstance } from "./Board";
import { EUserBoardRole } from "../config/state";

interface BoardUserAttributes {
  boardId: string;
  userId: string;
  userBoardRole: EUserBoardRole;
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
    userBoardRole: {
      type: DataTypes.ENUM(...Object.values(EUserBoardRole)),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "BoardUser",
  }
);

export default BoardUser;
