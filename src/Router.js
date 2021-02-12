import React from "react";
import { Switch, Route } from "react-router";
import { Register } from "./views/Register";
import { Verify } from "./views/Verify";
import { Payment } from "./views/Payment";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Register} />
      <Route path="/verify" component={Verify} />
      <Route path="/payment-information" component={Payment} />
    </Switch>
  );
};

export default Router;
