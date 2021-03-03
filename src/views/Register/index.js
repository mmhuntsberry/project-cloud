import React from "react";
import { motion } from "framer-motion";

import { RegisterForm as Form } from "../../components/Forms/RegisterForm/Form";
// import Sidebar from "../../components/Sidebar";

export const Register = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0, transition: { duration: 0.25 } }}
      className="form-container"
    >
      <Form />
    </motion.div>
  );
};
