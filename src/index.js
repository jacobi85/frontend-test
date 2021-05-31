import React from "react";
import { render } from "react-dom";
import "./styles/global.css";
import App from "./App";
import { AppStateProvider } from "./state/AppStateContext";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Layout";
render(
  <React.StrictMode>
    <Router>
      <Layout>
        <AppStateProvider>
          <App />
        </AppStateProvider>
      </Layout>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
