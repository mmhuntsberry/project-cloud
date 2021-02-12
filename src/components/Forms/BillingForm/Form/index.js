import React from "react";
import {
  Form,
  TextInput,
  Select,
  SelectItem,
  SelectItemGroup,
  Checkbox
} from "carbon-components-react";

export const BillingForm = () => {
  return (
    <>
      <Form className="form form--grid">
        <TextInput
          className="form__input"
          id="firstname"
          invalidText="Invalid error message."
          labelText="First name"
          placeholder="Enter first name"
          type="text"
        />
        <TextInput
          className="form__input"
          id="lastname"
          invalidText="Invalid error message."
          labelText="Last name"
          placeholder="Enter last name"
          type="text"
        />
        <div className="grid-item-span-all">
          <TextInput
            className="form__input"
            id="address-01"
            invalidText="Invalid error message."
            labelText="Address line 1"
            placeholder="Enter address 1"
            type="text"
          />
        </div>
        <div className="grid-item-span-all">
          <TextInput
            className="form__input form__input--full-line"
            id="address-02"
            invalidText="Invalid error message."
            labelText="Address line 2"
            placeholder="Enter address 2"
            type="text"
          />
        </div>
        <div className="grid-item-span-all">
          <TextInput
            className="form__input"
            id="city"
            invalidText="Invalid error message."
            labelText="City"
            placeholder="Enter city"
            type="text"
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
          className="form__input form__input--full-line"
          id="zipcode"
          invalidText="Invalid error message."
          labelText="Zip code"
          placeholder="Enter zip code"
          type="text"
        />
        <div className="grid-item-span-all">
          <fieldset className="bx--fieldset">
            <Checkbox
              labelText="My billing address is the same as my company address"
              id="checked-label-1"
            />
          </fieldset>
        </div>
      </Form>
    </>
  );
};
