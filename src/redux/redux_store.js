import {createStore, combineReducers} from "redux";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer"
import ProfileReducer from "./profileReducer";
import AuthReducer from "./authReducer";

let reducers = combineReducers({
    dialog: dialogReducer,
    usersPage: usersReducer,
    profilePage: ProfileReducer,
    auth: AuthReducer
});

let store = createStore(reducers);

window.store = store;

export default store;