import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

interface BoardUserAttributes {
  boardId: string;
  userId: string;
  participantPermission: string;
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
    participantPermission: {
      type: DataTypes.ENUM("spectator", "editor", "admin"),
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "BoardUser",
  }
);

export default BoardUser;
