import React from "react";

import { motion } from "framer-motion";

import { PaymentForm } from "../../components/Forms/PaymentForm";

export const Payment = () => {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0, transition: { duration: 0.24 } }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0, transition: { duration: 0.24 } }}
    >
      <div className="form-container--payment u-margin-t-07">
        <PaymentForm />
      </div>
    </motion.div>
  );
};
