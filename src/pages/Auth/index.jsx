import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import { useSelector, useDispatch } from "react-redux";
import { setAuth, fetchActions } from "./../../_actions";
import Seo from "../../components/Seo";

const Auth = () => {
  const dispatch = useDispatch();

  const [info, setInfo] = useState("");
  const [isLoading1, setIsLoading1] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const actions = useSelector((state) => state.actions);

  useEffect(() => {
    if (actions.data.status) {
      setIsLoading1(false);
      setIsLoading2(false);
    }

    if (actions.data.status === "success") {
      const a = actions.data;
      const authStorage = {
        auth: a.data["User-Token"],
        login: a.data["Login"],
        role: a.data["Role"],
      };
      localStorage.setItem("auth", JSON.stringify(authStorage));

      dispatch(setAuth(authStorage));
    }

    if (actions.data.status === "error") {
      setInfo(actions.data.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actions]);

  const auther = async (e, type) => {
    e.preventDefault();

    if (type === "register") {
      setIsLoading1(true);
      var url = "users";
      if (e.target.password.value !== e.target.password2.value) {
        return setInfo("Poadane hasła nie zgadzają się");
      }
    } else {
      setIsLoading2(true);
      url = "session";
    }

    const rbody = {
      user: {
        login: e.target.login.value,
        password: e.target.password.value,
      },
    };

    dispatch(fetchActions({}, url, rbody, "POST"));
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
      <Seo title="Załóż konto lub zaloguj się" />
      <div className="authContent">
        <RegisterForm />
        <hr style={{ marginTop: 20, marginBottom: 20 }} />
        <LoginForm />
      </div>
      <div className="authContent">
        {info ? (
          <>
            <h4 style={{ color: "#b35d5d" }}>{info}</h4>
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
