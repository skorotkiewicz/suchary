import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import allReducer from "./_reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// if (process.env.NODE_ENV === "development") {
//   var store = createStore(
//     allReducer,
//     composeWithDevTools(applyMiddleware(thunk))
//   );
// } else {
//   store = createStore(allReducer, applyMiddleware(thunk));
// }

import * as actions from "./_actions";
if (process.env.NODE_ENV === "development") {
  const composeEnhancers = composeWithDevTools({
    actions,
    trace: true,
    traceLimit: 25,
  });
  var store = createStore(allReducer, composeEnhancers(applyMiddleware(thunk)));
} else {
  store = createStore(allReducer, applyMiddleware(thunk));
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
