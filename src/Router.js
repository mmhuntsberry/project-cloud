import React from "react";
import { Switch, Route } from "react-router";
import { Register } from "./views/Register";
import { Verify } from "./views/Verify";
import { Payment } from "./views/Payment";
import { AnimatePresence } from "framer-motion";

const Router = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/verify" component={Verify} />
        <Route path="/payment-information" component={Payment} />
      </Switch>
    </AnimatePresence>
  );
};

export default Router;
