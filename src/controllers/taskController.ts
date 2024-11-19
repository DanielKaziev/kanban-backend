import { Request, Response, NextFunction } from "express";
import { RequestError, ResponseError } from "../utils/errors";
import { getTokenData } from "../utils/token";
import eventService from "../service/eventService";
import { ICreateEvent } from "../types/events";
import taskService from "../service/taskService";
import boardService from "../service/boardService";
import { ICreateTask, IMoveTask } from "../types/tasks";

class TaskController {
  public async getListTasks(req: Request, res: Response, next: NextFunction) {
    try {
      const { eventId } = req.params;
      const { id: userId } = getTokenData(req);

      const { boardId } = await eventService.getEventById(eventId);
      await boardService.checkVisibility(boardId, userId);

      const tasks = await taskService.getTasksByEvent(eventId);

      return res.json(tasks);
    } catch (error) {
      next(error);
    }
  }
  public async createTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { eventId } = req.params;
      const { id: userId } = getTokenData(req);
      const body = req.body as ICreateTask;

      const { boardId } = await eventService.getEventById(eventId);
      await boardService.checkEditability(boardId, userId);

      const task = await taskService.createTask(eventId, body);

      return res.json(task);
    } catch (error) {
      next(error);
    }
  }
  public async moveTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { taskId } = req.params;
      const { id: userId } = getTokenData(req);
      const { target } = req.body as IMoveTask;

      const task = await taskService.getTaskById(taskId);
      const eventCurrent = await eventService.getEventById(task.eventId);
      const eventTarget = await eventService.getEventById(target);

      if (eventCurrent.boardId !== eventTarget.boardId) {
        throw RequestError.BadRequest("Task cannot be updated!");
      }

      await boardService.checkEditability(eventCurrent.boardId, userId);

      const newTask = await taskService.moveTask(taskId, target);

      return res.json(newTask);
    } catch (error) {
      next(error);
    }
  }
}
export default new TaskController();
