import React, { useState } from "react";
import ReactLoading from "react-loading";

const Settings = ({ auth }) => {
  const [info, setInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const changePassword = async (e) => {
    e.preventDefault();

    if (e.target.newPassword.value !== e.target.newPassword2.value)
      return setInfo("Poadane hasła nie zgadzają się");

    const body = {
      user: {
        yourPassword: e.target.currentPassword.value,
        newPassword: e.target.newPassword.value,
      },
    };

    setIsLoading(true);

    const data = await fetch(`https://pbsapi.now.sh/api/users`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": auth.auth,
      },
      body: JSON.stringify(body),
    });
    const d = await data.json();

    if (d.status) {
      setIsLoading(false);
      setInfo(d.message);
    }
  };

  return (
    <>
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
            {!isLoading ? (
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
      {info ? (
        <div className="authContent">{info}</div>
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
