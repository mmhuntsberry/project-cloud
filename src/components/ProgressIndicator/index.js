import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { ProgressIndicator, ProgressStep } from "carbon-components-react";
import { useMachine } from "@xstate/react";
import { Machine } from "xstate";
import registerMachineConfig from "../../machines/Register/registerMachineConfig";
import registerMachineOptions from "../../machines/Register/initMachineOptions";

const FormProgressIndicator = ({ currentIndex = 0 }) => {
  const history = useHistory();
  const machineOptions = registerMachineOptions();
  const registerMachine = Machine(registerMachineConfig, machineOptions);
  const [, send] = useMachine(registerMachine);

  useEffect(() => {});

  return (
    <ProgressIndicator
      currentIndex={currentIndex}
      className="progress-indicator"
      /**
       * OnChange for progress return the index.
       * With the index we can then push the user to another
       * component.
       */
      onChange={index => {
        if (index === 0) {
          send({
            type: "ENTER_EMAIL",
            email: ""
          });

          send({
            type: "ENTER_PASSWORD",
            password: ""
          });

          send({
            type: "ENTER_ACCOUNT_TYPE",
            accountType: "company"
          });

          history.push("/");
        } else if (index === 1) {
          history.push("/verify");
        }
      }}
    >
      <ProgressStep label="Create an IBMid" description="Create an IBMid" />
      <ProgressStep
        className="progress__step"
        disabled={currentIndex > 0 ? false : true}
        label="Verify email"
        description="Verify email"
      />
      <ProgressStep
        className="progress__step"
        disabled={currentIndex > 1 ? false : true}
        label="Verify identity"
        description="Verify credit card"
      />
    </ProgressIndicator>
  );
};

export default FormProgressIndicator;
