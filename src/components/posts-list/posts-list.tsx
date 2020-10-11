import { Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { IPost } from "../../models/IPost";

import PostsListItem from "./posts-list-item";
import PostsNotAccepted from "./posts-list-not-accepted";

const PostsList: React.FC<{
  acceptedPosts: IPost[];
}> = ({ acceptedPosts }) => {
  const renderAcceptedPosts = () => {
    if (!acceptedPosts.length) {
      return null;
    }
    return acceptedPosts.map((item) => {
      return <PostsListItem key={item.id} item={item} />;
    });
  };

  return (
    <div>
      <PostsNotAccepted />
      <Typography variant="h4">Новости</Typography>
      {renderAcceptedPosts()}
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    acceptedPosts: state.posts.posts.filter((item: IPost) => item.isAccept),
  };
};

export default connect(mapStateToProps)(PostsList);
