import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import Suchar from "./../components/Suchar";
import { useDispatch, useSelector } from "react-redux";
import { fetchJokes } from "../_actions";

const Random = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.jokes);

  useEffect(() => {
    dispatch(fetchJokes("random"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const RandBtn = () => {
    return (
      <div className="randBtn">
        <button
          className="pagerBtn"
          onClick={() => {
            dispatch(fetchJokes("random"));
          }}
        >
          Wylosuj ponownie
        </button>
      </div>
    );
  };

  const Suchary = () => {
    return (
      <>
        <RandBtn />
        <div className="suchary">
          {state.jokes.map((joke, key) => (
            <Suchar
              joke={joke}
              id={key}
              key={key}
              jokes={state.jokes}
              setJokes={(x) => {
                dispatch(fetchJokes("random", x));
              }}
            />
          ))}
        </div>
        <RandBtn />
      </>
    );
  };

  return (
    <>
      {state.isLoading ? (
        <div className="loader">
          <ReactLoading type={"bars"} color={"grey"} />
        </div>
      ) : (
        <Suchary />
      )}
    </>
  );
};

export default Random;
