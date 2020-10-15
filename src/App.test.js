import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

import allReducer from "./_reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./_reducers";

const Root = () => {
  const store = createStore(allReducer);
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

test("reducers", () => {
  let state;
  state = reducers(
    {
      favorites: ["5f7b99d31a88460007aacc81", "5f87ce327dd17200087a5261"],
      likes: [
        "5f882944becb390007275650",
        "5f88299b07fa090008d73db7",
        "5f87ce327dd17200087a5261",
      ],
      auth: {
        auth: "123",
        login: "tester",
      },
      page: 1,
      isLoading: false,
    },
    { type: "setIsLoading", payload: true }
  );
  expect(state).toEqual({
    favorites: ["5f7b99d31a88460007aacc81", "5f87ce327dd17200087a5261"],
    likes: [
      "5f882944becb390007275650",
      "5f88299b07fa090008d73db7",
      "5f87ce327dd17200087a5261",
    ],
    auth: {
      auth: "123",
      login: "tester",
    },
    page: 1,
    isLoading: true,
  });
});
