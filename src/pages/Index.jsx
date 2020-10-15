/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import Suchar from "./../components/Suchar";

import { useSelector, useDispatch } from "react-redux";
import { setPage, setIsLoading } from "./../_actions";

const Index = () => {
  const [jokes, setJokes] = useState([]);
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(true);
  const [firstTime, setFirstTime] = useState(true);
  const { pageId } = useParams();

  const page = useSelector((state) => state.page);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (firstTime) {
      if (pageId > 1) {
        fetchJokes(pageId);
        dispatch(setPage(page));
        setFirstTime(false);
      } else {
        fetchJokes(page);
      }
    } else {
      fetchJokes(page);
    }

    window.history.replaceState(null, `Strona: ${page}`, `/strona/${page}`);
  }, [page]);

  const fetchJokes = async (pg) => {
    const data = await fetch(`https://pbsapi.now.sh/api/jokes/page/${pg}`);
    const jokes = await data.json();

    if (jokes) {
      dispatch(setIsLoading(false));
    }

    setJokes(jokes.data.jokes);

    setPrev(jokes.data.prevPage);
    setNext(jokes.data.nextPage);
  };

  const Suchary = () => {
    return (
      <>
        <div className="suchary">
          {jokes.map((joke, key) => (
            <Suchar
              joke={joke}
              id={key}
              key={key}
              jokes={jokes}
              setJokes={setJokes}
            />
          ))}
        </div>

        <div className="paginator">
          <button
            className="pageBtn"
            onClick={() => {
              //setPage(prev);
              dispatch(setPage(prev));
              dispatch(setIsLoading(true));
            }}
            disabled={prev === null && true}
          >
            Poprzednia strona
          </button>
          <h4 style={{ color: "#eee" }}>Strona: {page}</h4>
          <button
            className="pageBtn"
            onClick={() => {
              //setPage(next);
              dispatch(setPage(next));
              dispatch(setIsLoading(true));
            }}
            disabled={next === null && true}
          >
            Następna strona
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      {isLoading ? (
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
