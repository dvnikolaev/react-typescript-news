import { makeStyles } from "@material-ui/core";
import React from "react";
import ButtonAddNews from "../components/posts-add-news/posts-add-news";

import PostsList from "../components/posts-list/posts-list";

const useClasses = makeStyles((theme) => ({
  pageWrapper: {
    paddingTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column'
  },
}));

const PagePosts = () => {
  const classes = useClasses();
  return (
    <div className={classes.pageWrapper}>
      <ButtonAddNews />
      <PostsList />
    </div>
  );
};

export default PagePosts;
