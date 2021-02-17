import React from "react";

import { Header } from "../../components/Forms/RegisterForm/Header";
import { RegisterForm as Form } from "../../components/Forms/RegisterForm/Form";
import FormProgressIndicator from "../../components/ProgressIndicator";
import Sidebar from "../../components/Sidebar";

export const Register = () => {
  return (
    <>
      <div className="bx--col-lg-9 bx--col-md-8 bx--col-sm-8">
        <Header />
        <div className="u-margin-t-08 u-margin-b-05">
          <FormProgressIndicator />
        </div>
        <div className="form-container">
          <Form />
        </div>
      </div>
      <Sidebar />
    </>
  );
};
