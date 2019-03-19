import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorRedcuer";

export default combineReducers({ auth: authReducer, errors: errorReducer });
