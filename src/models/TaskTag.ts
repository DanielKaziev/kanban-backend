import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

interface TaskTagAttributes {
  taskId: string;
  tagId: string;
}

export interface TaskTagInstance
  extends Model<TaskTagAttributes>,
    TaskTagAttributes {}

const TaskTag = sequelize.define<TaskTagInstance>(
  "TaskTag",
  {
    taskId: {
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
    tableName: "TaskTag",
  }
);

export default TaskTag;
