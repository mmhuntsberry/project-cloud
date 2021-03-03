import { TextInput } from "carbon-components-react";
import React from "react";
import { Validation } from "../../../components/Validation";
import { ValidationTooltip } from "../../../components/ValidationTooltip";

export const PasswordInput = ({
  handleChange,
  handleBlur,
  constraints,
  value,
  open,
  setOpen,
  testid
}) => {
  return (
    <div className="password__input-container">
      <TextInput.PasswordInput
        data-testid={testid}
        hidePasswordLabel="Hide password"
        id="register-password"
        invalidText="A valid value is required"
        labelText="Password"
        placeholder="Enter password"
        showPasswordLabel="Show password"
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={() => setOpen(true)}
        size="xl"
      ></TextInput.PasswordInput>
      <Validation constraints={constraints} password={value} />
      <ValidationTooltip constraints={constraints} open={open} />
    </div>
  );
};
