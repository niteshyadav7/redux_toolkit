import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store";

const elm = document.getElementById("root");
const root = ReactDOM.createRoot(elm);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
