import React from "react";
// import { useHistory } from "react-router-dom";

import { ProductiveHeading03 } from "../../elements/Headings/ProductiveHeading03";
import { ProductiveHeading04 } from "../../elements/Headings/ProductiveHeading04";

const Sidebar = () => {
  return (
    <ul>
      <li>
        <ProductiveHeading04
          heading="No up-front changes"
          classes="u-margin-b-03"
        />
        <ProductiveHeading03
          heading="You will not be charged unless you manually upgrade to a paid
                  account."
          classes="u-margin-b-05 sidebar__body--long"
        />
      </li>
      <li>
        <ProductiveHeading04 heading="Security first" classes="u-margin-b-03" />
        <ProductiveHeading03
          heading="We ask you for your credit card to make sure you are not a
                  robot."
          classes="u-margin-b-05 sidebar__body--long"
        />
      </li>
      <li>
        <ProductiveHeading04
          heading="$200 credit when you upgrade"
          classes="u-margin-b-03"
        />
        <ProductiveHeading03
          heading="Receive a crediit for you first $200 of apps and services on
                  us!"
          classes="sidebar__body--long"
        />
      </li>
    </ul>
  );
};

export default Sidebar;
