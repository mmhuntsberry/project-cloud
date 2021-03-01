import React from "react";
import { HashRouter } from "react-router-dom";
import Router from "../../Router";
import GlobalHeader from "../GlobalHeader/GlobalHeader";
import "./app.scss";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import signInMachineConfig, {
  SigninMachineContext
} from "../../machines/SignIn/signInMachineConfig";
import signInMachineOptions from "../../machines/SignIn/initMachineOptions";

function App() {
  const machineOptions = signInMachineOptions();
  const signInMachine = Machine(signInMachineConfig, machineOptions);
  const [current, send] = useMachine(signInMachine);
  const machine = [current, send];
  return (
    <HashRouter>
      <SigninMachineContext.Provider value={machine}>
        <div className="app u-pad-t-layout-06">
          <GlobalHeader />
          <div className="bx--grid">
            <div className="bx--row">
              <Router />
            </div>
          </div>
        </div>
      </SigninMachineContext.Provider>
    </HashRouter>
  );
}

export default App;
