import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import { useSelector, useDispatch } from "react-redux";
import { setPage, fetchJokes } from "./../_actions";

const Navigator = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav>
      <ReactTooltip effect="solid" type="info" />
      <Link
        onClick={() => {
          dispatch(fetchJokes(`page/1/cat/0`));
          dispatch(setPage(1));
        }}
        data-tip="Jeszcze jeden suchar i będę <strong><em>najedzony!</em></strong>"
        data-html={true}
        className="brand"
        to="/"
      ></Link>

      <ul className="nav-links">
        {/* <li style={{ color: "#fff" }}>
          [ <Link to="/czat">czat</Link> ]
        </li> */}

        <li>
          <Link
            onClick={() => {
              dispatch(fetchJokes(`page/1/cat/0`));
              dispatch(setPage(1));
            }}
            to="/strona/1"
          >
            najnowsze
          </Link>
        </li>
        <li>
          <Link to="/losowe">losowe</Link>
        </li>

        <li>
          <Link to="/mojeulubione">moje ulubione</Link>
        </li>

        {auth ? (
          <>
            <li>
              <Link style={{ fontWeight: "bold" }} to="/dodaj">
                dodaj suchara
              </Link>
            </li>
            <li>
              <Link to={`/smieszek/${auth.login}`}>{auth.login}</Link>{" "}
              <span style={{ color: "#eee" }}> | </span>
              <Link to="/wyloguj">wyloguj</Link>
            </li>
          </>
        ) : (
          <li>
            <Link style={{ fontWeight: "bold" }} to="/auth">
              dodaj suchara
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigator;
