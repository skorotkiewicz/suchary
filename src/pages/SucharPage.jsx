import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Suchar from "./../components/Suchar";

const SucharPage = () => {
  let { id } = useParams();

  const [joke, setJoke] = useState([]);
  const [jokeStatus, setJokeStatus] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchJoke();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchJoke = async () => {
    const data = await fetch(`https://pbsapi.now.sh/api/joke/${id}`);

    const joke = await data.json();

    if (joke) {
      setJoke(joke.data);
      setJokeStatus(joke);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  };

  const Suchary = () => {
    return <Suchar joke={joke} jokes={[joke]} setJokes={setJoke} rm={true} />;
  };

  return (
    <>
      {isLoading ? (
        <div className="loader">
          <ReactLoading type={"bars"} color={"grey"} />
        </div>
      ) : jokeStatus && jokeStatus.status === "success" && joke ? (
        <>
          <div className="sucharInfo">
            Dodany przez{" "}
            <Link to={`/smieszek/${joke.login}`}>{joke.login}</Link> w dniu{" "}
            {String(joke.createdOn).replace(/T(.*)/g, "")}
          </div>
          <Suchary />
        </>
      ) : (
        <h4 style={{ color: "#eee" }}>Brak podanego suchara</h4>
      )}
    </>
  );
};

export default SucharPage;
