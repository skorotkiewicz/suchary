import React, { useState } from "react";
import ReactLoading from "react-loading";
import { useSelector, useDispatch } from "react-redux";
import { fetchActions } from "./../../_actions";
import Seo from "../../components/Seo";

const Settings = ({ auth }) => {
  const [info, setInfo] = useState("");
  const actions = useSelector((state) => state.actions);
  const dispatch = useDispatch();

  const changePassword = async (e) => {
    e.preventDefault();
    if (e.target.newPassword.value !== e.target.newPassword2.value)
      return setInfo("Podane hasła nie zgadzają się");

    const body = {
      user: {
        yourPassword: e.target.currentPassword.value,
        newPassword: e.target.newPassword.value,
      },
    };

    dispatch(fetchActions(auth, "users", body, "PATCH"));
  };

  return (
    <>
      <Seo title="Ustawienia" />
      <div className="authContent">
        <div className="auth">
          <h1 style={{ color: "#fff", marginBottom: 20 }}>Zmień hasło</h1>

          <form onSubmit={changePassword}>
            <input
              type="password"
              name="currentPassword"
              placeholder="Twoje aktualne hasło"
            />
            <br />
            <input
              type="password"
              name="newPassword"
              placeholder="Nowe hasło"
            />
            <br />
            <input
              type="password"
              name="newPassword2"
              placeholder="Podaj ponownie nowe hasło"
            />
            <br />
            {!actions.isLoading ? (
              <input
                style={{ borderRadius: 10 }}
                type="submit"
                value="Zmień hasło"
              />
            ) : (
              <ReactLoading type={"cylon"} color={"grey"} />
            )}
          </form>
        </div>
      </div>
      {actions.data.message || info ? (
        <div className="authContent">{actions.data.message || info}</div>
      ) : (
        <div className="authContent">
          <p>
            Tutaj możesz zmienić swoje stare hasło na nowe. Pamiętaj aby twoje
            nowe hasło było silne i unikatowe!
          </p>
        </div>
      )}
    </>
  );
};

export default Settings;
