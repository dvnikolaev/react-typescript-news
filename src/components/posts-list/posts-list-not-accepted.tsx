import { Divider, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";

import { IPost } from "../../models/IPost";
import PostsListItem from "./posts-list-item";

const useStyles = makeStyles((theme) => ({
  divider: {
    margin: `${theme.spacing(2)}px 0`,
  },
}));

const PostsNotAccepted: React.FC<{
  notAcceptedPosts: IPost[];
  isAdmin: boolean;
  userId: number;
  hasOwnNotAcceptedPosts: boolean;
}> = ({ notAcceptedPosts, isAdmin, userId, hasOwnNotAcceptedPosts }) => {
  const classes = useStyles();

  const renderListItem = notAcceptedPosts.map((item) => {
    if (userId !== item.author_id && !isAdmin) {
      return null;
    }
    return <PostsListItem key={item.id} item={item} />;
  });

  const renderHeader = () => {
    if (hasOwnNotAcceptedPosts || (isAdmin && notAcceptedPosts.length)) {
      return <Typography variant="h4">Нерасмотренные новости</Typography>;
    }
    return null;
  };

  const renderDivider = () => {
    if (hasOwnNotAcceptedPosts || (isAdmin && notAcceptedPosts.length)) {
      return <Divider className={classes.divider} />;
    }
    return null;
  };

  if (!notAcceptedPosts.length) {
    return null;
  }
  return (
    <section>
      {renderHeader()}
      {renderListItem}
      {renderDivider()}
    </section>
  );
};

const mapStateToProps = (state: any) => {
  return {
    notAcceptedPosts: state.posts.posts.filter((item: IPost) => !item.isAccept),
    isAdmin: state.auth.user.isAdmin,
    userId: state.auth.user.id,
    hasOwnNotAcceptedPosts: state.posts.posts.some(
      (item: IPost) => item.author_id === state.auth.user.id && !item.isAccept
    ),
  };
};

export default connect(mapStateToProps)(PostsNotAccepted);
