import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db";

interface TaskAttributes {
  id: string;
  name: string;
  description?: string;
  eventId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface TaskInstance
  extends Model<TaskAttributes, Optional<TaskAttributes, "id">>,
    TaskAttributes {}

const Task = sequelize.define<TaskInstance>(
  "Task",
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
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "Task",
  }
);

export default Task;
