export const favorites = (state = [], action) => {
  switch (action.type) {
    case "setFavorites":
      return action.payload;
    default:
      return state;
  }
};
export const likes = (state = [], action) => {
  switch (action.type) {
    case "setLikes":
      return action.payload;
    default:
      return state;
  }
};
export const auth = (state = false, action) => {
  switch (action.type) {
    case "setAuth":
      return action.payload;
    default:
      return state;
  }
};
//
export const page = (state = 1, action) => {
  switch (action.type) {
    case "setPage":
      return action.payload;
    default:
      return state;
  }
};
//
export const isLoading = (state = true, action) => {
  switch (action.type) {
    case "setIsLoading":
      return action.payload;
    default:
      return state;
  }
};
//
