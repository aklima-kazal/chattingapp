import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import firebaseConfig from "./DBconnection/firebaseConfig";
import { Provider } from "react-redux";
import store from "./feature/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
