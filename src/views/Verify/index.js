import React, { useContext } from "react";
import { SigninMachineContext } from "../../machines/SignIn/signInMachineConfig";

import { Header } from "../../components/Forms/RegisterForm/Header";
import { VerifyForm as Form } from "../../components/Forms/VerifyForm/Form";
import FormProgressIndicator from "../../components/ProgressIndicator";
import { BodyLong01 } from "../../elements/Paragraphs/BodyLong01";
import Sidebar from "../../components/Sidebar";

export const Verify = () => {
  // Get the users email address.
  const [current] = useContext(SigninMachineContext);

  return (
    <>
      <div className="view-container bx--col-lg-9 bx--col-md-8 bx--col-sm-8">
        <Header />

        <div className="u-margin-t-08">
          <FormProgressIndicator currentIndex={1} />
        </div>
        <div className="form-container">
          <BodyLong01
            classes="form-header__info"
            body={
              <>
                For security we need to verify your identity. We sent a 7-digit
                code to <strong>{current.context.email}</strong>. This code is
                valid for 30 minutes.
              </>
            }
          />
          <Form />
        </div>
      </div>
      <Sidebar />
    </>
  );
};
