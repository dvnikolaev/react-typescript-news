import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

import { IPost } from "../../models/IPost"; 


const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between'
  },
  cardAction: {
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center'
  },
  actionButton: {
    marginTop: 10
  }
}));

const PostsListItem: React.FC<{
  item: IPost;
  isAdmin: boolean;
}> = ({ item, isAdmin }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>{item.title}</Typography>
        <Typography paragraph>{item.description}</Typography>
        <Typography>{item.date}</Typography>
      </CardContent>
      <CardActions className={classes.cardAction} disableSpacing>
        <Button variant="contained" color="primary" fullWidth>Принять</Button>
        <Button variant="contained" color="secondary" fullWidth className={classes.actionButton}>Отклонить</Button>
      </CardActions>
    </Card>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isAdmin: state.auth.user.isAdmin
  }
}

export default connect(mapStateToProps)(PostsListItem);
