import { combineReducers } from "redux";
import {
  favorites,
  likes,
  auth,
  page,
  isLoading,
  jokes,
  user,
  actions,
} from "./app";

const allReducer = combineReducers({
  favorites,
  likes,
  auth,
  page,
  isLoading,
  jokes,
  user,
  actions,
});

export default allReducer;
