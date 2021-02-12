import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Form,
  TextInput,
  Button,
  ClickableTile,
  Link
} from "carbon-components-react";
import { Locked16, Purchase32 } from "@carbon/icons-react";
import { BodyLong01 } from "../../../../elements/Paragraphs/BodyLong01";

export const PaymentForm = () => {
  const history = useHistory();
  useEffect(() => {}, []);

  const handleOnSubmit = () => {
    history.push(`#`);
  };

  return (
    <>
      <Form className="form form--grid">
        <ClickableTile className="tile--payment">
          <Purchase32 className="tile__icon" />
          <h5>Credit Card</h5>
        </ClickableTile>
        <ClickableTile className="tile--payment">
          <h5>Paypal</h5>
        </ClickableTile>
        <div className="grid-item-span-all">
          <TextInput
            className="form__input"
            id="creditcard"
            invalidText="Invalid error message."
            labelText="Credit card"
            placeholder="Enter number"
            type="text"
          />
        </div>
        <TextInput
          className="form__input"
          id="expiration"
          invalidText="Invalid error message."
          labelText="Expiration date"
          placeholder="mm/yy"
          type="text"
        />
        <TextInput
          className="form__input"
          id="cvv"
          invalidText="Invalid error message."
          labelText="Security code"
          placeholder="Enter code"
          type="text"
        />
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
        <div className="grid-item-span-all">
          <Button
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
