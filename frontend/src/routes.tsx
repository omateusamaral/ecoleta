import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Point from "./Pages/CreatePoint";
const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact component={Home} path="/" />
      <Route component={Point} path="/create-point" />
    </BrowserRouter>
  );
};
export default Routes;
