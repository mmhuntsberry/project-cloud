import React from "react";

import { InlineNotification } from "carbon-components-react";
import { motion } from "framer-motion";

import { PaymentForm } from "../../components/Forms/PaymentForm";

export const Payment = () => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0, transition: { duration: 0.24 } }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0, transition: { duration: 0.24 } }}
    >
      <InlineNotification
        kind="info"
        subtitle={
          <span>This information is used to verify your identity.</span>
        }
        title="You will not be charged until you upgrade."
      />

      <div className="form-container--payment u-margin-t-07">
        <PaymentForm />
      </div>
    </motion.div>
  );
};
