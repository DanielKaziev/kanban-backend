import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db";

interface BoardAttributes {
  id: string;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BoardInstance
  extends Model<BoardAttributes, Optional<BoardAttributes, "id">>,
  BoardAttributes {}

const Board = sequelize.define<BoardInstance>(
  "Board",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: "Board",
  }
);

export default Board;
