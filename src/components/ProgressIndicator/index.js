import { ProgressIndicator, ProgressStep } from "carbon-components-react";
import React from "react";

export const FormProogressIndicator = () => {
  return (
    <ProgressIndicator currentIndex={0} className="progress-indicator">
      <ProgressStep label="Create an IBMid" description="Create an IBMid" />
      <ProgressStep label="Verify email" description="Verify email" />
      <ProgressStep
        label="Verify credit card"
        description="Verify credit card"
      />
    </ProgressIndicator>
  );
};

export default FormProogressIndicator;
