import React, { useState } from "react";
import { connect } from "react-redux";
import { Button, makeStyles, TextField, Typography } from "@material-ui/core";

import { onSignIn } from "../../store/actions/auth/auth";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: theme.spacing(1),
  },
}));

const AuthBody: React.FC<{
  setIsOpen(value: boolean): void;
  onSignIn(username: string, password: string): void;
}> = ({ setIsOpen, onSignIn }) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const classes = useStyles();

  const buttonIsDisable = !username || !password;

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onSignIn(username, password);
    }
  };

  return (
    <>
      <Typography variant="h5" align="center" paragraph>
        Вход в систему
      </Typography>
      <form onSubmit={(e) => onSubmitHandler(e)}>
        <TextField
          fullWidth
          label="Логин"
          variant="outlined"
          size="small"
          value={username}
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
          className={classes.button}
          color="secondary"
          onClick={() => setIsOpen(false)}
        >
          Отмена
        </Button>
      </form>
    </>
  );
};

export default connect(null, { onSignIn })(AuthBody);
