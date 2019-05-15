import React from "react";
import ReactDOM from "react-dom";
import 'semantic-ui-css/semantic.min.css'
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Root from "./store/Root";

const app = (
  <Root>
    <BrowserRouter basename="/talixo-booking-task/booking">
      <App/>
    </BrowserRouter>
  </Root>
);

ReactDOM.render(app, document.getElementById("root"));
