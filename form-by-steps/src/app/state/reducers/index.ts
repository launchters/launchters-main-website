import { combineReducers } from "redux";
import staffReducer from "./staff.reducer";

const rootReducer = combineReducers({
  staff: staffReducer,
});

export default rootReducer;
