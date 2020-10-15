import React, { useState } from "react";
import ReactLoading from "react-loading";

import { useDispatch } from "react-redux";
import { setAuth } from "./../../_actions";

const Auth = () => {
  const dispatch = useDispatch();

  const [info, setInfo] = useState("");
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);

  const auther = async (e, type) => {
    e.preventDefault();
    //setInfo("");

    if (type === "register") {
      setIsLoading1(true);

      var url = "https://pbsapi.now.sh/api/users";
      if (e.target.password.value !== e.target.password2.value)
        return setInfo("Poadane hasła nie zgadzają się");
    } else {
      setIsLoading2(true);

      url = "https://pbsapi.now.sh/api/session";
    }

    const rbody = {
      user: {
        login: e.target.login.value,
        password: e.target.password.value,
      },
    };

    const data = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rbody),
    });
    const d = await data.json();

    if (d.status) {
      setIsLoading1(false);
      setIsLoading2(false);
    }

    if (d.status === "success") {
      const authStorage = {
        auth: d.data["User-Token"],
        login: d.data["Login"],
      };
      localStorage.setItem("auth", JSON.stringify(authStorage));

      dispatch(setAuth(authStorage));
    } else {
      setInfo(d.message);
    }
  };

  const RegisterForm = () => {
    return (
      <div className="auth">
        <h1 style={{ color: "#fff", marginBottom: 20 }}>Zarejestruj się</h1>

        <form onSubmit={(e) => auther(e, "register")}>
          <input type="text" name="login" placeholder="Login" />
          <br />
          <input type="password" placeholder="Hasło" name="password" />
          <br />
          <input
            type="password"
            placeholder="Wpisz ponownie hasło"
            name="password2"
          />
          <br />
          {!isLoading1 ? (
            <input
              style={{ borderRadius: 10 }}
              type="submit"
              value="Zarejestruj"
            />
          ) : (
            <ReactLoading type={"cylon"} color={"grey"} />
          )}
        </form>
      </div>
    );
  };
  const LoginForm = () => {
    return (
      <div className="auth">
        <h1 style={{ color: "#fff", marginBottom: 20 }}>Zaloguj się</h1>

        <form onSubmit={(e) => auther(e, "login")}>
          <input type="text" name="login" placeholder="Login" />
          <br />
          <input type="password" placeholder="Twoje hasło" name="password" />
          <br />
          {!isLoading2 ? (
            <input style={{ borderRadius: 10 }} type="submit" value="Zaloguj" />
          ) : (
            <ReactLoading type={"cylon"} color={"grey"} />
          )}
        </form>
      </div>
    );
  };

  return (
    <>
      <div className="authContent">
        <RegisterForm />
        <hr style={{ marginTop: 20, marginBottom: 20 }} />
        <LoginForm />
      </div>
      <div className="authContent">
        {info ? (
          <>
            <h4 style={{ color: "#fff" }}>{info}</h4>
          </>
        ) : (
          <>
            <h4>
              <em>Witaj! </em>
              Jeżeli nie masz jeszcze konta to możesz sie zarejestrowac w mniej
              niż 15 sekund, lub zaloguj się. :)
            </h4>
          </>
        )}
      </div>
    </>
  );
};

export default Auth;
