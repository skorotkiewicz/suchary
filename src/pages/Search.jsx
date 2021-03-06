import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import Suchar from "../components/Suchar";
import Seo from "../components/Seo";
import Paginator from "../components/Paginator";

import { useSelector, useDispatch } from "react-redux";
import { fetchJokes, setPage, setQuery } from "../_actions";

const Search = () => {
  const [firstTime, setFirstTime] = useState(true);
  const { query, pageId } = useParams();

  const dispatch = useDispatch();
  const page = useSelector((state) => state.page);
  const jokes = useSelector((state) => state.jokes);
  const url = `search/${query}/page/`;

  useEffect(() => {
    if (!jokes.isLoading) {
      if (firstTime) {
        if (pageId > 1) {
          dispatch(fetchJokes(`${url}${pageId}`));
          dispatch(setPage(pageId));
          setFirstTime(false);
          windowUrl(pageId, query);
        } else {
          dispatch(fetchJokes(`${url}${page}`));
          windowUrl(page, query);
        }
      } else {
        dispatch(fetchJokes(`${url}${page}`));
        windowUrl(page, query);
      }
      dispatch(setQuery(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, query]);

  const windowUrl = (page, query) => {
    window.history.replaceState(
      null,
      `Strona: ${page}`,
      `/szukaj/${query}/strona/${page}`
    );
  };
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

          {jokes.jokes.length < 1 && (
            <div style={{ color: "#eee" }}>
              Nie znaleziona suchara o szukanej frazie
            </div>
          )}
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
          <h3 style={{ color: "#eee", marginBottom: 20 }}>
            Wyszukiwanie dla frazy: '{query}'
          </h3>
          <SearchResults />
        </>
      )}
    </>
  );
};

export default Search;
