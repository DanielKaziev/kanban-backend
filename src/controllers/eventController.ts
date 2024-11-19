import { Request, Response, NextFunction } from "express";
import { getTokenData } from "../utils/token";
import eventService from "../service/eventService";
import { ICreateEvent } from "../types/events";
import boardService from "../service/boardService";

class EventController {
  public async getListEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const { boardId } = req.params;
      const { id: userId } = getTokenData(req);

      await boardService.checkVisibility(boardId, userId);

      const events = await eventService.getEventsListByBoardId(boardId);

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

      await boardService.checkEditability(boardId, userId);

      const event = await eventService.createEvent(boardId, body);

      return res.json(event);
    } catch (error) {
      next(error);
    }
  }
}
export default new EventController();
