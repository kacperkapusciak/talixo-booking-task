import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import RouteInfo from "./components/RouteInfo/RouteInfo";
import Vehicles from "./components/Vehicles/Vehicles";
import Details from "./components/Details/Details";

function App() {
  return (
    <>
      <Switch>
        <Route path="/when" component={RouteInfo} />
        <Route path="/what" component={Vehicles} />
        <Route path="/details-and-payment" component={Details} />
        <Redirect to="/when" />
      </Switch>
    </>
  );
}

export default withRouter(App);
