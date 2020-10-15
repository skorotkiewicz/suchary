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
export const setIsLoading = (msg) => {
  return {
    type: "setIsLoading",
    payload: msg,
  };
};
