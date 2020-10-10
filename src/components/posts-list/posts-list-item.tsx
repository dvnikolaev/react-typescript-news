import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

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
  title: string;
  description: string;
  date: string;
}> = ({ title, description, date }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>{title}</Typography>
        <Typography paragraph>{description}</Typography>
        <Typography>{date}</Typography>
      </CardContent>
      <CardActions className={classes.cardAction} disableSpacing>
        <Button variant="contained" color="primary" fullWidth>Принять</Button>
        <Button variant="contained" color="secondary" fullWidth className={classes.actionButton}>Отклонить</Button>
      </CardActions>
    </Card>
  );
};

export default PostsListItem;
