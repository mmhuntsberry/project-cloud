import { assign } from "xstate";
import React from "react";

const registerMachineConfig = {
  id: "register",
  context: {
    email: "",
    password: ""
  },
  initial: "dataEntry",
  states: {
    dataEntry: {
      on: {
        ENTER_EMAIL: {
          actions: "cacheEmail"
        },
        ENTER_PASSWORD: {
          actions: "cachePassword"
        },
        EMAIL_BLUR: [
          {
            cond: "isBadEmailFormat",
            target: "emailErr.badFormat"
          }
        ]
      }
    },

    emailErr: {
      on: {
        ENTER_EMAIL: {
          actions: "cacheEmail",
          target: "dataEntry"
        },
        ENTER_PASSWORD: {
          actions: "cachePassword",
          target: "dataEntry"
        }
      },
      initial: "badFormat",
      states: {
        badFormat: {},
        goodFormat: {
          LOADING: {
            on: {
              EMAIL_BLUR: {
                actions: assign()
              }
            }
          },
          FINISHED: {}
        }
      }
    },
    passwordErr: {
      on: {
        ENTER_PASSWORD: {
          actions: "cachePassword",
          target: "dataEntry"
        }
      },
      initial: "badFormat",
      states: {
        badFormat: {},
        incorrect: {}
      }
    },
    signedIn: {
      type: "final"
    }
  }
};

export const RegisterMachineContext = React.createContext(null);

export default registerMachineConfig;
