import React from "react";

export const ProductiveHeading03 = ({ heading, classes }) => {
  return (
    <h2 className={`productive-heading-03 ${classes ? classes : ""}`}>
      {heading}
    </h2>
  );
};
