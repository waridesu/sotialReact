import {usersApi} from "../Api/Api";
import {updateObjectArray} from "../utils/objactsHelpers";
import {photosType} from "./profileReducer";
import {BaseThunkType} from "./redux_store";

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
            };
        case SET_USERS:
            return {...state, users: action.users};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};
        case SET_TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching};
        case isUsersCase:
            return {...state, isUser: action.isUser};
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

type ActionTypes =
    followSuccessAcType
    | unfollowSuccessAcType
    | setUsersAcType
    | setCurrentPageAcType
    | setTotalUsersCountAcType
    | setToggleIsFetchingAcType
    | SetIsUsersCaseAcType
    | setToggleFollowingAcType
type followSuccessAcType = {
    type: typeof FOLLOW,
    userId: number
}
type unfollowSuccessAcType = {
    type: typeof UNFOLLOW,
    userId: number
}
type setUsersAcType = {
    type: typeof SET_USERS,
    users: Array<usersType>
}
type setCurrentPageAcType = {
    type: typeof SET_CURRENT_PAGE,
    currentPage: number
}
type setTotalUsersCountAcType = {
    type: typeof SET_TOTAL_USERS_COUNT,
    totalUsersCount: number
}
type setToggleIsFetchingAcType = {
    type: typeof SET_TOGGLE_FETCHING
    isFetching: boolean
}
type SetIsUsersCaseAcType = {
    type: typeof isUsersCase
    isUser: boolean
}
type setToggleFollowingAcType = {
    type: typeof SET_TOGGLE_FOLLOWING
    isFetching: boolean
    userId: number
}
export const followSuccess = (userId: number): followSuccessAcType => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId: number): unfollowSuccessAcType => ({type: UNFOLLOW, userId});
export const setUsers = (users: Array<usersType>): setUsersAcType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): setCurrentPageAcType => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount: number): setTotalUsersCountAcType => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount
});
export const setToggleIsFetching = (isFetching: boolean): setToggleIsFetchingAcType => ({
    type: SET_TOGGLE_FETCHING,
    isFetching
});
export const SetIsUsersCase = (isUser: boolean): SetIsUsersCaseAcType => ({type: isUsersCase, isUser});
export const setToggleFollowing = (isFetching: boolean, userId: number): setToggleFollowingAcType => ({
    type: SET_TOGGLE_FOLLOWING,
    isFetching,
    userId
});
type ThunkType = BaseThunkType<ActionTypes>
export const requestUser =
    (currentPage: number, pageSize: number): ThunkType =>
        async (dispatch) => {
            dispatch(setToggleIsFetching(true));
            dispatch(setCurrentPage(currentPage));
            let data = await usersApi.getUsers(currentPage, pageSize);
            dispatch(setToggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        };

const _resetFlow = async (dispatch: Dispatch<ActionTypes>, id: number, apiMethod: any, actionCreator: (id:number)=>followSuccessAcType|unfollowSuccessAcType) => {
    dispatch(setToggleFollowing(true, id));
    let response = await apiMethod(id)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id));
        dispatch(setToggleFollowing(false, id));
    }
}

export const follow = (id: number):  ThunkType=> (dispatch) => {
    _resetFlow(dispatch, id, usersApi.follow.bind(usersApi), followSuccess);
};
export const unfollow = (id: number): ThunkType => (dispatch) => {
    _resetFlow(dispatch, id, usersApi.unfollow.bind(usersApi), unfollowSuccess);
};

export default usersReducer;
