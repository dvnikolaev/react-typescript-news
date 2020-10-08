interface IAuthState {
  isAuth: Boolean;
  userList: IAuthUserList[]
}

interface IAuthUserList {
  username: string,
  password: string
}

const INITIAL_STATE: IAuthState = {
  isAuth: false,
  userList: [
    {
      username: "admin",
      password: "admin"
    },
    {
      username: "user",
      password: "user",
    }
  ]
};

export default (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "SIGN_IN":
      return 123;
    default:
      return state;
  }
};
