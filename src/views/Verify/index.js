import React, { useContext } from "react";
import { RegisterMachineContext } from "../../machines/Register/registerMachineConfig";
import { VerifyForm as Form } from "../../components/Forms/VerifyForm";

import { motion } from "framer-motion";

export const Verify = () => {
  // Get the users email address.
  const [current] = useContext(RegisterMachineContext);

  return (
    <motion.div
      initial={{ x: 300, opacity: 0, transition: { duration: 0.24 } }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0, transition: { duration: 0.24 } }}
      className="form-container"
    >
      <p className="form-header__info">
        For security we need to verify your identity. We sent a 7-digit code to{" "}
        <strong>{current.context.email}</strong>. This code is valid for 30
        minutes.
      </p>
      <Form />
    </motion.div>
  );
};
