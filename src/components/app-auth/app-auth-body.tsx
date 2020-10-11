import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";

import { onSignIn, setSignInError } from "../../store/actions/auth/auth";
import AppAuthError from "./app-auth-errror";

const useStyles = makeStyles((theme) => ({
  spacingTop: {
    marginTop: theme.spacing(1),
  },
}));

const AuthBody: React.FC<{
  setIsOpen(value: boolean): void;
  onSignIn(username: string, password: string): void;
  setSignInError(value: boolean): void;
}> = ({ setIsOpen, onSignIn, setSignInError }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const classes = useStyles();

  const buttonIsDisable = !username.trim() || !password.trim();

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onSignIn(username, password);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setSignInError(false);
  };

  return (
    <>
      <Typography variant="h5" align="center" gutterBottom>
        Вход в систему
      </Typography>
      <AppAuthError />
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <TextField
          fullWidth
          label="Логин"
          variant="outlined"
          size="small"
          value={username}
          className={classes.spacingTop}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Пароль"
          variant="outlined"
          size="small"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          disabled={buttonIsDisable}
          onClick={onSubmitHandler}
        >
          Вход
        </Button>
        <Button
          fullWidth
          variant="outlined"
          className={classes.spacingTop}
          color="secondary"
          onClick={() => closeModal()}
        >
          Отмена
        </Button>
      </form>
    </>
  );
};

export default connect(null, { onSignIn, setSignInError })(AuthBody);
