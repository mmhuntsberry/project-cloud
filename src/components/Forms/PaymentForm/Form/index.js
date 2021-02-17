import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  Form,
  TextInput,
  Button,
  Link,
  Select,
  SelectItem,
  SelectItemGroup,
  Checkbox
} from "carbon-components-react";
import { Locked16 } from "@carbon/icons-react";

import { Machine } from "xstate";
import { useMachine } from "@xstate/react";
import paymentMachineOptions from "../../../../machines/Payment/initMachineOptions";
import paymentMachineConfig from "../../../../machines/Payment/paymentMachineConfig";

import { BodyLong01 } from "../../../../elements/Paragraphs/BodyLong01";

export const PaymentForm = () => {
  const machineOptions = paymentMachineOptions();
  const paymentMachine = Machine(paymentMachineConfig, machineOptions);
  const [current, send] = useMachine(paymentMachine);
  const history = useHistory();

  const {
    creditCard,
    expiration,
    cvv,
    companyName,
    address01,
    city,
    zipcode
  } = current.context;

  const checkValidity = (state, errType, context) => {
    return state.matches({ [errType]: "incorrect" }) && context.length > 0;
  };

  const buttonConstraints =
    creditCard.length > 0 &&
    expiration.length > 0 &&
    cvv.length > 0 &&
    companyName.length > 0 &&
    address01.length > 0 &&
    city.length > 0 &&
    zipcode.length > 0 &&
    !checkValidity(current, "cardErr", creditCard) &&
    !checkValidity(current, "expirErr", creditCard) &&
    !checkValidity(current, "cvvErr", creditCard);

  useEffect(() => {}, [current, buttonConstraints]);

  const handleOnSubmit = () => {
    history.push(`#`);
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
      <Form className="form form--grid">
        <div className="grid-item-span-all">
          <TextInput
            name="creditCard"
            className="form__input"
            id="creditcard"
            invalidText="Invalid error message."
            labelText="Credit card"
            placeholder="Enter number"
            type="text"
            invalid={checkValidity(current, "cardErr", creditCard)}
            onChange={evt => handleChange(evt, "ENTER_CARD")}
            onBlur={evt => handleBlur(evt, "CARD_BLUR")}
          />
        </div>
        <TextInput
          name="expiration"
          className="form__input"
          id="expiration"
          invalid={checkValidity(current, "expirErr", expiration)}
          invalidText="Invalid error message."
          labelText="Expiration date"
          placeholder="mm/yy"
          type="text"
          onChange={evt => handleChange(evt, "ENTER_EXPIRATION")}
          onBlur={evt => handleBlur(evt, "EXPIRATION_BLUR")}
        />
        <TextInput
          name="cvv"
          className="form__input"
          id="cvv"
          invalid={checkValidity(current, "cvvErr", cvv)}
          invalidText="Invalid error message."
          labelText="Security code"
          placeholder="Enter code"
          type="text"
          onChange={evt => handleChange(evt, "ENTER_CVV")}
          onBlur={evt => handleBlur(evt, "CVV_BLUR")}
        />
        <div className="grid-item-span-all">
          <TextInput
            name="companyName"
            className="form__input"
            id="companyName"
            invalid={checkValidity(current, "companyErr", expiration)}
            invalidText="Invalid error message."
            labelText="Company name"
            placeholder="Enter first name"
            type="text"
            onChange={evt => handleChange(evt, "ENTER_COMPANY")}
            onBlur={evt => handleBlur(evt, "COMPANY_BLUR")}
          />
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
            onChange={evt => handleChange(evt, "ENTER_CITY")}
          />
        </div>
        <Select
          defaultValue="placeholder-item"
          id="select-1"
          invalidText="A valid value is required"
          labelText="Region"
        >
          <SelectItem
            className="form__input"
            text="Choose an option"
            value="placeholder-item"
          />
          <SelectItemGroup label="Regions">
            <SelectItem text="Option 1" value="option-1" />
            <SelectItem text="Option 2" value="option-2" />
            <SelectItem text="Option 3" value="option-3" />
            <SelectItem text="Option 4" value="option-4" />
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
          onChange={evt => handleChange(evt, "ENTER_ZIPCODE")}
        />
        <div className="grid-item-span-all u-margin-b-09">
          <fieldset className="bx--fieldset">
            <Checkbox
              labelText="My billing address is the same as my company address"
              id="checked-label-1"
            />
          </fieldset>
        </div>
        <div className="grid-item-span-all">
          <BodyLong01
            body={
              <>
                By submitting this form, you acknowledge that you havee read and
                understand both the <Link href="#">IBM Privacy Statement </Link>
                and <Link href="#">Terms and Conditions</Link>, and that you
                grant IBM permission to contact you to facilitate a successful
                experience.
              </>
            }
          />
          <BodyLong01
            classes="unsubscribe"
            body="You may unsubscribe from communications at any time by clicking the unsubscribe link within any email."
          />
        </div>
        <div className="grid-item-span-all u-margin-b-09">
          <Button
            disabled={buttonConstraints ? false : true}
            className="form__button"
            renderIcon={Locked16}
            onClick={handleOnSubmit}
          >
            Continue
          </Button>
        </div>
      </Form>
    </>
  );
};
