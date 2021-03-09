const paymentMachineConfig = {
  id: "payment",
  context: {
    creditCard: "",
    expiration: "",
    cvv: "",
    companyName: "",
    address01: "",
    address02: "",
    city: "",
    zipcode: "",
    firstName: "",
    lastName: ""
  },
  initial: "dataEntry",
  states: {
    dataEntry: {
      on: {
        ENTER_CARD: {
          actions: "cacheCard"
        },
        ENTER_EXPIRATION: {
          actions: "cacheExpiration"
        },
        ENTER_CVV: {
          actions: "cacheCvv"
        },
        ENTER_COMPANY: {
          actions: "cacheCompany"
        },
        ENTER_ADDRESS01: {
          actions: "cacheAddress01"
        },
        ENTER_ADDRESS02: {
          actions: "cacheAddress02"
        },
        ENTER_FIRSTNAME: {
          actions: "cacheFirstName"
        },
        ENTER_LASTNAME: {
          actions: "cacheLastName"
        },
        ENTER_CITY: {
          actions: "cacheCity"
        },
        ENTER_ZIPCODE: {
          actions: "cacheZip"
        },
        CARD_BLUR: [
          {
            cond: "isBadCard",
            target: "cardErr.incorrect"
          }
        ],
        EXPIRATION_BLUR: [
          {
            cond: "isBadExpiration",
            target: "expirErr.incorrect"
          }
        ],
        CVV_BLUR: [
          {
            cond: "isBadCvv",
            target: "cvvErr.incorrect"
          }
        ]
      }
    },

    cardErr: {
      on: {
        ENTER_CARD: {
          actions: "cacheCard",
          target: "dataEntry"
        }
      },
      initial: "incorrect",
      states: {
        incorrect: {}
      }
    },
    expirErr: {
      on: {
        ENTER_EXPIRATION: {
          actions: "cacheExpiration",
          target: "dataEntry"
        }
      },
      initial: "incorrect",
      states: {
        incorrect: {}
      }
    },
    cvvErr: {
      on: {
        ENTER_CVV: {
          actions: "cacheCvv",
          target: "dataEntry"
        }
      },
      initial: "incorrect",
      states: {
        incorrect: {}
      }
    }
  },
  payment: {
    type: "final"
  }
};

export default paymentMachineConfig;
