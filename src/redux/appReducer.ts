import {getAuthData} from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type initialStateType = {
    initialized: boolean
}

const initialState: initialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: any):initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            };
        }
        default:
            return state;
    }
};

type initializedSuccessType = {type: typeof INITIALIZED_SUCCESS};
export const initializedSuccess = (): initializedSuccessType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => async (dispatch: any) => {
    const promise = dispatch(getAuthData())
    await promise;
    dispatch(initializedSuccess());

}
export default appReducer;
