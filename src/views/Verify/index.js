import React from "react";
import { VerifyForm as Form } from "../../components/Forms/VerifyForm/Form";
import { Header } from "../../components/Forms/VerifyForm/Header";

export const Verify = () => {
  return (
    <div className="bx--col-lg-4 bx--col-md-4 bx--col-sm-4">
      <div className="form__container">
        <Header />
        <Form />
      </div>
    </div>
  );
};
