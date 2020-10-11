import { makeStyles } from "@material-ui/core";
import React from "react";

import PostsList from "../components/posts-list/posts-list";

const useClasses = makeStyles((theme) => ({
  pageWrapper: {
    paddingTop: theme.spacing(2),
  },
}));

const PagePosts = () => {
  const classes = useClasses();
  return (
    <div className={classes.pageWrapper}>
      <PostsList />
    </div>
  );
};

export default PagePosts;
