/*
  App
*/
export const setFavorites = (msg) => {
  return {
    type: "setFavorites",
    payload: msg,
  };
};
export const setLikes = (msg) => {
  return {
    type: "setLikes",
    payload: msg,
  };
};
export const setAuth = (msg) => {
  return {
    type: "setAuth",
    payload: msg,
  };
};
//
export const setPage = (msg) => {
  return {
    type: "setPage",
    payload: msg,
  };
};
export const setQuery = (msg) => {
  return {
    type: "setQuery",
    payload: msg,
  };
};

//
export const fetchJokes = (url, x = null) => async (dispatch, getState) => {
  if (x) return dispatch({ type: "UPDATE_JOKES_STATE", payload: x });

  dispatch({ type: "FETCH_JOKES_REQUEST" });

  try {
    const data = await fetch(
      `https://pbsapi-skorotkiewicz.vercel.app/api/jokes/${url}`
    );
    const jokes = await data.json();

    const getJokes = (await jokes.data.data) || (await jokes.data.jokes);
    const next = (await jokes.data.nextPage) || null;
    const prev = (await jokes.data.prevPage) || null;

    dispatch({ type: "FETCH_JOKES_SUCCESS", payload: getJokes, next, prev });
  } catch (error) {
    dispatch({ type: "FETCH_JOKES_FAILURE", error });
  }
};

export const fetchUser = (login, top15 = false) => async (
  dispatch,
  getState
) => {
  dispatch({ type: "FETCH_USER_REQUEST" });

  try {
    if (top15) {
      var url = "the/users/top15";
      var type = "USERS";
    } else {
      type = "USER";
      url = `users/${login}`;
    }
    const data = await fetch(
      `https://pbsapi-skorotkiewicz.vercel.app/api/${url}`
    );
    const user = await data.json();

    dispatch({ type: `FETCH_${type}_SUCCESS`, payload: user.data });
  } catch (error) {
    dispatch({ type: "FETCH_USER_FAILURE", error });
  }
};

export const fetchActions = (
  auth = null,
  url = null,
  body = null,
  method = null
) => async (dispatch, getState) => {
  dispatch({ type: "FETCH_ACTION_REQUEST" });

  try {
    const data = await fetch(
      `https://pbsapi-skorotkiewicz.vercel.app/api/${url}`,
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
          "x-access-token": auth.auth,
        },
        body: JSON.stringify(body),
      }
    );
    const res = await data.json();

    dispatch({ type: "FETCH_ACTION_SUCCESS", payload: res });
    dispatch({ type: "FETCH_ACTION_CLEAN" });
  } catch (error) {
    dispatch({ type: "FETCH_ACTION_FAILURE", error });
  }
};
