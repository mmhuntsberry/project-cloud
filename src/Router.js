import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Register } from "./views/Register";
import { Verify } from "./views/Verify";
import { Payment } from "./views/Payment";
import { AnimatePresence } from "framer-motion";

const Router = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.key}>
        <Route exact path="/" component={Register} />
        <Route path="/verify" component={Verify} />
        <Route path="/payment-information" component={Payment} />
      </Switch>
    </AnimatePresence>
  );
};

export default Router;
