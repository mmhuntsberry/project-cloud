import React, { useContext } from "react";
import { SigninMachineContext } from "../../machines/SignIn/signInMachineConfig";
import { VerifyForm as Form } from "../../components/Forms/VerifyForm/Form";
import { BodyLong01 } from "../../elements/Paragraphs/BodyLong01";
import { motion } from "framer-motion";

export const Verify = () => {
  // Get the users email address.
  const [current] = useContext(SigninMachineContext);

  return (
    <motion.div
      initial={{ x: 300, opacity: 0, transition: { duration: 0.24 } }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0, transition: { duration: 0.24 } }}
      className="form-container"
    >
      <BodyLong01
        classes="form-header__info"
        body={
          <>
            For security we need to verify your identity. We sent a 7-digit code
            to <strong>{current.context.email}</strong>. This code is valid for
            30 minutes.
          </>
        }
      />
      <Form />
    </motion.div>
  );
};
