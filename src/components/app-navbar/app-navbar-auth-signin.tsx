import React, { useState } from "react";
import { Button, makeStyles, Modal, TextField, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%,-50%)`,
    padding: theme.spacing(2, 4, 3),
  },
  button: {
    marginTop: theme.spacing(1),
  },
}));

export const AuthSignIn: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const classes = useStyles();

  const buttonIsDisable = !username || !password;

  const body = (
    <div className={classes.paper}>
      <Typography variant="h5" align="center" paragraph>Вход в систему</Typography>
      <form>
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
          disabled={buttonIsDisable}
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
    </div>
  );

  return (
    <>
      <Button color="inherit" onClick={() => setIsOpen(true)}>
        Войти
      </Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {body}
      </Modal>
    </>
  );
};
