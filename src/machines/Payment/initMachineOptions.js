import { assign } from "xstate";

const CREDIT_CARD_REGEX = RegExp(
  /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|62[0-9]{14})$/
);
const EXPIRATION_REGEX = RegExp(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/);
const CVV_REGEX = RegExp(/^[0-9]{3,4}$/);

const paymentMachineOptions = () => ({
  guards: {
    isBadCard: context => {
      const cleanStr = context.creditCard.replaceAll(" ", "");
      return !CREDIT_CARD_REGEX.test(cleanStr);
    },
    isBadExpiration: context => {
      return !EXPIRATION_REGEX.test(context.expiration);
    },
    isBadCvv: context => {
      return !CVV_REGEX.test(context.cvv);
    }
  },
  actions: {
    cacheCard: assign((context, event) => ({
      creditCard: event.creditCard
    })),
    cacheExpiration: assign((context, event) => ({
      expiration: event.expiration
    })),
    cacheCvv: assign((context, event) => ({
      cvv: event.cvv
    })),
    cacheCompany: assign((context, event) => ({
      companyName: event.companyName
    })),
    cacheAddress01: assign((context, event) => ({
      address01: event.address01
    })),
    cacheAddress02: assign((context, event) => ({
      address02: event.address02
    })),
    cacheCity: assign((context, event) => ({
      city: event.city
    })),
    cacheFirstName: assign((context, event) => ({
      firstName: event.firstName
    })),
    cacheLastName: assign((context, event) => ({
      lastName: event.lastName
    })),
    cacheZip: assign((context, event) => ({
      zipcode: event.zipcode
    }))
  }
});

export default paymentMachineOptions;
