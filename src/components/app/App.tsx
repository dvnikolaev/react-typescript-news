import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

import { AppNavBar } from "../app-navbar/app-navbar";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        <AppNavBar />
      </Container>
    </BrowserRouter>
  );
};
