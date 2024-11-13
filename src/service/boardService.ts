import { EUserBoardRole } from "../config/state";
import sequelize from "../db";
import Board from "../models/Board";
import BoardUser from "../models/BoardUser";
import { IBoard } from "../types/boards";
import { RequestError, ResponseError } from "../utils/errors";

class BoardService {
  public async getListBoardsByUserId(userId: string) {
    const boardUsers = await BoardUser.findAll({
      where: { userId },
      include: [
        {
          model: Board,
          attributes: ["id", "name", "description", "createdAt", "updatedAt"],
        },
      ],
    });

    const boardsAndRoles = boardUsers.map((boardUser) => ({
      id: boardUser.boardId,
      name: boardUser.Board.name,
      description: boardUser.Board.description,
      userRole: boardUser.userBoardRole,
      createdAt: boardUser.Board.createdAt,
      updatedAt: boardUser.Board.updatedAt,
    }));

    return boardsAndRoles;
  }

  public async createBoard(data: IBoard) {
    const { userId, name, description, isPrivate } = data;

    const existingBoard = await this.isBoardExists(name, userId);
    if (existingBoard)
      throw RequestError.BadRequest(`Board with name: ${name} already exist!`);

    const transaction = await sequelize.transaction();
    try {
      const board = await Board.create(
        {
          name,
          description,
          isPrivate,
        },
        { transaction }
      );

      const boardUser = await BoardUser.create(
        {
          boardId: board.id,
          userId,
          userBoardRole: EUserBoardRole.HOST,
        },
        { transaction }
      );

      await transaction.commit();

      return {
        id: board.id,
        name: board.name,
        description: board.description,
        role: EUserBoardRole.HOST,
        isPrivate: board.isPrivate,
        createdAt: board.createdAt,
        updatedAt: board.updatedAt,
      };
    } catch (error: any) {
      await transaction.rollback();
      throw ResponseError.InternalServerError(
        error.message || "Failed to create board or link user"
      );
    }
  }

  private async isBoardExists(boardName: string, userId: string) {
    const existingBoard = await Board.findOne({
      where: {
        name: boardName,
      },
      include: [
        {
          model: BoardUser,
          where: {
            userId: userId,
          },
          attributes: [],
        },
      ],
    });
    return Boolean(existingBoard);
  }
}
export default new BoardService();
