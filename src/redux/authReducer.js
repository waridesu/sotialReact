import {usersApi} from "../Api/Api";
import {stopSubmit} from "redux-form";

const set_Auth_Data = "set_Auth_Data";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case set_Auth_Data: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};

export const setAuthData = (id, email, login, isAuth) => ({
  type: set_Auth_Data,
  payload: {id, email, login, isAuth},
});
export const getAuthData = () => (dispatch) => usersApi.authMe().then((response) => {
    if (response.data.resultCode === 0) {
      let {id, email, login} = response.data.data;
      dispatch(setAuthData(id, email, login, true));
    }
  });


export const LogIn = (email, password, rememberMe) => (dispatch) => {
  usersApi.LogMe(email, password, rememberMe).then((response) => {
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
  });
};

export const LogOut = () => (dispatch) => {
    usersApi.UnLogMe().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false));
      }
    });
};

export default AuthReducer;
