import React from "react";
import { Link } from "react-router-dom";
import { IbmCloud32 } from "@carbon/icons-react";

export const Header = () => {
  return (
    <>
      <IbmCloud32 className="form-header__icon" />
      <h3 className="form__header u-margin-t-07">Create an IBM account</h3>
      <div
        className="form-header__label-container u-margin-t-02 u-margin-b-05
      "
      >
        <p className={`form-header__label u-margin-r-02`}>
          Already have a IBM Cloud account?
        </p>
        <Link className="bx--link register__link" to="/">
          Log in
        </Link>
      </div>
    </>
  );
};
