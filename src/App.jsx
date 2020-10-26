import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
import "./App.css";

import Navigator from "./pages/Navigator.jsx";

import Index from "./pages/IndexThunk";
import Favorites from "./pages/Favorites";
import Random from "./pages/RandomThunk";
import SucharPage from "./pages/SucharPageThunk";

import Auth from "./pages/Auth";
import Logout from "./pages/Auth/Logout";
import AddSuchar from "./pages/Auth/AddSucharThunk";
import Settings from "./pages/Auth/SettingsThunk";
import Profile from "./pages/ProfileThunk";

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

  const url = "/Suchary-React-PBS/";

  return (
    <Router>
      <div className="App">
        <Navigator />
        <div className="content">
          <Switch>
            <Route path={`${url}/`} exact component={Index} />
            <Route path={`${url}/strona/:pageId`} exact component={Index} />
            <Route path={`${url}/smietnik`} exact component={Index} />
            <Route
              path={`${url}/smietnik/strona/:pageId`}
              exact
              component={Index}
            />
            <Route path={`${url}/losowe`} exact component={Random} />
            <Route path={`${url}/mojeulubione`} exact component={Favorites} />
            <Route path={`${url}/suchar/:id`} exact component={SucharPage} />
            <Route path={`${url}/smieszek/:login`} exact component={Profile} />
            <Route
              path={`${url}/smieszek/:login/strona/:pageId`}
              exact
              component={Profile}
            />

            <Route path={`${url}/auth`} exact>
              <Auth />
              {auth && <Redirect to={`${url}/dodaj`} />}
            </Route>
            <Route path={`${url}/wyloguj`} exact>
              {auth && <Logout />}
            </Route>
            <Route path={`${url}/dodaj`} exact>
              {auth && <AddSuchar auth={auth} />}
            </Route>
            <Route path={`${url}/ustawienia/zmianahasla`} exact>
              {auth && <Settings auth={auth} />}
            </Route>

            <Route path="*" exact component={Error404} />
          </Switch>
        </div>
        <div className="footer">
          build with{" "}
          <IoMdHeart style={{ color: "red", marginLeft: 5, marginRight: 5 }} />{" "}
          by s.korotkiewicz (ta strona jest
          <a
            style={{ color: "#eee", marginLeft: 5 }}
            href={`https://github.com/skorotkiewicz/Suchary-React-PBS`}
          >
            opensource!
          </a>
          )
        </div>
      </div>
    </Router>
  );
}

export default App;
