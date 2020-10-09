import React, { useState } from "react";
import { Button, Modal, makeStyles } from "@material-ui/core";

import AuthBody from "./app-auth-body";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%,-50%)`,
    padding: theme.spacing(2, 4, 3),
  }
}));


const AuthSignIn: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  return (
    <>
      <Button color="inherit" onClick={() => setIsOpen(true)}>
        Войти
      </Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className={classes.paper}>
          <AuthBody setIsOpen={setIsOpen}/>
        </div>
      </Modal>
    </>
  );
};

export default AuthSignIn;
