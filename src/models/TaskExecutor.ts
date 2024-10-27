import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

interface TaskExecutorAttributes {
  taskId: string;
  userId: string;
}

export interface TaskExecutorInstance
  extends Model<TaskExecutorAttributes>,
    TaskExecutorAttributes {}

const TaskExecutor = sequelize.define<TaskExecutorInstance>(
  "TaskExecutor",
  {
    taskId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    tableName: "TaskExecutor",
  }
);

export default TaskExecutor;
