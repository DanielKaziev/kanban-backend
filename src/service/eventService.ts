import { EUserBoardRole } from "../config/state";
import sequelize from "../db";
import Board from "../models/Board";
import BoardUser from "../models/BoardUser";
import { IBoard } from "../types/boards";
import { RequestError, ResponseError } from "../utils/errors";
import Event from "../models/Event";
import boardService from "./boardService";
import { ICreateEvent } from "../types/events";

class EventService {
  public async getEventsListByBoardId(boardId: string) {
    const events = await Event.findAll({ where: { boardId: boardId } });
    return events;
  }

  public async getEventById(eventId: string) {
    const event = await Event.findOne({ where: { id: eventId } });
    if (!event) throw RequestError.NotFound(`Can not find event ${eventId}!`);

    return event;
  }

  public async createEvent(boardId: string, body: ICreateEvent) {
    const existsEvent = await Event.findOne({
      where: { name: body.name, boardId: boardId },
    });
    if (existsEvent)
      throw RequestError.BadRequest(
        `Event with name: ${body.name} already exist!`
      );

    const event = await Event.create({
      name: body.name,
      order: body.order,
      boardId: boardId,
    });

    return event;
  }
}
export default new EventService();
