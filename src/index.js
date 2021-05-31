import React from "react";
import { render } from "react-dom";
import "./styles/global.css";
import App from "./App";
import { Router, Route, Switch } from "react-router";
import { AppStateProvider } from "./state/AppStateContext";

render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
