import React, { useState, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { Form, TextInput, Button, Link } from "carbon-components-react";
import { ArrowRight32 } from "@carbon/icons-react";
import { BodyShort01 } from "../../../elements/Labels/BodyShort01";

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
    <Form className="form form--register">
      <TextInput
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
        disabled={code !== SECRET}
        className="form__button"
        renderIcon={ArrowRight32}
        onClick={handleOnSubmit}
      >
        Continue
      </Button>
      <div className="form-header__label-container form-header__label-container--verify">
        <BodyShort01
          labelText="Didn't get an email?"
          classes={`form-header__label u-margin-0 u-margin-r-02`}
        />
        <Link href="#" className="bx--link">
          Resend email
        </Link>
      </div>
    </Form>
  );
};
