import React from "react";
import { connect } from "react-redux";
import { IPost } from "../../models/IPost";

import PostsListItem from "./posts-list-item";

const PostsList: React.FC<{ posts: IPost[] }> = ({ posts }) => {
  const renderPostItems = posts.map((item) => (
    <PostsListItem key={item.id} item={item} />
  ));

  return <div>{renderPostItems}</div>;
};

const mapStateToProps = (state: any) => {
  return {
    posts: state.posts.posts,
  };
};

export default connect(mapStateToProps)(PostsList);
