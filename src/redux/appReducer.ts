import {getAuthData} from "./authReducer";
import {BaseThunkType, InferActionsTypes} from "./redux_store";
const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

export type initialStateType = {
    initialized: boolean
}

const initialState: initialStateType = {
    initialized: false,
};

const appReducer = (state = initialState, action: ActionTypes):initialStateType => {
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
type ThunkType = BaseThunkType<ActionTypes>
type ActionTypes =InferActionsTypes<typeof actions>
export const actions ={
    initializedSuccess : () => ({type: INITIALIZED_SUCCESS} as const)
}


export const initializeApp = ():ThunkType => async (dispatch) => {
    const promise = dispatch(getAuthData())
    await promise;
    dispatch(actions.initializedSuccess());

}
export default appReducer;
