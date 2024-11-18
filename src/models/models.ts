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
Board.hasMany(Event, {
  foreignKey: "boardId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
Event.belongsTo(Board, {
  foreignKey: "boardId",
  targetKey: "id",
  onDelete: "CASCADE",
});

// Event < Task
Event.hasMany(Task, {
  foreignKey: "eventId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
Task.belongsTo(Event, {
  foreignKey: "eventId",
  targetKey: "id",
  onDelete: "CASCADE",
});

// Task < TaskExecutor
Task.hasMany(TaskExecutor, {
  foreignKey: "taskId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
TaskExecutor.belongsTo(Task, {
  foreignKey: "taskId",
  targetKey: "id",
  onDelete: "CASCADE",
});

// Board < BoardUser
Board.hasMany(BoardUser, {
  foreignKey: "boardId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
BoardUser.belongsTo(Board, {
  foreignKey: "boardId",
  targetKey: "id",
  onDelete: "CASCADE",
});

// Task < TaskTag
Task.hasMany(TaskTag, {
  foreignKey: "taskId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
TaskTag.belongsTo(Task, {
  foreignKey: "taskId",
  targetKey: "id",
  onDelete: "CASCADE",
});

// Tag < TaskTag
Tag.hasMany(TaskTag, {
  foreignKey: "tagId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
TaskTag.belongsTo(Tag, {
  foreignKey: "tagId",
  targetKey: "id",
  onDelete: "CASCADE",
});

// Board < BoardTag
Board.hasMany(BoardTag, {
  foreignKey: "boardId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
BoardTag.belongsTo(Board, {
  foreignKey: "boardId",
  targetKey: "id",
  onDelete: "CASCADE",
});

// Tag < BoardTag
Tag.hasMany(BoardTag, {
  foreignKey: "tagId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
BoardTag.belongsTo(Tag, {
  foreignKey: "tagId",
  targetKey: "id",
  onDelete: "CASCADE",
});

// Board < BoardInvite
Board.hasMany(BoardInvite, {
  foreignKey: "boardId",
  sourceKey: "id",
  onDelete: "CASCADE",
});
BoardInvite.belongsTo(Board, {
  foreignKey: "boardId",
  targetKey: "id",
  onDelete: "CASCADE",
});

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
