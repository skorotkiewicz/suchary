import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Suchar from "./../components/Suchar";

import { useSelector, useDispatch } from "react-redux";
import { fetchJokes } from "./../_actions";

const SucharPage = () => {
  let { id } = useParams();

  const jokes = useSelector((state) => state.jokes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJokes(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const SucharInfo = (joke) => {
    return (
      <div className="sucharInfo">
        Dodany przez{" "}
        <Link to={`/smieszek/${joke.joke.login}`}>{joke.joke.login}</Link> w
        dniu {String(joke.joke.createdOn).replace(/T(.*)/g, "")}
      </div>
    );
  };

  const SucharBox = () => {
    return (
      <>
        {jokes.jokes.map((joke, key) => (
          <>
            <SucharInfo key={1} joke={joke} />
            <Suchar
              joke={joke}
              id={key}
              key={key}
              jokes={jokes.jokes}
              rm={true}
              setJokes={(x) => {
                dispatch(fetchJokes(id, x));
              }}
            />
          </>
        ))}
      </>
    );
  };
  return (
    <>
      {jokes.isLoading ? (
        <div className="loader">
          <ReactLoading type={"bars"} color={"grey"} />
        </div>
      ) : jokes ? (
        <SucharBox />
      ) : (
        <h4 style={{ color: "#eee" }}>Brak podanego suchara</h4>
      )}
    </>
  );
};

export default SucharPage;
