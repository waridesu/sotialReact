import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import ProfileReducer from "./profileReducer";
import AuthReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";

let reducers = combineReducers({
  dialog: dialogReducer,
  usersPage: usersReducer,
  profilePage: ProfileReducer,
  auth: AuthReducer,
  form: formReducer,
  app: appReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
