import React, { useEffect } from "react";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../_actions";

const Top15 = () => {
  var users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser({}, true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Top = () => {
    return (
      <>
        <div className="top15">
          <h2>Top15 pisarzy Sucharów!</h2>
          <ol>
            {users.users.map((user, key) => (
              <li key={key}>
                <div className="topUser">
                  <Link className="topUserA" to={`/smieszek/${user.login}`}>
                    <strong>{user.login}</strong>
                  </Link>
                  <strong className="userPoints">{user.points}</strong>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </>
    );
  };

  return (
    <div>
      {!users.isLoading ? (
        <>
          <Seo title="Top15 pisarzy sucharów" />
          <Top />
        </>
      ) : (
        <div className="loader">
          <ReactLoading type={"bars"} color={"grey"} />
        </div>
      )}
    </div>
  );
};

export default Top15;
