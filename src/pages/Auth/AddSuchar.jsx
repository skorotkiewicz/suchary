import React, { useState } from "react";
import ReactLoading from "react-loading";
import { Redirect } from "react-router-dom";

const AddSuchar = ({ auth }) => {
  const [suchar, setSuchar] = useState("");
  const [info, setInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [sucharId, setSucharId] = useState("");

  const add = async (e) => {
    e.preventDefault();

    if (suchar.length > 5000 || suchar.length < 20)
      return setInfo(
        "Suchar powinnien mieć przynajmniej 20 znaków i maksymalnie 5000 znaków."
      );

    setIsLoading(true);

    const data = await fetch(`https://pbsapi.now.sh/api/jokes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": auth.auth,
      },
      body: JSON.stringify({ joke: suchar, author: auth.login }),
    });
    const d = await data.json();

    if (d.status) {
      setInfo(d.message);
      setSuchar("");
      setSucharId(d.data._id);
      setIsLoading(false);
      setIsAdded(true);
    }
  };

  return (
    <div>
      <form onSubmit={add}>
        <textarea
          className="suchar"
          style={{ width: "100%", height: "60vh" }}
          onChange={(e) => setSuchar(e.target.value)}
          name="suchar"
          value={suchar}
          placeholder="Tutaj wpisz swojego suchara..."
        ></textarea>
        {!isLoading ? (
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
      <h4 style={{ color: "#eee" }}>{info}</h4>

      {isAdded && <Redirect to={`/suchar/${sucharId}`} />}
    </div>
  );
};

export default AddSuchar;
