import Board from "../models/Board";
import BoardUser from "../models/BoardUser";

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
    
    
    // Извлекаем данные о досках и ролях пользователя
    const boardsAndRoles = boardUsers.map((boardUser) => ({
      id: boardUser.boardId,
      name: boardUser.Board.name,
      description: boardUser.Board.description,
      userRole: boardUser.userBoardRoleId,
      createdAt: boardUser.Board.createdAt,
      updatedAt: boardUser.Board.updatedAt,
    }));

    return boardsAndRoles;
  }
}
export default new BoardService();
