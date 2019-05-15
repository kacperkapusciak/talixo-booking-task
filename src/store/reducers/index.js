import { combineReducers } from "redux";
import moreOptionsReducer from "./moreOptions";
import routeReducer from "./route";

export default combineReducers({
  moreOptions: moreOptionsReducer,
  route: routeReducer
});