import { useHistory } from "react-router-dom";

import { ProgressIndicator, ProgressStep } from "carbon-components-react";
import React from "react";

const FormProgressIndicator = ({ currentIndex = 0 }) => {
  const history = useHistory();

  return (
    <ProgressIndicator
      currentIndex={currentIndex}
      className="progress-indicator"
      onChange={index => {
        if (index === 0) {
          history.push("/");
        } else if (index === 1) {
          history.push("/verify");
        }
      }}
    >
      <ProgressStep label="Create an IBMid" description="Create an IBMid" />
      <ProgressStep
        disabled={currentIndex > 0 ? false : true}
        label="Verify email"
        description="Verify email"
      />
      <ProgressStep
        disabled={currentIndex > 1 ? false : true}
        label="Verify credit card"
        description="Verify credit card"
      />
    </ProgressIndicator>
  );
};

export default FormProgressIndicator;
