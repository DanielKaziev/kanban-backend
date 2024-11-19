import { Request, Response, NextFunction } from "express";
import { ResponseError } from "../utils/errors";
import { getTokenData } from "../utils/token";
import eventService from "../service/eventService";
import { ICreateEvent } from "../types/events";

class EventController {
  public async getListEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const { boardId } = req.params;
      const { id: userId } = getTokenData(req);

      const events = await eventService.getEventsListByBoardId(boardId, userId);

      return res.json(events);
    } catch (error) {
      next(error);
    }
  }
  public async createEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const { boardId } = req.params;
      const body = req.body as ICreateEvent;
      const { id: userId } = getTokenData(req);

      const event = await eventService.createEvent(boardId, userId, body);

      return res.json(event);
    } catch (error) {
      next(error);
    }
  }
}
export default new EventController();
