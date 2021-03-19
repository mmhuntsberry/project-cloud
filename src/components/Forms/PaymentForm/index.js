/* eslint-disable */
import React, { useEffect, useContext, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

// Carbon imports
import {
  Form,
  TextInput,
  Button,
  Link,
  Select,
  SelectItem,
  SelectItemGroup,
  Checkbox,
  DatePicker,
  DatePickerInput,
  Loading
} from "carbon-components-react";
import { Locked16 } from "@carbon/icons-react";

// State Machine configs and options
import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import paymentMachineOptions from "../../../machines/Payment/initMachineOptions";
import paymentMachineConfig from "../../../machines/Payment/paymentMachineConfig";

// Contexts
import { RegisterMachineContext } from "../../../machines/Register/registerMachineConfig";

// Utils
import {
  formatCard,
  isValidCardType,
  removeAllNonDigitValues,
  CreditCardExpiresFormat
} from "./utils";
import states from "./utils/states";

export const PaymentForm = () => {
  const history = useHistory();
  const location = useLocation();

  // Local state
  const [isAddressChecked, setIsAddressChecked] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // State machines and contexts
  const machineOptions = paymentMachineOptions();
  const paymentMachine = Machine(paymentMachineConfig, machineOptions);
  const [current, send] = useMachine(paymentMachine);
  const [registerContext] = useContext(RegisterMachineContext);

  // Destructure all context properties
  const {
    creditCard,
    expiration,
    cvv,
    companyName,
    address01,
    city,
    zipcode,
    firstName,
    lastName
  } = current.context;

  /**
   * If an input has this error type,
   * return true.
   *
   * This will render an input valid or invalid
   */
  const checkValidity = (state, errType, context) => {
    return state.matches({ [errType]: "incorrect" }) && context.length > 0;
  };

  /**
   * Button should be disabled unless
   * it passes all these constraints
   */
  const buttonConstraints =
    creditCard.length > 0 &&
    expiration.length > 0 &&
    cvv.length > 0 &&
    // checks for either an existing companyName else it looks for first and lastname
    (companyName.length > 0 || (firstName.length > 0 && lastName.length > 0)) &&
    address01.length > 0 &&
    city.length > 0 &&
    zipcode.length > 0 &&
    !checkValidity(current, "cardErr", creditCard) &&
    !checkValidity(current, "expirErr", creditCard) &&
    !checkValidity(current, "cvvErr", creditCard);

  useEffect(() => {}, [
    current,
    buttonConstraints,
    registerContext.context.accountType,
    registerContext,
    isAddressChecked
  ]);

  const handleOnSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      window.location.href =
        "https://ibm.invisionapp.com/share/62O0ZSD387Q#/screens/319905086_walkme";
    }, 1000);
  };

  const handleBlur = (evt, type) => {
    send({
      type,
      [evt.target.name]: evt.target.value
    });
  };

  const handleChange = (evt, type) => {
    send({
      type,
      [evt.target.name]: evt.target.value
    });
  };

  return (
    <>
      <Loading withOverlay active={isLoading} />
      <Form className="form form--grid" onSubmit={handleOnSubmit}>
        <div className="grid-item-span-all">
          <TextInput
            name="creditCard"
            className="form__input"
            id="creditcard"
            invalidText="Invalid error message."
            labelText="Credit card"
            placeholder="Enter number"
            type="text"
            size="xl"
            invalid={checkValidity(current, "cardErr", creditCard)}
            value={formatCard(current.context.creditCard)}
            onChange={evt => handleChange(evt, "ENTER_CARD")}
            onBlur={evt => handleBlur(evt, "CARD_BLUR")}
          />
        </div>

        <DatePicker
          dateFormat="m/Y"
          datePickerType="simple"
          className="form__input"
          id="expiration"
        >
          <DatePickerInput
            invalid={checkValidity(current, "expirErr", expiration)}
            invalidText="Invalid error message."
            labelText="Expiration date"
            id="date-picker-default-id"
            placeholder="mm/yy"
            type="text"
            size="xl"
            name="expiration"
            value={CreditCardExpiresFormat(expiration)}
            onChange={evt => handleChange(evt, "ENTER_EXPIRATION")}
            onBlur={evt => handleBlur(evt, "EXPIRATION_BLUR")}
          />
        </DatePicker>
        <TextInput
          name="cvv"
          className="form__input"
          id="cvv"
          size="xl"
          invalid={checkValidity(current, "cvvErr", cvv)}
          invalidText="Invalid error message."
          labelText="Security code"
          placeholder="Enter code"
          type="text"
          onChange={evt => handleChange(evt, "ENTER_CVV")}
          onBlur={evt => handleBlur(evt, "CVV_BLUR")}
        />
        <TextInput
          name="firstName"
          className="form__input"
          id="firstName"
          invalidText="Invalid error message."
          labelText="First name"
          placeholder="Enter first name"
          type="text"
          size="xl"
          onChange={evt => handleChange(evt, "ENTER_FIRSTNAME")}
        />
        <TextInput
          name="lastName"
          className="form__input"
          id="lastName"
          invalidText="Invalid error message."
          labelText="Last name"
          placeholder="Enter last name"
          type="text"
          size="xl"
          onChange={evt => handleChange(evt, "ENTER_LASTNAME")}
        />
        {registerContext.context.accountType === "company" && (
          <TextInput
            name="companyName"
            className="form__input"
            id="companyName"
            invalid={checkValidity(current, "companyErr", expiration)}
            invalidText="Invalid error message."
            labelText="Company name"
            placeholder="Enter company name"
            type="text"
            size="xl"
            onChange={evt => handleChange(evt, "ENTER_COMPANY")}
            onBlur={evt => handleBlur(evt, "COMPANY_BLUR")}
          />
        )}
        <div
          className={
            registerContext.context.accountType === "personal" &&
            "grid-item-span-all"
          }
        >
          <Select
            defaultValue="USA"
            id="select-1"
            invalidText="A valid value is required"
            labelText="Country and Region"
            size="xl"
            className="select__input"
          >
            <SelectItem className="form__input" text="USA" value="USA" />
          </Select>
        </div>
        <div className="grid-item-span-all">
          <TextInput
            name="address01"
            className="form__input"
            id="address-01"
            invalidText="Invalid error message."
            labelText="Address line 1"
            placeholder="Enter address 1"
            type="text"
            size="xl"
            onChange={evt => handleChange(evt, "ENTER_ADDRESS01")}
          />
        </div>
        <div className="grid-item-span-all">
          <TextInput
            name="address02"
            className="form__input form__input--full-line"
            id="address-02"
            invalidText="Invalid error message."
            labelText="Address line 2"
            placeholder="Enter address 2"
            type="text"
            size="xl"
            onChange={evt => handleChange(evt, "ENTER_ADDRESS02")}
          />
        </div>
        <div className="grid-item-span-all">
          <TextInput
            name="city"
            className="form__input"
            id="city"
            invalidText="Invalid error message."
            labelText="City"
            placeholder="Enter city"
            type="text"
            size="xl"
            onChange={evt => handleChange(evt, "ENTER_CITY")}
          />
        </div>
        <Select
          defaultValue="placeholder-item"
          id="select-1"
          invalidText="A valid value is required"
          labelText="State"
          size="xl"
        >
          <SelectItem
            className="form__input"
            text="Choose state"
            value="placeholder-item"
          />
          <SelectItemGroup label="States">
            {states.map(state => (
              <SelectItem text={state} value={state} />
            ))}
          </SelectItemGroup>
        </Select>
        <TextInput
          name="zipcode"
          className="form__input form__input--full-line"
          id="zipcode"
          invalidText="Invalid error message."
          labelText="Zip code"
          placeholder="Enter zip code"
          type="text"
          size="xl"
          onChange={evt => handleChange(evt, "ENTER_ZIPCODE")}
        />
        {registerContext.context.accountType === "company" && (
          <div className="grid-item-span-all">
            <Checkbox
              defaultChecked
              labelText="My billing address is the same as my company address"
              id="checked-label-1"
              onChange={() => setIsAddressChecked(!isAddressChecked)}
            />
          </div>
        )}
        {!isAddressChecked && (
          <>
            <h3 className="payment__address-heading u-margin-t-07 u-margin-b-02">
              Company information
            </h3>
            <div className="grid-item-span-all">
              <TextInput
                name="address01"
                className="form__input"
                id="address-01"
                invalidText="Invalid error message."
                labelText="Address line 1"
                placeholder="Enter address 1"
                type="text"
                size="xl"
                onChange={evt => handleChange(evt, "ENTER_ADDRESS01")}
              />
            </div>
            <div className="grid-item-span-all">
              <TextInput
                name="address02"
                className="form__input form__input--full-line"
                id="address-02"
                invalidText="Invalid error message."
                labelText="Address line 2"
                placeholder="Enter address 2"
                type="text"
                size="xl"
                onChange={evt => handleChange(evt, "ENTER_ADDRESS02")}
              />
            </div>
            <div className="grid-item-span-all">
              <TextInput
                name="city"
                className="form__input"
                id="city"
                invalidText="Invalid error message."
                labelText="City"
                placeholder="Enter city"
                type="text"
                size="xl"
                onChange={evt => handleChange(evt, "ENTER_CITY")}
              />
            </div>
            <Select
              defaultValue="placeholder-item"
              id="select-1"
              invalidText="A valid value is required"
              labelText="State"
              size="xl"
            >
              <SelectItem
                className="form__input"
                text="Choose state"
                value="placeholder-item"
              />
              <SelectItemGroup label="States">
                {states.map(state => (
                  <SelectItem text={state} value={state} />
                ))}
              </SelectItemGroup>
            </Select>
            <TextInput
              name="zipcode"
              className="form__input form__input--full-line"
              id="zipcode"
              invalidText="Invalid error message."
              labelText="Zip code"
              placeholder="Enter zip code"
              type="text"
              size="xl"
              onChange={evt => handleChange(evt, "ENTER_ZIPCODE")}
            />
          </>
        )}
        <div className="grid-item-span-all u-margin-t-09">
          <p className="payment__terms-conditions">
            By submitting this form, you acknowledge that you have read and
            understand both the{" "}
            <Link href="#" className="payment__terms-link">
              IBM Privacy Statement{" "}
            </Link>
            and{" "}
            <Link href="#" className="payment__terms-link">
              Terms and Conditions
            </Link>
            , and that you grant IBM permission to contact you to facilitate a
            successful experience.
          </p>
          <p className="unsubscribe">
            You may unsubscribe from communications at any time by clicking the
            unsubscribe link within any email.
          </p>
        </div>
        <div className="grid-item-span-all u-margin-b-09">
          <Button
            disabled={buttonConstraints ? false : true}
            className="form__button"
            renderIcon={Locked16}
            onClick={handleOnSubmit}
          >
            Create
          </Button>
        </div>
      </Form>
    </>
  );
};
