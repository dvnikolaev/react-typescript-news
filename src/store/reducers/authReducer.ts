import { SIGN_IN } from "../actions/auth/types";

interface IAuthState {
  isAuth: boolean;
  user: IUser;
  usersList: IUser[];
}

interface IUser {
  id: number | null,
  username: string;
  password: string;
  isAdmin: boolean;
}

const INITIAL_STATE: IAuthState = {
  isAuth: false,
  user: {
    id: null,
    username: '',
    password: '',
    isAdmin: false
  },
  usersList: [
    {
      id: 1,
      username: "admin",
      password: "admin",
      isAdmin: true
    },
    {
      id: 2,
      username: "user",
      password: "user",
      isAdmin: false
    }
  ]
};

export default (state = INITIAL_STATE, action: any): IAuthState => {
  switch (action.type) {
    case SIGN_IN:
      return {...state, user: action.payload, isAuth: true};
    default:
      return state;
  }
};
