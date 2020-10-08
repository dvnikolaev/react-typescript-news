import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { AuthSignIn } from "./app-navbar-auth-signin";

export const AppNavbarAuth: React.FC = () => {
  const [isAuth, setIsAuth] = useState(true);

  const renderAuthButton = () => {
    if (!isAuth) {
      return <Button color="inherit">Выйти</Button>;
    } else {
      return <AuthSignIn />
    }
  };

  return (
    <div>
      {renderAuthButton()}
    </div>
  );
};
