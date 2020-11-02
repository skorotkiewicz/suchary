/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import ReactLoading from "react-loading";
import Suchar from "./../components/Suchar";
import Seo from "./../components/Seo";
import Paginator from "./../components/Paginator";

import { useSelector, useDispatch } from "react-redux";
import { setPage, fetchJokes } from "./../_actions";

const Index = () => {
  const [firstTime, setFirstTime] = useState(true);
  const { pageId } = useParams();
  const route = useRouteMatch();

  const page = useSelector((state) => state.page);
  const jokes = useSelector((state) => state.jokes);
  const uquery = useSelector((state) => state.query);
  const dispatch = useDispatch();

  const path = route.url === "/smietnik" ? "/cat/1" : "";
  const path2 = route.url === "/smietnik" ? "/smietnik" : "";

  // page/:page/cat/:category

  useEffect(() => {
    if (!jokes.isLoading && !uquery) {
      if (firstTime) {
        if (pageId > 1) {
          dispatch(fetchJokes(`page/${pageId}` + path));
          dispatch(setPage(pageId));
          setFirstTime(false);
          windowUrl(pageId, path2);
        } else {
          dispatch(fetchJokes(`page/${page}` + path));
          windowUrl(page, path2);
        }
      } else {
        dispatch(fetchJokes(`page/${page}` + path));
        windowUrl(page, path2);
      }
    }
  }, [page, route.url]);

  const windowUrl = (page, path2) => {
    window.history.replaceState(
      null,
      `Strona: ${page}`,
      `${path2}/strona/${page}`
    );
  };

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
                dispatch(fetchJokes(`page/${page}` + path, x));
              }}
            />
          ))}
        </div>

        <Paginator page={page} next={jokes.next} prev={jokes.prev} />
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
        <>
          <Seo title={`Najnowsze suchary - Strona ${page}`} />
          <Suchary />
        </>
      )}
    </>
  );
};

export default Index;
