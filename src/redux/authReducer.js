const set_Auth_Data = 'set_Auth_Data'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case set_Auth_Data: {
            return { ...state,
                ...action.data.id,
                isAuth: true }
        }
        default:
            return state;
    }
}

export const setAuthData = (id, email, login) => ({ type: set_Auth_Data, data:{id, email, login}})

export default AuthReducer;