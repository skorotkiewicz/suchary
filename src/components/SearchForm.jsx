import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setPage, setQuery } from "./../_actions";

const SearchForm = () => {
  const [searchInfo, setSearchInfo] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();

  return (
    <div className="searchForm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (e.target.search.value.length >= 3) {
            dispatch(setPage(1));
            dispatch(setQuery(e.target.search.value));
            setSearchInfo("");
            setSearchQuery("");
          } else {
            setSearchInfo("Wpisz minimum 3 znaki aby wyszukać");
          }
        }}
      >
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Wyszukaj suchara..."
          name="search"
          value={searchQuery}
        />
        <span>{searchInfo}</span>
      </form>
      {query && (
        <>
          <Redirect to={`/szukaj/${query}/strona/1`} />
        </>
      )}
    </div>
  );
};

export default SearchForm;
