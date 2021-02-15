import React from "react";
import { VerifyForm as Form } from "../../components/Forms/VerifyForm/Form";
import { Header } from "../../components/Forms/VerifyForm/Header";
import FormProgressIndicator from "../../components/ProgressIndicator";
import { BodyLong01 } from "../../elements/Paragraphs/BodyLong01";

export const Verify = () => {
  return (
    <div className="bx--col-lg-9 bx--col-md-8 bx--col-sm-8">
      <Header />
      <div className="u-margin-t-08">
        <FormProgressIndicator />
      </div>
      <div className="form__container">
        <BodyLong01
          classes="form-header__info"
          body={
            <>
              For security we need to verify your identity. We sent a 7-digit
              code to <strong>david.rose@gmail.com</strong>. This code is valid
              for 30 minutes.
            </>
          }
        />
        <Form />
      </div>
    </div>
  );
};
