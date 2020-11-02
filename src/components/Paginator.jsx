import React from "react";

import { useDispatch } from "react-redux";
import { setPage } from "./../_actions";

const Paginator = ({ page, next, prev }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="paginator">
        <button
          className="pageBtn"
          onClick={() => {
            dispatch(setPage(prev));
          }}
          disabled={prev === null && true}
        >
          Poprzednia strona
        </button>
        <h4 style={{ color: "#eee" }}>Strona: {page}</h4>
        <button
          className="pageBtn"
          onClick={() => {
            dispatch(setPage(next));
          }}
          disabled={next === null && true}
        >
          Następna strona
        </button>
      </div>
    </>
  );
};

export default Paginator;
