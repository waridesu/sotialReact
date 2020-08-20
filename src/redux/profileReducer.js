import { usersApi } from "../Api/Api";

const set_User_Profile = "set_User_Profile";
const set_Status = "set_Status";
//const on_Status_Change = "on_Status_Change";

let initialState = {
  profile: null,
  status: null,
};
const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case set_User_Profile: {
      return { ...state, profile: action.profile };
    }
    case set_Status: {
      return { ...state, status: action.status };
    }
    default:
      return state;
  }
};
export const setUserProfile = (profile) => ({
  type: set_User_Profile,
  profile,
});
export const setStatus = (status) => ({
  type: set_Status,
  status,
});
export const getUserProfile = (id) => {
  return (dispatch) => {
    usersApi.profile(id).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getUserStatus = (id) => {
  return (dispatch) => {
    usersApi.getStatus(id).then((response) => {
      dispatch(setStatus(response.data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    usersApi.updateStatus(status).then((response) => {
      if(response.data.resultCode === 0){
      dispatch(setStatus(status));
    }
  });
  };
};

export default ProfileReducer;
