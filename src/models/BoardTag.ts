import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

interface BoardTagAttributes {
  boardId: string;
  tagId: string;
}

export interface BoardTagInstance
  extends Model<BoardTagAttributes>,
    BoardTagAttributes {}

const BoardTag = sequelize.define<BoardTagInstance>(
  "BoardTag",
  {
    boardId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    tagId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "BoardTag",
  }
);

export default BoardTag;
