export interface ITokenData {
  id: string;
  username: string;
  email: string;
  state: string;
  permissions: Array<string>;
  iat: number;
  exp: number;
}
