import React from "react";
import { BodyShort02 } from "../../../../elements/Labels/BodyShort02";
import { ProductiveHeading05 } from "../../../../elements/Headings/ProductiveHeading05";
import { Link } from "react-router-dom";
import { ArrowLeft16, IbmCloud32 } from "@carbon/icons-react";
import { InlineNotification } from "carbon-components-react";

export const Header = () => {
  return (
    <>
      <IbmCloud32 className="form-header__icon" />
      <div className="form-header__label-container">
        <Link className="bx--link" to="/verify">
          <ArrowLeft16 />
        </Link>
        <BodyShort02
          labelText="Back"
          classes={`form-header__label u-margin-l-02`}
        />
      </div>
      <ProductiveHeading05
        heading="Payment information"
        classes="form__header"
      />
      <InlineNotification
        kind="info"
        iconDescription="describes the close button"
        subtitle={
          <span>
            We are asking for this information to ensure you are not a robot.
          </span>
        }
        title="You will not be charged until you upgrade."
      />
    </>
  );
};
