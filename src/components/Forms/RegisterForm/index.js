import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { ArrowRight32 } from "@carbon/icons-react";
import { Form, Button } from "carbon-components-react";

import { isEmail } from "validator";

import { EmailInput } from "../../../elements/Forms/Email";
import { PasswordInput } from "../../../elements/Forms/Password";
import Radio from "../../../elements/Forms/Radio";
import { buildPasswordConstraints } from "./utils/passwordContraints";
import { RegisterMachineContext } from "../../../machines/Register/registerMachineConfig";

export const RegisterForm = () => {
  const [isToggled, setIsToggled] = useState(false);
  const history = useHistory();
  const [current, send] = useContext(RegisterMachineContext);

  const handleOnSubmit = () => {
    history.push(`/verify`);
  };

  const handleEvent = (e, name, type) => {
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
      <Form className="form u-margin-t-08">
        <EmailInput
          handleBlur={e => handleEvent(e, "email", "EMAIL_BLUR")}
          handleChange={e => handleEvent(e, "email", "ENTER_EMAIL")}
          value={current.context.email}
          currentState={current}
        />
        <PasswordInput
          currentState={current}
          value={current.context.password}
          handleBlur={e => {
            setIsToggled(false);
            handleEvent(e, "password", "PASSWORD_BLUR");
          }}
          handleChange={e => handleEvent(e, "password", "ENTER_PASSWORD")}
          constraints={passwordConstraints}
          open={isToggled}
          setOpen={setIsToggled}
        />

        <Radio />
        <Button
          disabled={
            !isEmail(current.context.email) ||
            current.context.password < 1 ||
            passwordConstraints.some(({ constraint }) => constraint === false)
          }
          className="form__button u-margin-t-03"
          renderIcon={ArrowRight32}
          onClick={handleOnSubmit}
          onSubmit={() => send("SUBMIT")}
        >
          Continue
        </Button>
      </Form>
    </div>
  );
};
