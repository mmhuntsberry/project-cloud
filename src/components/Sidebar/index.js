import React from "react";
import { ProductiveHeading03 } from "../../elements/Headings/ProductiveHeading03";
import { BodyLong01 } from "../../elements/Paragraphs/BodyLong01";

const Sidebar = () => {
  return (
    <ul className="sidebar bx--offset-lg-1 bx--col-lg-4 bx--col-md-4 bx--col-sm-4">
      <li>
        <ProductiveHeading03
          heading="No up-front changes"
          classes="u-margin-b-03"
        />
        <BodyLong01
          body="You will not be charged unless you manually upgrade to a paid
                  account"
          classes="u-margin-b-05 sidebar__body--long"
        />
      </li>
      <li>
        <ProductiveHeading03 heading="Security first" classes="u-margin-b-03" />
        <BodyLong01
          body="We ask you for your credit card to make sure you are not a
                  robot."
          classes="u-margin-b-05 sidebar__body--long"
        />
      </li>
      <li>
        <ProductiveHeading03
          heading="$200 credit when you upgrade"
          classes="u-margin-b-03"
        />
        <BodyLong01
          body="Receive a crediit for you first $200 of apps and services on
                  us!"
          classes="sidebar__body--long"
        />
      </li>
    </ul>
  );
};

export default Sidebar;
