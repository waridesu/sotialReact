import {usersApi} from "../Api/Api";

const set_User_Profile = "set_User_Profile";
const set_Status = "set_Status";
//const on_Status_Change = "on_Status_Change";

let initialState = {
    profile: null,
    status: null,
};
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case set_User_Profile: {
            return {...state, profile: action.profile};
        }
        case set_Status: {
            return {...state, status: action.status};
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
export const getUserProfile = (id) => async (dispatch) => {
    const response = await usersApi.profile(id)
    dispatch(setUserProfile(response.data));
};


export const getUserStatus = (id) => async (dispatch) => {
    const response = await usersApi.getStatus(id)
            dispatch(setStatus(response.data));
};

export const updateStatus = (status) =>async (dispatch) => {
    const response = await usersApi.updateStatus(status);
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }

};

export default profileReducer;
