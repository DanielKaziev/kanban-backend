import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db";

interface EventAttributes {
  id: string;
  name: string;
  boardId: string;
  order: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface EventInstance
  extends Model<EventAttributes, Optional<EventAttributes, "id">>,
    EventAttributes {}

const Event = sequelize.define<EventInstance>(
  "Event",
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
    order: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    boardId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "Event",
  }
);

export default Event;
