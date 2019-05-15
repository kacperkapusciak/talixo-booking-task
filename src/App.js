import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Booking from "./components/Booking/Booking";
import Vehicles from "./components/Vehicles/Vehicles";
import Details from "./components/Details/Details";

function App() {
  return (
    <>
      <Switch>
        <Route path="/when" component={Booking} />
        <Route path="/what" component={Vehicles} />
        <Route path="/details-and-payment" component={Details} />
        <Redirect to="/when" />
      </Switch>
    </>
  );
}

export default withRouter(App);
