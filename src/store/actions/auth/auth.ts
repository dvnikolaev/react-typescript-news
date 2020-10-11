import { store } from "../../index";

import { IUser } from "../../../models/IAuth";
import { SIGN_IN, SIGN_OUT, SIGN_IN_ERROR } from "./types";

export const onSignIn = (username: string, password: string) => {
  const foundedUser = store.getState().auth.usersList.find((user) => {
    return (
      username.toLowerCase() === user.username && password === user.password
    );
  });

  if (foundedUser) {
    return {
      type: SIGN_IN,
      payload: foundedUser,
    };
  } else {
    store.dispatch(setSignInError(true));

    return {
      type: "",
    };
  }
};

export const onSignOut = () => {
  const user: IUser = {
    id: null,
    username: "",
    password: "",
    isAdmin: false,
  };

  return {
    type: SIGN_OUT,
    payload: user,
  };
};

export const setSignInError = (value: boolean) => {
  return {
    type: SIGN_IN_ERROR,
    payload: value,
  };
};
