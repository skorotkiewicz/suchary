import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import Suchar from "./../components/Suchar";

const Random = () => {
  const [jokes, setJokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    const data = await fetch("https://pbsapi.now.sh/api/jokes/random");

    const jokes = await data.json();
    setJokes(jokes.data.data);

    if (jokes) {
      setIsLoading(false);
    }
  };

  const RandBtn = () => {
    return (
      <div className="randBtn">
        <button
          className="pagerBtn"
          onClick={() => {
            fetchJokes();
            setIsLoading(true);
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
        <RandBtn />
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

export default Random;
