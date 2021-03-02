import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { RegisterForm as Form } from "../../components/Forms/RegisterForm/Form";
// import Sidebar from "../../components/Sidebar";

export const Register = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          className="form-container"
        >
          <Form />
        </motion.div>
      </AnimatePresence>

      {/* <Sidebar /> */}
    </>
  );
};
