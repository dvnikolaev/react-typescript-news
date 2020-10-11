import { Button, CardActions, makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { onAcceptPost, onDeclinePost } from "../../store/actions/posts/posts";

const useStyles = makeStyles({
  cardAction: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
  actionButton: {
    marginTop: 10,
  },
});

const ItemActions: React.FC<{
  isAdmin: boolean;
  id: number;
  isAccept: boolean;
  onAcceptPost(id: number): void;
  onDeclinePost(id: number): void;
}> = ({ isAdmin, id, isAccept, onAcceptPost, onDeclinePost }) => {
  const classes = useStyles();

  const acceptPostHandler = () => {
    onAcceptPost(id);
  };

  const onDeclineHandler = () => {
    onDeclinePost(id);
  }

  if (!isAdmin) {
    return null;
  }

  if (isAdmin && !isAccept) {
    return (
      <CardActions className={classes.cardAction} disableSpacing>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => acceptPostHandler()}
        >
          Принять
        </Button>
        <Button
          variant="contained"
          color="secondary"
          fullWidth
          className={classes.actionButton}
          onClick={onDeclineHandler}
        >
          Отклонить
        </Button>
      </CardActions>
    );
  }
  return null;
};

const mapStateToProps = (state: any) => {
  return {
    isAdmin: state.auth.user.isAdmin,
  };
};

export default connect(mapStateToProps, { onAcceptPost, onDeclinePost })(ItemActions);
