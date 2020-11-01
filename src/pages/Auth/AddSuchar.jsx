import React, { useState } from "react";
import ReactLoading from "react-loading";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchActions } from "./../../_actions";
import Seo from "../../components/Seo";

const AddSuchar = ({ auth }) => {
  const [suchar, setSuchar] = useState("");
  const [info, setInfo] = useState("");

  const actions = useSelector((state) => state.actions);
  const dispatch = useDispatch();

  const add = async (e) => {
    e.preventDefault();

    if (suchar.length > 5000 || suchar.length < 20)
      return setInfo(
        "Suchar powinnien mieć przynajmniej 20 znaków i maksymalnie 5000 znaków."
      );

    dispatch(
      fetchActions(auth, "jokes", { joke: suchar, author: auth.login }, "POST")
    );
  };

  return (
    <div>
      <Seo title="Dodaj nowy Suchar" />
      <form onSubmit={add}>
        <textarea
          className="suchar"
          style={{ width: "100%", height: "60vh" }}
          onChange={(e) => setSuchar(e.target.value)}
          name="suchar"
          value={suchar}
          placeholder="Tutaj wpisz swojego suchara..."
        ></textarea>
        {!actions.isLoading ? (
          <button
            disabled={suchar.length >= 20 ? false : true}
            className="addBtn"
          >
            Dodaj
          </button>
        ) : (
          <ReactLoading type={"cylon"} color={"grey"} />
        )}

        {suchar.length > 0 && suchar.length < 20 && (
          <small style={{ color: "#aaa" }}>
            Aby dodać suchara napisz więcej
          </small>
        )}
      </form>
      <h4 style={{ color: "#eee" }}>{actions.data.message || info}</h4>

      {actions.data.status === "success" && (
        <Redirect to={`/suchar/${actions.data.data._id}`} />
      )}
    </div>
  );
};

export default AddSuchar;
