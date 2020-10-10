interface IUser {
  id: number | null;
  username: string;
  password: string;
  isAdmin: boolean;
}

export interface IAuthState {
  isAuth: boolean;
  user: IUser;
  usersList: IUser[];
}