import { FormGroup, RadioButtonGroup } from "carbon-components-react";
import { RadioButton } from "carbon-components-react/lib/components/RadioButton/RadioButton";
import React from "react";

const Radio = () => {
  return (
    <FormGroup className="u-margin-t-04 u-margin-b-02">
      <RadioButtonGroup
        defaultSelected="company"
        legend="Group Legend"
        name="account-type"
        valueSelected="company"
        orientation="horizontal"
      >
        <RadioButton id="radio-1" labelText="Company account" value="company" />
        <RadioButton
          id="radio-2"
          labelText="Personal account"
          value="personal"
        />
      </RadioButtonGroup>
    </FormGroup>
  );
};

export default Radio;
