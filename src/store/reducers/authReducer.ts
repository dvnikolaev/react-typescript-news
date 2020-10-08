interface IAuthState {
  isAuth: boolean;
  usersList: IAuthUserList[]
}

interface IAuthUserList {
  id: number,
  username: string,
  password: string,
  isAdmin: boolean
}

const INITIAL_STATE: IAuthState = {
  isAuth: false,
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
    case "SIGN_IN":
      return {...state};
    default:
      return state;
  }
};
