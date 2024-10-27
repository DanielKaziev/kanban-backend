import Board from "./Board";
import Event from "./Event";
import Task from "./Task";
import TaskExecutor from "./TaskExecutor";
import BoardUser from "./BoardUser";
import Tag from "./Tag";
import TaskTag from "./TaskTag";
import BoardTag from "./BoardTag";
import BoardInvite from "./BoardInvite";

// Board > Event
Board.hasMany(Event, { foreignKey: "boardId", sourceKey: "id" });
Event.belongsTo(Board, { foreignKey: "boardId", targetKey: "id" });

// Event < Task
Event.hasMany(Task, { foreignKey: "eventId", sourceKey: "id" });
Task.belongsTo(Event, { foreignKey: "eventId", targetKey: "id" });

// Task < TaskExecutor
Task.hasMany(TaskExecutor, { foreignKey: "taskId", sourceKey: "id" });
TaskExecutor.belongsTo(Task, { foreignKey: "taskId", targetKey: "id" });

// Board < BoardUser
Board.hasMany(BoardUser, { foreignKey: "boardId", sourceKey: "id" });
BoardUser.belongsTo(Board, { foreignKey: "boardId", targetKey: "id" });

// Task < TaskTag
Task.hasMany(TaskTag, { foreignKey: "taskId", sourceKey: "id" });
TaskTag.belongsTo(Task, { foreignKey: "taskId", targetKey: "id" });

// Tag < TaskTag
Tag.hasMany(TaskTag, { foreignKey: "tagId", sourceKey: "id" });
TaskTag.belongsTo(Tag, { foreignKey: "tagId", targetKey: "id" });

// Board < BoardTag
Board.hasMany(BoardTag, { foreignKey: "boardId", sourceKey: "id" });
BoardTag.belongsTo(Board, { foreignKey: "boardId", targetKey: "id" });

// Tag < BoardTag
Tag.hasMany(BoardTag, { foreignKey: "tagId", sourceKey: "id" });
BoardTag.belongsTo(Tag, { foreignKey: "tagId", targetKey: "id" });

// Board < BoardInvite
Board.hasMany(BoardInvite, { foreignKey: "boardId", sourceKey: "id" });
BoardInvite.belongsTo(Board, { foreignKey: "boardId", targetKey: "id" });

export default {
  Board,
  Event,
  Task,
  TaskExecutor,
  BoardUser,
  Tag,
  TaskTag,
  BoardTag,
  BoardInvite,
};
