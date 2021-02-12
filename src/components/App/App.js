import React from "react";
import { HashRouter } from "react-router-dom";
import Router from "../../Router";
import GlobalHeader from "../GlobalHeader/GlobalHeader";
import Sidebar from "../Sidebar";
import "./app.scss";

function App() {
  return (
    <HashRouter>
      <div className="app u-pad-t-layout-06">
        <GlobalHeader />
        <div className="bx--grid">
          <div className="bx--row">
            <Router />
            <Sidebar />
          </div>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
