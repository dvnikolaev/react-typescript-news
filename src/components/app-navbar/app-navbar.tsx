import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { AppNavbarList } from "./app-navbar-list";
import { AppNavbarAuth } from "./app-navbar-auth";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
});

export const AppNavBar: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="relative">
      <Toolbar variant="dense">
        <Typography className={classes.title}>React news</Typography>
        <AppNavbarList />
        <AppNavbarAuth />
      </Toolbar>
    </AppBar>
  );
};
