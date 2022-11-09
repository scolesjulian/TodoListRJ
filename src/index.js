import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/scss/bootstrap.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./Theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
