import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Suchar from "./../components/Suchar";

import { useSelector } from "react-redux";

const Profile = () => {
  let { login, pageId } = useParams();
  const [isLoadingUser, setIsLoadingUser] = useState(true);
  const [isLoadingJokes, setIsLoadingJokes] = useState(true);

  const [user, setUser] = useState([]);
  const [jokes, setJokes] = useState([]);
  const [page, setPage] = useState(1);
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(true);
  const [firstTime, setFirstTime] = useState(true);

  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    setIsLoadingJokes(true);
    if (firstTime) {
      if (pageId > 1) {
        fetchJokes(pageId);
        setPage(pageId);
        setFirstTime(false);
      } else {
        fetchJokes(page);
      }
    } else {
      fetchJokes(page);
    }

    window.history.replaceState(
      null,
      `Śmieszek: ${login} - Strona: ${page}`,
      `/smieszek/${login}/strona/${page}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    setIsLoadingUser(true);
    setPage(1);
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [login]);

  const fetchUser = async () => {
    const data = await fetch(`https://pbsapi.now.sh/api/users/${login}`);
    const user = await data.json();
    if (user) {
      setIsLoadingUser(false);
    }
    setUser(user.data);
  };

  const fetchJokes = async (pg) => {
    const data = await fetch(
      `https://pbsapi.now.sh/api/jokes/user/${login}/${pg}`
    );
    const jokes = await data.json();

    if (jokes) {
      setIsLoadingJokes(false);
    }
    if (jokes.status === "success") {
      setJokes(jokes.data.jokes);
      setPrev(jokes.data.prevPage);
      setNext(jokes.data.nextPage);
    }
  };

  const Profil = () => {
    const joined = String(user.joined).replace(/T(.*)/g, "");

    return (
      <div style={{ color: "#adadad" }}>
        <h1 style={{ color: "#eee" }}>{user.login}</h1>
        <h4>
          Punkty: <em>{user.points}</em>
        </h4>
        {/*<h4>{user.role}</h4>*/}
        <h4>
          Dołączył: <em>{joined}</em>
        </h4>

        {auth.login === user.login && (
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
          {jokes.map((joke, key) => (
            <Suchar
              joke={joke}
              id={key}
              key={key}
              noLikes={false}
              jokes={jokes}
              setJokes={setJokes}
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
            setPage(prev);
            setIsLoadingJokes(true);
          }}
          disabled={prev === null && true}
        >
          Poprzednia strona
        </button>
        <h4 style={{ color: "#eee" }}>Strona: {page}</h4>
        <button
          className="pageBtn"
          onClick={() => {
            setPage(next);
            setIsLoadingJokes(true);
          }}
          disabled={next === null && true}
        >
          Następna strona
        </button>
      </div>
    );
  };

  return (
    <div>
      <>
        {isLoadingUser ? (
          <div className="loader">
            <ReactLoading type={"bars"} color={"grey"} />
          </div>
        ) : user ? (
          <>
            <Profil />

            {isLoadingJokes ? (
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
