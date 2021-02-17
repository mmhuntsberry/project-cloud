import { assign } from "xstate";
import { isEmail, isStrongPassword } from "validator";

const signInMachineOptions = () => ({
  guards: {
    isBadEmailFormat: context =>
      context.email.length > 0 && !isEmail(context.email),
    isGoodEmailFormat: context =>
      context.email.length > 0 && isEmail(context.email),
    isBadPasswordFormat: context => {
      return context.password.length > 0 && !isStrongPassword(context.password);
    }
  },
  actions: {
    cacheEmail: assign((context, event) => ({
      email: event.email
    })),
    cachePassword: assign((context, event) => {
      return { password: event.password };
    })
  }
});

export default signInMachineOptions;
