import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { AppNavBar } from "../app-navbar/app-navbar";
import PagePosts from "../../routes/Posts";
import IndexPage from "../../routes/Index";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <AppNavBar />
        <Switch>
          <Route path="/" exact>
            <IndexPage />
          </Route>
          <Route path="/news">
            <PagePosts />
          </Route>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};
