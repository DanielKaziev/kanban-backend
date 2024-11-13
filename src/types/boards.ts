export interface IBoardCreate {
  name: string;
  description: string;
  isPrivate: boolean;
}

export interface IBoard extends IBoardCreate {
  userId: string;
}
