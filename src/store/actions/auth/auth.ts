import { store } from "../../index";

import { SIGN_IN, SIGN_OUT } from "./types";

export const onSignIn = (username: string, password: string) => {
  const foundedUser = store.getState().auth.usersList.find((user) => {
    return (
      username.toLowerCase() === user.username && password === user.password
    );
  });

  if (foundedUser) {
    return {
      type: SIGN_IN,
    };
  } else {
    return {
      type: '',
    };
  }
};
