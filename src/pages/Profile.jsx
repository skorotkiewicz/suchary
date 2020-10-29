import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Suchar from "./../components/Suchar";

import { useSelector, useDispatch } from "react-redux";
import { fetchJokes, fetchUser } from "./../_actions";

const Profile = () => {
  let { login, pageId } = useParams();
  const [page, setPage] = useState(1);
  const [firstTime, setFirstTime] = useState(true);

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const jokes = useSelector((state) => state.jokes);
  const user = useSelector((state) => state.user);

  const fetchJokesUrl = `user/${login}/${page}`;

  useEffect(() => {
    if (firstTime) {
      if (pageId > 1) {
        setPage(pageId);
        setFirstTime(false);
        dispatch(fetchJokes(`user/${login}/${pageId}`));
      } else {
        dispatch(fetchJokes(fetchJokesUrl));
      }
    } else {
      dispatch(fetchJokes(fetchJokesUrl));
    }

    window.history.replaceState(
      null,
      `Śmieszek: ${login} - Strona: ${page}`,
      `/smieszek/${login}/strona/${page}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setPage(1);
    dispatch(fetchUser(login));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);

  const Profil = () => {
    const joined = String(user.user.joined).replace(/T(.*)/g, "");

    return (
      <div style={{ color: "#adadad" }}>
        <h1 style={{ color: "#eee" }}>{user.user.login}</h1>
        <h4>
          Punkty: <em>{user.user.points}</em>
        </h4>
        {/*<h4>{user.role}</h4>*/}
        <h4>
          Dołączył: <em>{joined}</em>
        </h4>

        {auth.login === user.user.login && (
          <div className="settingsBox">
            ustawienia:{" "}
            <Link style={{ color: "#ededed" }} to="/ustawienia/zmianahasla">
              zmień hasło
            </Link>
          </div>
        )}

        <hr style={{ marginTop: 20, marginBottom: 20 }} />
      </div>
    );
  };

  const UserJokes = () => {
    return (
      <>
        <h3 style={{ color: "#eee", marginBottom: 20 }}>
          Suchary dodane przez {login}
        </h3>
        <div className="suchary">
          {jokes.jokes.map((joke, key) => (
            <Suchar
              joke={joke}
              id={key}
              key={key}
              noLikes={false}
              jokes={jokes.jokes}
              setJokes={(x) => {
                dispatch(fetchJokes(fetchJokesUrl, x));
              }}
            />
          ))}
        </div>
      </>
    );
  };

  const Paginator = () => {
    return (
      <div className="paginator">
        <button
          className="pageBtn"
          onClick={() => {
            setPage(jokes.prev);
          }}
          disabled={jokes.prev === null && true}
        >
          Poprzednia strona
        </button>
        <h4 style={{ color: "#eee" }}>Strona: {page}</h4>
        <button
          className="pageBtn"
          onClick={() => {
            setPage(jokes.next);
          }}
          disabled={jokes.next === null && true}
        >
          Następna strona
        </button>
      </div>
    );
  };

  return (
    <div>
      <>
        {user.isLoading ? (
          <div className="loader">
            <ReactLoading type={"bars"} color={"grey"} />
          </div>
        ) : user.user ? (
          <>
            <Profil />

            {jokes.isLoading ? (
              <ReactLoading type={"cylon"} color={"grey"} />
            ) : (
              <>
                {jokes.length !== 0 ? (
                  <>
                    <UserJokes />
                    <Paginator />
                  </>
                ) : (
                  <p style={{ color: "#eee" }}>
                    Na tym profilu nie ma jeszcze, żadnego suchara (╯︵╰,)
                  </p>
                )}
              </>
            )}
          </>
        ) : (
          <p style={{ color: "#eee" }}>Nie znaleziono śmieszka</p>
        )}
      </>
    </div>
  );
};

export default Profile;
