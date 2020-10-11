import { Button, makeStyles, Modal } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import AddNewsBody from "./posts-add-news-body";

const useClasses = makeStyles((theme) => ({
  buttonAddPost: {
    alignSelf: "flex-end",
  },
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

const ButtonAddNews: React.FC<{ userId: number | null }> = ({ userId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useClasses();

  if (!userId) {
    return null;
  }

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        className={classes.buttonAddPost}
        onClick={() => setIsOpen(true)}
      >
        Добавить новость
      </Button>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <div className={classes.paper}>
          <AddNewsBody setIsOpen={setIsOpen} />
        </div>
      </Modal>
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    userId: state.auth.user.id,
  };
};

export default connect(mapStateToProps)(ButtonAddNews);
