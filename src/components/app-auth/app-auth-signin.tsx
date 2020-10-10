import React, { useState } from "react";
import { Button, Modal, makeStyles } from "@material-ui/core";

import AuthBody from "./app-auth-body";
import { setSignInError } from "../../store/actions/auth/auth";
import { connect } from "react-redux";

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
}));

const AuthSignIn: React.FC<{ setSignInError(value: false): void }> = ({ setSignInError }) => {
  const [isOpen, setIsOpen] = useState(false);

  const classes = useStyles();

  const closeModal = () => {
    setIsOpen(false);
    setSignInError(false);
  };

  return (
    <>
      <Button color="inherit" onClick={() => setIsOpen(true)}>
        Войти
      </Button>
      <Modal open={isOpen} onClose={() => closeModal()}>
        <div className={classes.paper}>
          <AuthBody setIsOpen={setIsOpen} />
        </div>
      </Modal>
    </>
  );
};

export default connect(null, { setSignInError })(AuthSignIn);
