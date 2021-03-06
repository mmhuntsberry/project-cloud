import React from "react";
import { Link } from "react-router-dom";
import IbmLogo from "../../../assets/ibmcloudlogo.png";

export const Header = () => {
  return (
    <>
      <img src={IbmLogo} alt="ibm cloud" className="form-header__icon" />
      <h3 className="form__header u-margin-t-07">
        Create a free IBM Cloud account
      </h3>
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
