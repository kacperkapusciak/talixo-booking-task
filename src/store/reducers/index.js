import { combineReducers } from "redux";
import moreOptionsReducer from "./moreOptions";
import routeReducer from "./route";

const reducers = combineReducers({
  moreOptions: moreOptionsReducer,
  route: routeReducer
});

export default reducers;