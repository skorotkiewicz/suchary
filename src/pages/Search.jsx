import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import Suchar from "../components/Suchar";
import Seo from "../components/Seo";
import Paginator from "../components/Paginator";

import { useSelector, useDispatch } from "react-redux";
import { fetchJokes, setPage } from "../_actions";

const Search = () => {
  const [firstTime, setFirstTime] = useState(true);
  let { query, pageId } = useParams();

  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const jokes = useSelector((state) => state.jokes);
  const url = `search/${query}/page/`;

  useEffect(() => {
    if (firstTime) {
      if (pageId > 1) {
        dispatch(fetchJokes(`${url}${pageId}`));
        dispatch(setPage(pageId));
        setFirstTime(false);
      } else {
        dispatch(fetchJokes(`${url}${page}`));
      }
    } else {
      dispatch(fetchJokes(`${url}${page}`));
    }

    window.history.replaceState(
      null,
      `Strona: ${page}`,
      `/szukaj/${query}/strona/${page}`
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  const SearchResults = () => {
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
                dispatch(fetchJokes(`${url}${page}`, x));
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
          <Seo title={`Wyszukiwanie suchara - fraza: '${query}'`} />
          <SearchResults />
        </>
      )}

      <h1>{query}</h1>
    </>
  );
};

export default Search;
