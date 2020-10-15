import React from "react";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

import { useSelector, useDispatch } from "react-redux";
import { setIsLoading, setPage } from "./../_actions";

const Navigator = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <nav>
      <ReactTooltip effect="solid" type="info" />
      <Link
        onClick={() => {
          dispatch(setPage(1));
          dispatch(setIsLoading(true));
        }}
        data-tip="Jeszcze jeden suchar i będę <strong><em>najedzony!</em></strong>"
        data-html={true}
        className="brand"
        to="/"
      ></Link>

      <ul className="nav-links">
        <li>
          <Link
            onClick={() => {
              dispatch(setPage(1));
              dispatch(setIsLoading(true));
            }}
            to="/strona/1"
          >
            najnowsze
          </Link>
        </li>
        {/*<li><Link to="/popularne">popularne</Link></li>*/}
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
