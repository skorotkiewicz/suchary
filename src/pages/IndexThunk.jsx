/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import Suchar from "./../components/Suchar";

import { useSelector, useDispatch } from "react-redux";
import { setPage, fetchJokes } from "./../_actions";

const Index = () => {
  const [firstTime, setFirstTime] = useState(true);
  const { pageId } = useParams();

  const page = useSelector((state) => state.page);
  const jokes = useSelector((state) => state.jokes);
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstTime) {
      if (pageId > 1) {
        dispatch(fetchJokes(`page/${pageId}`));
        dispatch(setPage(pageId));
        setFirstTime(false);
      } else {
        dispatch(fetchJokes(`page/${page}`));
      }
    } else {
      dispatch(fetchJokes(`page/${page}`));
    }

    window.history.replaceState(null, `Strona: ${page}`, `/strona/${page}`);
  }, [page]);

  const Suchary = () => {
    return (
      <>
        <div className="suchary">
          {jokes.jokes.map((joke, key) => (
            <Suchar
              joke={joke}
              id={key}
              key={key}
              jokes={jokes.jokes}
              setJokes={(x) => {
                dispatch(fetchJokes(`page/${page}`, x));
              }}
            />
          ))}
        </div>

        <div className="paginator">
          <button
            className="pageBtn"
            onClick={() => {
              dispatch(setPage(jokes.prev));
            }}
            disabled={jokes.prev === null && true}
          >
            Poprzednia strona
          </button>
          <h4 style={{ color: "#eee" }}>Strona: {page}</h4>
          <button
            className="pageBtn"
            onClick={() => {
              dispatch(setPage(jokes.next));
            }}
            disabled={jokes.next === null && true}
          >
            Następna strona
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      {jokes.isLoading ? (
        <div className="loader">
          <ReactLoading type={"bars"} color={"grey"} />
        </div>
      ) : (
        <Suchary />
      )}
    </>
  );
};

export default Index;
