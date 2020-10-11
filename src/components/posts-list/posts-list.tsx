import { Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { IPost } from "../../models/IPost";

import PostsListItem from "./posts-list-item";
import PostsNotAccepted from "./posts-list-not-accepted";

const PostsList: React.FC<{
  acceptedPosts: IPost[];
  search: string;
}> = ({ acceptedPosts, search }) => {
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
      <PostsNotAccepted search={search}/>
      <Typography variant="h4">Новости</Typography>
      {renderAcceptedPosts()}
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  console.log(ownProps);
  return {
    acceptedPosts: state.posts.posts.filter((item: IPost) => {
      return (
        item.isAccept &&
        (item.title.toLowerCase().includes(ownProps.search) ||
          item.description.toLowerCase().includes(ownProps.search) ||
          item.date.includes(ownProps.search))
      );
    }),
  };
};

export default connect(mapStateToProps)(PostsList);
