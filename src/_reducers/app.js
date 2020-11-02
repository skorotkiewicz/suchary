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
export const query = (state = "", action) => {
  switch (action.type) {
    case "setQuery":
      return action.payload;
    default:
      return state;
  }
};
//
export const jokes = (
  state = { jokes: [], isLoading: false, error: null },
  action
) => {
  switch (action.type) {
    case "FETCH_JOKES_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "FETCH_JOKES_SUCCESS":
      return {
        ...state,
        isLoading: false,
        jokes: action.payload,
        next: action.next,
        prev: action.prev,
      };
    case "FETCH_JOKES_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case "UPDATE_JOKES_STATE":
      return {
        ...state,
        isLoading: false,
        jokes: action.payload,
      };
    default:
      return state;
  }
};
export const user = (
  state = { user: [], users: [], isLoading: false, error: null },
  action
) => {
  switch (action.type) {
    case "FETCH_USER_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "FETCH_USER_SUCCESS":
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case "FETCH_USERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        users: action.payload,
      };
    case "FETCH_USER_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
export const actions = (
  state = { data: [], isLoading: false, error: null },
  action
) => {
  switch (action.type) {
    case "FETCH_ACTION_REQUEST":
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case "FETCH_ACTION_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case "FETCH_ACTION_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    case "FETCH_ACTION_CLEAN":
      return {
        ...state,
        data: {},
      };

    default:
      return state;
  }
};
