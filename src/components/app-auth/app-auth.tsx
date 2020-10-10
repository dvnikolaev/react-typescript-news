import React from "react";
import { connect } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import AuthSignIn from "./app-auth-signin";

const AppAuth: React.FC<{ isAuth: boolean; username: string }> = ({
  isAuth,
  username,
}) => {
  const renderAuthButton = () => {
    if (isAuth) {
      return (
        <>
          <Typography>{username}</Typography>
          <Button color="inherit">Выйти</Button>
        </>
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

export default connect(mapStateToProps)(AppAuth);
