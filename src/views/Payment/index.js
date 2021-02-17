import React from "react";

import { InlineNotification } from "carbon-components-react";

import { Header } from "../../components/Forms/RegisterForm/Header";
import { PaymentForm } from "../../components/Forms/PaymentForm/Form";
import { ProductiveHeading03 } from "../../elements/Headings/ProductiveHeading03";
import Sidebar from "../../components/Sidebar";
import FormProgressIndicator from "../../components/ProgressIndicator";

export const Payment = () => {
  return (
    <>
      <div className="bx--col-lg-9 bx--col-md-8 bx--col-sm-8">
        <Header />
        <div className="u-margin-t-08">
          <FormProgressIndicator currentIndex={2} />
        </div>
        <InlineNotification
          kind="info"
          subtitle={
            <span>This information is used to verify your identity.</span>
          }
          title="You will not be charged until you upgrade."
        />
        <ProductiveHeading03
          classes="form__title"
          heading="Payment information"
        />
        <div className="form-container--payment">
          <PaymentForm />
        </div>
      </div>
      <Sidebar />
    </>
  );
};
