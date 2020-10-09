import React, { useState } from "react";
import { Button } from "@material-ui/core";
import AuthSignIn from "./app-auth-signin";

export const AppAuth: React.FC = () => {
  const [isAuth, setIsAuth] = useState(true);

  const renderAuthButton = () => {
    if (!isAuth) {
      return <Button color="inherit">Выйти</Button>;
    } else {
      return <AuthSignIn />;
    }
  };

  return <div>{renderAuthButton()}</div>;
};
