import React from "react";

export const Sidebar = () => {
  return (
    <ul className="sidebar">
      <li>
        <h4 className="sidebar__item-heading u-margin-b-03">
          No up-front charges
        </h4>
        <h3 className="u-margin-b-05 sidebar__item-body">
          Sign up for a Lite account at no cost to you- ever.
        </h3>
      </li>
      <li>
        <h4 className="sidebar__item-heading u-margin-b-03">
          Transform your business
        </h4>
        <h3 className="u-margin-b-05 sidebar__item-body">
          Start building by leveraging products with Lite plan services.
        </h3>
      </li>
      <li>
        <h4 className="sidebar__item-heading u-margin-b-03">
          $200 upgrade credit
        </h4>
        <h3 className="sidebar__item-body">
          Receive a $200 credit to use on any product you want when you upgrade
          your account.
        </h3>
      </li>
    </ul>
  );
};
