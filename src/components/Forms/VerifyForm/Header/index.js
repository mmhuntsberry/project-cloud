import React from "react";
import { BodyShort02 } from "../../../../elements/Labels/BodyShort02";
import { ProductiveHeading05 } from "../../../../elements/Headings/ProductiveHeading05";

import { Link } from "react-router-dom";
import { ArrowLeft16, IbmCloud32 } from "@carbon/icons-react";

export const Header = () => {
  return (
    <>
      <IbmCloud32 className="form-header__icon" />
      <div className="form-header__label-container">
        <Link className="bx--link" to="/">
          <ArrowLeft16 />
        </Link>
        <BodyShort02
          labelText="Back to account creation"
          classes={`form-header__label u-margin-l-02`}
        />
      </div>
      <ProductiveHeading05 heading="Verify email" />
    </>
  );
};
