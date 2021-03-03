import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";

import Router from "../../Router";
import GlobalHeader from "../GlobalHeader/GlobalHeader";
import Sidebar from "../Sidebar";
import { Header } from "../Forms/RegisterForm/Header";

import registerMachineConfig, {
  RegisterMachineContext
} from "../../machines/Register/registerMachineConfig";
import registerMachineOptions from "../../machines/Register/initMachineOptions";
import FormProgressIndicator from "../ProgressIndicator";
import "./app.scss";

function App() {
  // Get signin machine to pass as context value
  // Verify component needs users email address from Register form.
  const machineOptions = registerMachineOptions();
  const registerMachine = Machine(registerMachineConfig, machineOptions);
  const [current, send] = useMachine(registerMachine);
  const machine = [current, send];

  // Get current path to pass as index for ProgressIndicatorr
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = useLocation();
  const paths = [
    { pathname: "/", index: 0 },
    { pathname: "/verify", index: 1 },
    { pathname: "/payment-information", index: 2 }
  ];

  useEffect(() => {
    setCurrentIndex(
      paths.find(path => path.pathname === location.pathname).index
    );
  }, [location]);

  return (
    <>
      <RegisterMachineContext.Provider value={machine}>
        <div className="app u-pad-t-layout-06">
          <GlobalHeader />
          <div className="bx--grid">
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
