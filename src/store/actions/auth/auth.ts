import { store } from "../../index";

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
    return {
      type: "",
    };
  }
};

export const onSignOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const setSignInError = () => {
  return {
    type: SIGN_IN_ERROR
  }
}