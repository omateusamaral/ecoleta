import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Point from "./Pages/CreatePoint";
import Sucess from "./Pages/SucessPage";
const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact component={Home} path="/" />
      <Route component={Point} path="/create-point" />
      <Route component={Sucess} path="/sucess" />
    </BrowserRouter>
  );
};
export default Routes;
