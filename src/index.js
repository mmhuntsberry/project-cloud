import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import "./index.scss";

import App from "./components/App";

import "core-js/modules/es7.array.includes";
import "core-js/modules/es6.array.fill";
import "core-js/modules/es6.string.includes";
import "core-js/modules/es6.string.trim";
import "core-js/modules/es7.object.values";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
