import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Formation from "./page/Formation";
import Experiences from "./page/Experiences";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/formation" component={Formation} />
    <Route path="/missions" component={Experiences} />
  </Switch>
);

export default Routes;
