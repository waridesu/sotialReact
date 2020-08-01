import {createStore, combineReducers} from "redux";
import dialogReducer from "./dialogReducer";
import usersReducer from "./usersReducer"

let reducers = combineReducers({
    dialog: dialogReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);


export default store;