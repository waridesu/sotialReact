import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import ProfileReducer from "./profileReducer";
import AuthReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  dialog: dialogReducer,
  usersPage: usersReducer,
  profilePage: ProfileReducer,
  auth: AuthReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
