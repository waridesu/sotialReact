const follow = 'follow';
const unfollow = 'unfollow';
const setUsers = 'setUsers';
const setCurrentPage = 'setCurrentPage';
const setTotalUsersCount = 'setTotalUsersCount';

let initialState = {
    users: [/*
        
            { id: 0, avatarUrl: 'https://via.placeholder.com/40', followed: true, Name: 'Liam', status: 'some  status', location: { city: 'Moscow', country: 'Russia' } },
            { id: 1, avatarUrl: 'https://via.placeholder.com/40', followed: false, Name: 'Masone', status: 'some  status', location: { city: 'Kiev', country: 'Ukraine' } },
            { id: 2, avatarUrl: 'https://via.placeholder.com/40', followed: true, Name: 'Noah', status: 'some  status', location: { city: 'Minsk', country: 'Belarus' } },
            { id: 3, avatarUrl: 'https://via.placeholder.com/40', followed: false, Name: 'William', status: 'some  status', location: { city: 'Berlin', country: 'Germany' } },
            { id: 4, avatarUrl: 'https://via.placeholder.com/40', followed: true, Name: 'James', status: 'some  status', location: { city: 'Praga', country: 'Czech' } },
            { id: 5, avatarUrl: 'https://via.placeholder.com/40', followed: false, Name: 'Oliver', status: 'some  status', location: { city: 'Paris', country: 'France' } },
            { id: 6, avatarUrl: 'https://via.placeholder.com/40', followed: true, Name: 'Benjamin', status: 'some  status', location: { city: 'Amsterdam', country: 'Netherlands' } },
            { id: 7, avatarUrl: 'https://via.placeholder.com/40', followed: false, Name: 'Elijah', status: 'some  status', location: { city: 'Lisbon', country: 'Portugal' } }
    */],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }

        case unfollow:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }

        case setUsers:
            return { ...state, users: action.users }

        case setCurrentPage:
            return { ...state, currentPage: action.currentPage }

        case setTotalUsersCount:
            return { ...state, totalUsersCount: action.totalUsersCount }


        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: follow, userId })
export const unfollowAC = (userId) => ({ type: unfollow, userId })
export const setUsersAC = (users) => ({ type: setUsers, users })
export const setCurrentPageAC = (currentPage) => ({ type: setCurrentPage, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: setTotalUsersCount, totalUsersCount })

export default usersReducer;