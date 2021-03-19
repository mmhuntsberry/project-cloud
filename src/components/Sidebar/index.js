import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export const Sidebar = () => {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/payment-information" ? (
        <ul
          className="sidebar"
          initial={{ x: 300, opacity: 0, transition: { duration: 0.24 } }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0, transition: { duration: 0.24 } }}
        >
          <motion.li
            className="sidebar"
            initial={{ x: 300, opacity: 0, transition: { duration: 0.24 } }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.24 } }}
            exit={{ x: -300, opacity: 0, transition: { duration: 0.24 } }}
          >
            <h4 className="sidebar__item-heading u-margin-b-03">
              It&rsquo;s your account. Protect it.
            </h4>
            <h3 className="u-margin-b-05 sidebar__item-body">
              Protect your account with confidence. We ask for a credit card to
              keep your account secure.
            </h3>
          </motion.li>
        </ul>
      ) : (
        <motion.ul className="sidebar">
          <motion.li
            initial={{ x: 300, opacity: 0, transition: { duration: 0.24 } }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.24 } }}
            exit={{ x: -300, opacity: 0, transition: { duration: 0.24 } }}
          >
            <h4 className="sidebar__item-heading u-margin-b-03">
              No up-front charges
            </h4>
            <h3 className="u-margin-b-05 sidebar__item-body">
              Sign up for a Lite account at no cost to you- ever.
            </h3>
          </motion.li>
          <motion.li
            initial={{ x: 300, opacity: 0, transition: { duration: 0.24 } }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.24 } }}
            exit={{ x: -300, opacity: 0, transition: { duration: 0.24 } }}
          >
            <h4 className="sidebar__item-heading u-margin-b-03">
              Transform your business
            </h4>
            <h3 className="u-margin-b-05 sidebar__item-body">
              Start building by leveraging products with Lite plan services.
            </h3>
          </motion.li>
          <motion.li
            initial={{ x: 300, opacity: 0, transition: { duration: 0.24 } }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.24 } }}
            exit={{ x: -300, opacity: 0, transition: { duration: 0.24 } }}
          >
            <h4 className="sidebar__item-heading u-margin-b-03">
              $200 upgrade credit
            </h4>
            <h3 className="u-margin-b-05 sidebar__item-body">
              Receive a $200 credit to use on any product you want when you
              upgrade your account.
            </h3>
          </motion.li>
        </motion.ul>
      )}
    </>
  );
};
