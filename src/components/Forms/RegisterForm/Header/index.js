import React from "react";
import { BodyShort01 } from "../../../../elements/Labels/BodyShort01";
import { ProductiveHeading05 } from "../../../../elements/Headings/ProductiveHeading05";
import { Link } from "react-router-dom";
import { IbmCloud32 } from "@carbon/icons-react";

export const Header = () => {
  return (
    <>
      <IbmCloud32 className="form-header__icon" />
      <ProductiveHeading05
        heading="Create an IBM account"
        classes="form__header u-margin-t-07"
      />
      <div className="form-header__label-container u-margin-t-02">
        <BodyShort01
          labelText="Already have a Cloud account?"
          classes={`form-header__label u-margin-r-02`}
        />
        <Link className="bx--link" to="/">
          Log in
        </Link>
      </div>
    </>
  );
};
