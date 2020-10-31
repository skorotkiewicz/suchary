import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import "./App.css";

import Navigator from "./pages/Navigator.jsx";

import Index from "./pages/Index";
import Favorites from "./pages/Favorites";
import Random from "./pages/Random";
import SucharPage from "./pages/SucharPage";

import Auth from "./pages/Auth";
import Logout from "./pages/Auth/Logout";
import AddSuchar from "./pages/Auth/AddSuchar";
import Settings from "./pages/Auth/Settings";
import Profile from "./pages/Profile";
import Help from "./pages/Help";

import { useSelector, useDispatch } from "react-redux";
import { setFavorites, setLikes, setAuth } from "./_actions";

function App() {
  const getFav = JSON.parse(localStorage.getItem("favorites") || 0);
  const getLike = JSON.parse(localStorage.getItem("likes") || 0);
  const getAuth = JSON.parse(localStorage.getItem("auth") || 0);

  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (getFav !== 0) {
      dispatch(setFavorites([...getFav]));
    }
    if (getLike !== 0) {
      dispatch(setLikes([...getLike]));
    }
    if (getAuth !== 0) {
      dispatch(setAuth(getAuth));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Error404 = () => {
    return <h3 style={{ color: "#eee" }}>Nie znaleziono strony (╯︵╰,)</h3>;
  };

  return (
    <Router basename="/">
      <div className="App">
        <Navigator />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/strona/:pageId" exact component={Index} />
            <Route path="/smietnik" exact component={Index} />
            <Route path="/smietnik/strona/:pageId" exact component={Index} />
            <Route path="/losowe" exact component={Random} />
            <Route path="/pomoc" exact component={Help} />
            <Route path="/mojeulubione" exact component={Favorites} />
            <Route path="/suchar/:id" exact component={SucharPage} />
            <Route path="/smieszek/:login" exact component={Profile} />
            <Route
              path="/smieszek/:login/strona/:pageId"
              exact
              component={Profile}
            />

            <Route path="/auth" exact>
              <Auth />
              {auth && <Redirect to="/dodaj" />}
            </Route>
            <Route path="/wyloguj" exact>
              {auth && <Logout />}
            </Route>
            <Route path="/dodaj" exact>
              {auth && <AddSuchar auth={auth} />}
            </Route>
            <Route path="/ustawienia/zmianahasla" exact>
              {auth && <Settings auth={auth} />}
            </Route>

            <Route path="*" exact component={Error404} />
          </Switch>
        </div>
        <div className="footer">
          &copy; Suchary 2020 |{" "}
          <Link
            style={{ color: "#eee", marginRight: 5, marginLeft: 5 }}
            to="/pomoc"
          >
            pomoc
          </Link>{" "}
          |
          <a
            style={{ color: "#eee", marginLeft: 5 }}
            href={`https://github.com/skorotkiewicz/suchary`}
          >
            opensource
          </a>
        </div>
      </div>
    </Router>
  );
}

export default App;
