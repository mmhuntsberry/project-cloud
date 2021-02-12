import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ArrowRight32 } from "@carbon/icons-react";
import { Form, Button } from "carbon-components-react";
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";

import signInMachineConfig from "../../../../machines/SignIn/signInMachineConfig";
import signInMachineOptions from "../../../../machines/SignIn/initMachineOptions";
import { buildPasswordConstraints } from "../utils/passwordContraints";
import { EmailInput } from "../../../../elements/Forms/Email";
import { PasswordInput } from "../../../../elements/Forms/Password";
import { isEmail } from "validator";
import Radio from "../../../../elements/Forms/Radio";

export const RegisterForm = () => {
  const [isToggled, setIsToggled] = useState(false);
  const history = useHistory();
  const machineOptions = signInMachineOptions();
  const signInMachine = Machine(signInMachineConfig, machineOptions);

  const [current, send] = useMachine(signInMachine);

  const handleOnSubmit = () => {
    history.push(`/verify`);
  };

  const passwordConstraints = buildPasswordConstraints(
    current.context.password
  );

  useEffect(() => {}, []);

  return (
    <>
      <Form className="form">
        <EmailInput
          handleBlur={e =>
            send({
              type: "EMAIL_BLUR",
              email: e.target.value
            })
          }
          handleChange={e =>
            send({
              type: "ENTER_EMAIL",
              email: e.target.value
            })
          }
          value={current.context.email}
          currentState={current}
        />
        <PasswordInput
          currentState={current}
          value={current.context.password}
          handleBlur={e => {
            setIsToggled(false);
            send({
              type: "PASSWORD_BLUR",
              password: e.target.value
            });
          }}
          handleChange={e => {
            send({
              type: "ENTER_PASSWORD",
              password: e.target.value
            });
          }}
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
          className="form__button u-margin-t-05"
          renderIcon={ArrowRight32}
          onClick={handleOnSubmit}
          onSubmit={() => send("SUBMIT")}
        >
          Continue
        </Button>
      </Form>
    </>
  );
};
