import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";

import { IPost } from "../../models/IPost";
import ItemActions from "./posts-list-item-action";

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "space-between",
  },
  cardAction: {
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
  },
  actionButton: {
    marginTop: 10,
  },
}));

const PostsListItem: React.FC<{
  item: IPost;
}> = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {item.title}
        </Typography>
        <Typography paragraph>{item.description}</Typography>
        <Typography>{item.date}</Typography>
      </CardContent>
      <ItemActions id={item.id} isAccept={item.isAccept} />
    </Card>
  );
};

export default PostsListItem;
