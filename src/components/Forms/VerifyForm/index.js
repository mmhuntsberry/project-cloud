import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { Form, TextInput, Button, Link } from "carbon-components-react";
import { ArrowRight32 } from "@carbon/icons-react";

export const VerifyForm = () => {
  const [code, setCode] = useState();
  const SECRET = "1234567";
  const history = useHistory();

  useEffect(() => {}, [code]);

  const handleOnSubmit = () => {
    history.push("/payment-information");
  };

  const handleChange = evt => {
    setCode(evt.target.value);
  };

  return (
    <Form data-testid="verify-form" className="form form--register">
      <TextInput
        data-testid="verify-validation-input"
        className="u-margin-b-05"
        id="verify-email"
        invalidText="Invalid error message."
        labelText="Verification code"
        placeholder="Enter code"
        type="text"
        size="xl"
        onChange={handleChange}
      />

      <Button
        data-testid="verify-submit-button"
        disabled={code !== SECRET}
        className="form__button"
        renderIcon={ArrowRight32}
        onClick={handleOnSubmit}
      >
        Continue
      </Button>
      <div className="form-header__label-container form-header__label-container--verify">
        <p className="form-header__label u-margin-0 u-margin-r-02">
          Didn&lsquo;t get an email?
        </p>

        <Link href="#" className="bx--link u-margin-t-05">
          Resend email
        </Link>
      </div>
    </Form>
  );
};
