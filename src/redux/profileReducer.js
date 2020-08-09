const set_User_Profile = 'set_User_Profile'

let initialState = {
    profile: null
}
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case set_User_Profile: {
            return { ...state, profile: action.profile }
        }
        default:
            return state;
    }
}
export const setUserProfile = (profile) => ({ type: set_User_Profile, profile })
export default ProfileReducer;