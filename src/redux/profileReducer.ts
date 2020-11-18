import {usersApi} from "../Api/Api";


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

const profileReducer = (state = initialState, action: any): initialStateType => {
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
type setUserProfileType = {
    type: typeof set_User_Profile,
    profile: profileType
}
export const setUserProfile = (profile: profileType): setUserProfileType => ({
    type: set_User_Profile,
    profile,
});
type setStatusType = {
    type: typeof set_Status,
    status: string
}
export const setStatus = (status: string): setStatusType => ({
    type: set_Status,
    status,
});
export const getUserProfile = (id: number) => async (dispatch: any) => {
    const response = await usersApi.profile(id)
    dispatch(setUserProfile(response.data));
};


export const getUserStatus = (id: number) => async (dispatch: any) => {
    const response = await usersApi.getStatus(id)
    dispatch(setStatus(response.data));
};

export const updateStatus = (status:string) => async (dispatch: any) => {
    const response = await usersApi.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }

};

export default profileReducer;
