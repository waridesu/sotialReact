import {usersApi} from "../Api/Api";
import {updateObjectArray} from "../utils/objactsHelpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_TOGGLE_FETCHING = "SET_TOGGLE_FETCHING";
const SET_TOGGLE_FOLLOWING = "SET_TOGGLE_FOLLOWING";
const isUsersCase ="isUsersCase";

let initialState = {
    users: [
        /*

                { id: 0, avatarUrl: 'https://via.placeholder.com/40', followed: true, Name: 'Liam', status: 'some  status', location: { city: 'Moscow', country: 'Russia' } },
                { id: 1, avatarUrl: 'https://via.placeholder.com/40', followed: false, Name: 'Masone', status: 'some  status', location: { city: 'Kiev', country: 'Ukraine' } },
                { id: 2, avatarUrl: 'https://via.placeholder.com/40', followed: true, Name: 'Noah', status: 'some  status', location: { city: 'Minsk', country: 'Belarus' } },
                { id: 3, avatarUrl: 'https://via.placeholder.com/40', followed: false, Name: 'William', status: 'some  status', location: { city: 'Berlin', country: 'Germany' } },
                { id: 4, avatarUrl: 'https://via.placeholder.com/40', followed: true, Name: 'James', status: 'some  status', location: { city: 'Praga', country: 'Czech' } },
                { id: 5, avatarUrl: 'https://via.placeholder.com/40', followed: false, Name: 'Oliver', status: 'some  status', location: { city: 'Paris', country: 'France' } },
                { id: 6, avatarUrl: 'https://via.placeholder.com/40', followed: true, Name: 'Benjamin', status: 'some  status', location: { city: 'Amsterdam', country: 'Netherlands' } },
                { id: 7, avatarUrl: 'https://via.placeholder.com/40', followed: false, Name: 'Elijah', status: 'some  status', location: { city: 'Lisbon', country: 'Portugal' } }
        */
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isUser: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId,'id',{followed: true})
            };
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectArray(state.users, action.userId,'id',{followed: false})
            };

        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount};

        case SET_TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching};

        case isUsersCase:{
            return {...state, isUser: action.isUser};
        }
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

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount,
});
export const setToggleIsFetching = (isFetching) => ({
    type: SET_TOGGLE_FETCHING,
    isFetching,
});
export const SetIsUsersCase = (isUser) => ({
    type: isUsersCase,
    isUser,
});
export const setToggleFollowing = (isFetching, userId) => ({
    type: SET_TOGGLE_FOLLOWING,
    isFetching,
    userId,
});

export const requestUser = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setToggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let data = await usersApi.getUsers(currentPage, pageSize);
    dispatch(setToggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
};

const resetFlow =async (dispatch, id, apiMethod, actionCreator)=>{
    dispatch(setToggleFollowing(true, id));
    let response = await apiMethod(id)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(id));
        dispatch(setToggleFollowing(false, id));
    }
}

export const follow = (id) =>(dispatch) => {
    resetFlow(dispatch, id, usersApi.follow.bind(usersApi), followSuccess);
};
export const unfollow = (id) =>(dispatch) => {
    resetFlow(dispatch, id, usersApi.unfollow.bind(usersApi), unfollowSuccess);
};

export default usersReducer;
