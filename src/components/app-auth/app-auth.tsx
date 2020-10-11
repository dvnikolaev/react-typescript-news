import React from "react";
import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";

import { onSignOut } from "../../store/actions/auth/auth";
import AuthSignIn from "./app-auth-signin";

const AppAuth: React.FC<{
  isAuth: boolean;
  username: string;
  onSignOut(): void;
}> = ({ isAuth, username, onSignOut }) => {
  const renderAuthButton = () => {
    if (isAuth) {
      return (
        <Button color="inherit" onClick={() => onSignOut()}>
          Выйти
        </Button>
      );
    } else {
      return <AuthSignIn />;
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state: any) => {
  return {
    isAuth: state.auth.isAuth,
    username: state.auth.user.username,
  };
};

export default connect(mapStateToProps, { onSignOut })(AppAuth);
