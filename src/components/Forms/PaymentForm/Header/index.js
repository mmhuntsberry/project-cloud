import React from "react";
import { Link } from "react-router-dom";

import { InlineNotification } from "carbon-components-react";
import { ArrowLeft16, IbmCloud32 } from "@carbon/icons-react";

import { BodyShort02 } from "../../../../elements/Labels/BodyShort02";
import { ProductiveHeading05 } from "../../../../elements/Headings/ProductiveHeading05";
import FormProgressIndicator from "../../../ProgressIndicator";

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

      <div className="u-margin-t-08">
        <FormProgressIndicator currentIndex={3} />
      </div>

      <InlineNotification
        kind="info"
        subtitle={
          <span>This information is used to verify your identity.</span>
        }
        title="You will not be charged until you upgrade."
      />
    </>
  );
};
