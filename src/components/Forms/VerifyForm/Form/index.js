import React from "react";
import { useHistory } from "react-router-dom";
import { Form, TextInput, Button } from "carbon-components-react";
import { Link } from "react-router-dom";
import { ArrowRight32 } from "@carbon/icons-react";
import { BodyShort01 } from "../../../../elements/Labels/BodyShort01";

export const VerifyForm = () => {
  const history = useHistory();

  const handleOnSubmit = () => {
    history.push("/payment-information");
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
      />

      <Button
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
