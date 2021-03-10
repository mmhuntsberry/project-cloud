import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";

// Components
import FormProgressIndicator from "../ProgressIndicator";
import GlobalHeader from "../GlobalHeader/GlobalHeader";
import Router from "../../Router";
import { Sidebar } from "../Sidebar";
import { Header } from "../Forms/Header";

// State Machie configs
import registerMachineConfig, {
  RegisterMachineContext
} from "../../machines/Register/registerMachineConfig";
import registerMachineOptions from "../../machines/Register/initMachineOptions";

// Styles
import "./app.scss";

function App() {
  const location = useLocation();
  /**
   * Need access to registerMachines context.  The state (current) and it's
   * dispatch function (send) need to be passed as value for other components to
   * get access
   */
  const machineOptions = registerMachineOptions();
  const registerMachine = Machine(registerMachineConfig, machineOptions);
  const [current, send] = useMachine(registerMachine);
  const machine = [current, send];

  // Get current path to pass as index for ProgressIndicatorr
  /**
   * ProgressIndicator component needs a `currentIndex` passed to it
   * to keep track of where its at.  Here we set state to keep track of the index.
   *
   * Also building objects to target the specific paths
   */
  const [currentIndex, setCurrentIndex] = useState(0);
  const paths = [
    { pathname: "/", index: 0 },
    { pathname: "/verify", index: 1 },
    { pathname: "/payment-information", index: 2 }
  ];

  useEffect(() => {
    /**
     * Using location it finds where the user is currently and
     * set the index, updating the `progressIndicator.
     */
    setCurrentIndex(
      paths.find(path => path.pathname === location.pathname).index
    );
  }, [location]);

  return (
    <>
      <RegisterMachineContext.Provider value={machine}>
        <div className="app">
          <GlobalHeader />
          <div className="bx--grid bx--grid--full-width">
            <div className="u-pad-b-layout-03">
              <Header />
            </div>
            <FormProgressIndicator currentIndex={currentIndex} />
            <div className="bx--row">
              <div
                className={`${
                  location.pathname === "/payment-information"
                    ? "bx--col-lg-9 bx--col-md-6 bx--col-sm-4"
                    : "bx--col-lg-8 bx--col-md-6 bx--col-sm-4"
                }`}
              >
                <Router />
              </div>
              <div
                className={`sidebar ${
                  location.pathname === "/payment-information"
                    ? "bx--offset-lg-1 bx--col-lg-5"
                    : "bx--offset-lg-2 bx--col-lg-5"
                }`}
              >
                <Sidebar />
              </div>
            </div>
          </div>
        </div>
      </RegisterMachineContext.Provider>
    </>
  );
}

export default App;
