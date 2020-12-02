import {usersApi} from "../Api/Api";
import {FormAction, stopSubmit} from "redux-form";
import {BaseThunkType, InferActionsTypes} from "./redux_store";

const set_Auth_Data = "set_Auth_Data";
type initialStateType = typeof initialState
const initialState = {
  id: null as number|null,
  email: null as string|null,
  login: null as string|null,
  isAuth: false,
};

const AuthReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case set_Auth_Data:
      return {
        ...state,
        ...action.payload,
      };
    default: return state;
  }
};
type ThunkType = BaseThunkType<ActionsType|FormAction>
type ActionsType = InferActionsTypes<typeof actions>

export const actions={
  setAuthData : (id: number | null, email: string | null, login: string | null, isAuth: boolean)=> ({
    type: set_Auth_Data,
    payload: {id, email, login, isAuth},
  } as const)
}

export const getAuthData = ():ThunkType => async (dispatch) => {
  const response = await usersApi.authMe()
  if (response.data.resultCode === 0) {
    let {id, email, login} = response.data.data;
    dispatch(actions.setAuthData(id, email, login, true));
  }
}


export const logIn = (email: string, password: string, rememberMe: boolean):ThunkType => async (dispatch) => {
  const response = await usersApi.logMe(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(getAuthData());
  } else {
    let message =
        response.data.messages.length > 0
            ? response.data.messages
            : "Some error";
    dispatch(stopSubmit('LogIn', {_error: message}));
    }
};

export const logOut = ():ThunkType => async (dispatch) => {
    const  response = await usersApi.unLogMe();
      if (response.data.resultCode === 0) {
        dispatch(actions.setAuthData(null, null, null, false));
      }

};

export default AuthReducer;
