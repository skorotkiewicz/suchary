// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useCallback } from "react";
import {
  IoIosHeart,
  IoIosHeartEmpty,
  IoMdBookmark,
  IoMdBook,
  IoMdTrash,
  IoIosLink,
} from "react-icons/io";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import { useSelector, useDispatch } from "react-redux";
import { setFavorites, setLikes, fetchActions } from "./../_actions";

const Suchar = ({ joke, noLikes, rm, jokes, setJokes }) => {
  const favorites = useSelector((state) => state.favorites);
  const likes = useSelector((state) => state.likes);
  const auth = useSelector((state) => state.auth);
  const actions = useSelector((state) => state.actions);
  const [aInfo, setAInfo] = useState({});

  const dispatch = useDispatch();

  useEffect(() => {
    if (actions.data.status === "success") {
      if (aInfo.a === "del") {
        const newList = jokes.filter((e) => e._id !== aInfo.id);
        setJokes([...newList]);
      }

      if (aInfo.a === "like") {
        const newList = jokes.map((item) => {
          if (item._id === aInfo.id) {
            return { ...item, likes: actions.data.data.likes };
          }
          return item;
        });
        setJokes(newList);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actions]);

  const addFav = (joke) => {
    if (favorites.includes(joke._id)) {
      const newFav = favorites.filter((e) => e !== joke._id);
      localStorage.setItem("favorites", JSON.stringify(newFav));
      dispatch(setFavorites([...newFav]));
    } else {
      favorites.push(joke._id);
      dispatch(setFavorites([...favorites]));
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    var storage = localStorage.getItem(joke._id || 0);
    if (storage === null) {
      localStorage.setItem(joke._id, JSON.stringify(joke.joke));
    } else {
      localStorage.removeItem(joke._id);
    }
  };

  const actionSuchar = async (jid, action) => {
    if (action === "del") {
      var url = `jokes/${jid}`;
      var method = "DELETE";
    }
    if (action === "admin") {
      url = `jokes/${jid}/category/1`;
      method = "PATCH";
    }
    if (window.confirm("Czy napewno usunąć tego suchara?")) {
      setAInfo({ id: jid, a: "del" });
      dispatch(fetchActions(auth, url, {}, method)); // API Request
    }
  };

  const like = async (jokeid) => {
    if (!likes.includes(jokeid)) {
      likes.push(jokeid);
      dispatch(setLikes([...likes]));
      localStorage.setItem("likes", JSON.stringify(likes));

      setAInfo({ id: jokeid, a: "like" });
      dispatch(fetchActions({}, `joke/vote/like/${jokeid}`, {}, "POST")); // API Request
    }
  };

  const Likes = () => {
    return (
      <button
        disabled={likes.includes(joke._id) ? true : false}
        className="likeBtn"
        onClick={() => like(joke._id)}
      >
        <span className="likeBtnContent">
          {likes.includes(joke._id) ? (
            <IoIosHeart style={{ color: "red" }} />
          ) : (
            <IoIosHeartEmpty style={{ color: "red" }} />
          )}

          <span style={{ paddingLeft: 10 }}>{joke.likes}</span>
        </span>
      </button>
    );
  };

  if (joke && joke.joke === undefined) {
    setJokes(joke[0]);
  }

  return (
    <div>
      <div className={joke.category === 1 ? "trash suchar" : "suchar"}>
        <div>
          <div className="trashInfo">
            {joke.category === 1 && "Suchar znajduje się w śmietniku"}
          </div>
          {joke && joke.joke === undefined
            ? joke[0].joke.replace(/&quot;/g, '"')
            : joke.joke.replace(/&quot;/g, '"')}

          <Link
            data-tip="Link do sucharka"
            className="sucharLink"
            to={`/suchar/${joke._id}`}
          >
            <IoIosLink />
          </Link>
        </div>

        <div className="likeBox">
          {!noLikes && <Likes />}
          <div className="bookmarkBtn">
            {favorites.includes(joke._id) ? (
              <IoMdBookmark
                data-tip="Usuń z ulubionych"
                onClick={() => addFav(joke)}
                style={{ color: "rgb(65,145,245)" }}
              />
            ) : (
              <IoMdBook
                data-tip="Dodaj do ulubionych"
                onClick={() => addFav(joke)}
                style={{ color: "rgb(65,145,245)" }}
              />
            )}

            {auth && auth.login === joke.login && !rm && (
              <>
                <IoMdTrash
                  onClick={() => {
                    actionSuchar(joke._id, "del");
                  }}
                  data-tip="Usuń swój suchar"
                  style={{ marginLeft: 20, fontSize: 16, color: "orange" }}
                />
              </>
            )}

            {auth && auth.role === 3 && !rm && (
              <>
                <IoMdTrash
                  onClick={() => {
                    actionSuchar(joke._id, "admin");
                  }}
                  data-tip="Do śmietika"
                  style={{ marginLeft: 20, fontSize: 16, color: "red" }}
                />
              </>
            )}

            <ReactTooltip effect="solid" type="info" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suchar;
