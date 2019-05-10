import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const app = (
  <BrowserRouter basename="/booking">
    <App/>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));
