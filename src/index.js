import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./pages/Router";
import { HashRouter } from "react-router-dom";

import "./styles/index.scss";
import "./styles/reset.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <HashRouter>
      <Router />
    </HashRouter>
  </>
);
