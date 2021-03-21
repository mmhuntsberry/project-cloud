import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { isEmail } from "validator";

// Carbon imports
import { ArrowRight32 } from "@carbon/icons-react";
import {
  Form,
  Button,
  FormGroup,
  RadioButtonGroup
} from "carbon-components-react";

// Components
import { EmailInput } from "../../../elements/Forms/Email";
import { PasswordInput } from "../../../elements/Forms/Password";

// State machines and contexts
import { RegisterMachineContext } from "../../../machines/Register/registerMachineConfig";

// Utils
import { buildPasswordConstraints } from "./utils/passwordContraints";
import { RadioButton } from "carbon-components-react/lib/components/RadioButton/RadioButton";

export const RegisterForm = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [current, send] = useContext(RegisterMachineContext);
  const history = useHistory();

  const handleOnSubmit = e => {
    e.preventDefault();
    history.push(`/verify`);
  };

  const handleKeyPress = e => {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  };

  const handleEvent = (e, name, type) => {
    /**
     * On carbon checkbox the value is what's returned
     * instead of `e.target.value`, its just `e`.
     */
    if (name === "accountType") {
      send({
        type,
        [name]: e
      });

      return;
    }

    send({
      type,
      [name]: e.target.value
    });
  };

  const passwordConstraints = buildPasswordConstraints(
    current.context.password
  );

  return (
    <div>
      <Form
        data-testid="register-form"
        className="form u-margin-t-08"
        onSubmit={handleOnSubmit}
      >
        <EmailInput
          testid="register-email-input"
          handleBlur={e => handleEvent(e, "email", "EMAIL_BLUR")}
          handleChange={e => handleEvent(e, "email", "ENTER_EMAIL")}
          value={current.context.email}
          currentState={current}
        />
        <PasswordInput
          testid="register-password-input"
          currentState={current}
          value={current.context.password}
          handleBlur={e => {
            setIsToggled(false);
            handleEvent(e, "password", "PASSWORD_BLUR");
          }}
          handleKeyPress={handleKeyPress}
          handleChange={e => handleEvent(e, "password", "ENTER_PASSWORD")}
          constraints={passwordConstraints}
          open={isToggled}
          setOpen={setIsToggled}
        />
        <FormGroup className="u-margin-t-04 u-margin-b-02 u-pad-b-05">
          <RadioButtonGroup
            defaultSelected="company"
            legend="Group Legend"
            name="accountType"
            valueSelected={current.context.accountType}
            orientation="horizontal"
            onChange={e => handleEvent(e, "accountType", "ENTER_ACCOUNT_TYPE")}
          >
            <RadioButton
              id="radio-1"
              labelText="Company account"
              value="company"
            />
            <RadioButton
              id="radio-2"
              labelText="Personal account"
              value="personal"
            />
          </RadioButtonGroup>
        </FormGroup>
        <Button
          data-testid="register-submit-button"
          disabled={
            !isEmail(current.context.email) ||
            current.context.password < 1 ||
            passwordConstraints.some(({ constraint }) => constraint === false)
          }
          className="form__button u-margin-t-03"
          renderIcon={ArrowRight32}
          onClick={handleOnSubmit}
        >
          Continue
        </Button>
      </Form>
    </div>
  );
};
