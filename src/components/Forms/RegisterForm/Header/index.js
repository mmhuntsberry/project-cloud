import React from "react";
import { Link } from "react-router-dom";

import { IbmCloud32 } from "@carbon/icons-react";

import { ProductiveHeading05 } from "../../../../elements/Headings/ProductiveHeading05";
import { BodyShort02 } from "../../../../elements/Labels/BodyShort02";

export const Header = () => {
  return (
    <>
      <IbmCloud32 className="form-header__icon" />
      <ProductiveHeading05
        heading="Create an IBM account"
        classes="form__header u-margin-t-07"
      />
      <div className="form-header__label-container u-margin-t-02">
        <BodyShort02
          labelText="Already have a IBM Cloud account?"
          classes={`form-header__label u-margin-r-02`}
        />
        <Link className="bx--link" to="/">
          Log in
        </Link>
      </div>
    </>
  );
};
