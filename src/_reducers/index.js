import { combineReducers } from "redux";
import {
  favorites,
  likes,
  auth,
  page,
  jokes,
  user,
  actions,
  query,
} from "./app";

const allReducer = combineReducers({
  favorites,
  likes,
  auth,
  page,
  jokes,
  user,
  actions,
  query,
});

export default allReducer;
