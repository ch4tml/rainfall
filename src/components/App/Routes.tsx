import * as React from "react";
import { Switch, Route } from "react-router-dom";

import Error from "./Error";
import Home from "./Home";
import Station from "../../modules/Station";

const Routes = (): JSX.Element => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/station" component={Station} />
    <Route path="*" component={Error} />
  </Switch>
);

export default Routes;
