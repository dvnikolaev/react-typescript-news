import { SIGN_IN, SIGN_OUT } from "../actions/auth/types";

import { IAuthState } from '../../models/IAuth';

const INITIAL_STATE: IAuthState = {
  isAuth: false,
  user: {
    id: null,
    username: "",
    password: "",
    isAdmin: false,
  },
  usersList: [
    {
      id: 1,
      username: "admin",
      password: "admin",
      isAdmin: true,
    },
    {
      id: 2,
      username: "user",
      password: "user",
      isAdmin: false,
    },
  ],
};

export default (state = INITIAL_STATE, action: any): IAuthState => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, user: action.payload, isAuth: true };
    case SIGN_OUT:
      return { ...state, isAuth: false };
    default:
      return state;
  }
};
