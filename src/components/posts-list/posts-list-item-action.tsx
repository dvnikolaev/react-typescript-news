import { Button, CardActions, makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

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
}> = ({ isAdmin }) => {
  const classes = useStyles();

  if (!isAdmin) {
    return null;
  }

  return (
    <CardActions className={classes.cardAction} disableSpacing>
      <Button variant="contained" color="primary" fullWidth>
        Принять
      </Button>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        className={classes.actionButton}
      >
        Отклонить
      </Button>
    </CardActions>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isAdmin: state.auth.user.isAdmin,
  };
};

export default connect(mapStateToProps)(ItemActions);
