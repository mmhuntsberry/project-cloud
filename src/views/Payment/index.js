import React from "react";

import { InlineNotification } from "carbon-components-react";
import { motion } from "framer-motion";

import { PaymentForm } from "../../components/Forms/PaymentForm/Form";
import { ProductiveHeading03 } from "../../elements/Headings/ProductiveHeading03";

export const Payment = () => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0, transition: { duration: 0.5 } }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0, transition: { duration: 0.5 } }}
    >
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
    </motion.div>
  );
};
