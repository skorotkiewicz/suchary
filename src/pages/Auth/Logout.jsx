import React from "react";
import { Redirect } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setAuth } from "./../../_actions";

const Logout = () => {
  const dispatch = useDispatch();

  dispatch(setAuth(false));
  localStorage.removeItem("auth");

  return (
    <div>
      <Redirect to="/" />
    </div>
  );
};

export default Logout;
