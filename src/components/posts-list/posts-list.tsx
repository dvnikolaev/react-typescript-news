import { Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { IPost } from "../../models/IPost";

import PostsListItem from "./posts-list-item";

const PostsList: React.FC<{
  acceptedPosts: IPost[];
  notAcceptedPosts: IPost[];
  isAdmin: boolean;
  userId: number;
  hasOwnNotAcceptedPosts: boolean;
}> = ({
  acceptedPosts,
  notAcceptedPosts,
  isAdmin,
  userId,
  hasOwnNotAcceptedPosts,
}) => {
  const renderNotAcceptedPosts = () => {
    const renderHeader = () => {
      if (hasOwnNotAcceptedPosts || (isAdmin || notAcceptedPosts.length)) {
        return <Typography>Нерасмотренные новости</Typography>
      }
      return null
    }

    notAcceptedPosts.map((item: IPost) => {
      if (userId !== item.author_id && !isAdmin) {
        return null;
      }
      return <PostsListItem key={item.id} item={item} />;
    });
  };

  return <div></div>;
};

const mapStateToProps = (state: any) => {
  return {
    acceptedPosts: state.posts.posts.filter((item: IPost) => item.isAccept),
    notAcceptedPosts: state.posts.posts.filter((item: IPost) => !item.isAccept),
    isAdmin: state.auth.user.isAdmin,
    userId: state.auth.user.id,
    hasOwnNotAcceptedPosts: state.posts.posts.some(
      (item: IPost) => item.author_id === state.auth.user.id && !item.isAccept
    ),
  };
};

export default connect(mapStateToProps)(PostsList);
