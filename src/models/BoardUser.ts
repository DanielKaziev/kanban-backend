import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

interface BoardUserAttributes {
  boardId: string;
  userId: string;
  userBoardRoleId: string;
}

export interface BoardUserInstance
  extends Model<BoardUserAttributes>,
    BoardUserAttributes {}

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
