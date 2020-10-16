import { combineReducers } from "redux";
import { favorites, likes, auth, page, jokes, user, actions } from "./app";

const allReducer = combineReducers({
  favorites,
  likes,
  auth,
  page,
  jokes,
  user,
  actions,
});

export default allReducer;
