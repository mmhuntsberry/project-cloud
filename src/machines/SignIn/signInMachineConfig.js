import { assign } from "xstate";

const signInMachineConfig = {
  id: "signIn",
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
        ],
        // PASSWORD_BLUR: {
        //   cond: "isBadPasswordFormat",
        //   target: "passwordErr.badFormat"
        // },
        SUBMIT: [
          {
            cond: "isBadEmailFormat",
            target: "emailErr.badFormat"
          },
          {
            cond: "isBadPasswordFormat",
            target: "passwordErr.badFormat"
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
    },
    onDone: {
      actions: "onAuthentication"
    }
  }
};

export default signInMachineConfig;
