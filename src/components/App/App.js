/* eslint-disable */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Router from "../../Router";
import GlobalHeader from "../GlobalHeader/GlobalHeader";
import { Header } from "../Forms/RegisterForm/Header";
import "./app.scss";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import signInMachineConfig, {
  SigninMachineContext
} from "../../machines/SignIn/signInMachineConfig";
import signInMachineOptions from "../../machines/SignIn/initMachineOptions";
import FormProgressIndicator from "../ProgressIndicator";
import Sidebar from "../Sidebar";

function App() {
  const machineOptions = signInMachineOptions();
  const signInMachine = Machine(signInMachineConfig, machineOptions);
  const [current, send] = useMachine(signInMachine);
  const machine = [current, send];
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

    console.log(location.pathname);
  }, [location]);

  return (
    <>
      <SigninMachineContext.Provider value={machine}>
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
      </SigninMachineContext.Provider>
    </>
  );
}

export default App;
