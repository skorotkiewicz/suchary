import React from "react";
import Suchar from "./../components/Suchar";

import { useSelector } from "react-redux";

const Favorites = () => {
  const getFav = useSelector((state) => state.favorites);

  const favSuchars = [{}];

  for (var i = 0; i < getFav.length; i++) {
    let x = getFav[i];
    let joke = JSON.parse(localStorage.getItem([x] || ""));

    favSuchars[i] = { joke: joke, _id: x };
  }

  return (
    <div className="suchary">
      {favSuchars.map((joke, key) =>
        getFav.length >= 1 ? (
          <Suchar joke={joke} id={key} key={key} noLikes={true} />
        ) : (
          <p style={{ color: "#eee" }}>
            Nie dodałeś jeszcze żadnego suchara do swojej listy (╯︵╰,)
          </p>
        )
      )}
    </div>
  );
};

export default Favorites;
