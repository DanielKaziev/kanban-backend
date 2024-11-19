import { EUserBoardRole } from "../config/state";
import sequelize from "../db";
import Board from "../models/Board";
import BoardUser from "../models/BoardUser";
import { IBoard } from "../types/boards";
import { RequestError, ResponseError } from "../utils/errors";
import Event from "../models/Event";
import boardService from "./boardService";
import { ICreateEvent } from "../types/events";
import Task from "../models/Task";
import { ICreateTask } from "../types/tasks";

class TaskService {
  public async getTasksByEvent(eventId: string) {
    const tasks = await Task.findAll({ where: { eventId: eventId } });
    return tasks;
  }

  public async createTask(eventId: string, body: ICreateTask) {
    const existsTask = await Task.findOne({
      where: { name: body.name, eventId: eventId },
    });
    if (existsTask)
      throw RequestError.BadRequest(
        `Task with name: ${body.name} already exist!`
      );

    const task = await Task.create({
      name: body.name,
      description: body.description,
      eventId: eventId,
    });

    return task;
  }

  public async getTaskById(taskId: string) {
    const tasks = await Task.findOne({ where: { id: taskId } });
    if (!tasks) throw RequestError.NotFound("Can not find task!");

    return tasks;
  }

  public async moveTask(taskId: string, targetEvent: string) {
    const task = await this.getTaskById(taskId);
    const newTask = await task.update({ eventId: targetEvent });

    return newTask;
  }
}
export default new TaskService();
