import {usersApi} from "../Api/Api";
import {stopSubmit} from "redux-form";

const set_Auth_Data = "set_Auth_Data";
type initialStateType = typeof initialState
const initialState = {
  id: null as number|null,
  email: null as string|null,
  login: null as string|null,
  isAuth: false,
};

const AuthReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case set_Auth_Data:
      return {
        ...state,
        ...action.payload,
      };
    default: return state;
  }
};

type setAuthUserActionPayloadType = {
  id:number | null,
  email:string | null,
  login:string | null,
  isAuth:boolean
}
type setAuthDataActionType = {
  type: typeof set_Auth_Data,
  payload: setAuthUserActionPayloadType
}
export const setAuthData = (id: number | null, email: string | null, login: string | null, isAuth: boolean):setAuthDataActionType => ({
  type: set_Auth_Data,
  payload: {id, email, login, isAuth},
});
export const getAuthData = () => async (dispatch:any) => {
  const response = await usersApi.authMe()
  if (response.data.resultCode === 0) {
    let {id, email, login} = response.data.data;
    dispatch(setAuthData(id, email, login, true));
  }
}


export const logIn = (email: string, password: string, rememberMe: boolean) => async (dispatch:any) => {
  const response = await usersApi.logMe(email, password, rememberMe)
  if (response.data.resultCode === 0) {
    dispatch(getAuthData());
  } else {
    let message =
        response.data.messages.length > 0
            ? response.data.messages
            : "Some error";
    dispatch(
        stopSubmit("LogIn", {
            _error: message,
          })
      );
    }
};

export const logOut = () => async (dispatch:any) => {
    const  response = await usersApi.unLogMe();
      if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
      }

};

export default AuthReducer;
