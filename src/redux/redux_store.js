import { createStore, combineReducers, applyMiddleware,compose } from "redux";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import AuthReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";

const reducers = combineReducers({
  dialog: dialogReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: AuthReducer,
  form: formReducer,
  app: appReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// eslint-disable-next-line no-undef
const store = createStore(reducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

window.store = store;

export default store;
