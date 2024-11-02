import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db";

interface BoardInviteAttributes {
  id: string;
  boardId: string;
  userId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BoardInviteInstance
  extends Model<BoardInviteAttributes, Optional<BoardInviteAttributes, "id">>,
    BoardInviteAttributes {}

const BoardInvite = sequelize.define<BoardInviteInstance>(
  "BoardInvite",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    boardId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "BoardInvite",
  }
);

export default BoardInvite;
