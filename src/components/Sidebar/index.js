import React from "react";

export const Sidebar = () => {
  return (
    <ul>
      <li>
        <h4 className="sidebar__item-heading u-margin-b-03">
          No up-front changes
        </h4>
        <h3 className="u-margin-b-05 sidebar__item-body">
          You will not be charged unless you manually upgrade to a paid account.
        </h3>
      </li>
      <li>
        <h4 className="sidebar__item-heading u-margin-b-03">Security first</h4>
        <h3 className="u-margin-b-05 sidebar__item-body">
          We ask you for your credit card to make sure you are not a robot.
        </h3>
      </li>
      <li>
        <h4 className="sidebar__item-heading u-margin-b-03">
          $200 credit when you upgrade
        </h4>
        <h3 className="sidebar__item-body">
          Receive a crediit for you first $200 of apps and services on us!
        </h3>
      </li>
    </ul>
  );
};
