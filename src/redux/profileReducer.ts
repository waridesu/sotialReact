import {usersApi} from "../Api/Api";
import {BaseThunkType, InferActionsTypes} from "./redux_store";


const set_User_Profile = "set_User_Profile";
const set_Status = "set_Status";
//const on_Status_Change = "on_Status_Change";

const initialState = {
    profile: null as profileType | null,
    status: undefined as string | undefined
};

type initialStateType = typeof initialState
type contactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}
export type photosType = {
    small: string | null,
    large: string | null
}

export type profileType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    aboutMe: string
    fullName: string,
    contacts: contactsType,
    photos: photosType
}

const profileReducer = (state = initialState, action: ActionTypes): initialStateType => {
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
type ActionTypes =InferActionsTypes<typeof actions>
export const actions={
    setUserProfile : (profile: profileType)=> ({
        type: set_User_Profile,
        profile,
    }as const),
    setStatus : (status: string)=> ({
        type: set_Status,
        status,
    }as const)
}

type ThunkType=BaseThunkType<ActionTypes>
export const getUserProfile = (id: number):ThunkType => async (dispatch) => {
    const response = await usersApi.profile(id)
    dispatch(actions.setUserProfile(response.data));
};


export const getUserStatus = (id: number):ThunkType => async (dispatch) => {
    const response = await usersApi.getStatus(id)
    dispatch(actions.setStatus(response.data));
};

export const updateStatus = (status:string):ThunkType => async (dispatch) => {
    const response = await usersApi.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(actions.setStatus(status));
    }

};

export default profileReducer;
