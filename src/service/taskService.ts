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
}
export default new TaskService();
