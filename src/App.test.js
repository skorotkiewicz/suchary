import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import allReducer from "./_reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const Root = () => {
  const store = createStore(allReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

test("render Index page", () => {
  const { getByText } = render(<Root />);
  const linkElement = getByText(/najnowsze/i);
  expect(linkElement).toBeInTheDocument();
});
