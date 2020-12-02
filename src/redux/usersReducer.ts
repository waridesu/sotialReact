import {usersApi} from "../Api/Api";
import {updateObjectArray} from "../utils/objactsHelpers";
import {photosType} from "./profileReducer";
import {BaseThunkType, InferActionsTypes} from "./redux_store";

import {Dispatch} from "redux";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_TOGGLE_FETCHING = "SET_TOGGLE_FETCHING";
const SET_TOGGLE_FOLLOWING = "SET_TOGGLE_FOLLOWING";
const isUsersCase = "isUsersCase";

export type usersType = {
    id: number,
    name: string,
    status: string,
    photos: photosType,
    followed: boolean
}
const initialState = {
    users: [] as Array<usersType>,
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>,//array of users id
    isUser: false
};
type initialStateType = typeof initialState
const usersReducer = (state = initialState, action: ActionTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, 'id', {followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId, 'id', {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case SET_TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        case isUsersCase:
            return {...state, isUser: action.isUser}
        case SET_TOGGLE_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter((id) => id !== action.userId),
            };

        default:
            return state;
    }
};

type ActionTypes = InferActionsTypes<typeof actions>
export const actions={
    followSuccess : (userId: number) => ({type: FOLLOW, userId} as const),
    unfollowSuccess : (userId: number) => ({type: UNFOLLOW, userId} as const),
    setUsers : (users: Array<usersType>) => ({type: SET_USERS, users} as const),
    setCurrentPage : (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const),
    setTotalUsersCount : (totalUsersCount: number) => ({
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const),
    setToggleIsFetching : (isFetching: boolean) => ({
        type: SET_TOGGLE_FETCHING,
        isFetching
    } as const),
    SetIsUsersCase : (isUser: boolean) => ({type: isUsersCase, isUser} as const),
    setToggleFollowing : (isFetching: boolean, userId: number) => ({
        type: SET_TOGGLE_FOLLOWING,
        isFetching,
        userId
    } as const)
}

type ThunkType = BaseThunkType<ActionTypes>
export const requestUser =
    (currentPage: number, pageSize: number): ThunkType =>
        async (dispatch) => {
            dispatch(actions.setToggleIsFetching(true));
            dispatch(actions.setCurrentPage(currentPage));
            let data = await usersApi.getUsers(currentPage, pageSize);
            dispatch(actions.setToggleIsFetching(false));
            dispatch(actions.setUsers(data.items));
            dispatch(actions.setTotalUsersCount(data.totalCount));
        };

const _resetFlow =
    async (dispatch: Dispatch<ActionTypes>, id: number, apiMethod: any, actionCreator: (id: number) => ActionTypes) => {
        dispatch(actions.setToggleFollowing(true, id));
        let response = await apiMethod(id)
        if (response.data.resultCode === 0) {
            dispatch(actionCreator(id));
            dispatch(actions.setToggleFollowing(false, id));
        }
    }

export const follow = (id: number): ThunkType => (dispatch) => {
    _resetFlow(dispatch, id, usersApi.follow.bind(usersApi), actions.followSuccess);
};
export const unfollow = (id: number): ThunkType => (dispatch) => {
    _resetFlow(dispatch, id, usersApi.unfollow.bind(usersApi), actions.unfollowSuccess);
};

export default usersReducer;
