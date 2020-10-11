import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import ButtonAddNews from "../components/posts-add-news/posts-add-news";

import PostsList from "../components/posts-list/posts-list";
import SearchPost from "../components/posts-search/posts-search";

const useClasses = makeStyles((theme) => ({
  pageWrapper: {
    paddingTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
}));

const PagePosts = () => {
  const [search, setSearch] = useState("");
  const classes = useClasses();
  return (
    <div className={classes.pageWrapper}>
      <ButtonAddNews />
      <SearchPost search={search} setSearch={setSearch} />
      <PostsList search={search.toLowerCase().trim()}/>
    </div>
  );
};

export default PagePosts;
