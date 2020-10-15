import { combineReducers } from "redux";
import { favorites, likes, auth, page, isLoading } from "./app";

const allReducer = combineReducers({
  favorites,
  likes,
  auth,
  page,
  isLoading,
});

export default allReducer;
