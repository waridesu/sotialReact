import { Action,createStore, combineReducers, applyMiddleware,compose } from "redux";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer";
import profileReducer from "./profileReducer";
import AuthReducer from "./authReducer";
import thunkMiddleware,{ThunkAction} from "redux-thunk";
import { reducer as formReducer } from 'redux-form';
import appReducer from "./appReducer";

const rootReducers = combineReducers({
  dialog: dialogReducer,
  usersPage: usersReducer,
  profilePage: profileReducer,
  auth: AuthReducer,
  form: formReducer,
  app: appReducer
});

type rootReducersType = typeof rootReducers
export type AppStateType = ReturnType<rootReducersType>
export type BaseThunkType<A extends Action = Action, R = void> = ThunkAction<R, AppStateType, unknown, A>
export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never


// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// eslint-disable-next-line no-undef
const store = createStore(rootReducers, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunkMiddleware)
));

// @ts-ignore
window.store = store;

export default store;
