import { IbmSecurity32 } from "@carbon/icons-react";
import React from "react";
import { BillingForm } from "../../components/Forms/BillingForm/Form";
import { PaymentForm } from "../../components/Forms/PaymentForm/Form";
import { Header } from "../../components/Forms/PaymentForm/Header";
import { ProductiveHeading03 } from "../../elements/Headings/ProductiveHeading03";
import { BodyLong01 } from "../../elements/Paragraphs/BodyLong01";

export const Payment = () => {
  return (
    <>
      <div className="bx--col-lg-7 bx--col-md-6 bx--col-sm-4 billing__container">
        <div>
          <Header />
          <ProductiveHeading03
            classes="form__title"
            heading="Billing information"
          />
          <BillingForm />
        </div>
      </div>
      <div className="bx--offset-lg-6 bx--col-md-4 bx--col-sm-4"></div>
      <div className="bx--col-lg-7 bx--col-md-6 bx--col-sm-4 payment__container">
        <ProductiveHeading03
          classes="form__title"
          heading="Payment information"
        />
        <PaymentForm />
      </div>
      <div className="bx--offset-lg-1"></div>
      <div className="bx--col-lg-6 bx--col-md-6 bx--col-sm-4">
        <ProductiveHeading03
          classes="payment__details-title"
          heading="Why do I have to include payment for a free account?"
        />
        <div className="payment__details-container">
          <IbmSecurity32 />
          <div>
            <h5 className="payment__detail-title">
              Guarantee a secure platform environment
            </h5>
            <BodyLong01
              body={
                <>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Laboriosam molestiae minima dolore! Provident molestiae illo
                  id laudantium? Ad earum nobis nihil accusantium sapiente? Ut
                  officia earum officiis modi consequuntur quo!
                </>
              }
            />
          </div>
          <IbmSecurity32 />
          <div>
            <h5>Ensure you&lsquo;re not a robot</h5>

            <BodyLong01
              body={
                <>
                  We ask for your credit card to make sure you are not a robot.
                  You will not be charged unless you manually upgrade to a paid
                  account.
                </>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};
